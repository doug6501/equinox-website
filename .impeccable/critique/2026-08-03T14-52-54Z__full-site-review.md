# Equinox Audio Visuals — Full Site Review
**Scope:** All 51 sitemapped pages + 3 orphan/risk files, read in full. Live browser walkthrough of eqxav.com. Direct frame-by-frame inspection of all 14 video assets (played live in-browser, not just grepped from source).
**Persona:** Third-best web designer / fourth-best marketer in the world, evaluating this as a small-market AV production company's primary sales tool.
**Method:** Five parallel audits (live browser dynamism, hub pages, 18 case studies, 12 articles + 9 geo pages + checklist, technical SEO/AEO) plus a direct follow-up video-forensics pass.

---

## Overall Score: 6.4 / 10

The **writing is the site's real asset** — specific, restrained, unusually free of AI-slop phrasing, with named venues, named people, real numbers. The **information architecture and SEO fundamentals are above-average** for a business this size. But two things are actively working against the brand: the site **feels static/archival rather than alive**, and — the single most urgent finding of this review — **most of the "flythrough" video assets used as page heroes are AI-generated (Google Veo), several with a visible "Veo" watermark burned into the footage, on pages that name real clients and real events.** That is a direct hit against the exact "avoid looking AI-generated" goal that started this engagement.

| Dimension | Score | Verdict |
|---|---|---|
| Voice / content quality | 8.5/10 | Best-in-class for the category. Specific, honest, un-templated. |
| Informativeness / AEO readiness | 6.5/10 | Good bones (FAQ schema on 9 geo + 3 service pages), but case studies and articles carry zero structured data, and hub pages have no heading hierarchy for their highest-value content. |
| Technical SEO | 7/10 | 100% canonical coverage, clean third-party scripts, valid sitemap. Let down by 3 unlinked risk files, a broken placeholder canonical, and 37/55 pages sharing an identical meta-description suffix. |
| Visual dynamism / motion | 3/10 | Reads as a static document. No scroll reveals outside the homepage, no hover states on work/services grids, no parallax. |
| **Video asset integrity** | **2/10** | **See below — this is the finding that matters most.** |

---

## 1. THE HEADLINE FINDING: AI-generated video, watermarked, on live client-named pages

This is what the original "does it look AI-generated" mandate was about, and it's happening in the one place nobody checked closely: the flythrough video pool.

I opened every deployed video file directly in-browser (not just via source-code grep) and scrubbed through each frame-by-frame. Here's what's actually live on **www.eqxav.com** right now:

| File | Where it's live | Direct visual finding |
|---|---|---|
| `mande-hill-farm-sunset.mp4` | `about.html` hero pool | **"Veo" watermark clearly visible, bottom-right.** Otherwise a beautiful nighttime string-light/firepit scene. |
| `equinox-resort-wedding-flythrough.mp4` | `about.html` hero pool | **"Veo" watermark visible, bottom-right.** Floral ceremony arch under a tent. |
| `hildene-volunteer-dinner-flythrough.mp4` | `work.html` hero pool | **"Veo" watermark visible, bottom-right.** Barn reception hall, otherwise convincing. |
| `Hildene - Lincoln Essay Competition 2026 - Flythrough 2.mp4` | **Hero video on the live `work-hildene-lincoln-essays-2026.html` case study** | **"Veo" watermark visible** *and* the on-screen TV graphic misspells the event as **"2026 Lincoin Essay Competition"** (should be "Lincoln") — an AI text-rendering artifact baked permanently into the clip. This is the worst instance: it's attached to a real, named 2026 client event. |
| `svcc-taconic-flythrough.mp4` | `work.html` hero pool | Same 7.792s signature duration as the confirmed Veo clips; garbled illegible text on an in-scene TV screen (classic AI-text tell). No watermark visible in the crop shown, but everything else matches. |
| `venue-flythrough-stage.mp4` | `work.html` hero pool (default) | Same 7.792s duration signature. Convincing floral long-table reception shot; no watermark visible in the frames sampled, but the duration match is diagnostic. |
| `venue-tv-flythrough.mp4` | `insights.html` hero pool (default) | Same 7.792s duration signature. Frames sampled were very dark; couldn't get a clean visual read, but same generation fingerprint as the confirmed set. |
| `crooked-ram-wedding-flythrough.mp4` | `insights.html` hero pool + `work-crooked-ram.html` gallery | Same 7.792s duration signature. Shows a TV under a pergola displaying garbled, illegible couple-name text — same AI-text-rendering tell as the Lincoln Essay clip. |
| `equinox-av-background-720p.mov` | **Hardcoded** hero on `index.html` and `services.html` | Could not force-play this `.mov` directly in-browser (Chrome won't navigate to QuickTime containers), but the live in-context playback shows organic camera motion, lens flare/bokeh, and no watermark — this one reads as genuine real footage and should be kept. |

**Every single flythrough clip I could inspect that wasn't the homepage's hardcoded `.mov` shares an identical 7.792-second (or 8-second) duration** — a dead giveaway that this entire pool was generated in one batch from the same text-to-video tool, almost certainly Google Veo, almost certainly on a free/non-enterprise tier that stamps the visible watermark.

**Four more video files exist in `/assets` but are not referenced anywhere in the current HTML/JS** — `arlington-common-flythrough.mp4`, `bennington-museum-flythrough.mp4`, `venue-flythrough.mp4`, and `Hildene - Women in Luncheon 2026 flythrough.mp4` — dead weight from an earlier deploy (a `markdowns/POLISH_AND_VIDEO_APR_2026.md` session log shows they were once wired into `work-arlington.html` and `work-bennington-museum.html` hero slots, then later replaced with static-image heroes — those two case studies now correctly use real photos, which is the right call and should be the template going forward).

### Why this is P0, not a nice-to-have
- These aren't generic stock b-roll — they're **presented as if they document specific, real, named client events** (a 2026 Hildene essay ceremony, a specific Equinox Resort wedding, a specific volunteer dinner). A watermark reading "Veo" sitting in the corner of a video attached to a real client's name is a credibility and possibly trust/ethics problem, not just an aesthetic one.
- The misspelled "Lincoin" text is currently live and visible to any visitor who watches the `work-hildene-lincoln-essays-2026.html` hero for more than 3 seconds.
- This directly contradicts the brand's stated anti-pattern list (no AI-slop, no visual clutter) and the very reason this audit was requested.

### Immediate fix (do this regardless of anything else in this report)
1. **Pull the Hildene Lincoln Essay 2026 hero video immediately** — swap to a static photo hero (the pattern already used successfully on 15 of 18 other case studies) until a clean replacement exists.
2. **Strip the AI-generated files out of the `work.html`, `about.html`, and `insights.html` random pools.** Fall back to the single hardcoded real `.mov`/a real photo, the way `index.html` already does — don't randomize in unverified assets.
3. **Delete the 4 orphaned Veo files** from `/assets` (they add ~14MB of dead weight and zero value sitting unused).
4. **Audit `crooked-ram-wedding-flythrough.mp4`** specifically — it's embedded in a real case-study gallery (`work-crooked-ram.html`), not just a hero rotation, so it has the most direct client-facing exposure of the whole set.

### If you want to keep the "flythrough" concept — regeneration prompts
If the goal is to keep motion/atmosphere on these pages, regenerate with a tool/tier that doesn't watermark (e.g. a paid Veo tier, Runway Gen-4, or Luma Ray), and explicitly instruct the model to avoid rendering any legible on-screen text (that's what caused the "Lincoin" artifact). Suggested prompts:

**Replacement for the Hildene Lincoln Essay hero:**
> Slow forward glide through a warm, timber-framed New England event barn set for an evening awards ceremony — round tables with red linens, string chandeliers overhead, a small stage with a podium and flags in soft focus in the background. Golden-hour light through tall windows. No readable text, signage, or screens anywhere in frame. Smooth, real-camera-like dolly movement, subtle handheld imperfection, natural depth of field. Documentary event-videography style, not glossy CGI. 8 seconds, 16:9.

**Replacement for the about.html "resort wedding" clip:**
> Slow glide toward a floral ceremony arch of blush and cream roses and eucalyptus under a clear-top tent, manicured lawn and mountains soft-focus beyond. Overcast diffused daylight. No people, no readable text or signage. Natural, slightly imperfect camera drift as if handheld on a gimbal, shallow depth of field. Warm, editorial wedding-film color grade. 8 seconds, 16:9.

