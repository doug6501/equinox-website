# Equinox Audio Visuals — Phase 3 Completion + Phase 4: IA & Conversion

**Date:** April 25, 2026  
**Agent:** Claude 4.6 Sonnet  
**Scope:** Complete remaining Phase 3 items (A–C) and Phase 4 items D–E. Phase 4 item F (nav reduction) proposed and awaiting approval.  
**Objective:** Extend cursor trail across all .v2 pages; update The Ledger; implement photography CSS LUT; rebuild work.html as editorial index; create thank-you.html as brand moment.

---

## Overview

This session completes the three outstanding Phase 3 signature-moment items and executes Phase 4 items D and E. Item F (nav reduction) is proposed below and requires approval before implementation.

**Source of truth:** `EQUINOX_AUDIT_AND_REIMAGINING.md`  
**Architecture decisions held:** `.v2` body-class scope. No new brand colors. No gradients. Ember is the only accent.  
**Critical facts held throughout:** Equinox founded 2023. 11 commented-out testimonials untouched. Doug Kunnath's personal career voice preserved.

---

## A — Cursor Trail Extended to All .v2 Pages

**Finding:** The cursor trail HTML `<div class="cursor-trail">` and inline JavaScript were present only in `index.html`. The CSS rule `.v2 .cursor-trail { ... }` was already in `design-system-v2.css` and scoped to `.v2`, meaning all migrated case study pages had the CSS but no element or initializer to trigger it.

**Resolution:** Added a self-contained IIFE to the bottom of `script.js` that:
1. Checks `document.body.classList.contains('v2')` — no-ops on non-v2 pages
2. Checks `document.getElementById('cursorTrail')` — no-ops if the inline version (on `index.html`) already exists, preventing double-init
3. Checks `prefers-reduced-motion: reduce` — returns immediately if true
4. Checks `hover: none` — returns immediately on touch devices
5. Creates `<div class="cursor-trail" id="cursorTrail" aria-hidden="true">` dynamically
6. Attaches a `mousemove` listener with the same lerp animation loop as the `index.html` inline version

**Result:** The cursor trail is now active on all 15 `.v2` pages (homepage + 14 case studies) via a single 40-line addition to `script.js`. Zero HTML file changes were required. Motion and touch exclusions are honored identically to the original implementation.

**Files changed:** `script.js`

---

## B — The Ledger Updated

**Finding:** Two case studies from the Phase 3 portfolio were absent from The Ledger in `index.html`:
- `work-two-day-wedding.html` (Case 044) — Hill Farm & Hildene, August 22–23, 2025
- `work-hildene-wedding-2.html` (Case 037) — Hildene, Fall 2024

The most-recent entry ("Bennington Museum · Apr 2026 · Vanish screening") was already correct per the standing spec.

**Resolution:** Added both missing entries to Set 1 and Set 2 (the duplicate track required for seamless loop):
- `Aug 2025 · Hill Farm & Hildene · Two-day wedding weekend` — inserted after The Crooked Ram entry in the Aug 2025 cluster
- `Fall 2024 · Hildene · Wedding at Lincoln Hall` — inserted between Kimpton Taconic (2024–25) and Bennington Museum Summer Celebration (Jun 2024)

No fictional events were added. No existing entries were removed. Only real events from confirmed case studies.

**Ledger entry count:** 12 entries → 14 entries (28 total with the seamless-loop duplicate).

**Files changed:** `index.html`

---

## C — Photography CSS LUT

**Specification:** From `EQUINOX_AUDIT_AND_REIMAGINING.md` §4/§4.5 — "warm midtones, low saturation in greens and blues, protected skin tones, soft highlight rolloff" and "warm midtone, low saturation, slight amber lift."

**Implementation:** Added Section 22 to `design-system-v2.css`:

```css
:root {
    --lut-filter: brightness(1.03) contrast(0.97) saturate(0.88) sepia(0.12);
}

.v2 .case-study-hero__image     { filter: var(--lut-filter); }
.v2 .case-gallery__item img      { filter: var(--lut-filter); }
.v2 .work-card__image,
.v2 .work-card-v2 img            { filter: var(--lut-filter); }
```

**Filter rationale:**
| Component | Value | Effect |
|---|---|---|
| `brightness(1.03)` | +3% | Lifts midtones slightly toward warmth |
| `contrast(0.97)` | −3% | Softer highlight rolloff; reduces harshness |
| `saturate(0.88)` | −12% | Mild desaturation; low saturation in greens and blues |
| `sepia(0.12)` | +12% | Slight amber cast; the warm LUT grade signal |

The filter is defined as a custom property so the entire grading decision can be overridden in one line when a real LUT is developed. It degrades gracefully — browsers that do not support `filter` simply display ungraded images. No `prefers-reduced-motion` exception required (filter is not motion).

**Affected elements:** Case study hero images (15 pages), gallery images (15 pages × 3 = 45 images), homepage work-preview cards (3 cards).

**Files changed:** `design-system-v2.css`

---

## D — work.html Rebuilt as Editorial Case-Study Index

**Before:** Dark gradient template, `<video autoplay loop>` cards in a grid, inline body styles overriding the v2 system, no `.v2` class.

**After:** Full `.v2` migration. Editorial typographic index — no thumbnails, no video cards, no grid. Structure:

- Page header: display-serif "Our Work" + mono count "14 cases · 2023 – present"
- One-paragraph intro (brand voice, body sans)
- Three category dividers in mono uppercase: Weddings / Corporate & Non-Profit / Community & Multi-Day
- 14 `.case-row` rows, each containing:
  - Case number in ember mono (3-digit, left column)
  - Event name in display serif (24px)
  - Venue · location · date in small mono
  - One-line description in body sans
  - Hover-reveal `→` in ember mono (right column)
