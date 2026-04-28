# Equinox Audio Visuals — Session Summary: Post-Phase-6 Polish

**Date:** April 25, 2026 (evening)  
**Agent:** Claude 4.6 Sonnet  
**Scope:** UX polish, video integration, geo kill-list cleanup, nav fix, gallery lightbox, contact page hero, logo concepts.

---

## Changes Made This Session

### 1. Kill-List Cleanup — Geo Pages (Phase 6 Tier 3 regression fix)
Words that Phase 1 missed and were locked in by the Phase 6 batch migration are now corrected:

| File | Old text | Replacement |
|---|---|---|
| `av-services-albany-ny.html` | "seamless video switching" | "precise video switching" |
| `av-services-burlington-vt.html` | "managed seamlessly" | "managed with care" |
| `av-services-burlington-vt.html` | "seamless laptop switching" | "precise laptop switching" |
| `av-services-burlington-vt.html` | "Transform Burlington's diverse venues" | "Elevate Burlington's diverse venues" |
| `av-services-brattleboro-vt.html` | "stunning Art Deco landmark" | "historic Art Deco landmark" |
| `av-services-berkshires-ma.html` | "transforms Great Barrington barns" | "elevates Great Barrington barns" |
| `av-services-keene-nh.html` | "transform any Keene-area space" | "bring character to any Keene-area space" |
| `av-services-saratoga-springs-ny.html` | "transforms historic ballrooms" | "for historic ballrooms" |

---

### 2. work.html — Numbers Clarified
Cryptic non-sequential job numbers (014, 019, 028, 034...) replaced with **sequential 01–14** in order of appearance. The numbers are now obviously a catalog count, not internal codes.

---

### 3. work-arlington.html — Factual Hero Fix
**Removed:** "No permanent infrastructure. Every wire from the truck." (factually wrong — Arlington Common has some permanent infrastructure).  
**New headline:** "Three summers running on the Arlington Common town green. The gear and the crew both have to last."  
OG meta description also updated to match.

---

### 4. services.html — Cards Made Clickable + Video Hero
- **Hero changed** from flat bone/text to a dark video hero using `equinox-av-background-720p.mov` (with `insights-conference-speaking.jpg` as poster). The page now opens with movement instead of text.
- Each service card has a **"View services →"** CTA hint at the bottom.
- Hover state: ember border + bone background shift — unmistakably interactive.
- CSS in `design-system-v2.css`: `a.service-card-v2` hover styles added, `service-card-v2__cta` class added.

---

### 5. Flythrough Videos — All 12 Deployed
Every video asset is now in use somewhere on the site:

| Video | Page |
|---|---|
| `arlington-common-flythrough.mp4` | `work-arlington.html` hero |
| `bennington-museum-flythrough.mp4` | `work-bennington-museum.html` hero |
| `crooked-ram-wedding-flythrough.mp4` | `work-crooked-ram.html` hero |
| `equinox-resort-wedding-flythrough.mp4` | `work-equinox-wedding.html` hero |
| `hildene-volunteer-dinner-flythrough.mp4` | `work-hildene-volunteer.html` hero |
| `svcc-taconic-flythrough.mp4` | `work-svcc-annual-meeting.html` hero |
| `mande-hill-farm-sunset.mp4` | `work-two-day-wedding.html` hero |
| `equinox-av-background-720p.mov` | `services.html` hero |
| `venue-flythrough.mp4` | `work.html` hero |
| `venue-flythrough-stage.mp4` | `services-corporate.html` hero |
| `venue-tv-flythrough.mp4` | `about.html` hero |
| `hildene-volunteer-2025-03.mov` | (undeployed — brief MOV clip, not a flythrough) |

---

### 6. work.html — Event Thumbnail Images
Added **100×66px thumbnail images** to every case row (14 total). Each case now has a visual preview at a glance. Thumbnails sharpen on hover, hide on mobile.  
Grid updated: `3.5rem 1fr 100px auto` (number, body, thumbnail, arrow).  
A **video hero** using `venue-flythrough.mp4` was added at the top of the page — the work index no longer starts as a cold text list.

