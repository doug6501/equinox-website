# Equinox Audio Visuals — Phase 4 Continuation: Nav Reduction, Regions Hub, Article Fixes, Insights Audit

**Date:** April 25, 2026  
**Agent:** Claude 4.6 Sonnet  
**Scope:** Phase 4 Item F (nav reduction, APPROVED); Regions hub creation; Article HTML structural audit & fix; Insights page kill-list audit.  
**Session record:** Continues from `PHASE_4_IA_AND_CONVERSION_APR_2026.md`.

---

## Overview

This session executes all four outstanding Phase 4 items. All work is complete. No architectural decisions were reversed. All constraints from prior sessions held.

**Constraints honored throughout:**
- Zero gradient, shimmer, hover-lift, or glass introduced
- No new brand color. Ember is the only accent.
- 11 commented-out testimonials untouched
- `EQUINOX_AUDIT_AND_REIMAGINING.md` not modified in this tranche. (V2 prototype HTML files have since been removed from the repository.)
- Equinox founding year 2023 maintained throughout
- Doug Kunnath's personal career byline voice preserved

---

## Item F — Nav Reduction (APPROVED, IMPLEMENTED)

### Pre-flight audit

| Metric | Value |
|---|---|
| HTML files with `nav-links` | 48 (including `_header_STABLE.html`) |
| Excluded from changes | `_footer.html` (at the time; v2 prototype pages since deleted) |
| Pages with non-standard active state | 1 (`work.html` — "Our Work" had `class="active"`) |
| `header-right` pattern | Identical across all 48 files |

### Nav change executed

**Before (all pages):**
```html
<ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="work.html">Our Work</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="insights.html">Insights</a></li>
    <li><a href="contact.html">Contact Us</a></li>
</ul>
```

**After (all pages):**
```html
<ul class="nav-links">
    <li><a href="work.html">Work</a></li>
    <li><a href="services.html">Services</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="insights.html">Insights</a></li>
</ul>
```

**Before `header-right` (all pages):**
```html
<div class="header-right">
    <button class="mobile-nav-toggle" aria-label="Menu">
        <span class="hamburger"></span>
    </button>
</div>
```

**After `header-right` (all pages):**
```html
<div class="header-right">
    <a href="contact.html" class="nav-cta">Start a project</a>
    <button class="mobile-nav-toggle" aria-label="Menu">
        <span class="hamburger"></span>
    </button>
</div>
```

**Result:** 4-item nav (Work · Services · About · Insights) + 1 right-side "Start a project" CTA. `_header_STABLE.html` partial updated identically.

### CSS additions

**`stable-header.css`** — added `.nav-cta` desktop styles:
- Color: `#f5f5f5` (white on dark header)
- Font: Inter Tight, 13px, uppercase, 0.06em tracking
- Border-bottom: 1px solid `#C2582A` (ember underline)
- Hover: color shifts to `#C2582A`
- Mobile `≤992px`: hidden by default
- Mobile nav-open state: `.nav-cta` shown as fixed block at the bottom of the open panel, matching panel background

**`design-system-v2.css`** — added `.v2 .nav-cta` styles:
- Color: `var(--bone)` on v2 dark headers
- Font: `var(--font-mono)`, `var(--scale-1)`, uppercase, 0.08em tracking
- Border-bottom: `1px solid var(--ember)`
- Hover: color `var(--ember)`
- Same mobile behavior as above, using v2 tokens

---

## Regions Hub — `regions.html` Created

**Page type:** `.v2` full design-system page  
**Canonical:** `https://www.equinoxaudiovisuals.com/regions.html`  
**Nav placement:** Footer "Regions" column only. NOT in top nav.

**Structure:**
- Display-serif `<h1>Regions</h1>` + mono count "9 markets · VT · NY · NH · MA"
- Intro paragraph (body sans, brand voice, `var(--measure)` max-width)
- Four state-group dividers (Vermont / New York / New Hampshire / Massachusetts) in ember mono uppercase
- 9 `.region-row` entries — each: state abbreviation in ember mono + region name in display serif (24px) + one-line description in body sans + hover-reveal `→`
- Row hover: linen background expands to container width over 160ms — no bounce, no lift (matches `work.html` pattern)
- Quiet CTA: "Don't see your venue? We travel for the right event." + `Start a project →` ghost link
- v2 footer with all 9 regions

**Footer Regions column updated on all 17 v2 pages:**  
Expanded from 4 entries (Manchester, Bennington, Saratoga, Berkshires) to all 9 entries + "All Regions →" link to `regions.html`.

| Region | File |
|---|---|
| Manchester, VT | `av-services-manchester-vt.html` |
| Bennington, VT | `av-services-bennington-vt.html` |
| Dorset, VT | `av-services-dorset-vt.html` ← new |
| Brattleboro, VT | `av-services-brattleboro-vt.html` ← new |
| Burlington, VT | `av-services-burlington-vt.html` ← new |
| Albany, NY | `av-services-albany-ny.html` ← new |
| Saratoga Springs, NY | `av-services-saratoga-springs-ny.html` |
| Keene, NH | `av-services-keene-nh.html` ← new |
| The Berkshires, MA | `av-services-berkshires-ma.html` |

**Footer Navigate column also updated on all 17 v2 pages:** "Our Work" → "Work", "About Us" → "About" — consistent with header nav reduction.

---

## Article Template Audit — Structural HTML Fixes

### Audit methodology

All 13 `article-*.html` files were checked for:
- Multiple `</body>` or `</html>` tags
- `</html>` appearing before `</body>`
- Large unexpected content blocks after `</main>`
- The specific `footer-placeholder` / `</main>` ordering bug cited in the audit document

