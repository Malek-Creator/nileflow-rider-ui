# Nile Flow Design System Specification

**Version:** 1.0
**Classification:** Confidential & Proprietary
**Applies to:** Customer Mobile App, Vendor Mobile App (Domain B), Vendor Web Dashboard (Domain E), Rider Mobile App (Domain C), Admin Dashboard (Domain F), Public Website

---

## 0. Purpose

This document is the single source of truth for visual and interaction design across every Nile Flow surface. Every domain team (B, C, E, F, G, I) must build against these tokens and components rather than defining their own — this is what keeps five+ independent surfaces feeling like one product.

If a domain needs something not covered here, it should be proposed as an addition to this spec (see Section 9: Governance), not invented locally.

---

## 1. Brand Foundations

### 1.1 Color Palette

Colors are defined as tokens (named values), never used as raw hex codes in code. Every surface references the token name.

#### Primary — Teal (brand, primary actions, trust)

| Token | Hex | Usage |
|---|---|---|
| `color-teal-900` | `#0A4A40` | Headings, high-emphasis text on light backgrounds, dark UI chrome |
| `color-teal-600` | `#0F6B5C` | Primary buttons, active nav states, links, brand accents |
| `color-teal-100` | `#E1F5EE` | Subtle backgrounds, badge fills, hover states |
| `color-teal-050` | `#F3FAF8` | Lightest tint, section backgrounds |

#### Secondary — Gold (highlights, warnings-adjacent accents, premium/featured markers)

| Token | Hex | Usage |
|---|---|---|
| `color-gold-600` | `#B8862E` | Featured badges, secondary CTAs, star ratings, highlight accents |
| `color-gold-100` | `#FAF3E6` | Badge backgrounds, subtle highlight fills |

#### Neutral — Grayscale (structure, text, borders)

| Token | Hex | Usage |
|---|---|---|
| `color-neutral-900` | `#1A1A1A` | Primary body text |
| `color-neutral-600` | `#595959` | Secondary/muted text |
| `color-neutral-300` | `#C7C7C7` | Borders, dividers |
| `color-neutral-100` | `#F2F2F0` | Card backgrounds, subtle surface fills |
| `color-neutral-000` | `#FFFFFF` | Base surface / page background |

#### Semantic (status — used consistently across all dashboards and apps)

| Token | Hex | Usage |
|---|---|---|
| `color-success` | `#2E7D4F` | Delivered, approved, active, completed |
| `color-warning` | `#B8862E` (gold-600) | Pending, awaiting action, in review |
| `color-danger` | `#B23B3B` | Failed, rejected, cancelled, critical alerts |
| `color-info` | `#2E6FB8` | Informational states, neutral notifications |

**Rule:** never hardcode a hex value in application code. Reference the token. This is what allows a future rebrand or dark-mode implementation to change once, everywhere.

### 1.2 Typography

Single typeface family across all surfaces (e.g., Inter, or the current brand sans-serif used in existing Nile Flow documents) to avoid font-loading inconsistency between mobile and web.

| Token | Size | Weight | Usage |
|---|---|---|---|
| `text-display` | 28px | 600 (semibold) | Page-level hero headings (rare — marketing/website only) |
| `text-h1` | 24px | 600 | Screen titles, dashboard page titles |
| `text-h2` | 20px | 600 | Section headings |
| `text-h3` | 16px | 600 | Card titles, subsection headings |
| `text-body` | 15px | 400 | Default body text |
| `text-body-strong` | 15px | 600 | Emphasized inline text, labels |
| `text-caption` | 13px | 400 | Metadata, timestamps, helper text |
| `text-micro` | 11px | 400 | Legal text, footnotes — use sparingly |

**Line height:** 1.4x font size for body text, 1.2x for headings.
**Rule:** two weights only — 400 (regular) and 600 (semibold). Never use 500, 700, or italics for UI text (italics reserved for quotes/editorial content only).

### 1.3 Spacing System

An 8px base unit. All padding, margin, and gap values are multiples of 4px, with 8px as the default step.

| Token | Value | Usage |
|---|---|---|
| `space-xs` | 4px | Tight internal spacing (icon-to-label gaps) |
| `space-sm` | 8px | Default internal component padding |
| `space-md` | 16px | Standard spacing between elements |
| `space-lg` | 24px | Section spacing |
| `space-xl` | 32px | Major section breaks |
| `space-xxl` | 48px | Page-level top/bottom spacing |

### 1.4 Corner Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 6px | Badges, chips, small controls |
| `radius-md` | 8px | Buttons, inputs, list items |
| `radius-lg` | 12px | Cards, modals, containers |
| `radius-pill` | 999px | Status pills, fully rounded tags |

