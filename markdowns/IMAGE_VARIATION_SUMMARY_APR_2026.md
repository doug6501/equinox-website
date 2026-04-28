# Article image variation audit — April 2026

## Scope

All **13** `article-*.html` files: mid-page **`.breakout-right`** and **`.media-break.breakout-full`** images, **Related reading** thumbnails, and alignment with each **target** article’s hero (`.page-hero-v2__image`).

## Audit method

1. Compared each page’s hero `src` to every in-body breakout / full-bleed image in the same file.  
2. Replaced duplicated `insights-*.jpg` mid-page assets with **alternate editorial photography** (venue / ballroom / tent / studio / lighting) or **high-contrast technical** shots (`parallax-tech.jpg`, `parallax-tech-2.jpg`) to contrast with the wide “insights card” hero treatment.  
3. Verified **Related reading** `<img src>` matches the **linked** article’s hero image.  
4. **`assets/technical-detail-01.jpg`** does not exist in the repo; **`parallax-tech.jpg`** / **`parallax-tech-2.jpg`** (and similar) serve the “technical detail” role called out in the brief.

## Mid-page swaps (hero no longer repeated)

| Article | Hero (unchanged) | Breakout-right (new) | Media-break / full bleed (new) |
|---------|------------------|----------------------|----------------------------------|
| `article-av-trends-2026.html` | `insights-av-trends.jpg` | `parallax-tech.jpg` | `svcc-taconic-02.jpg` |
| `article-av-trends-2025.html` | `insights-av-trends-2.jpg` | `parallax-tech-2.jpg` | `hildene-gallery-1.jpg` |
| `article-switch-av-partners.html` | `insights-switch-partners.jpg` | `hero-poster-studio.jpg` | `mande-hill-farm-dark.jpg` |
| `article-conference-speaking.html` | `insights-conference-speaking.jpg` | `parallax-tech.jpg` | `page-hero-background.jpg` |
| `article-engaging-presentation.html` | `insights-engaging-presentation.jpg` | `equinox-tent-wedding-01.jpg` | `parallax-tech-2.jpg` |
| `article-choose-av-partner.html` | `insights-choose-partner.jpg` | `svcc-taconic-03.jpg` | `hero-poster-studio.jpg` |
| `article-wedding-av-equipment.html` | `insights-wedding-av.jpg` | `parallax-tech.jpg` | `equinox-tent-wedding-02.jpg` |
| `article-make-time-rehearsal.html` | `insights-rehearsal.jpg` | `page-hero-background-2.jpg` | `hildene-gallery-3.jpg` |
| `article-zoom-meeting-tips.html` | `insights-zoom-meeting.jpg` | `parallax-tech-2.jpg` | `page-hero-background.jpg` |
| `article-hire-av-lead.html` | `insights-hire-av-lead.jpg` | `hero-poster-studio.jpg` | `svcc-taconic-04.jpg` |
| `article-small-meetings.html` | `insights-small-meetings.jpg` | `mande-hill-farm-dark.jpg` | `parallax-tech.jpg` |
| `article-top-5-av-items.html` | `insights-top-5-av.jpg` | `svcc-taconic-01.jpg` | `page-hero-background-2.jpg` |
| `article-breakout-management.html` | `insights-breakout-management.jpg` | `hildene-gallery-2.jpg` | `parallax-tech-2.jpg` |

**Editorial intent:** Hero stays the branded “insights” key art; first inset reads **tighter / gear / studio** where possible; second read is often a **room or venue** (or alternate technical) so the scroll rhythm alternates wide → tight → wide.

**Accessibility:** Empty `alt=""` on decorative mid-page images was replaced with **short descriptive** `alt` text where those images are editorial (not purely decorative).

## Related reading / target hero alignment

| File | Issue | Fix |
|------|--------|-----|
| `article-zoom-meeting-tips.html` | Card linking to `article-av-trends-2026.html` used `insights-av-trends-2.jpg` (2025 hero art). | Thumbnail set to **`insights-av-trends.jpg`** to match **2026** article hero. |

All other **Related reading** rows already used each destination article’s `insights-*.jpg` hero. No other mismatches were found after cross-checking `href` → hero mapping for all 13 articles.

## Target article → hero thumbnail reference (for future edits)

| Slug | Hero asset |
|------|------------|
| `article-av-trends-2026.html` | `assets/insights-av-trends.jpg` |
| `article-av-trends-2025.html` | `assets/insights-av-trends-2.jpg` |
| `article-switch-av-partners.html` | `assets/insights-switch-partners.jpg` |
| `article-conference-speaking.html` | `assets/insights-conference-speaking.jpg` |
| `article-engaging-presentation.html` | `assets/insights-engaging-presentation.jpg` |
| `article-choose-av-partner.html` | `assets/insights-choose-partner.jpg` |
| `article-wedding-av-equipment.html` | `assets/insights-wedding-av.jpg` |
| `article-make-time-rehearsal.html` | `assets/insights-rehearsal.jpg` |
| `article-zoom-meeting-tips.html` | `assets/insights-zoom-meeting.jpg` |
| `article-hire-av-lead.html` | `assets/insights-hire-av-lead.jpg` |
| `article-small-meetings.html` | `assets/insights-small-meetings.jpg` |
| `article-top-5-av-items.html` | `assets/insights-top-5-av.jpg` |
| `article-breakout-management.html` | `assets/insights-breakout-management.jpg` |

## Follow-up (optional)

- Add dedicated **`technical-detail-01.jpg`** (or similar) under `assets/` if marketing wants a single consistent “Field Notes” texture distinct from `parallax-tech*`.  
- Re-run this audit whenever **hero art** on an article changes so Related cards stay in sync.
