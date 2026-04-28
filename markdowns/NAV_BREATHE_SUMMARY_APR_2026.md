# Split compass rails — spacing, weight, scroll reveal (April 2026)

## Goal

Reduce visual tension between the **fixed site header** and the **prev/next split rails** on long-form articles: more **breathing room** (sticky offset + horizontal padding), **stronger nav affordance** (type size + weight), a **shorter brass tick** instead of a full-viewport hairline, and **rails that only appear** once the reader has scrolled into **`article.article-body`** (desktop only).

## DOM (verified)

On all **13** `article-*.html` files:

- **Hero** lives in **`section.page-hero-v2`** (outside `section.article-layout`).
- **`section.article-layout`** follows the hero; **`div.article-layout__inner`** wraps **`nav.compass-rail--prev`**, margin column, field notes, **`article.article-body`**, and **`nav.compass-rail--next`** as **siblings** in one grid row.

No structural reorder was required.

## HTML changes (`article-*.html`)

| Change | Purpose |
|--------|---------|
| **`data-compass-rails="editorial"`** on **`section.article-layout`** | Explicit hook for `initArticleCompassRailReveal()` so the scroll observer only runs on editorial article pages. |

## CSS (`design-system-v2.css`)

| Rule | Update |
|------|--------|
| **`.v2 .compass-rail`** | `top: **180px**` (was `150px`); `padding: **0 2rem**` (was `0`) to widen gutters from the prose column. |
| **`.v2 .compass-rail__link`** | `font-size: **1rem**` (was `0.75rem`); `font-weight: **600**` (was `500`). |
| **`.v2 .compass-rail__link::before`** | `height: **100px**` (was `100vh`) — short vertical **indicator** tick, not a line into the header. |
| **Desktop ≥1200px** | **`body.v2:not(.article-compass-rails-visible)`** → rails **`opacity: 0`**, **`visibility: hidden`**, **`pointer-events: none`** with a short **`transition`**. **`body.v2.article-compass-rails-visible`** restores full interaction. |
| **`prefers-reduced-motion`** | Under **`(min-width: 1200px)`**, rail **opacity `transition: none`**. |

## JavaScript (`script.js`)

| Function | Behavior |
|----------|----------|
| **`initArticleCompassRailReveal()`** | If **`body.v2`** and **`section.article-layout[data-compass-rails] article.article-body`** exist: **`IntersectionObserver`** on **`article-body`** with **`rootMargin: '-88px 0 0 0'`** (clears fixed header band). When intersecting at **≥1200px**, adds **`article-compass-rails-visible`** on **`body`**; when not, removes it. **`matchMedia('(min-width: 1200px)')`** sync removes the class when switching to mobile. **No `IntersectionObserver`** → class added immediately (graceful degradation). |

Invoked next to **`initParallax()`** on DOM ready.

## Mobile (`< 1200px`)

Unchanged: **`.compass-rail { display: none !important; }`** in the existing **`max-width: 1199px`** block; only **`.article-compass-bar`** bottom navigation is active.

## Files touched

- `design-system-v2.css` — rail layout, link typography, hairline length, desktop reveal states.  
- `script.js` — `initArticleCompassRailReveal`.  
- All **13** `article-*.html` — `data-compass-rails="editorial"` on the article layout section.

## QA

- [ ] **≥1200px:** At top of page (hero only), side rails **absent**; scroll until body enters below header → rails **fade in**.  
- [ ] **≥1200px:** Sticky rails sit **lower** than before; labels read as **buttons**; brass tick is a **short segment**.  
- [ ] **&lt;1200px:** Side rails **hidden**; bottom bar still works.  
- [ ] **Resize** wide ↔ narrow: no stuck invisible state on desktop after widening.
