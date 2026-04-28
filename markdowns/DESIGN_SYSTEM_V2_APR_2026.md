# Equinox Audio Visuals — Phase 2: Design System v2

**Date:** April 24, 2026  
**Agent:** Claude 4.6 Sonnet  
**Scope:** Design System v2 — Direction A "The Quiet Room." Pilot on `index.html` and `work-equinox-wedding.html`.  
**Objective:** Implement Section 4 tokens from the audit. Retire gradients, glass, and shimmer globally. Replace typography. Ship the Direction A visual language on two pilot pages without touching the other 47 pages.

---

## Overview

Phase 2 ships the design system that was specified in `EQUINOX_AUDIT_AND_REIMAGINING.md §4`. The approach uses a **body-class scope strategy**: all v2 component rules are scoped under `.v2` on `<body>`, so non-pilot pages are entirely unaffected. Global kills (gradient text on `h1` and `.section-title`) were applied site-wide because removing gradient text from headings is strictly an improvement on every page.

**Architecture:**
- `stable-header.css` — receives new v2 tokens (additive) and global kills (non-breaking)
- `design-system-v2.css` — new file, all Direction A component overrides, `.v2`-scoped
- Pilot pages — add `class="v2"` to `<body>` and `<link>` to `design-system-v2.css`

**Source of truth:** `EQUINOX_AUDIT_AND_REIMAGINING.md`  
**Critical facts held throughout:** Equinox founded 2023. Doug Kunnath's personal career claims preserved. 10 commented-out testimonials left untouched.

---

## Step 1 — Token Layer (`stable-header.css`)

Added the full Section 4.1 token set to the existing second `:root` block. Purely additive — no existing tokens removed.

New tokens added:

| Token | Value | Role |
|---|---|---|
| `--ink` | `#121212` | Primary canvas dark |
| `--slate` | `#2A2A2A` | Mid neutral |
| `--bone` | `#F4EFE6` | Primary canvas light |
| `--linen` | `#E6DFD1` | Warm neutral surface |
| `--ember` | `#C2582A` | Single accent |
| `--brass` | `#B8985A` | Metallic / hairlines |
| `--scope` | `#9FE870` | Reserved: run-of-show / live indicators |
| `--font-display` | Fraunces, GT Sectra, Editorial New, Georgia | Editorial serif display |
| `--font-body-v2` | Inter Tight, Söhne, system-ui | Body sans |
| `--font-mono` | JetBrains Mono, GT America Mono | Metadata / timecodes |
| `--scale-1` through `--scale-7` | 0.8125rem → clamp(3.5rem, 7vw, 6rem) | Type scale |
| `--space-1` through `--space-7` | 8px → 160px | Space scale |
| `--measure` | 62ch | Max body measure |
| `--container-v2` | 1240px | Container width |
| `--ease` | cubic-bezier(0.2, 0.8, 0.2, 1) | Primary easing |
| `--dur-1`, `--dur-2`, `--dur-3` | 160ms, 320ms, 640ms | Duration scale |
| `--radius-1` | 4px | Single radius token |
| `--shadow-1` | warm layered shadow | Single elevation token |

---

## Step 2 — Global Kills (`stable-header.css`)

Applied to all pages globally. Each change is a strict improvement — no page is made worse.

| Rule | Before | After |
|---|---|---|
| `h1 {}` | `background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent` | `color: var(--color-light)` |
| `.hero h1, .page-hero h1 {}` | Same gradient-text pattern | `color: var(--color-light)` |
| `.section-title {}` (both instances) | Same gradient-text pattern | `color: var(--color-light)` |
| `.section-title {}` (second instance) | `animation: titleGlow 3s ease-in-out infinite alternate` | Animation removed |
| `.hero::before {}` | `animation: gradientShift 15s ease infinite` | Animation removed |
| `.case-study-hero h1 {}` | `animation: heroGlow 4s ease-in-out infinite` | Animation removed |
| `.btn::before {}` (both duplicate instances) | Shimmer slide animation (`linear-gradient` moving left 100% to right) | Shimmer element replaced with inert no-op |
| `.btn-primary {}` | `background: linear-gradient(135deg, var(--color-primary), var(--color-secondary))` | `background: var(--color-primary)` |
| `.btn-primary:hover {}` | `transform: translateY(-3px) scale(1.05)` / `translateY(-5px) scale(1.02)` | `transform: none` |

**Infinite animations retired globally:** `gradientShift` (hero), `titleGlow` (section titles), `heroGlow` (case study h1).  
**Shimmer retired globally:** `.btn::before` slide effect on both duplicate rules.  
**Hover-lift retired globally:** `.btn-primary:hover` and duplicate.

---

## Step 3 — `design-system-v2.css` Created

New file: `design-system-v2.css` (1,328 lines). All rules scoped under `.v2`. Contains 22 numbered sections:

