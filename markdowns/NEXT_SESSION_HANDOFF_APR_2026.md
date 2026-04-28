# Equinox Audio Visuals — Next Session Handoff

**Prepared:** April 25, 2026 (last updated April 25, 2026)  
**For:** Next agent session (any model, any date)  
**Read this document first. Then read the files listed in Section 0. Then implement in the order given.**

> **STATUS AS OF APRIL 25, 2026 (LATE EVENING):** All seven phases (0–6) complete. The entire site — 48 pages — carries `class="v2"` and loads `design-system-v2.css`. A post-phase UX polish pass has also been completed (see `markdowns/POLISH_AND_VIDEO_APR_2026.md`). The only remaining agent-actionable work is the Lighthouse/accessibility audit (Section 4C.5 below). All other open items require Doug's input (Section 5).
>
> **Most recent changes (April 25 evening):** See `markdowns/POLISH_AND_VIDEO_APR_2026.md` — items 11–16 cover:
> - `work.html` hero text visibility fix (CSS specificity)
> - Random flythrough video on reload (index.html, work.html + about.html)
> - Homepage hero converted from still image to randomly-rotating video
> - Scroll-reveal fade-up animations on index.html sections (IntersectionObserver)
> - Insight cards now native `<a>` links (cmd+click works)
> - HubSpot form redirects to thank-you.html on success
> - Lighthouse audit complete: Accessibility 93 → **100**, console errors fixed, robots.txt created
> - script.js 4 syntax errors removed (stray console.log fragments)
> - Metrics strip contrast fixed (WCAG AA), testimonial h2 contrast fixed, footer h4→h3 sitewide
> - Sticky header root-cause fix (position: fixed, body padding-top: 70px)
> - Headshot crop fix on about.html (object-position: top center)
> - Ampersands replaced with "and" sitewide across all 48 pages
> - Nearby area pill contrast fixed for v2 bone/linen backgrounds
>
> **Phase 6 session summaries:**
> - `markdowns/PHASE_6_TIER1_APR_2026.md` — 7 core buyer pages
> - `markdowns/PHASE_6_TIER2_APR_2026.md` — 13 article pages  
> - `markdowns/PHASE_6_TIER3_APR_2026.md` — 9 geo/SEO pages
> - `markdowns/PHASE_6_TIER4_APR_2026.md` — event-planning-checklist.html

---

## 0. Required Reading Before Anything Else

Read these files in this order before touching any code:

1. `EQUINOX_AUDIT_AND_REIMAGINING.md` — brand direction, voice, IA, phased roadmap. Source of truth. **Do not modify.**
2. `markdowns/PHASE_4_IA_AND_CONVERSION_APR_2026.md` — Phase 3 completion + Phase 4 items A–F record.
3. `markdowns/PHASE_4_CONTINUATION_NAV_REGIONS_ARTICLES_APR_2026.md` — Phase 4 continuation: nav reduction, regions hub, article fixes, insights audit.
4. **This file** — factual corrections and next steps.

---

## 1. Standing Decisions — Hold in Memory Throughout All Sessions

- Equinox Audio Visuals was **founded in 2023**. It is approximately 3 years old. All company-level longevity claims have been corrected or removed.
- Doug Kunnath's **personal AV career predates the company**. First-person bylined-article claims ("After 20+ years...") are accurate and must be preserved.
- **Anonymous testimonials** — 11 testimonial sections are commented out with `<!-- TODO: supply real attribution to restore this testimonial -->`. Leave them commented out. Do not restore or remove.
- **Do not modify** `EQUINOX_AUDIT_AND_REIMAGINING.md` without intent. (Legacy `index-v2.html` / `index-v2-b.html` prototypes were removed from the repository.)
- All future update sessions must write a summary markdown to `markdowns/` using the convention `[TOPIC]_[MON_YEAR].md`.
- The `.v2` body-class scope strategy is the architectural pattern for the design system rollout.
- **Do not introduce a new brand color.** Ember is the only accent. No gradients anywhere, for any reason.
- Typography: Fraunces (display) + Inter Tight (body) + JetBrains Mono.

