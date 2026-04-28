# Equinox Audio Visuals — Phase 3: Signature Moments

**Date:** April 25, 2026  
**Agent:** Claude 4.6 Sonnet  
**Scope:** Migrate all 13 remaining case study pages to the `.v2` design system. Roll out the run-of-show pinned sidebar across the full portfolio. Confirm The Ledger (homepage) and cursor trail (homepage) are live.  
**Objective:** Complete the portfolio migration started in Phase 2. Every case study page now ships the Direction A canvas, editorial typography, 62ch narrative, and the run-of-show timecode column from Direction B.

---

## Overview

Phase 3 completes the design system rollout across the entire work portfolio. The body-class scope strategy introduced in Phase 2 (`class="v2"`) was applied to all 13 remaining `work-*.html` pages in priority order, driven by four criteria: current links from already-migrated v2 pages (brand break today), brand coherence with the homepage, named testimonial availability, and content readiness for the run-of-show sidebar.

**Source of truth:** `EQUINOX_AUDIT_AND_REIMAGINING.md`  
**Architecture decision held:** `.v2` body-class scope. `design-system-v2.css` linked only on migrated pages.  
**Critical facts held throughout:** Equinox founded 2023. Testimonials commented out per Phase 1 standing decision unless attributed. Doug Kunnath's personal career voice preserved in articles.

---

## Priority Order & Reasoning

| Priority | Page | Primary Reason |
|---|---|---|
| 1 | `work-vanish-screening.html` | Next-case link from pilot; homepage work preview card |
| 2 | `work-svcc-women-leadership.html` | Homepage work preview card; still hero; named testimonial |
| 3 | `work-hildene-volunteer.html` | Homepage hero image source; named testimonial |
| 4 | `work-bennington-museum.html` | Flagship institutional client; leads Bennington trilogy |
| 5 | `work-two-day-wedding.html` | Richest content; best run-of-show opportunity |
| 6 | `work-svcc-annual-meeting.html` | Named testimonial; corporate signal audience |
| 7 | `work-arlington.html` | Unique multi-day format; 3-year partnership |
| 8 | `work-northshire-gala.html` | Strong gala-buyer technical story |
| 9 | `work-hildene-wedding-2.html` | Stronger of two Hildene weddings |
| 10 | `work-bennington-summer.html` | Completes Bennington trilogy |
| 11 | `work-hildene.html` | Retires generic flythrough |
| 12 | `work-kimpton-taconic.html` | Multi-year partnership anchor |
| 13 | `work-crooked-ram.html` | Fastest migration; lowest visibility |

---

## Changes Applied to Every Page

For all 13 pages:

1. Added `class="v2"` to `<body>`
2. Added `<link href="design-system-v2.css?v=1" rel="stylesheet"/>` to `<head>`
3. Updated font loading: Fraunces + Inter Tight + JetBrains Mono (added alongside DM Serif + Inter for non-v2 component fallback)
4. Removed stale video preloads (`equinox-av-background-720p.mov` preload tags)
5. Added `<link rel="preload" as="image" fetchpriority="high">` for hero still
6. Replaced video hero (or messy inline-style still) with `.case-study-hero` v2 structure: case number in mono, venue/date mono eyebrow, display-serif one-sentence headline
7. Replaced Vision/Solution two-column layout with `.case-body__grid`: 62ch narrative prose + `.run-of-show` sticky sidebar with timecode rows and spec table
8. Rebuilt gallery as `.case-gallery` with three curated items (trimmed from as many as 12)
9. Updated testimonials: live named quotes → `.testimonial-editorial` v2 structure; anonymous/private → kept commented out per Phase 1 protocol
10. Replaced "← Back to All Projects" with `.case-nav` next-case strip
11. Replaced old dark footer with v2 footer (EQ letterpress bug, brass column headings, mono spec line)
12. Fixed `og:url` on pages that still had the homepage URL instead of the page-specific canonical URL

---

## Phase 1 Miss Corrected in This Phase

**`work-arlington.html`** — The testimonial attributed to "Festival Organizer" was live on the page. The Phase 1 ghost testimonial protocol (comment out any testimonial without a real named attribution) was not applied here. Corrected during Phase 3 migration: testimonial commented out with `<!-- TODO: supply real attribution to restore this testimonial -->`.

---

## Kill-List Residue Fixed During Migration

