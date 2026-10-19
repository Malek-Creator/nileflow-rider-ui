(function () {
  if (window.__screensMenuLoaded) return;
  window.__screensMenuLoaded = true;

  var GROUPS = [
        { title: 'Sign in', items: [
      ['24', 'Phone number', '24_rider_sign_in_phone'],
      ['25', 'Enter code', '25_rider_sign_in_code']
    ]},
    { title: 'Onboarding', items: [
      ['01', 'Splash & sign in', '01_rider_splash_authentication', 'index.html'],
      ['02', 'Profile setup', '02_rider_onboarding_profile_setup'],
      ['03', 'Document scanner', '03_rider_onboarding_document_scanner_hud'],
      ['04', 'Document hub', '04_rider_onboarding_document_hub'],
      ['05', 'Verification status', '05_rider_onboarding_verification_status']
    ]},
    { title: 'Dispatch & pickup', items: [
      ['06', 'Command center', '06_rider_command_center_dashboard'],
      ['07', 'Incoming request', '07_incoming_delivery_request'],
      ['08', 'Deliveries hub', '08_deliveries_management_hub'],
      ['09', 'Pickup & QR scan', '09_package_pickup_qr_verification']
    ]},
    { title: 'In transit & delivery', items: [
      ['10', 'Navigation HUD', '10_active_delivery_navigation_hud'],
      ['11', 'Delivery details', '11_delivery_details_timeline'],
      ['12', 'Customer unavailable', '12_customer_unavailable_protocol'],
      ['13', 'Report an issue', '13_delivery_issue_exception_reporting'],
      ['14', 'Support chat', '14_support_center_live_dispatch_chat'],
      ['15', 'Proof of delivery', '15_delivery_verification_proof_of_delivery'],
      ['16', 'Payout summary', '16_delivery_completed_payout_summary']
    ]},
    { title: 'Earnings & profile', items: [
      ['17', 'Earnings & M-Pesa', '17_rider_earnings_m_pesa_wallet'],
      ['18', 'Performance', '18_rider_performance_analytics'],
      ['19', 'Safety & SOS', '19_rider_safety_emergency_center'],
      ['20', 'Profile & vehicle', '20_rider_profile_vehicle_management']
    ]},
    { title: 'Settings & system', items: [
      ['21', 'Notifications', '21_courier_notifications_center'],
      ['22', 'Settings', '22_rider_settings_language_preferences'],
      ['23', 'Offline mode', '23_offline_resilience_edge_sync_mode']
    ]}
  ];

  var css = [
    '.sm-tab{position:fixed;right:0;top:45%;z-index:2147483000;width:18px;height:64px;border:0;border-radius:10px 0 0 10px;background:#005145;color:#fff;display:flex;align-items:center;justify-content:center;opacity:.8;cursor:pointer;box-shadow:-2px 2px 10px rgba(0,0,0,.2);padding:0}',
    '.sm-tab:hover{opacity:1}',
    '.sm-back{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483001;background:rgba(0,0,0,.45);opacity:0;pointer-events:none;transition:opacity .2s}',
    '.sm-back.sm-open{opacity:1;pointer-events:auto}',
    '.sm-panel{position:fixed;top:0;right:0;bottom:0;width:min(320px,88vw);z-index:2147483002;background:#fcf9f8;color:#1c1b1b;font-family:Inter,system-ui,sans-serif;transform:translateX(100%);transition:transform .22s ease;overflow-y:auto;padding:max(16px,env(safe-area-inset-top)) 16px 24px;box-shadow:-6px 0 24px rgba(0,0,0,.18);box-sizing:border-box}',
    '.sm-panel.sm-open{transform:translateX(0)}',
    '.sm-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}',
    '.sm-title{font-size:18px;font-weight:700;color:#005145}',
    '.sm-close{border:0;background:#f0eded;border-radius:999px;width:36px;height:36px;font-size:20px;line-height:1;cursor:pointer;color:#1c1b1b}',
    '.sm-group{margin:16px 0 6px;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#005145}',
    '.sm-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;color:#1c1b1b;text-decoration:none;font-size:14px}',
    '.sm-item:hover{background:#f0eded}',
    '.sm-item.sm-current{background:#a2f2de;color:#005145;font-weight:600}',
    '.sm-num{min-width:26px;font-size:11px;font-weight:700;color:#6f7976}',
    '.sm-current .sm-num{color:#005145}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var tab = document.createElement('button');
  tab.className = 'sm-tab';
  tab.type = 'button';
  tab.setAttribute('aria-label', 'Open screen list');
  tab.setAttribute('aria-expanded', 'false');
  tab.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';

  var back = document.createElement('div');
  back.className = 'sm-back';

  var panel = document.createElement('nav');
  panel.className = 'sm-panel';
  panel.setAttribute('aria-label', 'All screens');

  var head = document.createElement('div');
  head.className = 'sm-head';
  var title = document.createElement('span');
  title.className = 'sm-title';
  title.textContent = 'All screens';
  var closeBtn = document.createElement('button');
  closeBtn.className = 'sm-close';
  closeBtn.type = 'button';
  closeBtn.setAttribute('aria-label', 'Close screen list');
  closeBtn.textContent = '\u00d7';
  head.appendChild(title);
  head.appendChild(closeBtn);
  panel.appendChild(head);

  var here = decodeURIComponent(location.pathname);
  GROUPS.forEach(function (g) {
    var h = document.createElement('div');
    h.className = 'sm-group';
    h.textContent = g.title;
    panel.appendChild(h);
    g.items.forEach(function (it) {
      var a = document.createElement('a');
      a.className = 'sm-item';
      a.href = '../' + it[2] + '/' + (it[3] || 'code.html');
      if (here.indexOf('/' + it[2] + '/') !== -1) {
        a.className += ' sm-current';
        a.setAttribute('aria-current', 'page');
      }
      var n = document.createElement('span');
      n.className = 'sm-num';
      n.textContent = it[0];
      var t = document.createElement('span');
      t.textContent = it[1];
      a.appendChild(n);
      a.appendChild(t);
      panel.appendChild(a);
    });
  });

  function openMenu() {
    back.classList.add('sm-open');
    panel.classList.add('sm-open');
    tab.setAttribute('aria-expanded', 'true');
    var cur = panel.querySelector('.sm-current');
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'center' });
  }
  function closeMenu() {
    back.classList.remove('sm-open');
    panel.classList.remove('sm-open');
    tab.setAttribute('aria-expanded', 'false');
  }

  tab.addEventListener('click', openMenu);
  back.addEventListener('click', closeMenu);
  closeBtn.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  document.body.appendChild(back);
  document.body.appendChild(panel);
  document.body.appendChild(tab);
})();