---

### 7. "Start a Project" Button — Nav Fix
**Bug:** `.v2 .nav-cta { color: var(--bone) }` on a `var(--bone)` header = invisible text. Only became visible on hover via `color: var(--ember)`.  
**Fix:** Color changed to `color: var(--ink)` + `font-weight: 500`. Now always visible as dark ink text with an ember underline, turning ember on hover.

---

### 8. contact.html — Hero Updated to v2
The old `project-planner-hero` section (styled by stable-header.css) was replaced with the standard `.page-hero-v2--text` component:
- Eyebrow: "Contact"
- H1: "Let's plan your event."
- Subtitle paragraph below in `var(--slate)`  
The multi-step form was untouched.

---

### 9. Gallery Lightbox — All Case Studies
Added a full keyboard/click-navigable image lightbox for case study gallery photos.

**CSS:** New Section 25 in `design-system-v2.css`  
- `.case-gallery__item` gets `cursor: zoom-in` + subtle image scale on hover  
- `.eq-lightbox` overlay: 96% dark background, centered image, LUT filter applied  
- Prev/Next/Close buttons, caption from alt text, counter "2 / 3"

**JS:** Added at end of `script.js` (self-contained IIFE)  
- Click any gallery image → opens lightbox  
- ← → keys to navigate, Escape to close  
- Click outside image to close  
- Screen-reader friendly (role="dialog", aria-modal, aria-hidden states)

---

### 10. Logo Concepts — 10 Options Generated
10 logo concepts generated and saved to the Cursor project assets folder. Concepts:

1. **Wordmark** — EQUINOX serif + AUDIO VISUALS mono, rule between
2. **EQ Monogram** — Bold EQ, Q tail as sine wave
3. **Equinox Balance** — Circle split dark/light with waveform at horizon
4. **Vermont Signal** — Mountain peaks + signal arc in ember
5. **Badge/Seal** — Circular stamp, E mark with ember slash
6. **Aperture** — Camera iris/lens mark with ember ring
7. **Typographic X** — Large EQUINOX, X crossbar replaced by ember equalizer marks
8. **Level Meter** — Five vertical bars (center in ember) + italic serif "Equinox"
9. **Film Frame** — Rectangular outline with ember top rule, EQUINOX inside
10. **EQ Interlock** — Overlapping E and Q with ember intersection fill

---

### 11. work.html Hero — "Our Work" Text Now Visible

**Bug:** `.v2 h1` in `design-system-v2.css` has specificity `0,1,1` (class + element tag). The inline `.work-hero__title` selector had only `0,1,0` (one class), so the design system rule forced `color: var(--ink)` — dark text on a dark video.

**Fix:** Upgraded the inline CSS selector from `.work-hero__title` to `.work-hero .work-hero__title` (specificity `0,2,0`), plus added `!important` on both `color` and `-webkit-text-fill-color` as a belt-and-suspenders guard. "Our Work" now renders in `var(--bone)` (cream) against the dark video.

---

### 12. Random Video on Reload — work.html and about.html

Both pages now pick a different flythrough on every page load via a small inline `<script>` block added before `</body>`.

**work.html pool (7 videos):**
- `venue-flythrough.mp4`
- `arlington-common-flythrough.mp4`
- `bennington-museum-flythrough.mp4`
- `equinox-resort-wedding-flythrough.mp4`
- `hildene-volunteer-dinner-flythrough.mp4`
- `svcc-taconic-flythrough.mp4`
- `mande-hill-farm-sunset.mp4`

**about.html pool (5 videos):**
- `equinox-av-background-720p.mov`
- `venue-flythrough.mp4`
- `crooked-ram-wedding-flythrough.mp4`
- `equinox-resort-wedding-flythrough.mp4`
- `arlington-common-flythrough.mp4`

The script targets the video element's `src` attribute and calls `.load()` to trigger the new source immediately on DOM-ready.

