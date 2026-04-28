# 20 — Services section “max breath” spacing expansion

**Date:** April 28, 2026  
**Scope:** `design-system-v2.css` — updates under **`body.v2.services-detail`** only (Corporate, Weddings, Gala detail pages).

## Goal

Push service detail vertical rhythm from “deep breath” to **“max breath”**: more padding between bands, stronger headroom above in-prose subheads, a wider hero-to-body gap, open exits before new headings, and a **10rem** offset between the narrative column and the capability grid or pricing aside. The homepage and **`services.html`** hub stay on default `.v2` spacing (no `services-detail` on `<body>`).

## What changed

| Area | Value / behavior |
|------|------------------|
| **`.content-section-v2`** | `padding-top` / `padding-bottom`: **`15rem`** (was `10rem`) |
| **`.cta-section-v2`** | Same **`15rem`** vertical padding |
| **`.page-hero-v2`** | `margin-bottom`: **`12rem`** (was `10rem`) |
| **Prose `h2` / `h3`** | `margin-top`: **`8rem`** for in-flow headings; **direct** `> h2:first-child` and `> h3:first-child` use **`margin-top: 0`** so the first head doesn’t sit under extra air |
| **Exit before subheads** | `p:has(+ h2)` and `p:has(+ h3)` in `__prose`: **`margin-bottom: 4rem`** (overrides the `1.25rem` default for those lead-out paragraphs) |
| **Narrative → service grid** | **`.content-section-v2 .service-grid-v2`** `margin-top`: **`10rem`** (was `6rem`) |
| **Narrative column → pricing aside** | **`.pricing-approach`**: **`gap: 10rem`** between `pricing-approach__prose` and `pricing-approach__aside` (row/column per grid); `margin-top: 8rem` retained for separation from content above |

## Implementation notes

- **`:has()`** is used for “paragraph immediately before `h2`/`h3`”; widely supported in current browsers. Last paragraph of the whole prose block remains governed by **`p:last-child`** when it is truly the final node.
- **Pricing layout:** `gap` affects both axes on the two-column grid; on narrow breakpoints where the pricing grid stacks, vertical separation between prose and aside benefits from the same token.

## Files touched

- `design-system-v2.css` — `body.v2.services-detail` rhythm + prose heading/paragraph rules.
- `markdowns/20_SERVICES_MAX_BREATH_SUMMARY.md` — this file.

## Verification

- Open a service detail page: sections and CTA should feel **airier**; first `h2` in the story should still align to the top of the prose; later `h2`/`h3` should have **clear headroom**; body copy before a new subhead should **open up** before the heading.
- Open **`services.html`**: padding and hero gap should **not** jump to `15rem` / `12rem` (no `services-detail`).