---

## 2. Completed Phases — Summary

| Phase | Status | Summary |
|---|---|---|
| **0 — Hygiene** | ✅ Complete | `:root` brace fix, video source fix, canonical fixes, duplicate CSS retired |
| **1 — Voice & Proof** | ✅ Complete | Meta/OG rewritten across all pages; kill list enforced; "Start a project" sweep; founding year corrected; geo pages rewritten |
| **2 — Design System v2** | ✅ Complete | v2 token layer; gradients/shimmer/hover-lift killed globally; `design-system-v2.css` created; homepage + case studies migrated |
| **3 — Signature Moments** | ✅ Complete | All 13 work pages migrated to .v2; cursor trail; Ledger; CSS LUT; `work.html` rebuilt; `thank-you.html` created |
| **4 — IA & Conversion** | ✅ Complete | Nav reduction (48 files); `regions.html` created; all 13 article HTML structure fixed; insights audit; footer updated on all 17 v2 pages; factual corrections (4 case studies); run-of-show sticky guard; contact promise line |
| **5 — Polish & Kill** | ✅ Complete | `console.log` sweep (script.js clean + contact.html inline script cleaned); PWA confirmed fully retired; old-style footer labels updated across 31 non-v2 pages |
| **6 — Remaining Page Migrations** | ✅ Complete | All 32 remaining pages migrated to v2: 7 core buyer pages (Tier 1), 13 article pages (Tier 2), 9 geo pages (Tier 3), event-planning-checklist.html (Tier 4). Site is now fully v2 — 48 pages total. |

---

## 3. Factual Corrections — ✅ COMPLETED (April 25, 2026)

All corrections confirmed by Doug Kunnath on April 25, 2026. Implemented in the April 25 session. See `markdowns/FACTUAL_CORRECTIONS_AND_PHASE5_APR_2026.md` for full change log.

---

### 3A. `work-equinox-wedding.html` — 3 changes

**Background:** The Equinox Resort tent wedding, 120 guests, September 2024. Planner: Candice Grace Events. The entire event — ceremony AND reception — stayed under the tent. Rain occurred but had zero effect on the event. The bride's music teacher (a family friend who had been teaching her since she was nine) performed during the ceremony: guitar and voice, live. The officiant also performed. Rain is confirmed as a non-event, not the story.

---

**Change 1 — Hero headline: remove rain as the lead**

Find this exact text in `work-equinox-wedding.html`:
```html
            <h1 class="case-study-hero__headline display">
                One hundred and twenty guests. One tent.
                Rain that arrived ten minutes before the ceremony.
            </h1>
```

Replace with:
```html
            <h1 class="case-study-hero__headline display">
                One hundred and twenty guests under a tent
                at the Equinox Resort. Every vow heard at every seat.
            </h1>
```

---

**Change 2 — Body copy: remove indoor reception claim + rain reference in performer paragraph**

Find this exact paragraph:
```html
                <p>The bride&rsquo;s music teacher &mdash; a family friend who had been teaching her since she was nine &mdash; performed during the ceremony. Guitar and voice, live, in a tent in the rain. We ran a discrete DI and vocal mic, mixed live. The performance was the moment every guest remembered. The speakers were behind the floral arrangements; nobody saw them.</p>
```

Replace with:
```html
                <p>The bride&rsquo;s music teacher &mdash; a family friend who had been teaching her since she was nine &mdash; performed during the ceremony. Guitar and voice, live. We ran a discrete DI and vocal mic, mixed live. The performance was the moment every guest remembered. The speakers were behind the floral arrangements; nobody saw them.</p>
```
*(Only change: remove "in a tent in the rain" — the four words between "live," and "We ran")*

---

**Change 3 — Body copy: fix the fabricated indoor reception**