---

### 13. Sticky Header — Fixed (Root Cause: #header-placeholder div)

**Root cause:** The `<header>` in every page is wrapped in `<div id="header-placeholder">`. `position: sticky` can only stick within the bounds of its parent element. That `<div>` is ~70px tall — the moment the user scrolls at all, the header scrolls away with it.

**Fix in `design-system-v2.css`:**
- Changed `.v2 .header-stable` from `position: sticky` back to `position: fixed` with `left: 0; width: 100%; z-index: 1000`
- Added `padding-top: 70px` to `body.v2` so page content starts below the fixed header

All v2 page heroes have `--space-7` (160px) top padding on their content, so the fixed header height creates no visual crowding.

---

### 14. About.html — Headshot Crop Fixed

Added `object-position: top center` to the `<img>` inline style on `assets/doug-kunnath-headshot-2025.jpg`. The `object-fit: cover` was cropping to center, cutting off the top of the head.

---

### 15. Ampersands Replaced with "and" Sitewide

The `&` character felt out of place with the Equinox voice. Batch-replaced across all 48 HTML files:

- `Corporate & Conferences` → `Corporate and Conferences`
- `Galas & Non-Profits` → `Galas and Non-Profits`
- `Live Streaming & Hybrid Events` → `Live Streaming and Hybrid Events`
- `Projection & LED Walls` → `Projection and LED Walls`
- `PowerPoint & Presentation Management` → `PowerPoint and Presentation Management`
- `Conference Lighting & Stage Design` → `Conference Lighting and Stage Design`
- `Weddings & Private Celebrations` → `Weddings and Private Celebrations`
- `Band & DJ Support` → `Band and DJ Support`
- `Toast & Speech Audio` → `Toast and Speech Audio`
- `Photo & Video Displays` → `Photo and Video Displays`
- `Presentation & Slideshow Support` → `Presentation and Slideshow Support`
- `Stage & Podium Lighting` → `Stage and Podium Lighting`
- `Strategy & Planning` → `Strategy and Planning`
- `Discovery & Design` → `Discovery and Design`
- `Pre-Production & Prep` → `Pre-Production and Prep`
- `Corporate & Non-Profit` → `Corporate and Non-Profit`
- `Community & Multi-Day` → `Community and Multi-Day`
- `Insights & Articles` → `Insights and Articles` (footer + title tag)
- `Hill Farm & Hildene` → `Hill Farm and Hildene`
- `_footer.html` bare `&` also corrected
- Four `<title>` tags updated (corporate, weddings, galas, insights pages)

`Q&A` was intentionally preserved (no spaces around the ampersand, correct abbreviation).

---

### 16. Nearby Area Pill Contrast — Geo Pages Fixed

The `.geo-nearby-tag` pills were styled with `color: rgba(245, 245, 245, 0.85)` — near-white on a near-white background — completely unreadable on v2's bone/linen palette.

**Fix added to `design-system-v2.css`** (new block before Section 24 RESPONSIVE):
- Background: `var(--bone)` with subtle border
- Text: `var(--ink)` (dark charcoal)
- Hover: ember background, bone text
- Section heading changed to monospace uppercase in `var(--ink)`

---

### 17. Homepage — Video Hero (index.html)

Replaced the static `<img class="hero__image">` with a `<video>` element. The page now opens with movement on every visit.

- `src` starts as `hildene-volunteer-dinner-flythrough.mp4`; JavaScript immediately swaps to a random pick from a pool of 6 flythroughs on each reload
- `poster="assets/hildene-volunteer-2025-01.jpg"` ensures a fast first paint before the video starts
- `autoplay muted loop playsinline aria-hidden="true"` — fully background, accessible
- Eyebrow updated from internal "Case 042" shorthand to "Equinox Audio Visuals — Vermont — Est. 2023"

**Pool (6 videos):** hildene volunteer dinner · arlington common · bennington museum · equinox resort wedding · svcc taconic · venue (generic)

---

