/*
 * Nile Flow Rider API client.
 *
 * - Uses httpOnly cookies (credentials: "include"); no tokens are written to
 *   localStorage or sessionStorage.
 * - On a 401 it asks /api/rider/auth/refresh once, then retries the original
 *   request once.
 * - All failures are normalised to NFApi.ApiError.
 */
(function (window) {
  'use strict';

  var BASE_URL = 'https://nileflow-rider-dashboard.onrender.com';
  var DEFAULT_TIMEOUT = 20000;
  var refreshInFlight = null;
  var lastExpiryEvent = 0;

  function ApiError(message, status, code, body) {
    this.name = 'ApiError';
    this.message = message || 'Something went wrong.';
    this.status = status || 0;
    this.code = code || 'ERROR';
    this.body = body || null;
  }
  ApiError.prototype = Object.create(Error.prototype);
  ApiError.prototype.constructor = ApiError;

  function buildUrl(path) {
    if (/^https?:\/\//i.test(path)) return path;
    return BASE_URL + (path.charAt(0) === '/' ? path : '/' + path);
  }

  function parseResponseBody(response) {
    return response.text().then(function (text) {
      if (!text) return null;
      try {
        return JSON.parse(text);
      } catch (err) {
        return { message: text };
      }
    });
  }

  function statusMessage(status) {
    switch (status) {
      case 400:
        return 'The request could not be completed. Check the details and try again.';
      case 401:
        return 'Your session has expired. Please sign in again.';
      case 403:
        return 'You do not have access to this action.';
      case 404:
        return 'The requested item could not be found.';
      case 429:
        return 'Too many requests. Please wait a moment and try again.';
      case 500:
      case 502:
      case 503:
      case 504:
        return 'Nile Flow is temporarily unavailable. Please try again.';
      default:
        return 'The request failed. Please try again.';
    }
  }

  function errorFromResponse(response, data) {
    var body = data || {};
    var message = body.error || body.message;
    if (!message && Array.isArray(body.errors) && body.errors.length) {
      var first = body.errors[0];
      message = typeof first === 'string' ? first : first && (first.msg || first.message);
    }
    if (!message) message = statusMessage(response.status);
    var code = response.status === 401 ? 'UNAUTHORIZED' : 'HTTP_' + response.status;
    return new ApiError(message, response.status, code, body);
  }

  function emitSessionExpired() {
    var now = Date.now();
    if (now - lastExpiryEvent < 2000) return;
    lastExpiryEvent = now;
    try {
      window.dispatchEvent(new CustomEvent('nf:session-expired'));
    } catch (err) {
      /* CustomEvent is available in all supported browsers. */
    }
  }

  function rawRequest(path, options) {
    options = options || {};
    var timeout = typeof options.timeout === 'number' ? options.timeout : DEFAULT_TIMEOUT;
    var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = null;

    var headers = {};
    if (options.body !== undefined && options.body !== null && !(options.body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
    }
    if (options.headers) {
      Object.keys(options.headers).forEach(function (key) {
        headers[key] = options.headers[key];
      });
    }

    var init = {
      method: options.method || 'GET',
      credentials: 'include',
      cache: 'no-store',
      headers: headers,
      body:
        options.body === undefined || options.body === null
          ? undefined
          : options.body instanceof FormData
            ? options.body
            : JSON.stringify(options.body),
    };
    if (controller) init.signal = controller.signal;

    if (controller) {
      timer = setTimeout(function () {
        controller.abort();
      }, timeout);
    }

    return fetch(buildUrl(path), init)
      .then(function (response) {
        return parseResponseBody(response).then(function (data) {
          return { response: response, data: data };
        });
      })
      .catch(function (err) {
        if (err && err.name === 'AbortError') {
          throw new ApiError('The request timed out. Check your connection and try again.', 0, 'TIMEOUT');
        }
        throw new ApiError(
          'Cannot reach Nile Flow right now. Check your internet connection and try again.',
          0,
          'NETWORK',
        );
      })
      .finally(function () {
        if (timer) clearTimeout(timer);
      });
  }

  function isRefreshable(path) {
    return !/\/api\/rider\/auth\/(login|register|refresh|logout)\b/.test(path);
  }

  function refreshOnce() {
    if (!refreshInFlight) {
      refreshInFlight = rawRequest('/api/rider/auth/refresh', {
        method: 'POST',
        body: {},
        timeout: DEFAULT_TIMEOUT,
      })
        .then(function (result) {
          if (!result.response.ok) throw errorFromResponse(result.response, result.data);
          return result.data;
        })
        .finally(function () {
          refreshInFlight = null;
        });
    }
    return refreshInFlight;
  }

  function run(path, options, retried) {
    options = options || {};
    return rawRequest(path, options).then(function (result) {
      var response = result.response;

      if (response.status === 401 && !retried && !options.skipRefresh && isRefreshable(path)) {
        return refreshOnce()
          .then(function () {
            return run(path, options, true);
          })
          .catch(function (err) {
            if (err && (err.status === 400 || err.status === 401)) {
              emitSessionExpired();
              throw new ApiError('Your session has expired. Please sign in again.', 401, 'SESSION_EXPIRED', err.body);
            }
            throw err;
          });
      }

      if (!response.ok) {
        if (response.status === 401) emitSessionExpired();
        throw errorFromResponse(response, result.data);
      }

      return result.data;
    });
  }

  function request(path, options) {
    return run(path, options, false);
  }

  var api = {
    BASE_URL: BASE_URL,
    ApiError: ApiError,
    request: request,
    get: function (path, options) {
      return request(path, Object.assign({}, options || {}, { method: 'GET' }));
    },
    post: function (path, body, options) {
      return request(path, Object.assign({}, options || {}, { method: 'POST', body: body === undefined ? {} : body }));
    },
    patch: function (path, body, options) {
      return request(path, Object.assign({}, options || {}, { method: 'PATCH', body: body === undefined ? {} : body }));
    },
    del: function (path, options) {
      return request(path, Object.assign({}, options || {}, { method: 'DELETE' }));
    },
    refresh: refreshOnce,
    buildUrl: buildUrl,
  };

  window.NFApi = api;
})(window);
