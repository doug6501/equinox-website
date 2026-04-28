# 14 — Pricing Section Narrative Realignment

**Date:** April 28, 2026  
**Scope:** `design-system-v2.css` only

## Context

The v2 global rule **`.v2 main p, .v2 main li { text-align: center; }`** was centering all main-body copy, including the **“How Pricing Works”** band. That read as promotional rather than **technical producer** tone.

## Markup note

There is **no** `.pricing-section` or `.pricing-section__content` in this repo. The pricing band uses:

- **`.pricing-approach`** — two-column grid (prose + aside)
- **`.pricing-approach__prose`** — narrative column (equivalent to a “content” rail)
- **`.pricing-approach__aside`** / **`.pricing-approach__card`** / **`.pricing-approach__list`** — “What shapes the quote” sidebar

Pages affected: **`services.html`**, **`services-corporate.html`**, **`services-weddings.html`**, **`services-galas.html`**.

## CSS changes

Added rules **after** **`.v2 .pricing-approach`** (section 24):

| Rule | Purpose |
|------|--------|
| **`.v2 .content-section-v2__inner:has(.pricing-approach) > h2`** | **Left-align** the section **h2** (“How Pricing Works.”) without touching other linen sections (e.g. **about** / **process**) that do not contain **`.pricing-approach`**. |
| **`.v2 .pricing-approach__prose`** | **`text-align: left`**, **`margin-left: 0`**, **`margin-right: auto`** — anchors the narrative column to the **left** (per “left rail” intent; layout remains the existing grid, not a literal 12-column split). |
| **`.v2 .pricing-approach__prose p, .v2 .pricing-approach__prose ul`** | **`text-align: left`** — beats **`main p` / `main li`** centering for prose **`p`** and any prose **`ul`**. |
| **`.v2 .pricing-approach__aside .pricing-approach__card`** and **`…__list li`** | **`text-align: left`** — list copy in the card is **left-aligned inside the right column** so bullets stay readable; the **grid** still places the aside on the **right**. |

Existing **`.pricing-approach__prose p`** typography (**`margin: 0 0 1.1rem`**, **`max-width: 58ch`**, etc.) is unchanged; horizontal margins were already **0** via that shorthand.

## Dependency

**`:has()`** is used only to scope the **h2** so other linen blocks are unchanged. Supported in current evergreen browsers.
