# Atmospheric article hero + mid-page image revert — April 2026

## Summary

Mid-page **`.breakout-right`** and **`.media-break.breakout-full`** images on all **13** `article-*.html` files again use the **same asset URL** as **`.page-hero-v2__image`** (revert of the earlier variation sweep). **Related reading** thumbnails were **not** reverted; they still use each **destination** article’s hero art.

Editorial heroes (`.page-hero-v2.page-hero-v2--editorial`) now use a **dark, graded plate** on the photo plus a **left-heavy linear scrim** so the **Quiet Room** headline stays legible. In-article repeats of the same file render **without** that treatment so the photo reads at full strength later in the scroll.

## HTML (`article-*.html`)

| Change | Detail |
|--------|--------|
| Mid-page images | `.breakout-right` `<img>` and `.media-break` `<img>` `src` restored to match each page’s hero `src`. |
| Hero parallax hook | Hero `<img class="page-hero-v2__image">` now includes **`parallax-element`** and **`data-speed="0.06"`** so existing `script.js` `initParallax()` applies a light scroll-based `translateY` (with `transition: transform 0.1s ease-out` from CSS). |

## CSS (`design-system-v2.css`)

### Editorial hero only (`.page-hero-v2--editorial`)

| Layer | Behavior |
|-------|-----------|
| **`.page-hero-v2__image-wrap`** | `isolation: isolate` for a clean stacking context with the scrim. |
| **`::after` on wrap** (and optional **`.page-hero-v2__image-container::after`**) | `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)` over the image. |
| **`.page-hero-v2__image`** | `filter: brightness(0.4) grayscale(0.2);`, `opacity: 1`, **`object-fit: cover`**, **`transition: transform 0.1s ease-out`**, `will-change: transform`. Replaces the previous LUT + `opacity: 0.55` stack on this variant. |
| **`.page-hero-v2__content`** | `z-index: 4`; **`text-align: left`** so copy rides the dark side of the scrim. |
| **`.page-hero-v2__headline` / `__title`** | `z-index: 5`, **`color` / `-webkit-text-fill-color: var(--bone)`**, subtle **`text-shadow`**, **`margin-left: 0; margin-right: auto; text-align: left`**. |
| **`.page-hero-v2__eyebrow`** | `z-index: 5` so it stacks above the scrim with the title. |
| **`prefers-reduced-motion: reduce`** | Disables the hero image motion `transition` / `will-change` (scroll-driven transform from JS is unchanged). |

### In-article imagery (`.article-body`)

| Selector | Behavior |
|----------|-----------|
| **`.article-body img`**, **`.breakout-right` / `.breakout-wide` / `.media-break` / `.breakout-full img`** (inside `.article-layout .article-body`) | **`filter: brightness(1) grayscale(0)`** so mid-page instances do **not** pick up the hero’s darkening. (Previous LUT on these breakouts was removed in favor of neutral, full-contrast presentation per spec.) |

Non-editorial `.page-hero-v2` blocks (e.g. services, about) are **unchanged** by this pass.

## Files touched

- `design-system-v2.css` — editorial hero atmosphere + body image filter reset.  
- All **13** `article-*.html` — hero `parallax-element`, mid-page `src` revert.

## QA

- [ ] Open any article: hero should read **dark and legible**; first wide/breakout repeat of the same file should look **bright and detailed**.  
- [ ] Scroll: hero image should show a **slight** parallax drift (unless reduced-motion preference).  
- [ ] Related cards: still show **linked** article heroes, not the current page’s art.
