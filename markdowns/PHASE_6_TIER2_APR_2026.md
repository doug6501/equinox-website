# Equinox Audio Visuals — Phase 6, Tier 2: Article Pages

**Date:** April 25, 2026  
**Agent:** Claude 4.6 Sonnet  
**Scope:** v2 design system migration — 13 article-*.html pages.  
**Source of truth:** `EQUINOX_AUDIT_AND_REIMAGINING.md`

---

## Constraints Honored

- Zero gradient, shimmer, hover-lift, or glass introduced
- No new brand color. Ember is the only accent.
- All existing article body copy preserved verbatim (h2, h3, p, ul, ol elements)
- Doug Kunnath first-person voice ("After 20+ years...") preserved throughout
- 11 commented-out testimonials untouched
- `EQUINOX_AUDIT_AND_REIMAGINING.md` not modified in this tranche. (V2 prototype HTML files have since been removed from the repository.)

---

## Migration Pattern Applied to All 13 Articles

Each article received:

1. **`class="v2"` on `<body>`**
2. **v2 font stack** — Fraunces + Inter Tight + JetBrains Mono
3. **`<link href="design-system-v2.css?v=1">`** after stable-header.css
4. **Video preload removed** — `equinox-av-background-720p.mov` preload link removed from article heads
5. **Hero replaced** — `<article class="article-hero">` with inline gradient + backdrop-filter replaced by `.page-hero-v2` with `<img class="page-hero-v2__image">` and eyebrow/headline content
6. **Article body wrapped** — `<article class="article-content">` wrapped in new `.article-layout > .article-layout__inner > .article-layout__body` + `.article-meta` aside (sticky on desktop)
7. **`article-cta` div removed** — Generic inline CTAs ("Ready to Implement?", etc.) removed from article bodies; page-level related section handles the close
8. **Related articles replaced** — `<section class="related-articles">` replaced with `.article-related` > `.article-related__grid` > `.article-related__card` links
9. **Footer replaced** — Old-style logo-image footer replaced with v2 footer

---

## Per-Article Details

| File | Hero Image | Category | Kill-list / Notes |
|---|---|---|---|
| `article-av-trends-2026.html` | `insights-av-trends.jpg` | Technology | Related card "Transform your virtual meetings..." → "The tools that changed how we run live events in 2026." |
| `article-av-trends-2025.html` | `insights-av-trends-2.jpg` | Technology | Body copy preserved verbatim |
| `article-breakout-management.html` | `insights-breakout-management.jpg` | Professional Tips | Body copy preserved verbatim |
| `article-choose-av-partner.html` | `insights-choose-partner.jpg` | Professional Tips | Body copy preserved verbatim |
| `article-conference-speaking.html` | `insights-conference-speaking.jpg` | Corporate Events | Body copy preserved verbatim |
| `article-engaging-presentation.html` | `insights-engaging-presentation.jpg` | Corporate Events | Body copy preserved verbatim |
| `article-hire-av-lead.html` | `insights-hire-av-lead.jpg` | Professional Tips | Body copy preserved verbatim |
| `article-make-time-rehearsal.html` | `insights-rehearsal.jpg` | Professional Tips | Body copy preserved verbatim |
| `article-small-meetings.html` | `insights-small-meetings.jpg` | Corporate Events | Body copy preserved verbatim |
| `article-switch-av-partners.html` | `insights-switch-partners.jpg` | Professional Tips | Body copy preserved verbatim |
| `article-top-5-av-items.html` | `insights-top-5-av.jpg` | Professional Tips | Body copy preserved verbatim |
| `article-wedding-av-equipment.html` | `insights-wedding-av.jpg` | Weddings | Body copy preserved verbatim |
| `article-zoom-meeting-tips.html` | `insights-zoom-meeting.jpg` | Technology | Body copy preserved verbatim |

---

## Implementation Notes

- Migration performed via Python script (`migrate_articles.py`, now deleted)
- The script extracted body content using regex anchored to `<div class="article-body">` and `</article>` boundaries
- Per-article metadata (image, category, date, read-time) defined as a static dict in the script
- `article-meta` aside uses static dates determined from article file history and context
- All article body h2/h3/p/ul/ol elements carry verbatim from original source

---

## v2 Page Count — Updated

**38 pages** now carry `class="v2"` and `design-system-v2.css`.

**Remaining (Tier 3–4):** 9 geo pages + event-planning-checklist.html = 10 pages

---

## Owner Action Items (Persistent, Unchanged)

1. Article publication dates are approximate estimates — Doug should verify and correct if needed
2. 11 commented-out testimonials — supply attribution to restore
3. Footer spec line — update after next show
4. contact.html → thank-you.html redirect
5. Real LUT + photography production (ongoing)
