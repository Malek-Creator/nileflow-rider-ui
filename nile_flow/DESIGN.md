---
name: Nile Flow
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#3f4946'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#6f7976'
  outline-variant: '#bec9c5'
  surface-tint: '#0e6a5b'
  primary: '#005145'
  on-primary: '#ffffff'
  primary-container: '#0f6b5c'
  on-primary-container: '#99e8d5'
  inverse-primary: '#86d5c3'
  secondary: '#7f5600'
  on-secondary: '#ffffff'
  secondary-container: '#ffc567'
  on-secondary-container: '#775000'
  tertiary: '#004885'
  on-tertiary: '#ffffff'
  tertiary-container: '#1760a8'
  on-tertiary-container: '#c5dbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a2f2de'
  primary-fixed-dim: '#86d5c3'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#005144'
  secondary-fixed: '#ffdeae'
  secondary-fixed-dim: '#f6bd5f'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#604100'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a4c8ff'
  on-tertiary-fixed: '#001c39'
  on-tertiary-fixed-variant: '#004784'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-lg-bold:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-md-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system is engineered for modern African logistics, courier dispatch, and field supply-chain operations. It balances corporate discipline with outdoor functional clarity. The core user environment—field riders moving rapidly under intense sunlight and variable ambient conditions—demands instant glanceability, zero visual ambiguity, and high tactical confidence.

The design movement merges **High-Contrast Utilitarianism** with **Modern Enterprise Precision**:
- **Clarity Under Motion**: Interfaces optimize for split-second legibility. Critical path flows feature high-density contrast, robust typography, and clear visual state distinctions.
- **Dignified Reliability**: Rooted in deep teal and warm earthen gold, the visual tone conveys institutional stability, operational punctuality, and regional pride without decorative excess.
- **Ergonomic Safety**: Spatial structure privileges the single-handed thumb zone, defensive touch-target bounding boxes (minimum 48px to 56px), and high-contrast boundary separation between navigational cards.

## Colors

The palette is calibrated strictly for daylight readability and distinct semantic feedback.

### Brand Tones
- **Primary Brand (Teal)**:
  - `teal-900` (`#0A4A40`): Primary headings, deep surface accents, active navigation fills.
  - `teal-600` (`#0F6B5C`): Key interactive actions, primary buttons, confirmed status indicators.
  - `teal-100` (`#E1F5EE`): Selection badges, soft chip backgrounds, interactive hover states.
  - `teal-050` (`#F3FAF8`): Primary tinted card surfaces, highlighted table rows, active map callouts.
- **Secondary (Gold)**:
  - `gold-600` (`#B8862E`): Cash-on-delivery (COD) triggers, premium courier tiering, operational attention calls.
  - `gold-100` (`#FAF3E6`): Attention-state fills, pending dispatch container backgrounds.

### Neutrals
- `neutral-900` (`#1A1A1A`): Body copy, primary labels, core borders needing intense separation.
- `neutral-600` (`#595959`): Supporting metadata, parcel sub-IDs, inactive icons. Meets WCAG AA contrast against base backgrounds.
- `neutral-300` (`#C7C7C7`): Rigid structural dividers, disabled button outlines, form boundaries.
- `neutral-100` (`#F2F2F0`): Screen canvasing, card groupings, recessed input fills.
- `neutral-000` (`#FFFFFF`): Primary elevated card containers, popover surfaces, active buttons over dark media.

### Semantic Tones
- **Success** (`#2E7D4F`): Successful drop-off, verified digital signature, proof of delivery approved.
- **Warning** (`#B8862E`): Delay notification, payment dispute pending, low route fuel alert.
- **Danger** (`#B23B3B`): Failed delivery attempt, damaged cargo log, critical route cancellation.
- **Info** (`#2E6FB8`): System manifest updates, GPS route recalculation notes.

## Typography

Typography enforces a strict hierarchy using only two font weights: **400 (Regular)** for running narrative and descriptive tracking, and **600 (Semi-Bold)** for data markers, waypoint instructions, waybills, and UI anchors.

- **Headlines (`Plus Jakarta Sans`)**: Delivers friendly yet assertive geometric authority for location names, route milestones, and parcel summary modals.
- **Body & Data (`Inter`)**: Engineered for unyielding optical clarity under physical vibration and direct sunlight. Numeric sequences (phone numbers, OTP codes, tracking IDs, currency values) inherit crisp horizontal baseline metrics.
- Mobile overrides clamp headline scale to prevent layout breakage on low-width devices commonly deployed in courier fleets.

## Layout & Spacing

The layout is structured around an uncompromising **8px base grid system** (with a 4px sub-grid for internal micro-alignments such as badge padding and radio indicators).

### Form Factors & Grids
- **Mobile (Rider Application - 360px to 599px)**: 4-column fluid layout with `16px` outer margins (`margin-mobile`) and `12px` gutters (`gutter-mobile`). All primary action controls reside inside the bottom 40% vertical screen space to facilitate one-hand thumb operation.
- **Tablet / Mounted Vehicle Console (600px to 1023px)**: 8-column layout with `24px` margins and `16px` gutters. Split-pane layout: waypoint navigation pinned left, live manifest details pinned right.
- **Desktop Dispatch (1024px+)**: 12-column layout with `32px` margins and `24px` gutters, max layout container capped at 1440px.

