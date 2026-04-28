# Equinox Audio Visuals — Phase 6, Tier 1: Core Buyer Pages

**Date:** April 25, 2026  
**Agent:** Claude 4.6 Sonnet  
**Scope:** v2 design system migration — 7 core buyer pages + CSS Section 23 additions.  
**Source of truth:** `EQUINOX_AUDIT_AND_REIMAGINING.md`

---

## Constraints Honored

- Zero gradient, shimmer, hover-lift, or glass introduced
- No new brand color. Ember (`var(--ember)`) is the only accent.
- 11 commented-out testimonials untouched
- `EQUINOX_AUDIT_AND_REIMAGINING.md` not modified in this tranche. (V2 prototype HTML files have since been removed from the repository.)
- All existing body copy preserved verbatim unless a confirmed kill-list hit
- Equinox founding year 2023 maintained; Doug Kunnath's personal career voice preserved
- "seamless" → "handled" applied to `services-corporate.html`
- "seamless run-of-show" → "precise run-of-show" applied to `services-galas.html` (body copy + JSON-LD FAQ)

---

## Step 1 — CSS Section 23 Added to `design-system-v2.css`

Renamed existing "23. RESPONSIVE" to "24. RESPONSIVE". Added new Section 23 with four sub-sections:

**23.1 PAGE HERO** — `.page-hero-v2` and `.page-hero-v2--text` variant  
**23.2 ARTICLE LAYOUT** — `.article-layout`, `.article-meta`, `.article-related` grid  
**23.3 SERVICE CARDS + CONTENT SECTIONS** — `.content-section-v2`, `.service-grid-v2`, `.service-card-v2`, `.cta-section-v2`  
**23.4 INSIGHTS GRID** — `.insights-filter__btn`, `.insights-cards-section`, `.insights-grid-v2`, `.insight-card-v2`

All tokens reference existing v2 variables. No new colors introduced.

---

## Step 2 — Tier 1 Page Migrations

All 7 pages received:
- `class="v2"` on `<body>`
- v2 font stack (Fraunces + Inter Tight + JetBrains Mono)
- `<link href="design-system-v2.css?v=1" rel="stylesheet">`
- Inline body gradient `<style>` blocks deleted
- Old-style footer replaced with v2 footer (`footer-bug "EQ"`, 4-column: Navigate / Services / Regions / spec line)
- Old hero replaced with `.page-hero-v2` or `.page-hero-v2--text`

### `about.html`
- Hero: `.page-hero-v2` with `assets/approach-teamwork.jpg`
  - Eyebrow: "Equinox Audio Visuals" | Headline: "Event production with character."
- Story section: `.content-section-v2` with `.content-section-v2__prose`
- Team section: `.content-section-v2 content-section-v2--linen`
- Process section: `.content-section-v2` with `.service-grid-v2` (2-column, 4 cards with SVG icons)
- CTA: `.cta-section-v2` — "If your event deserves a team that treats it like theirs."

### `services.html`
- Hero: `.page-hero-v2--text` — Eyebrow: "Services" | Headline: "The work behind the invisible."
- Tab UI and AV Solutions & Rentals tab **retired entirely** (gear-forward content)
- 3 `.service-card-v2` links: Corporate / Weddings / Galas — each links to vertical page
- CTA: `.cta-section-v2` — "Have a project in mind?"

### `services-corporate.html`
- Hero: `.page-hero-v2` with `assets/insights-conference-speaking.jpg`
  - Eyebrow: "Corporate & Conferences" | Headline: "Corporate Events & Conferences"
- Body wrapped in `.content-section-v2 > .content-section-v2__prose`
- 6 `.service-card-v2` cards (Wireless Audio, Live Streaming, Projection, Presenter Support, PowerPoint, Lighting)
- Kill-list fix: "every transition is seamless" → "every transition is handled"
- `.consultation-cta-section` replaced with `.cta-section-v2`

### `services-weddings.html`
- Hero: `.page-hero-v2` with `assets/equinox-tent-wedding-01.jpg`
  - Eyebrow: "Weddings" | Headline: "Weddings & Private Celebrations"
