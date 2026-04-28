# Equinox Audio Visuals — Full Project Status
**As of:** April 26, 2026  
**Prepared by:** Claude Sonnet 4.6 (agent session)

---

## ✅ DONE — All 48 Pages on V2

Every HTML page in the project carries `class="... v2"` and loads `design-system-v2.css`. Migration complete.

---

## ✅ DONE — Phase 0 through Phase 6 (full migration)

| Phase | Status |
|---|---|
| 0 — Hygiene | ✅ |
| 1 — Voice & Proof | ✅ |
| 2 — Design System v2 | ✅ |
| 3 — Signature Moments | ✅ |
| 4 — IA & Conversion | ✅ |
| 5 — Polish & Kill | ✅ |
| 6 — Remaining Page Migrations (all 32) | ✅ |

---

## ✅ DONE — Post-Phase 6 Improvements (April 25–26, 2026)

All of these were implemented and confirmed in this session or the previous one:

- Homepage video hero (random pool, no repeats across pages)
- Sticky header (position: fixed + body padding-top)
- Scroll-reveal animations (IntersectionObserver on index.html)
- Cursor trail removed
- Contact page v2 restyled (planner form, hero image, promise strip, sidebar)
- Thank-you page headline fix (line-height, clamp sizing)
- Work page intro rewrite ("most useful page" removed)
- Client logo strip improvements (brightness(0), equal grid)
- Hill Farm logo downloaded and added to logo strip
- Equinox Resort placeholder SVG replaced with real official logo
- About page CTA rewrite
- "Why Start Here?" → "What Happens Next" sidebar
- Process nav link added to all 48 pages (header + footer)
- Footer nav indentation normalized across all 48 pages
- Case study hero layout fixed (case number pinned to top)
- Prev/Next event buttons restyled for v2 (dark glass, bottom-aligned)
- Ampersands replaced with "and" sitewide
- Geo page pill contrast fixed
- HubSpot form redirects to thank-you.html
- Lighthouse audit: Accessibility score 93 → 100
- 4 factual corrections (Equinox wedding, Crooked Ram, SVCC, two-day)
- Article prev/next navigation
- Related reading thumbnail images
- Homepage trust strip (Fully insured · 24-hr response · Backup gear · 0 show-stoppers)
- /process.html (new 6-step timeline page with FAQ)
- "How Pricing Works" section on services.html + 3 sub-pages (no "Starting at" language)
- Process teaser band on homepage
- About page process cards refreshed + link to /process.html
- Console.log sweep (0 remaining in script.js)
- PWA files gone (manifest.json + service-worker.js don't exist)
- `index-v2.html` and `index-v2-b.html` removed (prototype pages; see repo hygiene sweep)

---

## 🔲 REMAINING — Agent Can Do (no Doug input needed)

| Item | Notes |
|---|---|
| Gala pacing case study (`work-bennington-gala-case-study.html`) | Template + brief ready in `markdowns/NEXT_CHAT_GALA_CASE_STUDY.md`. Needs Doug's event facts to write. |

---

## 🧑‍💼 OWNER ACTION ITEMS (Require Doug — Cannot Be Done by Agent)

| # | Item | Impact |
|---|---|---|
| 1 | **12 commented-out testimonials** | Each has `<!-- TODO: supply real attribution -->`. Supply: first name + role + venue + date. High trust impact. |
| 2 | **Footer spec line** | `v2.0 · Last show: Bennington Museum · Apr 19, 2026` is hardcoded on all 48 pages. Update after each new show. |
| 3 | **Typography licensing** | Current: Fraunces (free Google Font). Upgrade path: GT Sectra + Söhne (~$900–$2,400 web license). Optional but elevates brand significantly. |
| 4 | **Gala case study content** | Open `markdowns/NEXT_CHAT_GALA_CASE_STUDY.md` and paste your event facts — the evening's timeline, technical choices, outcome. A new chat can write the full narrative page from your notes. |
| 5 | **Photography production** | Each case study ideally has one 16:9 hero + 3 supporting stills. Quarterly shoot plan. |
| 6 | **Real color LUT** | Current `--lut-filter` is a CSS approximation. A Lightroom `.cube` file applied to the asset library would be more consistent. |

---

## 🗑️ SCRATCH — Items From Earlier Plans That Are Now Irrelevant or Resolved

| Item | Why Scratched |
|---|---|
| PWA retirement | manifest.json + service-worker.js already gone |
| `_footer.html` retirement | Already dead code; `loadFooter()` skips it when inline footer exists |
| Old-style footer labels | Resolved by v2 migration of all 48 pages |
| `console.log` removal | Already done (0 remaining) |
| Phase 4 run-of-show sticky | Already implemented in design-system-v2.css |
| Contact promise line | Implemented (planner-promise-strip on contact.html) |
| "Starting at" pricing | User explicitly ruled this out; replaced with "How Pricing Works" section |

---

## Key File Locations

| File | Purpose |
|---|---|
| `stable-header.css` | Primary stylesheet for all pages |
| `design-system-v2.css` | V2 token override layer — sections 1–29 |
| `script.js` | All JS: header/nav, case study prev/next, random videos, scroll-reveal |
| `process.html` | New page: 6-step process + FAQ |
| `markdowns/NEXT_CHAT_GALA_CASE_STUDY.md` | Brief for gala case study — needs Doug's facts |
| `markdowns/NEXT_CHAT_PRICING_ROLLOUT.md` | ✅ Already done in this session |
