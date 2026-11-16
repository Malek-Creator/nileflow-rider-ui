/*
 * Nile Flow Rider session helpers.
 *
 * The backend stores access/refresh tokens in httpOnly cookies. Nothing in
 * this file reads or writes tokens in browser storage.
 */
(function (window) {
  'use strict';

  var api = window.NFApi;

  var ROUTES = {
    login: '../24_rider_sign_in_phone/code.html',
    register: '../02_rider_onboarding_profile_setup/code.html',
    dashboard: '../06_rider_command_center_dashboard/code.html',
    help: '../25_rider_sign_in_code/code.html',
  };

  var expiryBound = false;

  function currentPath() {
    return window.location.pathname + window.location.search;
  }

  function withNext(base) {
    var separator = base.indexOf('?') === -1 ? '?' : '&';
    return base + separator + 'next=' + encodeURIComponent(currentPath());
  }

  function safeNext() {
    var params = new URLSearchParams(window.location.search);
    var next = params.get('next');
    if (!next) return null;
    try {
      var url = new URL(next, window.location.href);
      if (url.origin !== window.location.origin) return null;
      if (/\/24_rider_sign_in_phone\/|\/25_rider_sign_in_code\//.test(url.pathname)) return null;
      return url.pathname + url.search;
    } catch (err) {
      return null;
    }
  }

  function bindExpiryRedirect() {
    if (expiryBound) return;
    expiryBound = true;
    window.addEventListener('nf:session-expired', function () {
      if (window.__nfRedirectingForSession) return;
      window.__nfRedirectingForSession = true;
      var separator = ROUTES.login.indexOf('?') === -1 ? '?' : '&';
      window.location.replace(ROUTES.login + separator + 'expired=1&next=' + encodeURIComponent(currentPath()));
    });
  }

  function riderFrom(data) {
    return data && data.rider ? data.rider : null;
  }

  function peek() {
    return api
      .get('/api/rider/auth/me', { skipRefresh: true })
      .then(riderFrom)
      .catch(function (err) {
        if (err && (err.status === 401 || err.code === 'SESSION_EXPIRED')) return null;
        throw err;
      });
  }

  function me() {
    return api.get('/api/rider/auth/me').then(riderFrom);
  }

  function login(email, password) {
    return api
      .post('/api/rider/auth/login', { email: email, password: password })
      .then(riderFrom);
  }

  function register(payload) {
    return api.post('/api/rider/auth/register', payload).then(riderFrom);
  }

  function logout() {
    // A manual sign-out should land on the plain sign-in screen, not the
    // "session expired" variant, even if the access cookie already lapsed.
    window.__nfRedirectingForSession = true;
    return api
      .post('/api/rider/auth/logout', {})
      .catch(function (err) {
        // The cookies are cleared server-side; a missing session is not a
        // reason to trap the rider in the app.
        if (err && (err.status === 401 || err.status === 400)) return null;
        throw err;
      })
      .then(function () {
        window.location.replace(ROUTES.login);
      });
  }

  function requireSession() {
    bindExpiryRedirect();
    return me().catch(function (err) {
      if (err && (err.status === 401 || err.code === 'SESSION_EXPIRED')) {
        // The session-expired listener may already be redirecting with an
        // "expired" banner; avoid a second navigation that would drop it.
        if (!window.__nfRedirectingForSession) {
          window.__nfRedirectingForSession = true;
          window.location.replace(withNext(ROUTES.login));
        }
        return null;
      }
      throw err;
    });
  }

  function redirectIfSignedIn(target) {
    return peek()
      .then(function (rider) {
        if (rider) {
          window.location.replace(target || safeNext() || ROUTES.dashboard);
          return rider;
        }
        return null;
      })
      .catch(function () {
        return null;
      });
  }

  function displayName(rider) {
    if (!rider || !rider.name) return 'Rider';
    return String(rider.name).trim().split(/\s+/)[0] || 'Rider';
  }

  window.NFAuth = {
    ROUTES: ROUTES,
    safeNext: safeNext,
    withNext: withNext,
    peek: peek,
    me: me,
    login: login,
    register: register,
    logout: logout,
    requireSession: requireSession,
    redirectIfSignedIn: redirectIfSignedIn,
    displayName: displayName,
  };
})(window);
