/*
 * Nile Flow Rider - honesty layer for screens whose core action is not
 * supported by the rider backend yet.
 *
 * The screens are kept for design reference, but their controls are disabled
 * and a clear notice is shown instead of pretending to save/verify/send.
 */
(function (window) {
  'use strict';

  var MESSAGES = {
    '03_rider_onboarding_document_scanner_hud': {
      title: 'Document scanning is not connected',
      message:
        'The rider backend does not accept document uploads or scans yet. Your profile can still be completed with name, phone and vehicle details.',
    },
    '04_rider_onboarding_document_hub': {
      title: 'Document uploads are not connected',
      message:
        'Uploading IDs, licences and vehicle papers is not supported by the rider backend yet, so nothing is submitted from this screen.',
    },
    '05_rider_onboarding_verification_status': {
      title: 'Verification tracking is not connected',
      message:
        'The backend does not expose a document-verification workflow. Contact dispatch if you need your account reviewed.',
    },
    '09_package_pickup_qr_verification': {
      title: 'QR pickup verification is not available',
      message:
        'The backend has no QR verification endpoint. Confirm pickup from the active delivery screen instead; it records the pickup using the official delivery state machine.',
    },
    '12_customer_unavailable_protocol': {
      title: 'Customer-unavailable protocol is not automated',
      message:
        'There is no backend workflow for unreachable customers. Call the customer using the number on the delivery, and report a failed delivery from the active delivery screen if it cannot be completed.',
    },
    '13_delivery_issue_exception_reporting': {
      title: 'Exception reports are not connected',
      message:
        'Issue categories and attachments are not stored by the rider backend. Mark a delivery as failed with a short note from the active delivery screen when a delivery cannot be completed.',
    },
    '14_support_center_live_dispatch_chat': {
      title: 'Live support chat is not available',
      message:
        'The rider backend does not provide a chat or dispatch-messaging service. Phone your dispatch desk for urgent help.',
    },
    '15_delivery_verification_proof_of_delivery': {
      title: 'Photo and signature proof are not connected',
      message:
        'Proof-of-delivery photos and signatures are not stored by the backend. Complete the delivery from the active delivery screen once the customer has received the package.',
    },
    '16_delivery_completed_payout_summary': {
      title: 'Payout summaries are not available here',
      message:
        'This screen shows a sample payout. Real completed-delivery earnings are available on the Earnings screen.',
    },
    '19_rider_safety_emergency_center': {
      title: 'In-app SOS is not available',
      message:
        'The rider backend has no emergency/SOS endpoint. Use your phone to call local emergency services or your dispatch desk if you are in danger.',
    },
    '21_courier_notifications_center': {
      title: 'Rider notifications are not available',
      message:
        'The backend does not send or store rider notifications. New delivery offers appear on the dashboard and offers screen while you are online.',
    },
    '22_rider_settings_language_preferences': {
      title: 'Preferences are not connected',
      message:
        'Language, theme and notification preferences are not stored by the rider backend yet. Changes on this screen will not be saved.',
    },
    '23_offline_resilience_edge_sync_mode': {
      title: 'Offline sync is not available',
      message:
        'The rider app needs a connection to load deliveries and update their status. There is no offline queue or background sync in the backend.',
    },
  };

  window.NFUnsupported = {
    messages: MESSAGES,
    mark: function (key) {
      var notice = MESSAGES[key];
      if (!notice || !window.NFUI || !window.NFUI.markUnsupported) return;
      window.NFUI.markUnsupported(notice);
    },
  };
})(window);
