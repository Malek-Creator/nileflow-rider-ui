/*
 * Nile Flow Rider shared UI helpers.
 *
 * Small, dependency-free helpers for loading / empty / error states, toasts,
 * formatting and honest "not available yet" notices. The visual language
 * follows the existing screens (Inter, #005145, #fcf9f8 surfaces).
 */
(function (window, document) {
  'use strict';

  var STYLE_ID = 'nf-ui-styles';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = [
      '.nf-state{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:22px 16px;border-radius:12px;background:#f6f3f2;color:#3f4946;text-align:center;font-family:Inter,system-ui,sans-serif}',
      '.nf-state-title{font-size:14px;line-height:20px;font-weight:700;color:#1c1b1b;margin:0}',
      '.nf-state-text{font-size:12px;line-height:17px;margin:0;max-width:320px}',
      '.nf-state-action{margin-top:4px;min-height:40px;padding:0 14px;border:0;border-radius:8px;background:#005145;color:#fff;font-size:13px;font-weight:600;font-family:inherit;cursor:pointer}',
      '.nf-state-action:active{opacity:.9}',
      '.nf-spinner{width:26px;height:26px;border-radius:999px;border:3px solid #dcd9d9;border-top-color:#005145;animation:nf-spin .8s linear infinite}',
      '@keyframes nf-spin{to{transform:rotate(360deg)}}',
      '.nf-toast-wrap{position:fixed;left:50%;bottom:92px;transform:translateX(-50%);z-index:2147482000;display:flex;flex-direction:column;gap:8px;width:min(360px,calc(100vw - 32px));pointer-events:none}',
      '.nf-toast{display:flex;align-items:flex-start;gap:8px;padding:11px 13px;border-radius:10px;background:#313030;color:#f3f0ef;font-family:Inter,system-ui,sans-serif;font-size:12px;line-height:17px;box-shadow:0 8px 24px rgba(0,0,0,.24);animation:nf-toast-in .18s ease-out}',
      '.nf-toast.nf-toast-error{background:#93000a;color:#fff}',
      '.nf-toast.nf-toast-success{background:#005145;color:#fff}',
      '.nf-toast .material-symbols-outlined{font-size:17px;line-height:17px}',
      '@keyframes nf-toast-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}',
      '.nf-banner{display:flex;align-items:flex-start;gap:9px;padding:11px 13px;border-radius:10px;font-family:Inter,system-ui,sans-serif;font-size:12px;line-height:17px;margin:0 0 12px}',
      '.nf-banner .material-symbols-outlined{font-size:18px;line-height:18px;flex-shrink:0;margin-top:1px}',
      '.nf-banner-info{background:#f0eded;color:#1c1b1b}',
      '.nf-banner-warn{background:#ffdeae;color:#281800}',
      '.nf-banner-error{background:#ffdad6;color:#93000a}',
      '.nf-banner-success{background:#a2f2de;color:#00201a}',
      '.nf-unsupported{display:flex;align-items:flex-start;gap:11px;padding:14px;border-radius:12px;background:#ffdeae;color:#281800;font-family:Inter,system-ui,sans-serif;margin:12px 0;border:1px solid rgba(127,86,0,.16)}',
      '.nf-unsupported .material-symbols-outlined{font-size:22px;line-height:22px;flex-shrink:0;color:#7f5600}',
      '.nf-unsupported-title{font-size:13px;line-height:18px;font-weight:700;margin:0 0 3px}',
      '.nf-unsupported-text{font-size:12px;line-height:17px;margin:0 0 6px}',
      '.nf-unsupported-link{display:inline-flex;align-items:center;gap:2px;font-size:12px;font-weight:700;color:#005145;text-decoration:underline;text-underline-offset:3px}',
      '.nf-disabled{opacity:.5!important;cursor:not-allowed!important}',
      '.nf-badge{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:999px;font-size:11px;line-height:16px;font-weight:600;white-space:nowrap}',
      '.nf-skeleton{position:relative;overflow:hidden;background:#eae7e7;border-radius:8px;min-height:12px}',
      '.nf-skeleton::after{content:"";position:absolute;inset:0;transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,.65),transparent);animation:nf-shimmer 1.3s infinite}',
      '@keyframes nf-shimmer{to{transform:translateX(100%)}}',
      '.nf-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}'
    ].join('');
    document.head.appendChild(style);
  }

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function toNumber(value) {
    var n = Number(value);
    return isFinite(n) ? n : 0;
  }

  function money(value, decimals) {
    var d = typeof decimals === 'number' ? decimals : 2;
    return (
      'KES ' +
      toNumber(value).toLocaleString('en-KE', {
        minimumFractionDigits: d,
        maximumFractionDigits: d,
      })
    );
  }

  function number(value) {
    return toNumber(value).toLocaleString('en-KE');
  }

  function parseDate(value) {
    if (!value) return null;
    var date = value instanceof Date ? value : new Date(value);
    return isNaN(date.getTime()) ? null : date;
  }

  function date(value) {
    var d = parseDate(value);
    if (!d) return '—';
    return d.toLocaleDateString('en-KE', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function time(value) {
    var d = parseDate(value);
    if (!d) return '—';
    return d.toLocaleTimeString('en-KE', { hour: 'numeric', minute: '2-digit' });
  }

  function dateTime(value) {
    var d = parseDate(value);
    if (!d) return '—';
    return date(d) + ' • ' + time(d);
  }

  function relative(value) {
    var d = parseDate(value);
    if (!d) return '—';
    var diff = Math.round((Date.now() - d.getTime()) / 60000);
    if (diff < 1) return 'Just now';
    if (diff < 60) return diff + 'm ago';
    if (diff < 1440) return Math.round(diff / 60) + 'h ago';
    return date(d);
  }

  function initials(name) {
    var parts = String(name || 'Rider')
      .trim()
      .split(/\s+/)
      .filter(Boolean);
    if (!parts.length) return 'R';
    return (parts[0].charAt(0) + (parts.length > 1 ? parts[parts.length - 1].charAt(0) : '')).toUpperCase();
  }

  function firstName(name) {
    if (!name) return 'Rider';
    return String(name).trim().split(/\s+/)[0] || 'Rider';
  }

  function maskPhone(phone) {
    var raw = String(phone || '').replace(/\s+/g, '');
    if (raw.length < 6) return raw || '—';
    return raw.slice(0, 4) + ' ••• ' + raw.slice(-3);
  }

  function deliveryId(delivery) {
    if (!delivery) return '';
    return delivery.$id || delivery.id || delivery.deliveryId || '';
  }

  function orderRef(delivery) {
    if (!delivery) return '—';
    var ref = delivery.orderId || delivery.orderRef || delivery.orderNumber || deliveryId(delivery);
    if (!ref) return '—';
    return String(ref);
  }

  var DELIVERY_STATUS = {
    assigned: {
      label: 'Assigned',
      icon: 'assignment',
      badge: 'bg-secondary-fixed text-on-secondary-fixed',
      tone: 'secondary',
    },
    picked_up: {
      label: 'Picked up',
      icon: 'inventory_2',
      badge: 'bg-primary-fixed text-on-primary-fixed',
      tone: 'primary',
    },
    in_transit: {
      label: 'In transit',
      icon: 'local_shipping',
      badge: 'bg-primary-fixed text-on-primary-fixed',
      tone: 'primary',
    },
    delivered: {
      label: 'Delivered',
      icon: 'check_circle',
      badge: 'bg-primary-fixed text-on-primary-fixed',
      tone: 'primary',
    },
    failed: {
      label: 'Failed',
      icon: 'error',
      badge: 'bg-error-container text-on-error-container',
      tone: 'error',
    },
    cancelled: {
      label: 'Cancelled',
      icon: 'cancel',
      badge: 'bg-surface-container-high text-on-surface-variant',
      tone: 'muted',
    },
  };

  function deliveryStatus(status) {
    var key = String(status || '').toLowerCase();
    return (
      DELIVERY_STATUS[key] || {
        label: key ? key.replace(/_/g, ' ') : 'Unknown',
        icon: 'help',
        badge: 'bg-surface-container text-on-surface-variant',
        tone: 'muted',
      }
    );
  }

  var RIDER_STATUS = {
    online: { label: 'Online', dot: 'bg-primary', text: 'text-primary' },
    offline: { label: 'Offline', dot: 'bg-outline', text: 'text-on-surface-variant' },
    busy: { label: 'Busy', dot: 'bg-secondary', text: 'text-secondary' },
  };

  function riderStatus(status) {
    var key = String(status || 'offline').toLowerCase();
    return RIDER_STATUS[key] || RIDER_STATUS.offline;
  }

  function toastContainer() {
    var existing = document.querySelector('.nf-toast-wrap');
    if (existing) return existing;
    var wrap = document.createElement('div');
    wrap.className = 'nf-toast-wrap';
    wrap.setAttribute('aria-live', 'polite');
    document.body.appendChild(wrap);
    return wrap;
  }

  function toast(message, kind) {
    injectStyles();
    var wrap = toastContainer();
    var node = document.createElement('div');
    node.className = 'nf-toast' + (kind ? ' nf-toast-' + kind : '');
    var icon = kind === 'error' ? 'error' : kind === 'success' ? 'check_circle' : 'info';
    node.innerHTML =
      '<span class="material-symbols-outlined" aria-hidden="true">' +
      icon +
      '</span><span>' +
      esc(message) +
      '</span>';
    wrap.appendChild(node);
    setTimeout(function () {
      node.style.opacity = '0';
      node.style.transition = 'opacity .18s';
      setTimeout(function () {
        if (node.parentNode) node.parentNode.removeChild(node);
      }, 200);
    }, kind === 'error' ? 5000 : 3600);
  }

  function banner(container, message, kind) {
    if (!container) return null;
    injectStyles();
    var node = document.createElement('div');
    node.className = 'nf-banner nf-banner-' + (kind || 'info');
    var icon = kind === 'error' ? 'error' : kind === 'warn' ? 'warning' : kind === 'success' ? 'check_circle' : 'info';
    node.innerHTML =
      '<span class="material-symbols-outlined" aria-hidden="true">' +
      icon +
      '</span><span>' +
      esc(message) +
      '</span>';
    container.insertBefore(node, container.firstChild);
    return node;
  }

  function state(container, kind, title, message, options) {
    if (!container) return;
    injectStyles();
    options = options || {};
    var icon = kind === 'loading' ? '' : kind === 'error' ? 'error' : kind === 'empty' ? 'inbox' : 'info';
    container.innerHTML =
      '<div class="nf-state" role="' +
      (kind === 'error' ? 'alert' : 'status') +
      '">' +
      (kind === 'loading' ? '<div class="nf-spinner" aria-hidden="true"></div>' : '<span class="material-symbols-outlined" aria-hidden="true" style="font-size:28px;color:#005145">' + icon + '</span>') +
      '<p class="nf-state-title">' +
      esc(title || '') +
      '</p>' +
      (message ? '<p class="nf-state-text">' + esc(message) + '</p>' : '') +
      (options.retryLabel ? '<button type="button" class="nf-state-action" data-nf-retry="1">' + esc(options.retryLabel) + '</button>' : '') +
      '</div>';
    if (options.retryLabel && typeof options.onRetry === 'function') {
      var btn = container.querySelector('[data-nf-retry]');
      if (btn) btn.addEventListener('click', options.onRetry);
    }
  }

  function setBusy(button, busy, label) {
    if (!button) return;
    if (busy) {
      if (!button.dataset.nfOriginal) button.dataset.nfOriginal = button.innerHTML;
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      button.classList.add('nf-disabled');
      button.innerHTML =
        '<span class="material-symbols-outlined animate-spin" aria-hidden="true" style="font-size:20px">progress_activity</span><span>' +
        esc(label || 'Working…') +
        '</span>';
    } else {
      button.disabled = false;
      button.removeAttribute('aria-busy');
      button.classList.remove('nf-disabled');
      if (button.dataset.nfOriginal) {
        button.innerHTML = button.dataset.nfOriginal;
        delete button.dataset.nfOriginal;
      }
    }
  }

  function param(name) {
    try {
      return new URLSearchParams(window.location.search).get(name);
    } catch (err) {
      return null;
    }
  }

  function todayInput() {
    var d = new Date();
    return ymd(d);
  }

  function ymd(d) {
    return (
      d.getFullYear() +
      '-' +
      String(d.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(d.getDate()).padStart(2, '0')
    );
  }

  function rangeForPreset(preset) {
    var end = new Date();
    var start = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    if (preset === 'week') {
      var day = start.getDay();
      start.setDate(start.getDate() - day);
    } else if (preset === 'month') {
      start = new Date(end.getFullYear(), end.getMonth(), 1);
    } else if (preset === '30days') {
      start.setDate(start.getDate() - 29);
    }
    return { startDate: ymd(start), endDate: ymd(end) };
  }

  function getLocation() {
    return new Promise(function (resolve, reject) {
      if (!navigator.geolocation) {
        reject(new Error('Location is not available on this device.'));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        function (position) {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
          });
        },
        function (err) {
          var message =
            err && err.code === 1
              ? 'Location permission was denied. Allow location access to update a delivery.'
              : 'Could not get your location. Move to an open area and try again.';
          reject(new Error(message));
        },
        { enableHighAccuracy: true, timeout: 12000, maximumAge: 15000 },
      );
    });
  }

  function unsupportedAction(message) {
    toast(message || 'This feature is not available in the app yet.', 'info');
  }

  function markUnsupported(options) {
    injectStyles();
    options = options || {};
    ready(function () {
      var main = document.querySelector('main') || document.body;
      var notice = document.createElement('div');
      notice.className = 'nf-unsupported';
      notice.setAttribute('role', 'note');
      notice.innerHTML =
        '<span class="material-symbols-outlined" aria-hidden="true">info</span>' +
        '<div><p class="nf-unsupported-title">' +
        esc(options.title || 'Not available yet') +
        '</p><p class="nf-unsupported-text">' +
        esc(options.message || 'This feature is not supported by the Nile Flow rider backend yet.') +
        '</p><a class="nf-unsupported-link" href="../06_rider_command_center_dashboard/code.html">Go to dashboard <span class="material-symbols-outlined" style="font-size:15px">arrow_forward</span></a></div>';
      main.insertBefore(notice, main.firstChild);

      Array.prototype.forEach.call(main.querySelectorAll('button'), function (button) {
        if (button.closest('nav')) return;
        var label = (button.getAttribute('aria-label') || '') + ' ' + (button.getAttribute('onclick') || '');
        if (/back/i.test(label) || /history\.back/.test(label)) return;
        button.disabled = true;
        button.classList.add('nf-disabled');
        button.setAttribute('aria-disabled', 'true');
      });

      Array.prototype.forEach.call(main.querySelectorAll('form'), function (form) {
        form.addEventListener(
          'submit',
          function (event) {
            event.preventDefault();
            unsupportedAction(options.actionMessage || options.message);
          },
          true,
        );
      });

      Array.prototype.forEach.call(main.querySelectorAll('a[href^="#"], a[href^="javascript:"]'), function (link) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          unsupportedAction(options.actionMessage || options.message);
        });
      });
    });
  }

  function deliveryItems(delivery) {
    var items = delivery && delivery.items;
    if (!items) return [];
    if (Array.isArray(items)) return items;
    if (typeof items === 'string') {
      try {
        var parsed = JSON.parse(items);
        return Array.isArray(parsed) ? parsed : [];
      } catch (err) {
        return [];
      }
    }
    return [];
  }

  function itemName(item) {
    if (!item) return 'Item';
    if (typeof item === 'string') return item;
    return item.name || item.title || item.productName || item.description || 'Item';
  }

  function itemQty(item) {
    if (!item || typeof item === 'string') return 1;
    return toNumber(item.quantity || item.qty || 1);
  }

  window.NFUI = {
    esc: esc,
    money: money,
    number: number,
    date: date,
    time: time,
    dateTime: dateTime,
    relative: relative,
    initials: initials,
    firstName: firstName,
    maskPhone: maskPhone,
    deliveryId: deliveryId,
    orderRef: orderRef,
    deliveryStatus: deliveryStatus,
    riderStatus: riderStatus,
    toast: toast,
    banner: banner,
    state: state,
    setBusy: setBusy,
    param: param,
    todayInput: todayInput,
    ymd: ymd,
    rangeForPreset: rangeForPreset,
    getLocation: getLocation,
    unsupportedAction: unsupportedAction,
    markUnsupported: markUnsupported,
    deliveryItems: deliveryItems,
    itemName: itemName,
    itemQty: itemQty,
    ready: ready,
    injectStyles: injectStyles,
  };
})(window, document);
