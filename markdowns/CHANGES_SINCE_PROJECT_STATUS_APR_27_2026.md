# Equinox Website — Change Summary (After `PROJECT_STATUS_APR_2026.md`)

**Baseline:** [PROJECT_STATUS_APR_2026.md](PROJECT_STATUS_APR_2026.md) (dated April 26, 2026)  
**This document covers:** work completed in the **April 27, 2026** session and related follow-ups — case study fact-checks, global typography, and `work.html` UI/logos.  
**Purpose:** Handoff for review, partners, or tools (e.g. Gemini) without re-reading chat history.

---

## 1. Global design system

**File:** `design-system-v2.css`

- **Case study hero headlines** (`.v2 .case-study-hero__headline`): adjusted so multi-line titles read as headings, not a single paragraph block — e.g. `line-height: 1.18` (from ~1.05), slightly relaxed negative letter-spacing, `word-spacing`, and `max-width` tuned for balance.

---

## 2. Case study pages — fact-check and copy updates (14 files)

Each `work-*.html` was aligned with your answers (dates, services, run of show, positive framing, no “complete record” claims). **Files touched:** all `work-*.html` case studies (14 total), plus `work.html` intro/meta (see §4).

| Page | Summary of changes |
|------|----------------------|
| `work-hildene.html` | Lighting-only scope; hero → `hildene-wedding-03.jpg`; services → perimeter uplighting / dance floor / stage wash; run-of-show labels → lighting, not audio. |
| `work-hildene-wedding-2.html` | Same lighting-only treatment; ceremony noted as at Hildene; band brought own sound; run-of-show and specs updated. |
| `work-hildene-volunteer.html` | Reframed as **daytime** program; **4** honorees; full PA (4 speakers), podium mic, antenna distribution, presentation + video; Pangaea **North Bennington**; load-in **evening** before; run-of-show times adjusted. |
| `work-svcc-women-leadership.html` | “Sold out” → **200+** attendance; three named awardees + Rita Dee tribute; no clip-on per honoree — mic at front; load-in day before; PAVE expanded; 2026 date noted; Bennington Banner / Equinox mention as applicable. |
| `work-bennington-museum.html` | **Grandma Moses** references removed; **silent + live** auction; morning load-in (~9:00); wireless + video switcher + uplighting (incl. entry pillars) + venue integration; hero video → `venue-tv-flythrough.mp4`; gallery **six** images `bennington-museum-gala-2024-01` … `06`. |
| `work-bennington-summer.html` | Full event title; **June 1, 2024**; **one** 75" display; Farm to Fire Hudson BBQ; **10:00** load-in; `bennington-museum-summer-celebration-2024.jpg` in gallery; band/services narrative tightened. |
| `work-vanish-screening.html` | **June 22, 2024**; director **Jim Westphalen**; **stereo** (not surround); services row updated. |
| `work-svcc-annual-meeting.html` | **115+** attendees; **four** named awards + Heritage Family Credit presenting; musician-specific audio line removed; run-of-show times shifted; narrative matches chamber program. |
| `work-kimpton-taconic.html` | **Lighting only**; band/DJ/sound/pin-spot language removed; uplighting through ceremony → reception; specs and run-of-show updated. |
| `work-arlington.html` | **Battenkill Fly Fishing & Arts Festival** naming; **four-day** Thu–Sun run of show; Watkins House, Performance Center, IF4, Tom Rosenbauer, etc. |
| `work-northshire-gala.html` | **Celebration Barn, The Inn at Manchester**; **Eric Nathan** auctioneer; **3× 75"** displays; GSK sponsor; **10:00** load-in; date note including **Sept 16** where relevant. |
| `work-crooked-ram.html` | **Manchester, VT**; **no** “ceremony audio” in services; outcome phrased positively (no “zero mic cuts” framing). |
| `work-equinox-wedding.html` | Rain **de-emphasized**; first dance not pinned to a fake timestamp; outcome positive; weather row removed. |
| `work-two-day-wedding.html` | **Hill Farm** catering rehearsal; **Pangaea** North Bennington for reception; day 1 load-in **10:00**; Hildene = lighting only; Hill Farm = string lights + wireless + indoor sound for toasts. |

**Cross-cutting rules applied**

- **Positive outcomes** (avoid “zero failures” / fear-based phrasing where asked).
- **“Selected work”** messaging on the portfolio page — not a complete catalog of every event.

---

## 3. `work.html` — portfolio page

- **Copy:** Intro and hero meta updated so the list is **selected work** / **samples**, not “every event” or a fixed “14 events” count.
- **Client logo strip** (`work-clients`):
  - **Bennington Museum:** `logo-bennington.svg` → **`logo-bennington.png`** (SVG was a text-only placeholder).
  - **Kimpton Taconic:** `logo-kimpton.svg` → **`kimpton-taconic.png`** (same reason).
  - **Arlington:** uses **`logo-arlington.webp`** (from earlier in project).
- **List thumbnails:** “Option A” treatment then enlarged:
  - **Left-edge fade** into the page background using CSS `mask-image` (linear gradient); stronger fade on default, slightly tighter on hover.
  - **Size:** `160×84` → **`320×168`** (double) for a stronger visual.
  - **Grid column** for the image widened to match (`320px`).
  - **Responsive:** thumbnails hidden below **`900px`** width so text stays readable on tablets/small screens.

(Inline styles for `.case-row` and `.case-row__thumb` live in `work.html`’s `<style>` block.)

---

## 4. Other references (from same broader session, if not in `PROJECT_STATUS`)

These were completed around the same initiative; include if you need a full “v2 + content” picture:

- **`insights.html`:** Video poster + removal of default `src` to stop a flash of the wrong image before the random pool loads.
- **`index.html` / `process.html` / services pricing blocks / trust strip** — already summarized in `PROJECT_STATUS_APR_2026.md` (April 25–26).

---

## 5. Remaining (unchanged from project status)

- Gala pacing case study page — see `markdowns/NEXT_CHAT_GALA_CASE_STUDY.md` (needs your event facts).
- ~~Optional: delete `index-v2` prototypes~~ **Done** — removed in repo hygiene sweep.
- Testimonials, footer “last show” line, licensing, photo production, LUT — still **owner** items per `PROJECT_STATUS_APR_2026.md`.

---

## 6. Key paths quick reference

| Path | What changed (this span) |
|------|---------------------------|
| `design-system-v2.css` | Case study hero headline typography |
| `work.html` | Intro/meta, logo `src`s, thumbnail CSS (mask, size, breakpoint) |
| `work-*.html` (14) | Factual and narrative updates per event |

---

*End of summary. For the pre–April 27 baseline, use `markdowns/PROJECT_STATUS_APR_2026.md`.*