| Page | Term | Location | Action |
|---|---|---|---|
| `work-svcc-women-leadership.html` | "seamless" | Solution paragraph | Rewritten |
| `work-svcc-annual-meeting.html` | "seamless" | Solution paragraph | Rewritten |
| `work-two-day-wedding.html` | "seamless" × 2 | Solution paragraph | Rewritten |
| `work-hildene.html` | "magical" | Hero subtitle (on-page) | Rewritten in new narrative |
| `work-two-day-wedding.html` | "magical" | Hero subtitle | Replaced in new narrative |

**Accepted exceptions (held from Phase 1):**
- `work-hildene-volunteer.html`: "unforgettable" inside verbatim Hildene Staff quote — not edited
- `work-svcc-annual-meeting.html`: "crystal clear" inside verbatim SVCC quote — not edited

---

## Case Navigation Chain

All 14 case studies are now connected in a single loop via the `.case-nav` strip:

```
work-equinox-wedding.html (047)
  → work-vanish-screening.html (048)
  → work-svcc-women-leadership.html (045)
  → work-hildene-volunteer.html (046)
  → work-bennington-museum.html (014)
  → work-two-day-wedding.html (044)
  → work-svcc-annual-meeting.html (038)
  → work-arlington.html (019)
  → work-northshire-gala.html (028)
  → work-hildene-wedding-2.html (037)
  → work-bennington-summer.html (034)
  → work-hildene.html (042)
  → work-kimpton-taconic.html (040)
  → work-crooked-ram.html (043)
  → work.html (Back to Our Work)
```

---

## Testimonial Status After Phase 3

| Page | Status |
|---|---|
| `work-svcc-women-leadership.html` | **Live** — Southwestern Vermont Chamber of Commerce |
| `work-hildene-volunteer.html` | **Live** — Hildene Staff |
| `work-svcc-annual-meeting.html` | **Live** — Southwestern Vermont Chamber of Commerce |
| `work-arlington.html` | Commented out (Phase 3 correction) |
| All other 9 pages | Commented out (Phase 1 standing decision) |

---

## Owner Action Items

1. **10 commented-out testimonials** — unchanged from Phase 1. Supply a real first name, role, and optionally venue + date for each. The placeholder in each file reads: `<!-- TODO: supply real attribution to restore this testimonial -->`

   Affected: `work-bennington-museum.html`, `work-bennington-summer.html`, `work-crooked-ram.html`, `work-equinox-wedding.html`, `work-hildene-wedding-2.html`, `work-hildene.html`, `work-kimpton-taconic.html`, `work-northshire-gala.html`, `work-two-day-wedding.html`, `work-vanish-screening.html`, `work-arlington.html`

2. **Run-of-show timecodes** — All timecodes are reconstructed from event narratives and sidebars. If Doug has actual call sheets for any event, update the `run-of-show__time` cells accordingly.

3. **Case numbers** — Case numbers are editorial identifiers assigned for portfolio context. They are not database IDs. Doug may reassign or adjust at any time by editing the `case-study-hero__number` element on each page.

4. **`work-kimpton-taconic.html`** — Date is "Early 2025" (vague). When the specific date is known, update `run-of-show__spec-value` for the Date row.

5. **`work-arlington.html`** — "Festival Organizer" testimonial commented out. A real name from the Arlington Common organizers would unlock this high-quality quote for the most distinctive page in the portfolio.

---

## Files Changed

| File | Type | Summary |
|---|---|---|
| `work-vanish-screening.html` | Modified | Full v2 migration |
| `work-svcc-women-leadership.html` | Modified | Full v2 migration; live testimonial in v2 format |
| `work-hildene-volunteer.html` | Modified | Full v2 migration; live testimonial in v2 format |
| `work-bennington-museum.html` | Modified | Full v2 migration; generic flythrough retired |
| `work-two-day-wedding.html` | Modified | Full v2 migration; kill-list fixes |
| `work-svcc-annual-meeting.html` | Modified | Full v2 migration; inline hero styles replaced; live testimonial in v2 format |
| `work-arlington.html` | Modified | Full v2 migration; unnamed testimonial commented out |
| `work-northshire-gala.html` | Modified | Full v2 migration |
| `work-hildene-wedding-2.html` | Modified | Full v2 migration; generic flythrough retired |
| `work-bennington-summer.html` | Modified | Full v2 migration |
| `work-hildene.html` | Modified | Full v2 migration; generic flythrough retired; hero subtitle rewritten |
| `work-kimpton-taconic.html` | Modified | Full v2 migration; generic flythrough retired |
| `work-crooked-ram.html` | Modified | Full v2 migration |
| `markdowns/PHASE_3_SIGNATURE_MOMENTS_APR_2026.md` | **Created** | This file |

**13 case study pages migrated. 0 non-portfolio pages changed.**