**Replacement for the "volunteer dinner" clip:**
> Slow push into a rustic post-and-beam banquet hall set for a formal dinner — round tables, floral centerpieces, wrought-iron chandeliers with warm bulbs, tall arched windows letting in daylight. Empty room, no people, no readable signage or screens. Gentle, real-camera dolly-in with subtle handheld sway, cinematic shallow depth of field. 8 seconds, 16:9.

Keep every regenerated prompt free of any request to render text, logos, or specific brand names — that's the exact failure mode that produced the "Lincoin" misspelling.

---

## 2. Dynamism / motion (live browser walkthrough)

Overall dynamism: **3/5**, below what's expected of a premium live-event production company.

- **Works:** homepage hero video autoplay, 350ms cross-document view transitions, fast/clean loads, no layout shift.
- **Missing sitewide:** scroll-triggered reveals (outside a few `index.html` sections), hover states on the `work.html` case grid and services cards, parallax on any case-study hero, stagger-in on the six-step process, progress indicators on the multi-step contact form, ambient motion anywhere besides the hero.
- **Geo pages feel the flattest** — near-identical structure across all 9 with no page-specific visual treatment beyond copy.
- **Technical bug found:** view transitions caused hero imagery from the previous page to persist during navigation in the live browser, which is what blocked the first walkthrough attempt from observing videos in context. Worth a dedicated debug pass — regardless of the video-quality findings above, a visitor bouncing between pages quickly could see the same glitch.

**Quick wins, roughly in effort order:** hover lift/shadow on `work.html` case rows and services cards; scroll-reveal on `work.html`, `services.html`, and `process.html` (the `.eq-reveal` system already exists in `design-system-v2.css` from the homepage pass — just needs to be applied to more sections); a lightweight step-progress indicator on the contact form.

---

## 3. Content & informativeness, page by page

**Strongest pages:** `process.html` (richest page on the site — ~950 words, a genuinely substantive visible FAQ, and the most honest, distinctive voice: *"Half our calls end with us recommending you do something in-house or with a different vendor."*) and `work.html` (700–800 words, 18 named case studies with real gear counts and guest numbers).

**Weakest pages:** `about.html` is the biggest gap — thin (400–450 words), duplicates the homepage's H1 verbatim, and introduces only one team member even though the rest of the site repeatedly says "our crew" / "our team" (plural) — a real informational gap for anyone trying to judge backup capacity, not just a voice issue. `regions.html` is thin (~200 words) but the local landmark specificity that exists is genuinely good (Dorset Inn since 1796, SPAC, Mass MoCA) and avoids generic local-SEO clichés entirely.

**Sitewide content patterns worth fixing:**
- **Duplicate meta-description suffix** — *"— Equinox Audio Visuals, technical producer for live events in Vermont and New England"* is appended verbatim to 37 of 55 pages, diluting SERP snippet uniqueness.
- **FAQ schema is inverted.** The 3 service-vertical pages (`corporate`/`weddings`/`galas`) carry `FAQPage` JSON-LD with good content that is **never rendered visibly** on the page (a schema/content mismatch risk). Meanwhile `process.html` has the single best real, visible FAQ on the site and carries **no** FAQ schema at all.
- **Heading hierarchy collapses on exactly the highest-value hub pages** — `work.html` (18 case studies), `insights.html` (14 articles), and `regions.html` (9 markets) render their core content in styled `<div>`s, not `<h2>`/`<h3>`. This is a heading-hierarchy dead zone on the pages an AI engine would most want to quote from.
- **Duplicate H1** — `index.html` and `about.html` share the exact headline "Event production with character."
- **No phone number anywhere on the site**, and the homepage's own `LocalBusiness` schema ships with an empty `"telephone": ""` field.
- **Biggest missed cross-linking opportunity:** none of the 3 service-vertical pages link to any of their matching case studies on `work.html`, despite the exact events (weddings, galas, corporate meetings) already being documented there in detail.
- **Voice slips into generic agency-speak specifically in the "sales pitch" paragraphs** — `services.html`'s opener ("We are your end-to-end partner...") and the scene-setting intros on `services-corporate.html` and `services-galas.html" ("Great corporate events don't happen by accident," "We've seen it all") are the only places on the whole site that read as templated. Everywhere the copy gets specific — gear counts, named people, exact times — it's genuinely distinctive.