### Sizing Rhythm
- Element padding and stacked card gaps strictly advance through the token scale: `space-xs` (8px), `space-sm` (12px), `space-md` (16px), `space-lg` (24px), and `space-xl` (32px).
- Vertical clearance between distinct mission steps (e.g., recipient verification vs. payment collection) must maintain a minimum `space-lg` separation to avoid errant tap errors.

## Elevation & Depth

To guarantee usability in high-glare environments, this system relies on **tactile containment and crisp boundary outlines** rather than weak ambient blurs. Shadows alone are insufficient outdoors; depth is therefore reinforced by structured borders and tonal shifts.

### Elevation Hierarchy
- **Level 0 (Canvas)**: Background surface using `neutral-100` (`#F2F2F0`). No border, no shadow.
- **Level 1 (Card & Content Blocks)**: Surface `neutral-000` (`#FFFFFF`), bounded by a solid 1px border of `neutral-300` (`#C7C7C7`). Subtle structural grounding: `0px 2px 4px rgba(26, 26, 26, 0.06)`.
- **Level 2 (Active Focus & Slide-Up Panels)**: Surface `neutral-000`, surrounded by `neutral-300`, elevated via `0px 6px 16px rgba(26, 26, 26, 0.12)`. Applied to active waypoint cards, delivery task drawers, and sticky action footers.
- **Level 3 (Modals & Alerts)**: Critical system prompts and barcode capture overlays. Surface `neutral-000` accompanied by an ambient barrier: `0px 12px 32px rgba(10, 74, 64, 0.18)` alongside a 50% opacity `neutral-900` scrim.

## Shapes

The geometric framework balances utilitarian endurance with modern ergonomics. Corner radii adhere strictly to a codified tier:

- **Radius-SM (6px)**: Form fields, system chips, auxiliary badges, and inline status tags.
- **Radius-MD (8px)**: Standard touch buttons, numeric keypads, operational cards, and list item containers.
- **Radius-LG (12px)**: Floating bottom navigation modules, modal dialogue cards, active routing waypoints.
- **Radius-Pill (999px)**: Quick-filter chips, rider status indicator pills (e.g., "Online", "On Delivery"), and floating circular map controls.

## Components

### Buttons
- **Touch Boundaries**: Standard actions strictly feature heights between 48px and 56px to guarantee rapid accessibility with gloved or wet hands.
- **Primary**: Solid background `teal-600` (`#0F6B5C`), text `neutral-000`, 8px radius. Active tap state: `teal-900` (`#0A4A40`). Focus ring: 2px offset with `teal-600`.
- **Secondary**: Surface `neutral-000`, 1.5px border of `teal-600`, text `teal-600`. Active state: `teal-050`.
- **Destructive**: Background `danger` (`#B23B3B`), text `neutral-000`. Used for emergency stops, missing package alerts, or delivery cancellations.

### Inputs & Form Fields
- **Touch Target**: Height is fixed at 52px. Internal padding is `space-md` (16px).
- **Surface**: Background `neutral-000`, enclosed by a 1.5px border of `neutral-300`.
- **Focus**: Border switches to 2px `teal-600` with an outer 3px aura of `teal-100`.
- **Labels**: Persistent top-aligned using `label-lg` (`Inter`, 14px, 600 weight) in `neutral-900`. Inline placeholders use `neutral-600` to maintain minimum daylight legibility.

### Cards (Mission & Waypoint)
- **Base Style**: `neutral-000` background, 1px border of `neutral-300`, 8px or 12px radius, padded with `space-md` (16px).
- **Active Dispatch Item**: Elevated with Level 2 shadow, left border accented with a 4px solid stripe of `teal-600`.
- **Payment / COD Card**: Left border accented with a 4px solid stripe of `gold-600`, with internal sub-panel colored in `gold-100`.

### Selection Controls (Checkboxes & Radios)
- **Dimensions**: Sized at an enlarged 24x24px footprint to ensure field accuracy.
- **States**: Inactive state is a 2px border in `neutral-600` against a `neutral-000` background. Checked state switches to fill `teal-600` with white iconography.

### Chips & Badges
- **Status Badges**: Non-interactive inline chips with 6px radius, padding `4px 8px`.
  - Delivery Done: Background `teal-100`, text `teal-900`.
  - COD Pending: Background `gold-100`, text `gold-600`.
  - Transit Issue: Background `#FDE8E8`, text `danger` (`#B23B3B`).
- **Filter Chips**: Height 36px, `radius-pill` (999px), 1px border `neutral-300`, interactive state flips to fill `teal-900` with text `neutral-000`.

### Field-Specific Additions
- **Bottom Navigation Dock**: Pinned to the screen base with a fixed height of 72px, providing high-contrast vector icons and bold labels with a min-width of 64px per tap target.
- **Proof-of-Delivery Signature Pad**: Enclosed bounding canvas in `neutral-050` with a persistent baseline grid and an explicit 56px confirmation bar.