Find this exact paragraph:
```html
                <p>Reception moved to the resort&rsquo;s indoor space without ceremony. Music transitioned. The first dance happened at 20:12. Zero cuts. The weather was never the story.</p>
```

Replace with:
```html
                <p>The reception followed in the same space under the tent. Music transitioned. The first dance happened at 20:12. Zero cuts. The weather was never the story.</p>
```

Also find and update the first body paragraph, which frames the whole event around avoiding moving indoors — that framing is now wrong since nothing was ever at risk of moving indoors:

Find:
```html
                <p>The couple had chosen an outdoor ceremony at the Equinox Resort for reasons that mattered to them &mdash; the view, the light, the vows they&rsquo;d written. Our job was not to move the event indoors when the weather turned. Our job was to make sure moving indoors was never necessary.</p>
```

Replace with:
```html
                <p>The couple had chosen an outdoor ceremony at the Equinox Resort for reasons that mattered to them &mdash; the view, the light, the vows they&rsquo;d written. The tent was always the plan. Our job was to make sure every one of a hundred and twenty guests heard every word of it.</p>
```

---

### 3B. `work-svcc-women-leadership.html` — 1 name correction (3 instances)

**Background:** Keynote speaker's full public name is **Deborah Slaner Larkin**. Confirmed by Bennington Banner, Manchester Journal, and SVCC's own website coverage of the 4th Annual Women In Leadership Luncheon, May 14, 2025.

Do a **replace-all** of `Deborah Larkin` → `Deborah Slaner Larkin` in this file only. There are 3 instances:
- Hero headline (line ~84)
- Body paragraph (line ~95)
- Run-of-show entry (line ~122)

Do not change anything else in this file.

---

### 3C. `work-two-day-wedding.html` — 1 run-of-show correction

**Background:** Two-day wedding weekend. Day 1: rehearsal dinner at Hill Farm (Doug handled audio + string lights). Day 2: ceremony + reception at Hildene. **Doug did NOT help with the ceremony** (neither audio nor lighting). He handled uplighting, stage lighting, and dance floor lighting for the cocktail hour and reception only.

Find this exact run-of-show row:
```html
                <div class="run-of-show__row">
                    <span class="run-of-show__time">17:00</span>
                    <span class="run-of-show__event">Ceremony &middot; Lighting to preset</span>
                </div>
```

**Delete this entire `<div class="run-of-show__row">...</div>` block.** The cocktail row at 18:00 becomes the first Day 2 entry after load-in.

---

### 3D. `work-crooked-ram.html` — 5 changes

**Background:** The Crooked Ram event was the **rehearsal dinner** the night before a wedding (not the wedding itself). The video the groom's parents made was the centerpiece of the rehearsal dinner. There was no ceremony at The Crooked Ram. Equinox handled: the video display, the microphones for toasts, and the cocktail hour audio.

---

**Change 1 — Hero image alt text**

Find:
```
alt="A private wedding at The Crooked Ram, Vermont, August 2025."
```
Replace with:
```
alt="A rehearsal dinner at The Crooked Ram, Vermont, August 2025."
```

---

**Change 2 — Run-of-show: remove the ceremony row**

Find and delete this entire block:
```html
                <div class="run-of-show__row">
                    <span class="run-of-show__time">16:00</span>
                    <span class="run-of-show__event">Ceremony &middot; Wireless audio active</span>
                </div>
```

---

**Change 3 — Run-of-show: rename "Reception" to "Rehearsal dinner"**

Find:
```html
                    <span class="run-of-show__event">Reception &middot; Video presentation cue</span>
```
Replace with:
```html
                    <span class="run-of-show__event">Rehearsal dinner &middot; Video presentation cue</span>
```

---

**Change 4 — Body copy: remove fabricated ceremony paragraph**

Find and delete this entire paragraph:
```html
                <p>The ceremony audio required the same precision on a smaller scale &mdash; discrete wireless lapel for the officiant, the vows heard at every seat. The technical scope of this event was focused. The production value was in doing the focused scope right.</p>
```

