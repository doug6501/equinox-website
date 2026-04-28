# 19 — Services section “deep breath” spacing

**Date:** April 28, 2026  
**Scope:** `design-system-v2.css` — overrides under **`body.v2.services-detail`** only (Corporate, Weddings, Gala detail pages).

## Goal

Increase vertical separation between hero, content sections, capability grid, pricing block, and CTA so service detail pages read as **high-production / premium** rather than compressed. The homepage and **`services.html`** hub must stay on the default `.v2` spacing (no `services-detail` on `<body>`).

## What changed

| Token / area | Before | After |
|--------------|--------|--------|
| **Hero buffer** `.page-hero-v2` | `margin-bottom: 5rem` | **`10rem`** |
| **Section padding** `.content-section-v2` | `calc(var(--space-7) * 1.4)` top/bottom | **`10rem`** top/bottom |
| **CTA band** `.cta-section-v2` | same calc | **`10rem`** top/bottom |
| **Grid air** `.content-section-v2 .service-grid-v2` | `calc(var(--space-6) * 1.4)` margin-top | **`6rem`** |
| **Pricing gap** `.pricing-approach` | `calc(var(--space-4) * 1.4)` margin-top | **`8rem`** |

All rules remain prefixed with **`body.v2.services-detail`**, so **`services.html`** (`class="v2"` only), **`index.html`**, and other non-detail pages are unaffected.

## Files touched

- `design-system-v2.css` — service-detail vertical rhythm block (~lines 2546–2563).

## Quick verification

- Load `services-corporate.html`, `services-weddings.html`, or `services-galas.html`: larger hero-to-content gap, roomier section bands, clearer space above the service cards and above “How Pricing Works.”
- Load `services.html`: section padding and hero spacing should match **global** `.v2` rules, not the `10rem` detail values.