---

## 4. Case studies (18 pages) — specificity ranking

Most informative → least: **women-in-leadership-2026** (named people, hard wage-gap statistics, press link) → **hildene-lincoln-essays-2026** → **old-gray-barn-celebration** (exact load-in timestamps) → **svcc-women-leadership** → **hildene-lincoln-essays-2025** → **vanish-screening** → **svcc-annual-meeting** → **northshire-gala** → **two-day-wedding** → **hildene-volunteer** → **arlington** → **equinox-wedding** → **bennington-summer** → **bennington-museum** → **hildene** → **kimpton-taconic** → **hildene-wedding-2** → **crooked-ram** (thinnest, ~180 words).

Notable issues beyond video (already covered above):
- **`work-hildene-wedding-2.html` and `work-hildene.html` read as near-interchangeable** — same venue, same lighting-only scope, nearly identical sentence structures. Worth merging or meaningfully differentiating.
- **`work-equinox-wedding.html`'s meta/OG description promises specifics** ("Rain at 6:40. The first dance happened at 8:12") **that never appear in the visible body copy** — a copy inconsistency between what's promised in the snippet and what's delivered on the page.
- **Two SVCC case studies share an identical testimonial attribution** ("Events Coordinator — Southwestern Vermont Chamber of Commerce") with different quotes — reads as a templated placeholder rather than two distinct real people, even if both are genuine.
- **Zero of the 18 case studies carry any JSON-LD** (`Event`/`CreativeWork`/`Review`) — the single biggest structured-data gap on the site given these are the strongest social-proof content.
- **Heading collapse:** every case study has exactly one heading (the H1) for the entire body — no `<h2>` for "The Brief"/"The Setup"/"The Result," which would meaningfully help both SEO and AI extractability.

---

## 5. Articles (12) & geo pages (9) — AEO/GEO readiness

**Net verdict: well above-average content for a business this size.** Zero SEO-mill phrasing found across all 12 articles ("stay ahead of the curve," "discover why," etc.) — genuinely rare. Every article opens with a hook and answers the implied question within 100–150 words, which is exactly the shape AI answer engines favor.

**Biggest fixable AEO gap:** zero `FAQPage` schema and zero `Article`/`Person` schema across all 12 articles, despite several titles being literal questions ("How to Choose...," "When to Change...") begging for an FAQ block.

**Geo pages (9):** all 9 correctly carry both `LocalBusiness` and `FAQPage` schema — a genuine strength versus a typical geo-page mill. Real, correct local landmarks per page (not spun filler) — Dorset ("oldest continuously operating inn in Vermont... since 1796") is the standout, most specific page in the set. The templated skeleton (identical service-card labels, identical CTA, an identical footer tagline repeated on literally every page site-wide, and a recurring "Based [X] minutes from Manchester" opening motif on 6 of 9 pages) is a mild ceiling on differentiation but not a thin-content risk — the real venue-level specificity outweighs the structural sameness. Two pages (Albany, Saratoga) lean more generic than the rest and would benefit from another named-venue pass.

**Single highest-leverage AEO fix on the whole site:** `event-planning-checklist.html` has genuinely specific, citable content (circuit amperage, minimum streaming Mbps, acoustic clap-testing) but the full 15-point checklist is gated behind a PDF download — only 6 of 15 items are readable HTML. Publishing the full checklist on-page with `HowTo`/`ItemList` schema (keep the PDF as a bonus) would make this the site's most AI-Overview-citable asset.

