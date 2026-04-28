# 12 — Services Section Vertical Breathing

**Date:** April 28, 2026  
**Scope:** `design-system-v2.css`, `services-corporate.html`, `services-weddings.html`, `services-galas.html`

## Goal

Reduce the “compressed” feel on the three **service detail** pages by increasing vertical space between major layout bands (hero → body → pricing band → CTA), while keeping **tighter typographic rhythm** from subheads to the next paragraph and inside service cards.

## Markup

- Set **`body`** to **`class="v2 services-detail"`** on:
  - `services-corporate.html`
  - `services-weddings.html`
  - `services-galas.html`
- Removed the inline **`style="margin-top:var(--space-6);"`** on **`.service-grid-v2`** so spacing is controlled in CSS (and can scale with the same +40% logic).

*Note:* `services-intro` and `pricing-section` are not used in this codebase; rhythm is driven by **`.page-hero-v2`**, **`.content-section-v2`**, **`.pricing-approach`**, and **`.cta-section-v2`**.

## CSS (`design-system-v2.css`)

All rules are scoped with **`body.v2.services-detail`** so hub **`services.html`**, articles, geo pages, and other `.content-section-v2` users stay unchanged.

| Target | Change |
|--------|--------|
| **`.page-hero-v2`** | **`margin-bottom: 5rem`** — clear separation before the first **`.content-section-v2`**. |
| **`.content-section-v2`** | Vertical padding **`calc(var(--space-7) * 1.4)`** (≈ **+40%** vs base `160px` token). |
| **`.cta-section-v2`** | Same **`calc(var(--space-7) * 1.4)`** top/bottom padding. |
| **`.content-section-v2 .service-grid-v2`** | **`margin-top: calc(var(--space-6) * 1.4)`** — more air between long-form prose and the capability grid (replaces former `space-6` inline). |
| **`.pricing-approach`** | **`margin-top: calc(var(--space-4) * 1.4)`** — slightly more space under the linen section’s **h2** before the pricing grid. |
| **`.content-section-v2__prose h3`** | **`margin-bottom: var(--space-2)`** — tighter **H3 → paragraph** than the global **h3** bottom margin (`var(--space-3)`). |
| **`.service-card-v2__title`** | **`margin-bottom: var(--space-1)`** — tighter title → body copy inside each card. |

## Result

- **Major blocks:** ~40% more vertical padding on section shells plus a **5rem** gap under the services hero.  
- **Internal rack:** Slightly tighter **h3 → p** and **card title → card body** so long copy does not feel looser everywhere—only between **bands**.
