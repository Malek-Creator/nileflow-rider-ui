# Nileflow Rider Mobile Application — Complete Screen Directory & Architecture Summary

**Product Version:** v4.18.2 — East Africa Fleet Protocol  
**Platform:** Mobile (iOS & Android — Viewport 390px / Retina 3x @ 1170px)  
**Primary Hubs & Geography:** Nairobi Westlands, Kilimani, Upper Hill, Industrial Area  
**Ecosystem Standard:** Dark Theme (`#0E141B`), Nile Kinetic Emerald (`#10B981`), Nile Bronze (`#C28B38`), M-Pesa Integration  

---

## Screen Catalog & Functional Walkthrough (In User-Flow Sequence)

The 23 mobile interfaces form a complete, end-to-end journey spanning courier onboarding, daily dispatch, navigation, fulfillment verification, safety, earnings, and fleet management.

---

### Phase 1: Authentication & Rider Onboarding

#### 1. Rider Splash & Authentication (`{{DATA:SCREEN:SCREEN_7}}`)
* **Role & Screen Name:** Brand Entry & Quick Shift Resume
* **Description:** Welcomes couriers to the Nileflow network with the brand emblem, the signature motto *"Move Africa Forward"*, and 256-bit NTSA regulatory badges. Includes a biometric **"Bio-Resume Shift"** fast-pass sensor allowing active couriers to resume shifts instantly with Touch/Face ID, plus phone OTP sign-in and new courier registration portals.

#### 2. Rider Onboarding - Profile Setup (`{{DATA:SCREEN:SCREEN_37}}`)
* **Role & Screen Name:** Courier Personal & Fleet Profile Intake
* **Description:** First registration milestone capturing courier identity details (full legal name, Kenyan National ID number, phone number, emergency next-of-kin) alongside vehicle classification (motorcycle/boda boda, van, or cargo bike) and preferred operating sectors across Nairobi.

#### 3. Rider Onboarding - Document Scanner HUD (`{{DATA:SCREEN:SCREEN_36}}`)
* **Role & Screen Name:** Real-Time Camera OCR Scanner HUD
* **Description:** A specialized camera viewfinder equipped with auto-focus alignment reticles, flash/torch toggles, and instant edge-detection designed to capture high-resolution images of official government credentials (Kenyan National ID, Driving License, PSV insurance) under low-light conditions.

#### 4. Rider Onboarding - Document Hub (`{{DATA:SCREEN:SCREEN_34}}`)
* **Role & Screen Name:** Regulatory Credential Filing & Status Checklist
* **Description:** Centralized checklist displaying the status of required compliance files: Driving License (Class A2), National ID (Huduma Namba), DCI Certificate of Good Conduct, and PSV Commercial Transit Insurance. Indicates uploaded, pending review, or action-required states.

#### 5. Rider Onboarding - Verification Status (`{{DATA:SCREEN:SCREEN_32}}`)
* **Role & Screen Name:** Background Check & Fleet Clearance Tracker
* **Description:** Visual verification milestone screen displaying the real-time review progress of the courier's background check, biometric matching with Kenyan IPRS registries, and vehicle roadworthiness inspection. Features automated push-alert opt-ins when official clearance is granted.

---

### Phase 2: Dispatch, Route Hub & Mission Prep

#### 6. Rider Command Center Dashboard (`{{DATA:SCREEN:SCREEN_44}}`)
* **Role & Screen Name:** Operational Cockpit & Shift Home
* **Description:** The primary operational home screen showing live shift status (Online/Offline toggle), current shift earnings, active sector surge multipliers (e.g., Kilimani +1.4x), GPS telemetry status, quick-action emergency SOS shortcuts, and queued deliveries.

#### 7. Incoming Delivery Request (`{{DATA:SCREEN:SCREEN_43}}`)
* **Role & Screen Name:** High-Urgency Dispatch Offer Overlay
* **Description:** Time-critical modal with a 30-second circular countdown timer displaying a new order match. Highlights guaranteed payout (e.g., KES 430), total transit distance, pickup hub, drop-off location, cargo security classification, and large ergonomic "Accept Delivery" / "Decline" buttons.

