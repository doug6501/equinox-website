# Lightbox repair — summary

**Date:** April 28, 2026  
**Scope:** Case study gallery lightbox (`#eq-lightbox` / `.eq-lightbox`), legacy `.gallery-grid` lightbox (`.lightbox`), stacking, and scroll lock.

## Modal placement (stacking context)

- **Case lightbox (`initEqCaseLightbox`)** builds `#eq-lightbox` and attaches it with **`document.body.appendChild(lb)`** so it is always a **direct child of `<body>`**, outside any ancestor with `isolation: isolate`, `filter`, `backdrop-filter`, or transformed parents that would trap `position: fixed`.
- **`open()`** calls **`if (lb.parentNode !== document.body) document.body.appendChild(lb)`** so if the node is ever moved by another script or devtools, it is re-attached to `body` before display.

- **Legacy `initLightbox()`** (`.gallery-grid`) already appended to `body`; the same **re-parent check** runs at the start of **`openLightbox()`**.

## Z-index

- **`.eq-lightbox`** remains **`z-index: 9999 !important`** in `design-system-v2.css` (above fixed header `1000`, signal plates / rails in the low hundreds, and article chrome). Close/prev/next controls use **`10000`** so they paint above the scrim.
- **`.lightbox`** in `stable-header.css` is aligned to **`z-index: 9999`** (was `10000`) so both overlays match the documented target.

## Scroll lock: `stop-scroll` + release

- The site did **not** previously use a `stop-scroll` class; scroll was locked only with **`document.documentElement.style.overflow`** / **`body.style.overflow`** in the case lightbox.
- **`script.js`** now defines **`eqLockBodyScroll()`** and **`eqReleaseBodyScroll()`**:
  - **Lock:** add **`stop-scroll`** to **`<html>`** and **`<body>`** (in addition to any future inline use, both paths are cleared on release).
  - **Release:** remove **`stop-scroll`** from both roots and **clear inline `overflow`** on `documentElement` and `body` so no stale inline styles remain.

- **`stable-header.css`** adds global rules:

  ```css
  html.stop-scroll,
  body.stop-scroll {
      overflow: hidden !important;
  }
  ```

  This applies on every page that loads `stable-header.css`, including non-v2 pages that use the legacy gallery lightbox.

- **`initEqCaseLightbox`:** `open()` uses **`eqLockBodyScroll()`**; **`close()`** uses **`eqReleaseBodyScroll()`** (Escape, backdrop click, and image error all funnel through **`close()`**).

- **`initLightbox`:** `openLightbox()` / **`closeLightbox()`** use the same helpers so **`stop-scroll`** is always cleared when the legacy modal closes.

## Image load failure

- **`.eq-lightbox__img`:** **`error`** listener calls **`close()`** when **`is-open`** is set, so scroll lock and overlay state reset if the URL is bad or the asset is missing.
- **`.lightbox-image`:** same pattern via **`closeLightbox`**.

## Cache bust

- **`stable-header.css?v=17` → `?v=18`** on HTML files that reference it (global `stop-scroll` + `.lightbox` z-index).
- **`script.js?v=8` / `?v=9` → `?v=10`** wherever `script.js` is loaded.

## Related prior fix

An earlier incident (documented in **`markdowns/LIGHTBOX_REPAIR_SUMMARY_APR_2026.md`**) involved **malformed CSS nesting** that caused `.eq-lightbox` rules to fail to match; that remains fixed. This pass focuses on **DOM attachment**, **explicit `stop-scroll` + class cleanup**, **z-index parity**, and **load-error recovery**.

## Verification checklist

1. Open a **`work-*.html`** page with a **`.case-gallery`**, click an image: full-viewport overlay, scroll locked, header below overlay.
2. Close with ×, Escape, or backdrop: **page scrolls again**; inspect `<html>` / `<body>` — **`stop-scroll`** should be absent.
3. Temporarily point a gallery `src` at a broken URL: modal should **close** (or at minimum **release scroll**) without a refresh.
4. Optional: on a page with **`.gallery-grid`**, repeat open/close for the legacy lightbox.

## Files touched

| File | Change |
|------|--------|
| `script.js` | `eqLockBodyScroll` / `eqReleaseBodyScroll`; case lightbox **`appendChild`**, re-parent guard, **`eqReleaseBodyScroll`** in **`close()`**, **`img` `error`** → **`close()`**; legacy lightbox re-parent, **`stop-scroll`** via helpers, **`img` `error`**. |
| `stable-header.css` | **`html.stop-scroll` / `body.stop-scroll`**; **`.lightbox`** `z-index: 9999`. |
| `design-system-v2.css` | Comment on **`.eq-lightbox`** stacking vs signal plates (z-index unchanged at **9999**). |
| `*.html` | **`stable-header.css?v=18`**, **`script.js?v=10`** where those assets are referenced. |