---

**Change 5 — Sidebar spec: correct event type**

Find:
```html
                        <span class="run-of-show__spec-value">Private wedding</span>
```
Replace with:
```html
                        <span class="run-of-show__spec-value">Private rehearsal dinner</span>
```

Also update the first body paragraph to reference "rehearsal dinner" instead of "wedding":

Find:
```html
                <p>The groom&rsquo;s parents had spent months building a video about their son&rsquo;s life. Every decade accounted for: childhood footage, photographs, the accumulating evidence of a person becoming himself. They wanted every guest at the wedding to see it and hear it properly. That was the production requirement that mattered most at this event.</p>
```
Replace with:
```html
                <p>The groom&rsquo;s parents had spent months building a video about their son&rsquo;s life. Every decade accounted for: childhood footage, photographs, the accumulating evidence of a person becoming himself. They wanted every guest at the rehearsal dinner to see it and hear it properly. That was the production requirement that mattered most at this event.</p>
```

Also update the second paragraph which says "The video ran during the reception":

Find:
```html
                <p>We installed a 75-inch monitor positioned so every seat had a clear sightline to the screen. High-fidelity playback, discreet speakers, levels calibrated to the room&rsquo;s size and ambient noise floor. The video ran during the reception. The room was quiet. People watched.</p>
```
Replace with:
```html
                <p>We installed a 75-inch monitor positioned so every seat had a clear sightline to the screen. High-fidelity playback, discreet speakers, levels calibrated to the room&rsquo;s size and ambient noise floor. The video ran at dinner. The room was quiet. People watched.</p>
```

---

## 4. Remaining Work — ✅ ALL COMPLETED (April 25, 2026)

All items below were completed in the April 25 session. See `markdowns/FACTUAL_CORRECTIONS_AND_PHASE5_APR_2026.md` for full change log.

---

### 4A. Case Study Template — Run-of-Show Pinned Column (Phase 4, remaining)

The audit spec calls for the run-of-show sidebar to **pin** while the narrative on the left scrolls (Direction B transplant into Direction A). Currently the sidebar is static. Implementation: `position: sticky` on the `.run-of-show` element with a `top` value that keeps it in viewport on scroll, with a `max-height` guard so it doesn't overflow on short viewports.

Check `design-system-v2.css` for the existing `.run-of-show` rules before adding anything.

---

### 4B. Contact Page — Promise Line (Phase 4, remaining)

`contact.html` needs a one-sentence promise above the HubSpot form:

> *"You'll hear from us within 24 hours. If your event is within two weeks, we move faster than that."*

This is already live on `thank-you.html`. It should appear on `contact.html` as well, above the form embed.

---

### 4C. Phase 5 — Polish & Kill

These are cleanup items, to be done after all Phase 4 items are confirmed complete:

1. **`_footer.html` retirement** — This partial is confirmed dead code. `loadFooter()` in `script.js` checks for `.main-footer` inside `footer-placeholder` and skips the fetch if found — which it always is. Either remove the file and the `loadFooter()` function, or leave them both and note in a comment that the inline footer takes precedence.

2. **Old-style footer label consistency** — Non-v2 pages (all 13 article pages, 9 geo pages, services pages, contact, about) have old-style inline footers where the Navigate column still says "Our Work" and "About Us." These will resolve naturally when those pages are migrated to v2. If a standalone sweep is desired, use the same Python replacement approach used in the Phase 4 nav reduction session.

3. **PWA retirement** — `manifest.json` and `service-worker.js` exist; `script.js` has a comment indicating PWA features were removed. Either commit to PWA (register the service worker, wire the manifest) or delete both files and remove any references in `script.js`.

4. **`console.log` removal** — `script.js` contains `console.log` statements in the mobile menu and sticky action bar paths. Remove all of them. Premium brands don't log to the console.