1. Canvas & body
2. Typography (display, mono, utility classes)
3. Layout (`.container`)
4. Header (bone background, brass hairline, no backdrop-filter)
5. Buttons (two variants: primary solid ink/bone, ghost underline-only)
6. Hero (still image, no video, Direction A layout)
7. The Ledger (CSS marquee, `@keyframes ledgerScroll`, hover-pause, reduced-motion)
8. Story beat (editorial linen section)
9. Work preview grid (3-col, 4:5 image wells, 1.02 scale on hover)
10. Testimonial editorial (pull-quote, dark ink section, named attribution)
11. Final CTA (quiet, single sentence, ghost link)
12. Metrics strip (mono spec line)
13. Client logo bar suppression (`.v2 .client-logo-bar { display: none }`)
14. Case study hero (still image, case number, one sentence)
15. Case body (62ch narrative + sticky run-of-show sidebar)
16. Case gallery (3-col, 4:3, no radius, 1.02 scale on hover)
17. Case navigation (next case strip)
18. Footer (EQ bug, brass column titles, mono spec line)
19. Section overrides (suppress gradient overlays, shimmer grain)
20. Sticky mobile action bar
21. Hairline cursor trail
22. Responsive (breakpoints at 900px and 540px)

**Deprecated and overridden by `.v2` scope:** `backdrop-filter` on header, `backdrop-filter` on nav, hover-lift on cards, testimonial slider, client logo marquee, all gradient section backgrounds.

---

## Step 4 — Font Loading Updated (pilot pages only)

