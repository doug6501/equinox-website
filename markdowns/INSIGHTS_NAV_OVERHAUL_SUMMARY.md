# Insights metadata & navigation overhaul — summary

## Goals

1. **Metadata** (read time / category plate and field notes) should **not stick** to the viewport; they scroll with the article.
2. **Prev / next** should abandon **vertical `PREV_INSIGHT` / `NEXT_INSIGHT` rails** in favor of **Work-style interaction**: **blue pill** controls with **strong hover** (lift, ember border, glow), **fixed to the left and right edges** of the viewport on desktop as persistent anchors.
3. **Mobile** keeps the bottom bar but uses the **same pill classes** and spacing.

## Implementation (no per-article HTML rewrites for nav URLs)

### CSS — `design-system-v2.css` (new §30)

- **Scope:** `section.article-layout[data-compass-rails="editorial"]` (all 13 `article-*.html` files already use this).
- **Sticky → static:** `.article-rail`, `.article-field`, and `.article-rail__stack` use **`position: static`** so metadata scrolls naturally.
- **Desktop ≥1200px**
  - **Grid:** `article-layout__inner` becomes **10 columns** with extra horizontal padding so copy clears the fixed pills. **`.article-margin-left`** → col 1, **`.article-body`** → cols 2–8 (7 tracks), **`.article-field`** → cols 9–10 (2 tracks).
  - **`.compass-rail`:** **`position: fixed`**, **`top: 50%`**, **`translateY(-50%)`**, **`z-index: 101`**. Prev: **`left: max(0.65rem, env(safe-area-inset-left))`**. Next: **`right: max(0.65rem, env(safe-area-inset-right))`**.
  - **Visibility:** Rails are always **`opacity: 1`** (scroll-linked `.is-visible` is disabled for editorial — see JS).
  - **Vertical mono:** **`writing-mode`** reset on pill links; brass **`::before`** pointer **hidden**.
- **Pill component:** **`.v2 .button.button--pill.button--blue`** — rounded pill, blue gradient fill, uppercase mono-ish label. **Hover / focus** mirrors **`.nav-btn.glass-btn:hover`** from Work: **`translateY(-2px)`**, **ember border**, **warm shadow**.
- **Mobile &lt;1200px:** **`.article-compass-bar`** keeps fixed bottom behavior; links get the same **pill + blue** classes via JS; center rule hidden; horizontal padding respects safe area.

### JavaScript — `script.js`

- **`initInsightsEditorialNav()`** — On layouts with **`data-compass-rails="editorial"`**, adds **`button button--pill button--blue`** to **`.compass-rail__link`** and **`.article-compass-bar__link`**, and sets visible text to **`← Previous`** / **`Next →`** (full titles remain in **`aria-label`**).
- **`initArticleCompassRailReveal()`** — **Early return** for **`editorial`** layouts so rails are **not** tied to `IntersectionObserver` / **`.is-visible`**.

### Assets / cache

- All **13** `article-*.html` files: **`design-system-v2.css?v=8`**, **`script.js?v=9`**.

## Files touched

| File | Change |
|------|--------|
| `design-system-v2.css` | New §30 insights editorial rules + `.button--pill.button--blue` |
| `script.js` | `initInsightsEditorialNav`, skip compass reveal for editorial |
| `article-*.html` (×13) | Cache-bust query strings only |

## Verification

- [ ] Desktop ≥1200px: blue pills pinned **left/right** of viewport; article scrolls; metadata scrolls with content.
- [ ] Hover pill: **lift + ember ring + glow** (aligned with Work `glass-btn` behavior).
- [ ] Mobile: bottom bar shows two pills; tap targets adequate; safe-area insets respected.

## Tier note

**Tier 2** — scoped CSS + small JS; no CMS or build pipeline changes.