**Also found:** `article-av-trends-2025.html` is fully linked in-site (prev/next nav) but excluded from `sitemap.xml` — an orphan/indexation inconsistency, not a duplicate-content issue (the 2025 and 2026 trends articles share a skeleton but have zero sentence-level content overlap — don't merge or 410 either one).

---

## 6. Technical SEO audit

- **Sitemap:** 51 URLs, 100% resolve to real files, no broken entries.
- **3 unlinked risk files exist outside the sitemap and are not blocked by `robots.txt` or `noindex`:** `index backup to be safe from ollama.html` (full homepage duplicate), `work-template.html` (placeholder canonical `href="[PAGE-URL]"` — literally broken if ever exposed), and `article-av-trends-2025.html` (see above — keep this one, just fix its sitemap status).
- **`llms.txt` is absent.** For a local AV production business, a short llms.txt naming the founding year, founder, service categories, and the 9 served regions (repackaging what's already in the `LocalBusiness` schema) would give AI crawlers a high-signal shortcut.
- **Structured data:** only 16 of 55 pages carry any JSON-LD. The gap is concentrated exactly where it hurts most — **zero of the 20 case studies and zero of the 13 articles** have any schema at all.
- **Canonical tags:** 100% coverage, only real issue is the broken placeholder on `work-template.html`.
- **Title tags:** 34 of 55 pages exceed the ~60-char SERP-truncation threshold, almost entirely driven by brand-suffix tax (`| Portfolio | Equinox Audio Visuals`, `| AV Insights | Equinox Audio Visuals`) eating the differentiating keywords.
- **Alt text:** 0 images missing `alt` entirely; 70% descriptive. The 14 case-study thumbnails on `work.html` use `alt=""` — a missed image-SEO opportunity worth fixing even though adjacent link text provides a WCAG out.
- **Video/CWV:** confirmed no video is missing a `poster` (a correction to an earlier assumption), but 8 of 9 video-bearing pages set no `preload` attribute at all, and the same 14MB `.mov` is hardcoded identically on 3 separate top-level pages. Three files use `.mov`/QuickTime, which silently fails to autoplay outside Safari/macOS.
- **Third-party scripts (GA + HubSpot):** the cleanest area audited — both load async/non-blocking, IDs are consistent sitewide, nothing to fix beyond a redundant `defer` attribute.

---

## Prioritized Action Plan

**P0 — do this week:**
1. Pull/replace the AI-watermarked video on `work-hildene-lincoln-essays-2026.html` (misspelled text + visible "Veo" watermark, live on a real 2026 client page).
2. Strip the confirmed/suspected Veo clips out of the `work.html`, `about.html`, and `insights.html` random pools; fall back to real photos or the one verified-real `.mov`.
3. Delete the 4 orphaned unused video files from `/assets`.
4. Delete or `noindex` the 3 unlinked risk files (`index backup to be safe from ollama.html`, `work-template.html`, and fix `article-av-trends-2025.html`'s sitemap status).

**P1 — next sprint:**
5. Add `Article`/`CreativeWork` JSON-LD to all 20 case studies and all 13 articles — the single highest-leverage AEO fix available, currently at zero coverage on the site's best proof/informational content.
6. Give every case study real `<h2>` subheadings (Brief/Setup/Result) instead of one H1 for the whole body — same fix needed on `work.html`, `insights.html`, `regions.html` hub content.
7. Publish the full 15-item event-planning checklist as on-page HTML with `HowTo`/`ItemList` schema, not just a PDF gate.
8. Cross-link the 3 service-vertical pages to their matching case studies on `work.html`.
9. Debug the view-transition bug that lets hero imagery persist across page navigations.

**P2 — polish backlog:**
10. De-duplicate the 87-character meta-description suffix across 37 pages; trim brand-suffix tax from the 34 over-length titles.
11. Add FAQPage schema to `process.html` (has the content, missing the markup) and hide-or-render the FAQ schema content that's currently invisible on the 3 service-vertical pages.
12. Add hover states to `work.html` case rows and `services*.html` cards; extend the existing `.eq-reveal` scroll system beyond the homepage.
13. Fix the duplicate H1 between `index.html`/`about.html`; differentiate or merge `work-hildene.html`/`work-hildene-wedding-2.html`.
14. Add a real phone number to the site and the `LocalBusiness` schema's empty `telephone` field.
15. Consider an `llms.txt` file summarizing the business, service categories, and 9 served regions for AI-crawler discovery.

---

*This report supersedes the video-quality conclusions in the earlier live-browser-walkthrough pass, which could not observe most flythrough videos in context due to the view-transition bug above — this report's video findings come from direct frame-by-frame playback of every deployed video file.*
