# Signal Polish — April 2026

Summary of the final UI pass for compass rails, legibility plates, mobile menu backdrop, and rail visibility on editorial articles.

## 1. Rail aperture (`design-system-v2.css`)

- **`.compass-rail`**: Horizontal padding remains **`3rem`** so PREV/NEXT sit nearer the viewport edges; **`position: sticky`** with **`top: 220px`** so rails clear the fixed header with predictable whitespace.
- **`.compass-rail__link`**: **`font-size: 1.1rem`**, **`font-weight: 600`** (unchanged from prior calibration; retained per spec).
- **Brass hairline** (`.compass-rail__link::before`): Vertical segment height set to a fixed **`80px`** (was 60px).

## 2. Signal plate (legibility backing)

- **`--bone-rgb`** (`244, 239, 230`) added beside the LUT `:root` block for **`rgba(var(--bone-rgb), 0.85)`** plates.
- Default **`.compass-rail__plate`**: Transparent, no blur — keeps the hero and top of page visually quiet.
- **Active zone** (desktop **`≥1200px`**, when **`.compass-rail.is-visible`**): **`padding: 1rem`**, **`border-radius: 2px`**, **`background: rgba(var(--bone-rgb), 0.85)`**, **`backdrop-filter: blur(10px)`** (with `-webkit-` prefix).
- **`prefers-reduced-motion`**: Plate transition suppressed for accessibility.

## 3. Mobile menu “gray box” (`design-system-v2.css`)

- Legacy **`body.nav-open::`** backdrop in `stable-header.css` only covered **25%** of the width, which read as a slab beside the drawer on **`.v2`** pages.
- **Override for `body.v2.nav-open::before`**: Full viewport (**`inset: 0`**, **`width`/`height: 100%`**, **`min-height: 100dvh`**), **`background: rgba(0, 0, 0, 0.2)`**, **`backdrop-filter: blur(5px)`**, preserving **`z-index: 9998`** so the panel and chrome stay above. Reads as a soft “distance” over the page rather than a gray strip.

## 4. Visibility logic (`script.js`)

- **`initArticleCompassRailReveal`**: On pages with **`.page-hero-v2--editorial`**, rails receive **`.is-visible`** only when that hero **has scrolled out** of the intersecting viewport (with **`rootMargin: -72px 0 0 0`** for header clearance). While the hero is on screen, rails stay hidden so the hero stays visually uninterrupted.
- **Fallback**: If there is no editorial hero, behavior falls back to observing **`article.article-body`** as before.
- **CSS** continues to hide rails below **`1200px`** (`display: none`); the bottom **article-compass-bar** remains the mobile affordance.

## 5. Article pages

All **13** `article-*.html` files reference **`design-system-v2.css?v=4`** for cache busting. Markup already included **`compass-rail__plate`** wrappers; no structural HTML changes were required.

## Files touched

| File | Role |
|------|------|
| `design-system-v2.css` | Rails, plate, mobile backdrop override, `--bone-rgb` |
| `script.js` | Hero-based rail visibility + fallback |
| `article-*.html` (×13) | Stylesheet query bump |
