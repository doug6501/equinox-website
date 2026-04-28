# Equinox Audio Visuals — Phase 6, Tier 3: Geo/SEO Pages

**Date:** April 25, 2026  
**Agent:** Claude 4.6 Sonnet  
**Scope:** v2 design system migration — 9 av-services-*.html geo pages.  
**Source of truth:** `EQUINOX_AUDIT_AND_REIMAGINING.md`

---

## Constraints Honored

- Zero gradient, shimmer, hover-lift, or glass introduced
- No new brand color. Ember is the only accent.
- All existing body copy (H2 headings and prose paragraphs) preserved verbatim
- Service card titles and descriptions preserved verbatim
- Nearby area linking sections preserved verbatim
- Inline `<style>` body gradient blocks **deleted** (were using `!important` and would override v2 bone background)

---

## Migration Pattern Applied to All 9 Pages

Each geo page received:

1. **`class="v2"` on `<body>`**
2. **v2 font stack** — Fraunces + Inter Tight + JetBrains Mono
3. **`<link href="design-system-v2.css?v=1">`** after stable-header.css
4. **Inline `<style>` body gradient block deleted** — the `body { background: linear-gradient(...) !important; }` block inside `.geo-hero` was removed entirely
5. **Hero replaced** — `.geo-hero` with inline gradient replaced by `.page-hero-v2--text` (text-only, bone background)
   - Eyebrow: state/region (Vermont / New York / Massachusetts / New Hampshire)
   - Headline: existing H1 text preserved verbatim
6. **Service cards replaced** — `.geo-services-grid > .geo-service-card` replaced with `.service-grid-v2 > .service-card-v2` (keeping titles and body text verbatim)
7. **Nearby links preserved** — `.geo-nearby` section kept exactly as-is inside the new `.content-section-v2`
8. **CTAs consolidated** — `.consultation-cta-section` (3-step process) and `.cta-section` (duplicate) both removed; replaced with a single `.cta-section-v2`
9. **Footer replaced** — Old-style logo-image footer replaced with v2 footer

---

## Per-Page Details

| File | Eyebrow | CTA Headline |
|---|---|---|
| `av-services-manchester-vt.html` | Vermont | "Planning an event in Manchester?" |
| `av-services-bennington-vt.html` | Vermont | "Planning an event in Bennington?" |
| `av-services-berkshires-ma.html` | Massachusetts | "Planning an event in the Berkshires?" |
| `av-services-brattleboro-vt.html` | Vermont | "Planning an event in Brattleboro?" |
| `av-services-burlington-vt.html` | Vermont | "Planning an event in Burlington?" |
| `av-services-dorset-vt.html` | Vermont | "Planning an event in Dorset?" |
| `av-services-keene-nh.html` | New Hampshire | "Planning an event in Keene?" |
| `av-services-albany-ny.html` | New York | "Planning an event in Albany?" |
| `av-services-saratoga-springs-ny.html` | New York | "Planning an event in Saratoga Springs?" |

---

## Implementation Notes

- Migration performed via Python script (`migrate_geo.py`, now deleted)
- Script extracted prose content, service cards, and nearby links using regex anchored to known class names
- Two CTA sections in original pages (`.consultation-cta-section` + `.cta-section`) consolidated into one `.cta-section-v2`
- All LocalBusiness and FAQPage JSON-LD schema preserved verbatim in `<head>`

---

## v2 Page Count — Updated

**47 pages** now carry `class="v2"` and `design-system-v2.css`.

**Remaining (Tier 4):** event-planning-checklist.html = 1 page

---

## Owner Action Items (Persistent, Unchanged)

1. 11 commented-out testimonials — supply attribution to restore
2. Footer spec line — update after next show
3. contact.html → thank-you.html redirect
4. Real LUT + photography production (ongoing)
