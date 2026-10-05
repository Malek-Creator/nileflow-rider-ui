# Nileflow Rider & Logistics — Design Specifications & Handoff Package

**System Version:** v4.18.2 • East Africa Fleet Protocol  
**Target Platform:** Mobile (iOS / Android React Native / Flutter) — Viewport 390px (3x Asset Export @ 1170px)  
**Primary Hubs:** Nairobi Westlands, Kilimani, Upper Hill, Industrial Area  
**Regulatory Compliance:** NTSA GovLink, IPRS Biometric Registry, KLA Certified, Safaricom Daraja M-Pesa API  

---

## 1. Brand Tokens & Color Palette

### Core Theme & Surfaces
| Token Name | Hex Value | Usage |
|---|---|---|
| `--color-surface` | `#0E141B` | App default dark canvas background |
| `--color-surface-container-lowest` | `#090F16` | Deepest ground layer, splash & camera HUD backdrop |
| `--color-surface-container-low` | `#161C23` | Base structural cards & list group backgrounds |
| `--color-surface-container` | `#1C232B` | Interactive cards, input fields, and elevated panels |
| `--color-surface-container-high` | `#242D37` | Modals, floating drawers, active pill states |
| `--color-surface-bright` | `#343A42` | Highlighted borders, dividers, subtle separators |

### Primary Brand Accents (Emerald & Kinetic Green)
| Token Name | Hex Value | Usage |
|---|---|---|
| `--color-emerald-primary` | `#10B981` | Main call-to-action buttons, verified status pills, route paths |
| `--color-emerald-glow` | `rgba(16, 185, 129, 0.25)` | Pulsing telemetry rings, scanner reticle glow |
| `--color-emerald-light` | `#34D399` | Secondary accents, progress bar completed fills |
| `--color-emerald-dark` | `#065F46` | Badge background fills, secondary card surfaces |

### Secondary Brand & Functional Accents
| Token Name | Hex Value | Usage |
|---|---|---|
| `--color-nile-bronze` | `#C28B38` | Nileflow brand wave accent, e-commerce marketplace gold |
| `--color-surge-amber` | `#F59E0B` | High demand surge pricing (+KES 150/drop), urgency timers |
| `--color-alert-red` | `#EF4444` | SOS Beacon, emergency broadcast, critical exceptions |
| `--color-info-blue` | `#3B82F6` | Telemetry link indicators, GPS satellite sync pills |

---

## 2. Typography Hierarchy

* **Font Family:** `Plus Jakarta Sans`, system-ui, -apple-system, sans-serif
* **Display Bold:** 28px – 32px / Leading 1.1 / Weight 800 (Earnings big metrics, screen titles)
* **Title H1:** 20px – 24px / Leading 1.2 / Weight 700 (Section headers, Order ID titles)
* **Title H2:** 16px – 18px / Leading 1.3 / Weight 600 (Card headers, modal prompts)
* **Body Regular:** 14px / Leading 1.4 / Weight 400–500 (Primary descriptions, details)
* **Caption / Telemetry:** 11px – 12px / Leading 1.3 / Weight 600 / Tracking +0.05em (Time stamps, hub codes, status badges)

---

## 3. UI Component Specifications

### Buttons & Touch Targets
* **Minimum Ergonomic Hit Box:** 48px height minimum for in-motion motorcycle gloved hand usability.
* **Primary Floating Action Bar:** 56px height, `border-radius: 16px`, background `#10B981`, font-weight 700, text color `#090F16` (deep contrast).
* **Critical Distress SOS Button:** 64px height, circular or prominent pill, `border: 2px solid #EF4444`, 3-second long-press timer with SVG circular fill feedback.

### Form & Hardware HUD Viewfinders
* **Document Scanner:** 4:3 reticle aspect ratio, 2px emerald bracket corners, pulsing laser scan animation line, 12px corner radius.
* **Biometric Fast-Pass:** Fingerprint icon container 96x96px, radial gradient aura `#10B981`, instant haptic feedback on touch.

---

## 4. Complete Screen Inventory & Routes

1. **Rider Splash & Authentication** (`{{DATA:SCREEN:SCREEN_6}}`)
2. **Rider Onboarding - Profile Setup** (`{{DATA:SCREEN:SCREEN_36}}`)
3. **Rider Onboarding - Document Scanner HUD** (`{{DATA:SCREEN:SCREEN_35}}`)
4. **Rider Onboarding - Document Hub** (`{{DATA:SCREEN:SCREEN_33}}`)
5. **Rider Onboarding - Verification Status** (`{{DATA:SCREEN:SCREEN_31}}`)
6. **Rider Command Center Dashboard** (`{{DATA:SCREEN:SCREEN_43}}`)
7. **Incoming Delivery Request** (`{{DATA:SCREEN:SCREEN_42}}`)
8. **Deliveries Management Hub** (`{{DATA:SCREEN:SCREEN_19}}`)
9. **Package Pickup & QR Verification** (`{{DATA:SCREEN:SCREEN_17}}`)
10. **Active Delivery Navigation HUD** (`{{DATA:SCREEN:SCREEN_40}}`)
11. **Delivery Details & Order Timeline** (`{{DATA:SCREEN:SCREEN_21}}`)
12. **Customer Unavailable Wait Protocol** (`{{DATA:SCREEN:SCREEN_12}}`)
13. **Delivery Issue & Exception Reporting** (`{{DATA:SCREEN:SCREEN_15}}`)
14. **Support Center & Live Dispatch Chat** (`{{DATA:SCREEN:SCREEN_13}}`)
15. **Delivery Verification & Proof of Delivery (POD)** (`{{DATA:SCREEN:SCREEN_38}}`)
16. **Delivery Completed & Payout Summary** (`{{DATA:SCREEN:SCREEN_8}}`)
17. **Rider Earnings & M-Pesa Wallet** (`{{DATA:SCREEN:SCREEN_29}}`)
18. **Rider Performance & Operational Telemetry** (`{{DATA:SCREEN:SCREEN_27}}`)
19. **Rider Safety & Emergency Center** (`{{DATA:SCREEN:SCREEN_25}}`)
20. **Rider Profile & Vehicle Management** (`{{DATA:SCREEN:SCREEN_23}}`)
21. **Courier Notifications Center** (`{{DATA:SCREEN:SCREEN_4}}`)
22. **Rider Settings & Language Preferences** (`{{DATA:SCREEN:SCREEN_2}}`)
23. **Offline Resilience & Edge Sync Mode** (`{{DATA:SCREEN:SCREEN_10}}`)

---

## 5. Assets & Branding Reference
* **Official Nileflow Emblem:** `{{DATA:IMAGE:IMAGE_46}}` (Clean transparent background vector mark with Nile waves & location globe pin)
* **Brand Splash Banner:** `{{DATA:IMAGE:IMAGE_47}}`
* **Verified Courier Avatar Asset:** `{{DATA:IMAGE:IMAGE_45}}`
