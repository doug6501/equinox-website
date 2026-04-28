# 21 — Services top gap reduction

**Date:** April 28, 2026  
**Scope:** `design-system-v2.css` — `body.v2.services-detail` only (Corporate, Weddings, Gala detail pages).

## Problem

After “max breath” spacing, the **stacked** hero margin and first section `padding-top` made the **first line of body copy** sit too far below the hero (~27rem perceived total), weakening the first impression.

## What changed

| Rule | Change |
|------|--------|
| **`body.v2.services-detail .page-hero-v2`** | `margin-bottom`: **`12rem` → `2rem`** (“hero exit” tightened) |
| **`body.v2.services-detail .page-hero-v2 + .content-section-v2`** | **`padding-top: 6rem`** — only the **first** `.content-section-v2` that immediately follows the hero |

All other **`body.v2.services-detail .content-section-v2`** blocks keep **`padding-top` / `padding-bottom: 15rem`** and **`padding-bottom`** on the first section remains **`15rem`** unless overridden elsewhere.

## Behavior

- **Hero → first narrative block:** Short gap (`2rem` + `6rem` top padding on that section ≈ **8rem** between hero bottom and section content box), so the headline/body feels **connected**.
- **Later sections:** Unchanged **15rem** vertical padding — internal “max breath” between sections stays airy.

## Files touched

- `design-system-v2.css` — hero margin + adjacent-sibling first-section rule.
- `markdowns/21_SERVICES_TOP_GAP_REDUCTION_SUMMARY.md` — this file.

## Verification

- Load `services-galas.html` (or corporate/weddings): first copy after the hero should sit **noticeably higher**; scroll to the second content section — **15rem** rhythm should still read as spacious.
- **`services.html`** (`body` without `services-detail`): **unchanged**.