### Finding: Critical structural bug (all 13 files)

The previously-documented "content after `</body>`" issue had been fixed in a prior session. However, a new structural problem was found across all 13 articles:

```html
<!-- MALFORMED — as it was -->
<div id="footer-placeholder">
</main>
<footer class="main-footer">
    ...
</footer>
</div>
```

`<div id="footer-placeholder">` was opening **inside `<main>`**, and `</main>` was closing afterward — creating a `<div>` that straddles the `</main>` boundary. Technically invalid HTML. Browsers recover silently; automated audits do not.

**Fix applied (all 13 files):**
```html
<!-- CORRECT — after fix -->
</main>
<div id="footer-placeholder">
<footer class="main-footer">
    ...
</footer>
</div>
```

**Verification:** All 13 files confirmed: `</main>` position < `footer-placeholder` position in every file.

**Other findings:** No other structural issues found. No `</html>` before `</body>`, no duplicate closing tags.

---

## Insights Page Audit — Kill-List & Teaser Quality

### Issues found and fixed

| Type | Location | Issue | Fix |
|---|---|---|---|
| **og:url bug** | Line 15 | Pointed to `https://www.equinoxaudiovisuals.com` (homepage) | Fixed to `https://www.equinoxaudiovisuals.com/insights.html` |
| **Kill-list hit** | Teaser for `article-switch-av-partners.html` | "make a smooth transition" | Rewritten |
| **Weak teaser** | Teaser for `article-av-trends-2026.html` | "Stay ahead of the curve… innovative ideas… shaping the future" — pure category copy | Rewritten to brand voice |
| **Weak teaser** | Teaser for `article-hire-av-lead.html` | "Understand the critical importance… Learn how… make or break" — vendor-speak | Rewritten to brand voice |
| **Weak teaser** | Teaser for `article-conference-speaking.html` | "Master the art… professional presentation techniques… deliver memorable presentations" — category default | Rewritten to brand voice |
| **Missing article** | Insights grid | `article-av-trends-2025.html` was not linked anywhere in the grid | Added as second Technology card |

### Teaser rewrites (examples of voice shift)

**Switch AV Partners:**
> *Before:* "Recognize the warning signs that indicate it's time to find a new AV partner. Learn how to evaluate your current relationship and make a smooth transition."
> *After:* "Your current vendor says 'We'll figure it out on-site.' Your next one brings a run-of-show. Here's how to tell the difference before the show loads in."

**Hire an AV Lead:**
> *Before:* "Understand the critical importance of having a dedicated AV lead on your event team. Learn how this role can make or break your event's success."
> *After:* "There is one person on a well-run show who catches problems before they become visible to the room. This is why that person matters, and what to look for when you're hiring one."

**Conference Speaking:**
> *Before:* "Master the art of conference speaking with professional presentation techniques. Learn how to engage audiences, handle technical challenges, and deliver memorable presentations."
> *After:* "The clicker that stops responding at minute four, the speaker who paces to the wrong side of the room — these are avoidable. Tips from the team watching every conference from the back of the house."

---

## Files Changed

| File | Type | Summary |
|---|---|---|
| All 48 HTML files (nav-links) | Modified | Nav reduced: Home removed, Our Work → Work, About Us → About, Contact Us removed, Start a project CTA added to header-right |
| `_header_STABLE.html` | Modified | Same nav reduction applied to the partial |
| `stable-header.css` | Modified | `.nav-cta` desktop + mobile styles added after `.header-right` block |
| `design-system-v2.css` | Modified | `.v2 .nav-cta` styles added with v2 tokens; mobile panel behavior |
| `regions.html` | **Created** | New .v2 page: 9-region hub with editorial row layout |
| All 17 v2 pages (footers) | Modified | Footer Regions column expanded to all 9 + regions.html link; Navigate column: Our Work → Work, About Us → About |
| All 13 `article-*.html` files | Modified | `</main>` / `footer-placeholder` ordering fixed |
| `insights.html` | Modified | og:url fixed; 4 teasers rewritten to brand voice; `article-av-trends-2025` added to grid |

---

## Owner Action Items (Cumulative, Carried Forward)

1. **11 commented-out testimonials** — unchanged. Supply: first name + role + venue + date to restore each. Placeholder: `<!-- TODO: supply real attribution to restore this testimonial -->`
2. **Typography licensing** — Fraunces (Google Fonts, free) is current v2 display face. GT Sectra + Söhne are the premium replacements (~$900–$2,400 one-time).
3. **Footer spec line** — `v2.0 · Last show: Bennington Museum · Apr 19, 2026` is hardcoded on all v2 pages. Update when a new show is produced.
4. **contact.html → thank-you.html redirect** — Wire the HubSpot form's success redirect to `thank-you.html`.
5. **Old-style footer label consistency** — Non-v2 pages (articles, geo pages, services, contact) have old-style footers where "Our Work" and "About Us" still appear in the Navigate column. These footers are a design system delta (old vs. v2) that will be resolved when those pages are migrated to v2. Not a kill-list item, noted for awareness.
6. **`_footer.html` status** — This partial is dead code: `loadFooter()` in `script.js` skips the fetch if `footer-placeholder` already has inline content (which all pages now do). It should either be retired or updated to match one of the footer styles, as part of Phase 5 cleanup.
7. **Real LUT** — The CSS `--lut-filter` is a production-ready approximation. A real Lightroom/Capture One preset produces a `.cube` LUT for asset-level application.

---

## Residual Phase 4 Items (Not in this Session's Scope)

- Case study template unification (run-of-show pinned column)
- Article template visual unification (byline, reading time, related articles v2)
- Contact page promise line addition

These are candidates for the Phase 5 session.