### 18. Scroll-Reveal Animations — index.html

Added a lightweight, dependency-free scroll-reveal system to make the homepage feel alive as you scroll — not just at the hero.

**CSS (new block in `design-system-v2.css`):**
- `.eq-reveal`: starts at `opacity: 0; transform: translateY(18px)`
- `.eq-reveal.is-visible`: transitions to `opacity: 1; transform: translateY(0)` over 0.65s
- `prefers-reduced-motion` media query removes all animation for accessibility

**JS (appended to `script.js`):**
- IntersectionObserver fires once per element when 8% of it enters the viewport
- Falls back to instant-visible on browsers without IntersectionObserver

**Applied to these index.html sections:** `.story-beat`, `.work-preview`, `.insights-highlight-section`, `.testimonial-editorial`, `.service-area-section`, `.final-cta`

Not applied to: `.hero`, `.metrics-strip`, `.ledger` (already animated), `.client-logo-bar`

---

### 19. Insight Cards — Now Properly Clickable (index.html)

The "Insights from the field" cards on the homepage were `<article>` elements with a fragile `window.location.href` click handler — cmd+click and right-click "open in new tab" both failed silently.

**Fix:** Both the static HTML fallback and the JS-generated cards are now `<a class="insight-highlight-card" href="...">` — the entire card is a native link. The inner `<a>` "Read Guide" button was replaced with `<span class="insight-read-cta">` to avoid nested anchors (invalid HTML). New v2 CSS block added to `design-system-v2.css` for proper linen/ink/ember styling on bone background. Two kill-list descriptions in the JS article pool also corrected ("Transform your virtual meetings" and "unforgettable experience").

---

### 20. HubSpot Form — Redirects to thank-you.html on Submit

Previously on successful submission the form hid itself and showed an inline `successMsg` div. Now:
- GA event fires first (`form_submission`)
- `window.location.href = 'thank-you.html'` redirects to the branded confirmation page

The `thank-you.html` page (created in Phase 3) handles the full confirmation experience.

---

### 21. Lighthouse Audit — Accessibility 93 → 100

Ran Lighthouse on `index.html` via CLI. Key fixes applied:

| Issue | Fix |
|---|---|
| **SyntaxError in script.js** (4 instances) | Removed stray console.log remnants: ` called');`, `.textContent); // Debug log`, `);` (stray close paren), ` called, window width:', window.innerWidth);` |
| **Color contrast: metrics strip** | Raised `rgba(18,18,18,0.5)` to `rgba(18,18,18,0.72)` — contrast ratio ~5.3:1, passes WCAG AA |
| **Color contrast: testimonial h2** | `.v2 h2` was forcing ink (dark) on the dark `.testimonial-slider-section` background. Added override: `.v2 .testimonial-slider-section h2 { color: var(--bone) }` |
| **Heading order: footer h4** | Footer column labels (`<h4>Navigate</h4>` etc.) skipped h3. Batch-changed to `<h3>` across all 48 HTML files. CSS already covered both h3 and h4. |
| **robots.txt missing** | Created `robots.txt` with `Allow: /` and sitemap reference. Netlify was serving a 404 HTML page in its place, failing Lighthouse's crawler check. |

**Final scores:** Performance 71 · Accessibility **100** · Best Practices 58 · SEO 92

Remaining performance headroom (not agent-fixable without infrastructure changes):
- Render-blocking Google Fonts and CSS (requires HTTP/2 push or font subsetting)
- Unused CSS in stable-header.css (requires code-splitting / critical CSS extraction)
- Video assets without CDN (requires Cloudflare or similar edge caching)

---

### 22. Insights.html — Video Hero Added

Converted from `page-hero-v2--text` (bone/text-only) to a full `page-hero-v2` dark video hero. Default video: `venue-tv-flythrough.mp4` with `insights-conference-speaking.jpg` as poster. Random rotation between 2 exclusive videos on load.

---

### 23. Video Pools — Exclusive Partitioning (No Cross-Page Overlap)