#### 8. Deliveries Management Hub (`{{DATA:SCREEN:SCREEN_20}}`)
* **Role & Screen Name:** Multi-Order Pipeline & Queue Manager
* **Description:** Operational tabbed interface categorizing all assignments into `Active`, `Upcoming`, `Completed`, and `Failed`. Provides one-tap route filters (*All Hubs*, *Westlands Sector*, *Express Deliveries*) and displays detailed queue cards for scheduled batch pickups.

#### 9. Package Pickup & QR Verification (`{{DATA:SCREEN:SCREEN_18}}`)
* **Role & Screen Name:** Merchant Handover & Barcode Scanner
* **Description:** Merchant dispatch verification screen featuring a camera optical reticle to scan parcel QR/barcodes at the fulfillment dock. Includes an itemized manifest checklist (verifying serial numbers and tamper-evident seals) and digital merchant sign-off before leaving the depot.

---

### Phase 3: In-Transit Navigation, Fulfillment & Verification

#### 10. Active Delivery Navigation HUD (`{{DATA:SCREEN:SCREEN_41}}`)
* **Role & Screen Name:** Live Turn-by-Turn GPS Cockpit
* **Description:** In-motion navigation HUD optimized for motorcycle handlebar mounts. Displays turn-by-turn routing, lane guidance, remaining distance and ETA, live speed tracking, weather alerts, quick-access recipient calling, and traffic congestion indicators.

#### 11. Delivery Details & Order Timeline (`{{DATA:SCREEN:SCREEN_22}}`)
* **Role & Screen Name:** End-to-End Order Lifecycle & Manifest
* **Description:** Deep-dive order sheet showing a 7-stage vertical status timeline (*Order Assigned* → *Arrived at Customer*), full customer notes (e.g., gate intercom codes), cargo itemization, enterprise transit insurance coverage, and direct recipient communication channels.

#### 12. Customer Unavailable Wait Protocol (`{{DATA:SCREEN:SCREEN_13}}`)
* **Role & Screen Name:** Mandatory 10-Minute Waiting Protocol HUD
* **Description:** Enforces standardized protocol when a recipient is unreachable at drop-off. Displays a large 10-minute circular countdown timer, logs required contact attempts (call, SMS, push notification), and provides fallback options (handover to building security or neighbor).

#### 13. Delivery Issue & Exception Reporting (`{{DATA:SCREEN:SCREEN_16}}`)
* **Role & Screen Name:** Incident Reporting & Return Protocol
* **Description:** Formal exception workflow for handling undeliverable orders. Features structured reason taxonomy (*Customer Refused*, *Damaged in Transit*, *Unsafe/Hostile Zone*, *Mechanical Breakdown*), mandatory GPS-watermarked photo capture, incident notes, and automatic hub return routing.

#### 14. Support Center & Live Dispatch Chat (`{{DATA:SCREEN:SCREEN_14}}`)
* **Role & Screen Name:** Real-Time Hub Operations & Dispatch Console
* **Description:** In-app encrypted messaging channel connecting couriers directly to their regional dispatch controller (with <1 min response SLA). Supports live coordinate sharing, photo evidence upload, quick diagnostic prompt chips, and one-tap voice conference bridging.

#### 15. Delivery Verification & Proof of Delivery (POD) (`{{DATA:SCREEN:SCREEN_39}}`)
* **Role & Screen Name:** Multi-Factor Handover Clearance
* **Description:** Secure package handover screen requiring three levels of verification: customer 4-digit SMS OTP entry, digital signature on glass, and camera photo proof of delivered parcel. Unlocks escrow payment upon validation.

#### 16. Delivery Completed & Payout Summary (`{{DATA:SCREEN:SCREEN_9}}`)
* **Role & Screen Name:** Post-Trip Earnings & Daily Quest Celebration
* **Description:** Post-delivery success screen displaying instant trip earnings (Base Fare + Surge + Tip), Safaricom M-Pesa auto-credit confirmation, trip metrics (duration vs. ETA), daily quest milestone progress, and a quick switch to accept the next incoming order.

---

### Phase 4: Courier Welfare, Finance & Platform Tools

#### 17. Rider Earnings & M-Pesa Wallet (`{{DATA:SCREEN:SCREEN_30}}`)
* **Role & Screen Name:** Financial Command & Instant Cashout
* **Description:** Courier financial dashboard showing available balance, weekly earnings velocity chart, breakdown of base pay vs. rush-hour surge vs. tips, and the zero-tariff **Instant M-Pesa Cashout** button with sub-minute disbursement telemetry.