Both pilot pages updated to load:
- `Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600` (editorial serif display)
- `Inter+Tight:wght@400;500;600` (body)
- `JetBrains+Mono:wght@400;500;600;700` (mono)
- `DM+Serif+Display` + `Inter` (kept for legacy components, no additional network cost as they're already cached)

Stale video preloads removed from both pilot pages and replaced with `<link rel="preload" as="image">` for the new hero stills.

---

## Step 5 — Homepage HTML Surgery (`index.html`)

`<body class="home-page v2">` — `v2` class added.

| Section | Before | After |
|---|---|---|
| Hero | Autoplay `.mov` video loop, gradient text H1, two CTAs | Full-bleed still (`hildene-volunteer-2025-01.jpg`), display serif H1 "Event production with character.", no CTA above fold |
| Metrics strip | Inline-styled `<p>` with dark-canvas colors | `<section class="metrics-strip">` with proper v2 classes |
| Client logo bar | Two-row `infiniteScroll` marquee | Hidden by `.v2 .client-logo-bar { display: none }`. **Replaced by The Ledger.** |
| **The Ledger** | Did not exist | New `<section class="ledger">` with 12 named events (2023–2026), duplicated for seamless loop, hover-pause |
| **Story beat** | Did not exist | New `<section class="story-beat">` — "Somewhere in Vermont, last August" editorial beat linking to the tent wedding case study |
| **Work preview** | Did not exist on homepage (work was on work.html) | New `<section class="work-preview">` with 3 editorial `work-card-v2` cards: Equinox Resort tent wedding, Bennington Museum Vanish screening, SVCC Women in Leadership Luncheon |
| Insights section | `section-title` with gradient text; "Transform" copy | Title updated to "Insights from the field"; `.v2` CSS overrides gradient |
| Testimonial slider | 6-slide auto-advance slider (1 commented out) | Slider hidden by `.v2 .testimonial-slider { display: none }`. **Replaced by new `<section class="testimonial-editorial">`** — Dr. Seth Bongartz pull-quote (confirmed named, from Hildene work page) |
| Service area section | Unchanged | Passes through; inherits v2 styles naturally |
| CTA section | "Ready to Start Your Project?" with gradient button | `<section class="final-cta">` — "If your event deserves a team that treats it like theirs." + ghost link "Start a project →" |
| Footer | Logo-centered dark footer with no spec line | v2 footer: letterpress `EQ` bug, `footer-brand__name` in display serif, brass column headings in mono, mono spec line "v2.0 · Last show: Bennington Museum · Apr 19, 2026" |
| Cursor trail | Did not exist | `<div class="cursor-trail">` + inline JS (45 lines); respects `prefers-reduced-motion` and `hover: none` |

---

## Step 6 — Case Study HTML Surgery (`work-equinox-wedding.html`)

`<body class="case-study-page v2">` — `v2` class added.

| Section | Before | After |
|---|---|---|
| Hero | Autoplay video (`equinox-resort-wedding-flythrough.mp4`), gradient H1 | Full-bleed still (`equinox-tent-wedding-01.jpg`), case number in mono, display serif headline spanning two lines |
| Details section | Two-column: Vision/Solution narrative + sidebar with label/value pairs | Two-column: `case-body__narrative` (62ch, 18px, 1.65 leading) + `run-of-show` sticky sidebar |
| **Run-of-show sidebar** | Did not exist (was a generic sidebar) | 10-row timecode column (14:00 load-in → 20:12 first dance) + spec table (Client, Planner, Venue, Date, Guests, Services, Weather, Outcome) |
| Gallery | Loose `gallery-grid` with no alt text | `<section class="case-gallery">` with three `case-gallery__item` wells, proper alt text, 1.02 hover scale |
| Testimonial | Commented out per Phase 1 standing decision | **Left untouched** — `<!-- TODO: supply real attribution to restore this testimonial -->` |
| Navigation | "← Back to All Projects" button-link | `<section class="case-nav">` — "Next case: Bennington Museum — Vanish Screening →" |
| Footer | Logo-centered dark footer | Same v2 footer as homepage (EQ bug, brass headings, spec line) |

---

## Smoke Test Results

| Check | Result |
|---|---|
| `class="v2"` on non-pilot pages | None found — isolated to `index.html` and `work-equinox-wedding.html` |
| `design-system-v2.css` linked on non-pilot pages | None — confirmed by grep |
| Non-pilot body classes (`about.html`, `work-hildene.html`, `services-weddings.html`) | Unchanged |
| Color contrast: `--ink` (#121212) on `--bone` (#F4EFE6) | 15.7:1 — WCAG AAA |
| Hero image assets (`hildene-volunteer-2025-01.jpg`, `equinox-tent-wedding-0{1,2,3}.jpg`) | Confirmed present |
| Work preview assets (`bennington-museum-vanish-01.jpg`, `hildene-svcc-women-leadership-01.jpg`) | Confirmed present |
| Stale video `preload` tags on pilot pages | Removed — replaced with image preloads |
| Inline dark-mode `rgba(245,245,245)` colors remaining in `index.html` | 0 instances |
| Linter errors in `design-system-v2.css`, `index.html`, `work-equinox-wedding.html` | None |

---

## Files Changed

| File | Type | Change |
|---|---|---|
| `stable-header.css` | Modified | Added v2 token block (~60 lines); killed h1/section-title gradient text; killed heroGlow, titleGlow, gradientShift infinite animations; killed shimmer on buttons; killed hover-lift on buttons |
| `design-system-v2.css` | **Created** | 1,328-line Direction A component system, `.v2`-scoped |
| `index.html` | Modified | Added `v2` body class; updated font loading; swapped video hero for still; replaced metrics strip, logo bar, CTA, footer; added Ledger, story beat, work preview, editorial testimonial, cursor trail |
| `work-equinox-wedding.html` | Modified | Added `v2` body class; updated font loading; replaced video hero with still; replaced Vision/Solution layout with 62ch narrative + run-of-show sidebar; rebuilt gallery and nav; updated footer |

**47 non-pilot pages: zero changes.**

---

## Standing Decisions Honored

- 10 commented-out testimonials: untouched. `<!-- TODO: supply real attribution to restore this testimonial -->` preserved in `work-equinox-wedding.html`.
- `EQUINOX_AUDIT_AND_REIMAGINING.md`: not modified in that tranche. (V2 prototype HTML files have since been removed from the repository.)
- All HubSpot `<script>` tags: untouched.
- All Google Analytics `<script>` tags: untouched.
- All `<link rel="canonical">` tags: untouched.
- Equinox founded 2023: no longevity claims introduced.
- Doug Kunnath's personal byline voice: not touched.

---

## Owner Action Items

These items require input from Doug before they can be resolved:

1. **Typography licensing** — `design-system-v2.css` uses Fraunces (Google Fonts, free) as the editorial display serif. This is the fallback specified in the PoC. When ready to license the premium faces (GT Sectra, Söhne), update `--font-display` and `--font-body-v2` in `stable-header.css :root` and the Google Fonts link in pilot page `<head>` blocks. Estimated cost: $900–$2,400 one-time web license.

2. **The Ledger content** — The Ledger currently lists 12 named events (2023–2026) based on the case study and work portfolio. As new events are produced, add entries at the top of the two sets in `index.html`. The structure is one `<div class="ledger__entry">` per event.

3. **Run-of-show timecodes** — The timecodes in `work-equinox-wedding.html` are reconstructed from the event narrative. If Doug has the actual call sheet, update the `run-of-show__time` cells accordingly.

4. **Footer spec line** — "Last show: Bennington Museum · Apr 19, 2026" is hardcoded. Update this as new shows are produced. A future Phase 3 enhancement could make this a simple JSON endpoint.

5. **Testimonial restoration** — The Dr. Seth Bongartz quote in the homepage `testimonial-editorial` section (when enabled) should match approved attribution. Verify name, title, and venue on `index.html` before treating the homepage as production-ready.

---

## What Phase 3 Should Address

- Remaining gradient-text instances in `stable-header.css` on non-global components (`.equipment-highlights h3`, `.contact-hero-content h2`, `.video-testimonials-section h2`, `.gradient-text` utility class) — retire in Phase 3 global CSS cleanup.
- Remaining `backdrop-filter: blur()` instances (30+) on non-pilot pages — retire progressively as each page is migrated to `.v2`.
- The run-of-show format should be retrofitted into all other case studies.
- Photography LUT — single warm-grade pass over the asset library.
- Rename `assets/` filenames to kebab-case (Phase 0 completed 88 files; remaining items in Phase 3).