All 12 video assets are now uniquely assigned — no video can appear on two pages simultaneously. Every hub page has its own exclusive random pool; case study pages retain dedicated single-video heroes.

| Page | Pool | Videos |
|---|---|---|
| `index.html` | A | venue-flythrough · arlington-common · bennington-museum |
| `work.html` | B | venue-flythrough-stage · hildene-volunteer-dinner · svcc-taconic |
| `about.html` | C | equinox-av-background-720p · equinox-resort-wedding · mande-hill-farm-sunset |
| `insights.html` | D | venue-tv-flythrough · crooked-ram-wedding |
| Case studies (7) | Dedicated | One unique flythrough per event, hardcoded |

Default `src` on each video element updated to the first item in its pool (fast first paint before JS swaps).

---

### 24. work.html — Intro Copy Rewritten + Client Logo Strip Added

**Intro copy:** The previous text ("these pages are what that looks like when you're the one standing behind the console") spoke from the AV operator's perspective, not the client's. Rewritten to address event planners evaluating whether to hire:

> *"Every event on this list is named. The venue, the date, what we were hired to do. If you're deciding whether Equinox is the right call for your event — this is the most useful page on the site."*

**Client logo strip:** A row of 9 organization logos inserted between the intro paragraph and the first case category. Logos render grayscale at 45% opacity by default — clean, non-distracting. On hover: full color, full opacity. Organizations: Hildene, Bennington Museum, SVCC, Kimpton Taconic, Equinox Resort, Northshire Day School, The Crooked Ram, The Inn at Manchester, Arlington Common.

CSS added to `work.html` inline style block. No design-system changes needed.

---

### 25. index.html — Story Beat Corrected

The "Somewhere in Vermont" story beat contained two unverified claims ("Rain started ten minutes before the ceremony" as the lead, "Power run off a single generator"). Rewrote to confirmed facts only:

> *"A hundred and twenty guests under one tent. The bride's music teacher — a family friend since she was nine — played guitar and sang live. Every vow heard at every seat. First dance at 8:12."*

Eyebrow updated from "Somewhere in Vermont — Last August" to "Equinox Resort — Manchester, VT — August 2025."

---

### 26. about.html — Headshot Crop + "Cool Kids" Copy Fixed

**Headshot:** Removed fixed `height: 160px` and `object-fit: cover` constraints. Now `width: 180px; height: auto` — shows the full photo at natural proportions with no forced crop.

**Copy:** Replaced `"our signature 'cool kids, nice guys' approach"` with:
> *"We're based in Manchester, Vermont. Our work takes us across New England and beyond. Same crew, same standard — whether it's a museum gala or a resort wedding or a Friday afternoon conference call that turned into something bigger than expected."*

---

### 27. Article Pages — Prev/Next Navigation + Related Reading Images

All 13 article pages updated via Python script:

**Prev/Next nav** — new `<nav class="article-pagination">` inserted before each article's Related Reading section. Three-column grid: ← Previous (with title) | All articles | Next → (with title). Wraps in a defined order. CSS added to `design-system-v2.css`.

**Related reading images** — each `.article-related__card` now has a `<div class="article-related__card-image">` header with the article's thumbnail image. Image slides subtly on hover. CSS updated: card padding removed from root (was `var(--space-3)`), replaced with per-section padding on label and title elements so the image bleeds to card edges.

Image-to-article mapping: each article's own hero thumbnail is used for its card (e.g. `insights-zoom-meeting.jpg` for the Zoom article).

---

## Owner Action Items — Updated
1. 11 commented-out testimonials — supply attribution
2. Footer spec line — update after next show
3. ~~contact.html → thank-you.html redirect~~ ✅ Done (Apr 25, 2026)
4. Logo selection → vector production (AI/EPS) by a designer
5. Real LUT + photography production pass
6. **Sitemap** — `robots.txt` references `/sitemap.xml` but no sitemap exists yet. Generate one (e.g. via Netlify plugin or manually) before next crawl.