### 1.5 Elevation (Shadows)

Used sparingly — flat design is default; shadow indicates something is floating above the page (modals, dropdowns, floating action buttons).

| Token | Usage |
|---|---|
| `elevation-0` | Flat surfaces (cards, list items) — border only, no shadow |
| `elevation-1` | Dropdowns, popovers — subtle shadow |
| `elevation-2` | Modals, dialogs — pronounced shadow |

### 1.6 Iconography

- Single icon set across all surfaces (outline style, consistent stroke width — e.g., 1.5px stroke).
- Icon sizes: 16px (inline with text), 20px (default UI icon), 24px (navigation/tab bar icons).
- Never mix icon styles (no filled icons alongside outline icons on the same surface).

---

## 2. Component Specifications

### 2.1 Buttons

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| Primary | `color-teal-600` | White | None | Main call-to-action, one per screen/section |
| Secondary | Transparent | `color-teal-900` | 1px `color-teal-600` | Secondary actions alongside a primary button |
| Tertiary / Ghost | Transparent | `color-teal-900` | None | Low-emphasis actions, inline links styled as buttons |
| Destructive | `color-danger` | White | None | Delete, reject, cancel actions — used deliberately, never as default |
| Disabled | `color-neutral-100` | `color-neutral-600` | None | Inactive state — always paired with a clear reason if interactive elsewhere |

**Sizing:** height 44px (mobile — touch target minimum), 36px (dashboard/web dense contexts). Padding: 16px horizontal minimum.
**Radius:** `radius-md` (8px).
**States:** default, hover (web only — 8% darken), active/pressed (12% darken + scale 0.98), disabled (as above), loading (spinner replaces label, button stays same width).

### 2.2 Form Inputs

- Height: 44px (mobile), 40px (web/dashboard).
- Border: 1px `color-neutral-300` default, `color-teal-600` on focus (2px), `color-danger` on error.
- Radius: `radius-md`.
- Label position: above the field, `text-caption` weight 600, `color-neutral-900`.
- Helper/error text: below the field, `text-caption`, `color-neutral-600` (helper) or `color-danger` (error).
- Placeholder text: `color-neutral-600`, never used as a substitute for a label.

### 2.3 Cards

- Background: `color-neutral-000` (white).
- Border: 1px `color-neutral-300`, OR `elevation-0` (no border, subtle background differentiation) — pick one convention per surface and apply consistently.
- Radius: `radius-lg` (12px).
- Padding: `space-md` (16px) minimum internal padding.
- Used for: order cards, product cards, vendor profile summaries, dashboard summary tiles.

### 2.4 Status Badges / Pills

- Radius: `radius-pill`.
- Padding: 4px vertical, 10-12px horizontal.
- Text: `text-caption`, weight 600.
- Color pairing (background/text) always from the same semantic family:
  - Success: `color-success` text on a light green tint background
  - Warning/Pending: `color-gold-600` text on `color-gold-100` background
  - Danger/Failed: `color-danger` text on a light red tint background
  - Neutral/Informational: `color-teal-900` text on `color-teal-100` background

**Rule:** never rely on color alone — pair every status badge with a text label ("Delivered", "Pending", "Failed"), since color-only status indicators fail accessibility and are ambiguous in fast-scanning dashboard contexts (Domain F).

### 2.5 Data Tables (Dashboard Pattern — Domains E, F, G)

- Header row: `color-teal-900` background, white text, `text-caption` weight 600, uppercase optional.
- Row height: 44px minimum.
- Row divider: 1px `color-neutral-300` border-bottom, no vertical dividers between columns.
- Row hover (web): `color-neutral-100` background.
- Alternating row shading: not used — rely on dividers only, to keep dense dashboards calm rather than striped.
- Sortable columns: chevron icon (16px) beside header label, `color-neutral-600`, turns `color-teal-600` when active sort.

### 2.6 Navigation

**Mobile (Customer, Vendor, Rider apps):**
- Bottom tab bar, 4-5 items max, 24px icons with 11px label beneath.
- Active state: icon + label in `color-teal-600`; inactive: `color-neutral-600`.

**Web Dashboard (Vendor Dashboard, Admin Dashboard):**
- Left sidebar navigation, collapsible.
- Active item: `color-teal-100` background, `color-teal-900` text, left border accent 3px `color-teal-600`.
- Section grouping with `text-caption` uppercase labels (e.g., "ORDERS", "PAYMENTS", "SETTINGS").

### 2.7 Modals & Dialogs

- Max width: 480px (confirmation dialogs), 720px (content-heavy modals — e.g., order detail).
- Radius: `radius-lg`.
- Elevation: `elevation-2`.
- Overlay: `color-neutral-900` at 45% opacity behind the modal.
- Always include a visible close action (X icon, top-right) — never rely solely on outside-click-to-dismiss for anything with unsaved input.