- Preserved verbatim: "The 'Invisible' Production Team." H2
- Preserved verbatim: "We hide the speakers behind floral arrangements..."
- 6 `.service-card-v2` cards
- `.consultation-cta-section` replaced with `.cta-section-v2`

### `services-galas.html`
- Hero: `.page-hero-v2` with `assets/bennington-museum-gala-2024-01.jpg`
  - Eyebrow: "Galas & Non-Profits" | Headline: "Galas & Non-Profits"
- Kill-list fix: JSON-LD FAQ — "create a seamless run-of-show" → "run a precise run-of-show"
- 6 `.service-card-v2` cards
- `.consultation-cta-section` replaced with `.cta-section-v2`

### `insights.html`
- Hero: `.page-hero-v2--text` — Eyebrow: "Insights" | Headline: "Thinking out loud about live events."
- `.insight-card` grid → `.insight-card-v2` grid inside `.insights-cards-section` (linen background, bone cards)
- All 13 article links preserved with existing thumbnails; `filter: var(--lut-filter)` applied via CSS
- Category filter buttons → `.insights-filter__btn` with ember active state, linen inactive, ink text
- Inline JS filter script added to `<body>` (replaces old `script.js` tab/category logic)
- `.consultation-cta-section` (checklist promo) replaced with `.cta-section-v2`:
  Headline: "Read enough. Have an event coming up?"

### `contact.html`
- Footer-only swap + v2 CSS/font/class additions
- Multi-step form not restructured
- v2 font stack updated
- `class="v2"` added to `<body>`
- `design-system-v2.css` linked
- Old-style footer replaced with v2 footer

---

## Files Changed This Session (Tier 1)

| File | Type | Summary |
|---|---|---|
| `design-system-v2.css` | Modified | Section 23 added (Page Hero, Article Layout, Service Cards, Insights Grid). Section 24 (Responsive) renumbered. |
| `about.html` | Rewritten | Full v2 migration; hero, story, team, process, CTA |
| `services.html` | Rewritten | Tab UI + AV Rentals tab retired; 3-card scroll layout |
| `services-corporate.html` | Rewritten | v2 migration; kill-list fix |
| `services-weddings.html` | Rewritten | v2 migration; protected lines preserved |
| `services-galas.html` | Rewritten | v2 migration; kill-list fix in body + JSON-LD |
| `insights.html` | Rewritten | v2 migration; new card grid; filter buttons |
| `contact.html` | Modified | Font, CSS, body class, footer swap only |

---

## v2 Page Count — Updated

**25 pages** now carry `class="v2"` and `design-system-v2.css`:

```
index.html
work.html
work-arlington.html
work-bennington-museum.html
work-bennington-summer.html
work-crooked-ram.html
work-equinox-wedding.html
work-hildene.html
work-hildene-volunteer.html
work-hildene-wedding-2.html
work-kimpton-taconic.html
work-northshire-gala.html
work-svcc-annual-meeting.html
work-svcc-women-leadership.html
work-two-day-wedding.html
work-vanish-screening.html
thank-you.html
regions.html
about.html          ← NEW
services.html       ← NEW
services-corporate.html ← NEW
services-weddings.html  ← NEW
services-galas.html     ← NEW
insights.html       ← NEW
contact.html        ← NEW
```

**Remaining (Tier 2–4):** 13 article pages + 9 geo pages + event-planning-checklist.html = 23 pages

---

## Owner Action Items (Persistent, Unchanged)

1. 11 commented-out testimonials — supply attribution to restore
2. Typography licensing — Fraunces (Google, free) is current; GT Sectra + Söhne are premium replacements
3. Footer spec line — "Last show: Bennington Museum · Apr 19, 2026" — update after next show
4. contact.html → thank-you.html redirect — wire HubSpot success URL
5. Real LUT — CSS approximation in place; .cube file is the long-term goal
6. Photography production — quarterly cadence planned