- Row hover: linen background expands to full container width over 160ms — no bounce, no lift
- Quiet CTA: display-serif phrase + ghost link "Start a project →"
- v2 footer (identical to case study pages)

**Case ordering:** Weddings newest-first (047 → 019 skipping corporate interleave), Corporate & Non-Profit newest-first by category, then Community/Multi-Day. All 14 case studies are present.

**Files changed:** `work.html` (complete rewrite)

---

## E — thank-you.html Created

**Before:** No thank-you page existed. Form submissions had no branded landing experience.

**After:** New page, `.v2`, with:

- `<meta name="robots" content="noindex, nofollow">` — not crawlable, not indexed
- GA4 `conversion` event fired on page load
- Header: standard v2 nav
- Main: vertically centered card (flex layout, `min-height: 100vh`):
  - Ember mono eyebrow: "Message received"
  - Display-serif H1: "Your message / is in good hands."
  - Body-sans sub: "We'll be back to you within 24 hours. If your event is within two weeks, we move faster than that."
  - Brass hairline divider
  - Mono link: "See what we've produced →" → `work.html`
- v2 footer

**Tone check:** Direct (not effusive). Brand voice (24-hour promise + two-week urgency is the specific claim from the audit §5). Quiet return path to work — not a generic "go back to home" link.

**Files changed:** `thank-you.html` (created)

---

## F — Nav Reduction (PROPOSED — Awaiting Approval)

**Current nav:** Home · Our Work · Services · About Us · Insights · Contact Us (6 items)

**Audit source:** `EQUINOX_AUDIT_AND_REIMAGINING.md` §5 — *"Primary nav reduced to five: Work · Services · About · Insights · Start a Project. The logo becomes the Home link. Label consistency enforced."*

**Proposed change:**

| Position | Current | Proposed | Reason |
|---|---|---|---|
| Logo | Home link | Home link | No change |
| Nav item 1 | Home | — | Remove. Logo already links home. Redundant item wastes nav space and violates Direction A's "Work is the first thing a buyer clicks." |
| Nav item 2 | Our Work | Work | Trim label. "Our" adds no information. Industry convention: "Work." |
| Nav item 3 | Services | Services | No change |
| Nav item 4 | About Us | About | Trim label. "Us" is redundant when standing next to branded items. |
| Nav item 5 | Insights | Insights | No change |
| Nav item 6 | Contact Us | — | Remove from nav item list |
| Right-side CTA | None | Start a project | Separated from nav items, rendered as a ghost button or underline link on the right. Direction A spec: "One CTA right." |

**Result:** 5-item nav (Work · Services · About · Insights) + 1 standalone CTA (Start a project), replacing 6-item nav. Consistent with the audit's specification.

**Scope:** This would require editing every HTML file's embedded header block (all 49+ pages carry the header inline). The fastest path is a search-and-replace on the `<ul class="nav-links">` block across all files.

**Risks:**
- "Contact Us" disappears from the nav; it survives as the CTA. Users who scan for "Contact" may need an extra moment — mitigated by the "Start a project" label being unambiguous.
- "Home" removal requires confirming the logo link is always present and visible (it is on all pages reviewed).

**Decision required:** Approve as specified, approve with modifications, or defer. No code has been written for this item.

---

## Constraints Honored

- Zero gradient, shimmer, hover-lift, or glass introduced
- No new brand color introduced
- Ember is the only accent
- 11 commented-out testimonials untouched
- `EQUINOX_AUDIT_AND_REIMAGINING.md` not modified in this tranche. (V2 prototype HTML files have since been removed from the repository.)
- No fictional events added to The Ledger
- Equinox founding year 2023 maintained throughout
- Doug Kunnath's personal career byline voice preserved

---

## Files Changed

| File | Type | Summary |
|---|---|---|
| `script.js` | Modified | Cursor trail IIFE added; auto-inits on all `.v2` pages |
| `index.html` | Modified | Ledger updated: 2 entries added to Set 1 and Set 2 |
| `design-system-v2.css` | Modified | Section 22 added: `--lut-filter` + application rules |
| `work.html` | Rewritten | Full .v2 migration; rebuilt as editorial typographic index |
| `thank-you.html` | Created | New .v2 brand-moment page; noindex; GA4 conversion event |

---

## Owner Action Items (Carried Forward)

1. **11 commented-out testimonials** — unchanged. Supply real first name + role + venue + date to restore each. Placeholder in each file: `<!-- TODO: supply real attribution to restore this testimonial -->`
2. **Typography licensing** — Fraunces is the current display face (Google Fonts, free). GT Sectra + Söhne are the premium replacements. Update `--font-display` and `--font-body-v2` in `stable-header.css` when licenses are purchased (~$900–$2,400 one-time).
3. **Footer spec line** — `v2.0 · Last show: Bennington Museum · Apr 19, 2026` is hardcoded in the footer of all v2 pages. Update when a new show is produced.
4. **contact.html → thank-you.html redirect** — Wire the HubSpot form's success redirect to `thank-you.html` (currently there is no redirect configured).
5. **Nav reduction** — Awaiting approval per Section F above.
6. **Real LUT** — The CSS `--lut-filter` is a production-ready approximation. A real photo session with a Lightroom/Capture One preset will produce a `.cube` LUT that can be applied to the asset library once. The CSS filter remains as a live approximation until then.