5. **Lighthouse + accessibility audit** — Run Lighthouse on `index.html`, `work.html`, and one case study page. Address any contrast, missing `alt`, or performance regressions introduced during the v2 migration. Color contrast of `var(--ember)` on `var(--bone)` should be verified for WCAG AA.

6. **Lock the system** — After Phase 5 is complete, write a final `markdowns/PHASE_5_POLISH_[MON_YEAR].md` summarizing what was cleaned up. At that point the design system is locked.

---

## 5. Owner Action Items (Persistent, Not Agent Work)

These require Doug's input or action — no agent can complete them:

1. **11 commented-out testimonials** — Each has `<!-- TODO: supply real attribution to restore this testimonial -->`. Supply: first name + role + venue + date for each. Once supplied, the agent can uncomment and format them per the Direction A pull-quote spec.

2. **Typography licensing** — Current v2 display face is Fraunces (Google Fonts, free). The audit recommends GT Sectra + Söhne (~$900–$2,400 one-time web license). When licenses are purchased, update `--font-display` and `--font-body-v2` in `stable-header.css` and `design-system-v2.css`.

3. **Footer spec line** — `v2.0 · Last show: Bennington Museum · Apr 19, 2026` is hardcoded in the footer of all 17 v2 pages. Update after each new show is produced.

4. **contact.html → thank-you.html redirect** — Wire the HubSpot form's success redirect URL to `thank-you.html`.

5. **Real LUT** — The CSS `--lut-filter: brightness(1.03) contrast(0.97) saturate(0.88) sepia(0.12)` in `design-system-v2.css` is a production approximation. A real Lightroom/Capture One preset produces a `.cube` file that can be applied to the asset library.

6. **Photography production** — Each case study should eventually have: one signature still (16:9), three supporting stills, one 15-second silent clip. Several case studies currently reuse gallery images from the existing library. New photography on a quarterly basis is the long-term plan.

---

## 6. File Inventory — v2 Pages (Design System Applied)

**All 48 pages** now carry `class="v2"` on `<body>` and load `design-system-v2.css`. The site is fully migrated.

```
index.html
work.html
work-arlington.html
work-bennington-museum.html
work-bennington-summer.html
work-crooked-ram.html
work-equinox-wedding.html
work-hildene.html
work-hildene-volunteer.html
work-hildene-wedding-2.html
work-kimpton-taconic.html
work-northshire-gala.html
work-svcc-annual-meeting.html
work-svcc-women-leadership.html
work-two-day-wedding.html
work-vanish-screening.html
thank-you.html
regions.html
about.html
services.html
services-corporate.html
services-weddings.html
services-galas.html
insights.html
contact.html
article-av-trends-2025.html
article-av-trends-2026.html
article-breakout-management.html
article-choose-av-partner.html
article-conference-speaking.html
article-engaging-presentation.html
article-hire-av-lead.html
article-make-time-rehearsal.html
article-small-meetings.html
article-switch-av-partners.html
article-top-5-av-items.html
article-wedding-av-equipment.html
article-zoom-meeting-tips.html
av-services-manchester-vt.html
av-services-bennington-vt.html
av-services-berkshires-ma.html
av-services-brattleboro-vt.html
av-services-burlington-vt.html
av-services-dorset-vt.html
av-services-keene-nh.html
av-services-albany-ny.html
av-services-saratoga-springs-ny.html
event-planning-checklist.html
```

---

## 7. Quick Reference — Key File Locations

| File | Purpose |
|---|---|
| `stable-header.css` | Primary stylesheet for all pages. Nav, header, footer (old), typography base, mobile. |
| `design-system-v2.css` | v2 token override layer. Only loaded on `.v2` pages. Tokens, nav overrides, run-of-show, case study layout, footer v2. |
| `script.js` | All JS: header/footer loading, mobile nav, cursor trail (v2 IIFE), sticky action bar, Ledger animation, case study prev/next. |
| `regions.html` | New .v2 hub page for all 9 geo markets. Footer only, not in top nav. |
| `markdowns/` | All session summaries. Read the most recent before starting any session. |
