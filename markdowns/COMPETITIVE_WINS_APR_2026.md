# Competitive Wins — April 2026 Session

## Context

Following a competitive analysis and persona-walk of the site, Doug approved implementing all the recommendations but requested no "Starting at" pricing anywhere. Pricing is unique per event and requires consultation.

Suggested implementation order was **D → A → C → skip B**. This session completed D, A, and the pricing reframe (a replacement for B), and prepared a handoff brief for C.

## What Shipped This Session

### 1. Homepage Trust Strip (Option D)

**File**: `index.html` (inserted between logo bar and story-beat section)

A horizontal proof-points band with 4 icon-led items:

- **Fully insured** — General liability on every event
- **24-hour response** — Faster when your event is close
- **Backup gear, always** — Redundant audio on every show
- **14 events produced** — Zero show-stoppers since 2023

Styling lives in `design-system-v2.css` section 26 (`.trust-strip`, `.trust-strip__item`, `.trust-strip__icon`, `.trust-strip__text`, `.trust-strip__value`, `.trust-strip__label`, `.trust-strip__divider`). Collapses to 2-col at 900px, 1-col at 540px. Icons use `currentColor` with amber background chip for visual continuity with the rest of the v2 system.

**Why this works**: These four facts answer the unspoken questions every planner asks before a first call: Are you real? Are you reachable? Are you reliable? Have you done this? It's scannable in under five seconds.

### 2. /process.html (Option A)

**New file**: `process.html`

A full-bleed 6-step timeline from "You reach out" to "Show day and load-out," each with:

- Step number and rough timing (e.g., "Day 1 · ~15 min")
- A title and a paragraph of substantive copy
- A highlighted "detail" block with specifics (what we do next, what we'll ask about, what's included)

Followed by a 6-question FAQ addressing the anxieties that derail bookings:

1. How far in advance should I book?
2. What happens if equipment fails during the event?
3. Do you travel outside Vermont?
4. Can we see a Certificate of Insurance?
5. Can you work alongside our venue's in-house AV?
6. Do you offer full production, or can we rent just the equipment?

Timeline styling lives in `design-system-v2.css` section 25. Uses a vertical ember-accent rail with circular nodes, and an amber-tinted "detail" block for the "what this actually means for you" callout on each step.

**Nav updates**: `Process` link added to `_header_STABLE.html` and all 48 `.html` files' header and footer navs. A duplicate-insertion bug in the sed batch was cleaned up with a short Python dedupe pass.

### 3. Pricing Reframe (replaces Option B)

**File**: `services.html` (new "How Pricing Works" section before the CTA)

Rather than publish pricing ranges, we now address the objection directly with a two-column section:

- **Left column**: Four paragraphs explaining *why* every event is priced from scratch, followed by the promise of an itemized, transparent proposal with no hidden fees.
- **Right column**: A sticky "What shapes the quote" card listing six factors (guest count, venue size, program length, audio/lighting/video needs, crew hours, travel, backup and redundancy).

Styling lives in `design-system-v2.css` section 24 (`.pricing-approach`, `.pricing-approach__prose`, `.pricing-approach__card`, `.pricing-approach__list`). Collapses to single-column at 820px.

**Why this works**: Planners who bounce from a no-pricing page usually bounce because they feel stonewalled. This page does the opposite — it *talks* to them about pricing, explains the logic, and tells them exactly what to expect at the discovery call. It turns the absence of numbers into a positioning advantage: *we price honestly, not off a menu.*

**Still to do**: Apply the same pricing-approach section to `services-corporate.html`, `services-weddings.html`, and `services-galas.html`. The copy should be lightly tailored — for weddings the examples are different than for corporate, etc. See `NEXT_CHAT_PRICING_ROLLOUT.md` for that task.

## What Didn't Ship (and Why)

- **Option B as originally scoped** — skipped at Doug's direction. Replaced by the pricing-approach section above.
- **Option C (gala pacing case study)** — prepped as a handoff brief (`NEXT_CHAT_GALA_CASE_STUDY.md`). Needs Doug to braindump the actual evening's facts before a new chat can write it.

## Status Summary

- [x] Option D — Trust Strip
- [x] Option A — Process page
- [x] Option B replacement — Pricing approach section (services.html done; 3 sub-pages pending)
- [ ] Option C — Gala pacing case study (needs Doug's content)

## Files Changed This Session

- `index.html` — trust strip inserted
- `process.html` — new file
- `services.html` — pricing approach section inserted
- `_header_STABLE.html` — Process link added
- All 48 `*.html` files — Process link batch-added to header and footer nav
- `design-system-v2.css` — new sections 24 (pricing approach), 25 (process timeline and FAQ), 26 (trust strip)
- `markdowns/NEXT_CHAT_GALA_CASE_STUDY.md` — new handoff doc
- `markdowns/NEXT_CHAT_PRICING_ROLLOUT.md` — new handoff doc
- `markdowns/COMPETITIVE_WINS_APR_2026.md` — this file
