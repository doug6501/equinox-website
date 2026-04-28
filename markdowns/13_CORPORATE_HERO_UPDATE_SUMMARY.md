# 13 — Corporate Service Hero Asset Correction

**Date:** April 28, 2026  
**Scope:** `services-corporate.html`, `design-system-v2.css`

## Problem

The corporate services page used a **full-bleed video** (`venue-flythrough-stage.mp4`) with a **conference-speaking** poster—reads as generic / off-brand for a dedicated corporate lane and did not match the request for a **static, business-technical** hero.

## Changes

### `services-corporate.html`

- Replaced the **`<video class="page-hero-v2__image">`** block with a **static `<img>`**:
  - **`src="assets/hero-poster-studio.jpg"`** (studio / technical plate; `parallax-tech.jpg` remains available as an alternate if you want a different mood).
  - **`class="page-hero-v2__image"`** unchanged so layout and positioning stay aligned with the global hero pattern.
  - **`alt=""`** — decorative backdrop behind headline copy (same pattern as other v2 heroes with empty alt).
  - **`width="1344"`** **`height="768"`** — intrinsic dimensions from the file for layout hinting.
- Added **`page-hero-v2--corporate-static`** on the `<section>` plus **`aria-label="Corporate services"`** for a clear landmark without implying misleading image alt text.

### `design-system-v2.css`

- Left the base **`.v2 .page-hero-v2__image`** rule unchanged (**`object-fit: cover`**, absolute fill, existing LUT/opacity treatment for other pages).
- Added **`.v2 .page-hero-v2--corporate-static .page-hero-v2__image`** so this hero only:
  - **`object-fit: cover`** (repeated for clarity / override safety).
  - **`filter: brightness(0.4)`** per spec (replaces default **`var(--lut-filter)`** on this modifier).
  - **`opacity: 1`** so the plate reads at full strength after darkening (avoids double-dimming with the old `0.55` opacity).

## Headline copy

The on-page title remains **“Corporate Events and Conferences”** (not “Event Production for Business”); contrast is improved for whichever string you keep.

## Cache bust

- **`services-corporate.html`** stylesheet link updated to **`design-system-v2.css?v=2`** so the new hero modifier CSS is not served stale.