### 2.8 Empty States

- Icon or simple illustration (24-32px), centered.
- `text-h3` headline naming the empty space (e.g., "No orders yet").
- `text-body` one-line description.
- Primary button CTA where a next action exists (e.g., "Add your first product").
- Never just blank space or a bare "No data" string.

### 2.9 Error States

- Inline errors (form fields): red border + `text-caption` message below field, as per 2.2.
- Page-level errors (failed load, network error): centered icon, `text-h3` message, `text-body` explanation, retry button.
- Toast/snackbar errors (transient): bottom of screen (mobile) or top-right (web), `color-danger` accent, auto-dismiss after 4-5 seconds, manually dismissible.

### 2.10 Loading States

- Skeleton screens preferred over spinners for content-heavy loads (product lists, dashboards, order feeds) — reduces perceived wait time.
- Spinners reserved for button-level loading (form submission) and short async actions under ~2 seconds.
- Never show a blank white screen during load — always a skeleton or spinner.

---

## 3. Surface-Specific Density Guidance

The token system is shared, but density (spacing tightness) differs by surface — this is intentional, not drift:

| Surface | Density | Rationale |
|---|---|---|
| Customer Mobile App | Comfortable — generous spacing, larger touch targets | Consumer-facing, browsing/discovery experience |
| Vendor Mobile App (Domain B) | Comfortable | Merchant using it on the go, similar touch needs to customer app |
| Vendor Web Dashboard (Domain E) | Compact | Data-dense (analytics, order tables), used at a desk |
| Rider Mobile App (Domain C) | Comfortable, high-contrast | Used outdoors, in motion, glanceable at a glance — larger text, higher contrast than other surfaces |
| Admin Dashboard (Domain F) | Compact | Highest data density of any surface — operations, fraud, disputes |
| Public Website | Comfortable | Marketing/conversion-focused, generous whitespace |

**Rule:** density changes spacing values and font sizes by a defined scale (e.g., compact = 0.85x the comfortable spacing tokens), not by inventing new components.

---

## 4. Accessibility Baseline

- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text (18px+) and icons — verify all token pairings (e.g., `color-gold-600` on `color-gold-100`) against this before shipping.
- Minimum touch target: 44x44px on all mobile surfaces.
- Every status conveyed by color must also be conveyed by text or icon (see 2.4).
- All interactive elements must have a visible focus state on web (keyboard navigation) — 2px `color-teal-600` outline.

---

## 5. Motion & Interaction

- Standard transition duration: 150-200ms for hover/press states, 250-300ms for modal/panel enter-exit.
- Easing: ease-out for elements entering the screen, ease-in for elements exiting.
- No motion should exceed 400ms — anything longer reads as sluggish rather than polished.
- Reduce motion for users with `prefers-reduced-motion` set — replace slide/scale transitions with simple opacity fades.

---

## 6. Content & Voice Guidance

- Sentence case everywhere — buttons, headings, labels, table headers. Never Title Case, never ALL CAPS (section group labels in nav are the one sanctioned exception, per 2.6).
- Buttons: verb-first, 1-3 words ("Create order", "Accept delivery"), no terminal punctuation.
- Errors: state what happened, then what to do next — no blame language, no raw system/exception strings surfaced to the user.
- Empty states: an invitation, not an apology ("Start your first campaign", not "Nothing here yet").
- Admin Dashboard (Domain F) copy is terser and more operational than Customer App copy, which can be warmer/more conversational — this is the one place tone is allowed to diverge by surface.

---

## 7. Asset & Handoff Format

- Design source of truth: single shared Figma file/library, organized by: Foundations (tokens) → Core Components → Surface-Specific Patterns.
- Tokens exported as a shared JSON/constants file consumed directly by engineering (not manually re-created per domain) — Domain G should own the pipeline that syncs this into the codebase.
- Any new component required by a domain is proposed to the shared library first (see Governance below) rather than built locally and left undocumented.

---

## 8. Governance

- A single owner (design lead, or the CTO in a solo-design-function setup) approves any new token or component addition to this spec.
- Process for requesting a new component: domain lead documents the use case, checks whether an existing component/variant already covers it, and requests an addition only if a genuine gap exists.
- Quarterly design QA pass across all live surfaces to catch drift from this spec (e.g., a button that quietly picked up a non-standard color, a dashboard table that diverged from the standard row height).

---

## 9. Version History

| Version | Date | Change |
|---|---|---|
| 1.0 | July 2026 | Initial specification — Foundations, Core Components, Surface Density Guidance, Accessibility, Governance |
