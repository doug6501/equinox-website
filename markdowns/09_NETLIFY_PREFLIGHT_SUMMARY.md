# Netlify pre-flight and production cleanup — summary

**Date:** April 28, 2026  
**Primary host:** `https://www.eqxav.com/`

## `sitemap.xml`

- All **`<loc>`** entries already used **`https://www.eqxav.com`**; verified **no** `equinoxaudiovisuals.com` host strings in the file.
- **`<lastmod>`** values normalized to **`2026-04-28`** for the full set.
- **URL count:** **48** production URLs ( **`thank-you.html`** is intentionally **omitted** — it uses **`noindex`** and is not a discovery target).
- **Root deployable HTML** (excluding `_footer` / `_header_STABLE` partials): **49** files including **`thank-you.html`**; sitemap lists **48** indexable marketing / content URLs. **`assets/2026-Event-Planners-Technical-Checklist.html`** remains out of the sitemap (PDF companion / non-primary web surface).

## `robots.txt`

- **`Sitemap: https://www.eqxav.com/sitemap.xml`** — correct and matches the sitemap host.

## `_redirects`

- **Existing** Squarespace, **`/articles/*`**, asset renames, and timer routes were left intact.
- **Added** example legacy path from the brief:  
  **`/old-insight`** → **`/article-av-trends-2026.html`** **`301`** (commented section header: legacy insight short paths).

## TODO / DRAFT sweep (HTML + CSS)

- **HTML:** Removed all lines matching **`<!-- TODO: supply real attribution to restore this testimonial -->`** from **`index.html`** and eight **`work-*.html`** files.
- **CSS:** Ripgrep over **`*.css`** — **no** `TODO` / `DRAFT` / `FIXME` hits.
- **Post-sweep:** **`grep -r TODO|DRAFT`** on **`*.html`** at repo root — **no** matches.

## Canonical, Open Graph, and Twitter URLs

- **Bulk replace** in root **`*.html`** (excluding `_*.html`):  
  **`https://www.equinoxaudiovisuals.com`** → **`https://www.eqxav.com`** on **HTTPS URL attributes** (canonical, `og:url`, `og:image`, `twitter:image`, etc.).
- **Left unchanged:** **`mailto:info@equinoxaudiovisuals.com`**, Instagram handle URLs, and plain-text mentions of the email / legacy domain where they are not `https://` marketing URLs.

### `og:url` repair (articles)

- Several **Insights** pages had **`og:url`** reduced to the bare origin during the first pass; those were **repaired** so **`og:url`** matches **`link rel="canonical"`** per file.

## Meta `<title>` and `meta name="description"` (Technical Producer / EQX AV)

- **Titles:** Standardized toward **`| EQX AV — Technical Producer`** (or **`EQX AV — Technical producer · …`** on the homepage) across root marketing pages. **`services.html`** was updated manually (it had not matched the first script’s patterns).
- **Descriptions:** Added or normalized **technical producer / EQX AV** language sitewide; **truncated or merged** a few broken fragments introduced by an automated append (e.g. **`thank-you.html`**, **`article-conference-speaking.html`**, **`article-make-time-rehearsal.html`**, **`article-switch-av-partners.html`**, **`event-planning-checklist.html`**) and **rewrote** several **Insights** meta descriptions that still ended in **`...`** placeholders using the existing **`og:description`** copy plus a consistent EQX AV line.
- **Recommendation:** Spot-check **SERPs-length** (≈155–160 characters) and tone on high-traffic URLs (`index.html`, **`work.html`**, top articles) before launch; titles are intentionally more “productized” than before.

## Files touched (high level)

| Area | Files |
|------|--------|
| Sitemap / robots | `sitemap.xml` (already correct host; lastmod + thank-you entry) |
| Redirects | `_redirects` |
| Site HTML | Root **`*.html`** (canonical/OG/Twitter URLs; titles; descriptions; TODO comment removal) |
| Summary | `markdowns/09_NETLIFY_PREFLIGHT_SUMMARY.md` |

## Pre-deploy checklist (manual)

1. **Netlify:** Custom domain **`www.eqxav.com`** → site, **HTTPS**, and **apex** redirect policy.
2. **Search Console / Bing:** Submit **`https://www.eqxav.com/sitemap.xml`** after first deploy.
3. **Forms / HubSpot:** Confirm production endpoints and that contact alerts still use the intended mailbox.
4. **`thank-you.html`:** Omitted from the sitemap by design; add it only if you change indexing strategy.