#### 18. Rider Performance & Operational Telemetry (`{{DATA:SCREEN:SCREEN_28}}`)
* **Role & Screen Name:** Tier Analytics & Fleet Ratings
* **Description:** Performance analytics suite displaying courier rating (4.92★), sector rank, and circular gauges for Success Rate (98.4%), Dispatch Acceptance (94.2%), and On-Time Arrival (96.8%). Tracks courier tier progression toward Platinum Priority perks.

#### 19. Rider Safety & Emergency Center (`{{DATA:SCREEN:SCREEN_25}}`)
* **Role & Screen Name:** Critical Distress SOS & Insurance Desk
* **Description:** Emergency console featuring a high-contrast **"Hold 3s to Trigger SOS"** button that broadcasts real-time satellite coordinates to armed patrol units and paramedics. Displays enterprise medical insurance policy details, roadside tow support, and live trip sharing with next-of-kin.

#### 20. Rider Profile & Vehicle Management (`{{DATA:SCREEN:SCREEN_24}}`)
* **Role & Screen Name:** Fleet Craft & Credential Wallet
* **Description:** Profile dashboard detailing courier credentials, assigned vehicle specifications (TVS Apache RTR 180, registration number), technical inspection validity, and a document expiration wallet providing reminders for license and insurance renewals.

#### 21. Courier Notifications Center (`{{DATA:SCREEN:SCREEN_5}}`)
* **Role & Screen Name:** Operational Feed & System Advisories
* **Description:** Notification stream organized into *All*, *Dispatch & Orders*, and *Earnings & Payouts*. Delivers push updates regarding high-demand surge opportunities, customer tips, weather advisories (heavy rain speed grace periods), and vehicle compliance alerts.

#### 22. Rider Settings & Language Preferences (`{{DATA:SCREEN:SCREEN_3}}`)
* **Role & Screen Name:** System Configuration & Ergonomic Tuning
* **Description:** User settings screen supporting multilingual switching (**English**, **Kiswahili**, **Français**, **Oromo/Amharic**), "Sunlight High-Visibility HUD" contrast boost for bright equatorial glare, voice guidance dialect selection, navigation app preferences, and paired Bluetooth peripherals (helmet headset & mobile thermal printer).

#### 23. Offline Resilience & Edge Sync Mode (`{{DATA:SCREEN:SCREEN_11}}`)
* **Role & Screen Name:** Low-Connectivity Edge Cache Protocol
* **Description:** Resilient offline screen activated during cellular dead-zones. Anchors missions using local encrypted SQLite storage and 12-satellite GPS locks, maintains pre-cached vector maps, allows local offline POD capture, and queues telemetry events for burst-sync upon network reconnection.

---

## Executive Architectural Summary

### 1. Unified Design Language & Ergonomics
* **Palette:** Built on a low-fatigue, battery-saving dark canvas (`#0E141B`) accented with **Kinetic Emerald** (`#10B981`) for affirmative actions and verified states, **Nile Bronze** (`#C28B38`) for branding, and **Surge Amber** (`#F59E0B`) / **Distress Red** (`#EF4444`) for critical notifications.
* **Motorcycle Usability:** All interactive components meet a strict 48px–56px minimum hit-box standard designed for one-handed operation while wearing motorcycle gloves, complemented by high-contrast typography (`Plus Jakarta Sans`) and sunlight glare-reduction modes.

### 2. Deep East African Localization
* **Mobile Money Integration:** Direct Safaricom Daraja M-Pesa API integration enabling real-time instant cashouts with zero courier tariff.
* **Regional Hub Alignment:** Concrete Nairobi geographic anchors (Westlands, Kilimani, Upper Hill, Industrial Area, Mombasa Rd, Waiyaki Way).
* **Multilingual Capability:** First-class support for English, Kiswahili (*Lugha ya Mfumo*), French, and Horn of Africa dialects.
* **Regulatory Compliance:** Built-in verification with Kenyan NTSA, Huduma biometric registries, and KLA commercial transport standards.

### 3. Mission-Critical Reliability
* **Resilience in the Field:** Seamless degradation to offline edge-caching ensures that deliveries, customer contact, and proof-of-delivery verification never stall in cellular dead-zones.
* **Courier Welfare & Safety:** 3-second safeguarded SOS panic buttons, active dispatch conference calling, full goods-in-transit insurance tracking, and equitable weather-delay grace periods.