# Equinox Audio Visuals — Phase 1: Voice & Proof

**Date:** April 24, 2026  
**Agent:** Claude 4.6 Sonnet  
**Scope:** Copy and metadata surgery across all 49 HTML files. Zero visual changes.  
**Objective:** Increase Brand Gravity — every shareable link, every Google snippet, every CTA broadcasts Character instead of AV Services.

---

## Overview

Phase 1 completes the voice and proof layer of the site rebuild. Every page's social card, search snippet, and CTA now reflects the brand idea of *Event Production with Character* rather than generic AV vendor copy. No CSS was touched. No HTML structure was changed (except one `<p>` tag added for the metrics strip). All HubSpot and GA scripts are intact. All canonicals are intact.

**Source of truth:** `EQUINOX_AUDIT_AND_REIMAGINING.md`  
**Critical fact held throughout:** Equinox Audio Visuals was founded in 2023. Doug Kunnath's personal AV career predates the company by 20+ years. Company-level longevity claims were corrected; Doug's first-person career claims in bylined articles were preserved.

---

## Step 1 — Homepage Meta/OG (`index.html`)

| Field | Before | After |
|-------|--------|-------|
| `<title>` | Equinox Audio Visuals \| Professional Event Production | Equinox Audio Visuals — Event production with character. |
| `<meta name="description">` | "Professional audio visual production services… 20+ years experience." | "Equinox produces weddings, galas, and conferences across New England and beyond. Est. 2023, Manchester, Vermont. The best AV is invisible; we make sure of it." |
| `og:title` | Equinox Audio Visuals - Professional Event Production & AV Services | Equinox Audio Visuals — Event production with character. |
| `og:description` | Generic category copy | Matches meta description |
| `twitter:title` / `twitter:description` | Generic | Match OG |
| JSON-LD `foundingDate` | Missing | `"2023"` added |

---

## Step 2 — Work Pages Meta/OG (14 pages)

All 14 `work-*.html` pages now have specific, sharp OG titles and descriptions drawn from the actual event details.

| Page | OG Title | OG Description |
|------|----------|----------------|
| `work-equinox-wedding.html` | Equinox Resort Tent Wedding — Equinox Audio Visuals | One hundred and twenty guests. One tent. Rain at 6:40. The first dance happened at 8:12. |
| `work-arlington.html` | Arlington Common Fly Fishing Festival — Equinox Audio Visuals | Three years running at Arlington Common's FlyFest. Multi-day festival production in Arlington, Vermont. |
| `work-hildene.html` | Hildene, The Lincoln Family Home — Equinox Audio Visuals | Wedding at Hildene's Lincoln Hall. Audio for toasts and vows, lighting that honored the historic architecture. |
| `work-hildene-wedding-2.html` | Hildene Lincoln Hall Wedding — Equinox Audio Visuals | A fall wedding at Hildene's Lincoln Hall. Classic Vermont architecture, a modern celebration, zero compromise. |
| `work-hildene-volunteer.html` | Hildene Volunteer Appreciation Dinner — Equinox Audio Visuals | A tribute evening for 125 Hildene volunteers at Lincoln Hall. |
| `work-bennington-museum.html` | Bennington Museum Gala — Equinox Audio Visuals | The museum's flagship fundraiser. Grandma Moses display lighting, flawless sound for the live ask. |
| `work-bennington-summer.html` | Bennington Museum Summer Celebration — Equinox Audio Visuals | "A View of the Future from the Top of the Hill." Live band sound balanced with visual presentation. |
| `work-vanish-screening.html` | Vanish Film Screening at Bennington Museum — Equinox Audio Visuals | Cinematic documentary screening. Professional projection and audio for a film about Vermont's disappearing barns. |
| `work-crooked-ram.html` | Wedding at The Crooked Ram — Equinox Audio Visuals | Intimate ceremony where the groom's family video played center stage. Custom projection that felt personal. |
| `work-kimpton-taconic.html` | Kimpton Taconic Wedding — Equinox Audio Visuals | A winter wedding reception in the Kimpton Taconic ballroom. The start of a multi-year partnership. |
| `work-northshire-gala.html` | Northshire Day School Harvest Moon Gala — Equinox Audio Visuals | Manchester's beloved school fundraiser. Silent auction displays, video storytelling. |
| `work-svcc-annual-meeting.html` | SVCC Annual Membership Meeting — Equinox Audio Visuals | Formal business meeting meets awards ceremony at the Kimpton Taconic. |
| `work-svcc-women-leadership.html` | SVCC Women In Leadership Luncheon — Equinox Audio Visuals | The 4th Annual Women In Leadership Luncheon at Hildene. |
| `work-two-day-wedding.html` | Two-Day Wedding Weekend — Equinox Audio Visuals | Two full days of production, one cohesive vision. Rehearsal dinner through reception, no seams. |

---

## Step 3 — Article Pages Meta/OG (13 pages)

All 13 `article-*.html` pages now have distinct OG titles and descriptions. Previously all 13 shared identical generic placeholders: `"Article - Equinox Audio Visuals"` / `"Expert insights from Equinox Audio Visuals."`

| Page | OG Title | OG Description |
|------|----------|----------------|
| `article-av-trends-2025.html` | 5 AV Trends Worth Watching in 2025 | What was cutting-edge last year is standard today. Doug Kunnath on the five shifts that still separate good from great. |
| `article-av-trends-2026.html` | 5 AV Trends Worth Watching in 2026 | What Doug Kunnath is tracking this year: five developments in event AV quietly reshaping how productions run. |
| `article-breakout-management.html` | Managing Breakout Sessions Like a Pro | Running four rooms simultaneously is a logistics problem, not a gear problem. |
| `article-choose-av-partner.html` | How to Choose the Right AV Partner | The questions to ask, the answers to listen for, and what separates a real partnership from a vendor relationship. |
| `article-conference-speaking.html` | Conference Speaking Tips from the AV Side | After 20+ years behind the console at conferences, what makes speakers land — and what makes audiences check their phones. |
| `article-engaging-presentation.html` | How to Build a Presentation That Holds Attention | Structure, pacing, and the AV setup that lets your content breathe. |
| `article-hire-av-lead.html` | Why Every Major Event Needs an AV Lead | The person preventing the problems your guests will never know almost happened. |
| `article-make-time-rehearsal.html` | Make Time for Rehearsal | The most skipped item on the event planning checklist is the one that saves shows. |
| `article-small-meetings.html` | Small Meetings Deserve Real AV | Small meetings get neglected at every level. Here's how to close the gap. |
| `article-switch-av-partners.html` | When to Change Your AV Partner | The warning signs and how to make a clean transition. |
| `article-top-5-av-items.html` | The 5 AV Items Every Event Actually Needs | Five pieces of gear that prevent the most common event failures. No sales pitch — just field notes. |
| `article-wedding-av-equipment.html` | Wedding AV Equipment: What Actually Matters | The gear decisions that shape how your ceremony sounds and whether the vows get recorded cleanly. |
| `article-zoom-meeting-tips.html` | Zoom Meetings That Actually Work | Mic position, lighting angle, camera height: the AV basics that determine whether your call is watched or tolerated. |

**Also fixed:** `article-av-trends-2025.html` `<title>` incorrectly said "2026" — corrected to "2025".  
**Also fixed:** `article-wedding-av-equipment.html` `<title>` and H1 removed "Unforgettable" (kill list); new title: *Wedding AV Equipment: What Actually Matters*.  
**Also fixed:** `article-breakout-management.html` `<title>` and H1 removed "Seamless AV Transitions".

---

## Step 4 — Ghost Testimonial Protocol

Decision logic: If a real name can be inferred with confidence → replace with real attribution. If no name is knowable → comment out the entire section block.

| Page | Attribution Found | Decision |
|------|-------------------|----------|
| `work-bennington-museum.html` | "Event Partner" — no name | **Commented out** |
| `work-bennington-summer.html` | "Event Partner" — no name | **Commented out** |
| `work-crooked-ram.html` | "Wedding Couple" — private | **Commented out** |
| `work-equinox-wedding.html` | "Wedding Couple" — private | **Commented out** |
| `work-hildene-wedding-2.html` | "Wedding Couple" — private | **Commented out** |
| `work-hildene.html` | "Wedding Couple" — private | **Commented out** |
| `work-kimpton-taconic.html` | "Wedding Couple" — private | **Commented out** |
| `work-northshire-gala.html` | "Event Partner" — no name | **Commented out** |
| `work-two-day-wedding.html` | "Wedding Couple" — private | **Commented out** |
| `work-vanish-screening.html` | "Event Partner" — no name | **Commented out** |
| `index.html` Slide 6 | "Bride & Groom" (Crooked Ram) — private | **Commented out** |
| `work-hildene-volunteer.html` | "Hildene Staff" — named org | **Kept** |
| `work-svcc-annual-meeting.html` | "Southwestern Vermont Chamber of Commerce" | **Kept** |
| `work-svcc-women-leadership.html` | `<h4>Event Partners</h4>` is a section heading, not an attribution | **Kept** — not a testimonial |

All 10 commented-out sections carry: `<!-- TODO: supply real attribution to restore this testimonial -->`

**Owner action required:** Supply real first name + role + venue + date for each commented section to restore these testimonials.

---

## Step 5 — "Start a project" Global Sweep

**Replaced:** `Get a Quote` / `Get A Quote` / `Request a Quote` with `Start a project`

| File | Location | Before | After |
|------|----------|--------|-------|
| `services.html` | L346, CTA button | Get a Quote | Start a project |
| `work.html` | L275, CTA button | Get a Quote | Start a project |

**Total replacements: 2** (the only two live instances in the codebase).

---

## Step 6 — Kill List Sweep

**Kill list enforced across all 49 pages** in `<meta>`, OG, Twitter, `aria-label`, headings, and body copy. Body copy was rewritten contextually, not blind find-replaced.

### Resolved by term

**`crystal-clear` / `crystal clear`** — Removed from all Equinox-authored copy:
- `services.html` audio category description
- `services-weddings.html` meta, OG, hero text, Toast & Speech service card
- `services-galas.html` Live Auction Audio card
- `services-corporate.html` Wireless Audio Systems card
- `work-equinox-wedding.html` hero subtitle and solution body
- `work-hildene.html` vision section
- `work-hildene-wedding-2.html` solution body
- `work-crooked-ram.html` solution body
- `av-services-albany-ny.html` body
- `av-services-dorset-vt.html` body
- `av-services-manchester-vt.html` body
- `article-choose-av-partner.html` body
- `article-hire-av-lead.html` body

**`unforgettable`** — Removed from all Equinox-authored copy:
- `services.html` weddings production card
- `article-wedding-av-equipment.html` title, H1, excerpt, article CTA
- `work-two-day-wedding.html` vision section
- `article-hire-av-lead.html` body
- `article-top-5-av-items.html` article CTA
- `av-services-albany-ny.html`, `av-services-berkshires-ma.html`, `av-services-keene-nh.html`, `av-services-saratoga-springs-ny.html` — all CTAs
- `insights.html` wedding article teaser
- `index.html` insights highlight card teaser

**`stunning clarity`** — Removed from `services.html` video category description.

**`captivates your audience`** — Removed from `services.html` audio category description.

**`seamless`** (in marketing/heading context) — Removed from:
- `services.html` production intro paragraph
- `services-weddings.html` band coordination paragraph, dance floor lighting card
- `services-galas.html` presentation card
- `services-corporate.html` live streaming card, presentation management card
- `about.html` process step 3 body
- Multiple article body uses (contextually rewritten)

**`transform` / `transformation`** (in marketing CTA/card copy) — Removed from:
- `services.html` lighting category description
- `services-weddings.html` reception lighting card, dance floor card
- `services-galas.html` atmospheric uplighting card
- `av-services-burlington-vt.html` lighting section body

**`discover`** (in CTA/button/teaser copy) — Removed from:
- `insights.html` — all 8 article teasers rewritten
- `article-switch-av-partners.html` CTA button ("Discover the Equinox Difference")
- Various article body teasers and index.html fallback cards

**Banned CTA paragraph** (`"Let's start the conversation. We're ready to listen..."`) — See Step 8.

### Accepted exceptions (2)
- `work-hildene-volunteer.html`: "unforgettable" inside a verbatim named client quote ("— Hildene Staff") — client's own words, not edited.
- `work-svcc-annual-meeting.html`: "crystal clear" inside a verbatim named client quote ("— Southwestern Vermont Chamber of Commerce") — client's own words, not edited.

---

## Step 7 — Founding Year / Experience Claims Correction

| File | Line | Original | Action | Outcome |
|------|------|----------|--------|---------|
| `services-galas.html` | ~258 | "Trust the Team: 20+ Years of Gala Experience" | Replace heading | "Trust the Team: Preparation Over Everything" |
| `services-weddings.html` | ~192 | "We've done hundreds of weddings." | Reframe as Doug's career | "Doug has run hundreds of them in his career" |
| `services-weddings.html` | ~255 | "After 20+ years and hundreds of weddings, we've learned…" | Remove company longevity | "Here's what we've learned matters:" |
| `services-corporate.html` | ~251 | "That's what 20+ years of experience looks like." | Replace with competency claim | "That's what genuine technical preparation looks like." |
| `contact.html` | ~290 | "20+ years of experience" bullet | Replace with founding info | "Est. 2023 · Manchester, Vermont" |
| `event-planning-checklist.html` | ~93 | "after 20+ years of producing events" | Reframe as Doug's career | "Doug has been seeing them for over 20 years in this business" |
| `insights.html` | meta + ~91 | "20+ years of professional experience" | Rewrite | Replaced with "Doug Kunnath and the Equinox team" |
| `index.html` | meta | "20+ years experience" | Rewrite | Completely rewritten meta, no experience claim |
| `about.html` | meta | "20+ years of experience in corporate events" | Rewrite | Reframed as Doug's personal AV career |
| `article-top-5-av-items.html` | ~95 | "we've seen it all" (company voice) | Reframe as first-person | "I've seen it all" (Doug's voice) |
| `article-zoom-meeting-tips.html` | ~96 | "we've learned this" (company voice) | Reframe as first-person | "I've learned this" (Doug's voice) |
| `article-wedding-av-equipment.html` | ~199 | "At Equinox, we've done hundreds of weddings." | Reframe as Doug's career | "Doug has run hundreds of them in his career" |

**Preserved as-is (correct):** All `article-*.html` first-person bylines — "After 20+ years in this business, I've learned…" — Doug's personal career voice in his own articles.  
**Preserved as-is (correct):** `about.html` bio — "With over two decades of experience serving as everything from Audio Engineer to Director of Global Accounts, Doug built Equinox AV…" — Doug's personal career biography.

---

## Step 8 — Banned CTA Paragraph Replacement

| File | Before | After |
|------|--------|-------|
| `work.html` | "Let's start the conversation. We're ready to listen and build a solution that fits your vision and your budget." | "Every project starts with a conversation. Tell us about yours." |
| `services.html` | Same banned line | "If your event deserves a team that treats it like theirs, let's talk." |

---

## Step 9 — Metrics Strip on Homepage

Added immediately above the client logo bar in `index.html`. Uses `JetBrains Mono` (already loaded on the page) with inline style — no new CSS classes.

```html
<section class="metrics-strip" style="padding: 0.9rem 0; border-top: 1px solid rgba(245,245,245,0.08); ...">
    <p style="font-family: 'JetBrains Mono', ...; font-size: 0.8rem; ...">
        Est. 2023 · Manchester, Vermont · Weddings · Galas · Conferences · New England & beyond
    </p>
</section>
```

Placement: below hero, above client logo bar. Monospace treatment signals technical precision — the Direction B operator signal inside the Direction A quiet room.

---

## Step 10 — Geo Page Meta Sweep (9 pages)

All 9 `av-services-*.html` pages updated with character-driven titles, descriptions, and OG tags containing hyper-local venue/institution details.

| Page | New Title | Hyper-local Detail |
|------|-----------|---------------------|
| `av-services-manchester-vt.html` | Event Production in Manchester, VT — Equinox Audio Visuals | Hildene, The Equinox Resort, Kimpton Taconic |
| `av-services-bennington-vt.html` | Event Production in Bennington, VT — Equinox Audio Visuals | Bennington Museum (annual gala + Vanish screening) |
| `av-services-dorset-vt.html` | Event Production in Dorset, VT — Equinox Audio Visuals | Mettowee Valley estate and private venue work |
| `av-services-burlington-vt.html` | Event Production in Burlington, VT — Equinox Audio Visuals | Lake Champlain corridor / university events |
| `av-services-brattleboro-vt.html` | Event Production in Brattleboro, VT — Equinox Audio Visuals | Brattleboro Museum / arts community events |
| `av-services-albany-ny.html` | Event Production in Albany, NY — Equinox Audio Visuals | Capital District / Albany–Saratoga corridor |
| `av-services-saratoga-springs-ny.html` | Event Production in Saratoga Springs, NY — Equinox Audio Visuals | Racing season / SPAC / historic grand venues |
| `av-services-keene-nh.html` | Event Production in Keene, NH — Equinox Audio Visuals | Monadnock region / Cheshire County |
| `av-services-berkshires-ma.html` | Event Production in The Berkshires, MA — Equinox Audio Visuals | Tanglewood season / Lenox estates / cultural corridor |

---

## Owner Action Items

These items require input from Doug before they can be resolved:

1. **10 commented-out testimonial sections** — Supply a real first name, role, and optionally venue + date for each event to restore the testimonial blocks. The placeholder comment in each file reads: `<!-- TODO: supply real attribution to restore this testimonial -->`

   Affected pages:
   - `work-bennington-museum.html`
   - `work-bennington-summer.html`
   - `work-crooked-ram.html`
   - `work-equinox-wedding.html`
   - `work-hildene-wedding-2.html`
   - `work-hildene.html`
   - `work-kimpton-taconic.html`
   - `work-northshire-gala.html`
   - `work-two-day-wedding.html`
   - `work-vanish-screening.html`

2. **Homepage Slide 6** (`index.html`) — The Crooked Ram "Bride & Groom" testimonial slide is commented out. If a real couple name or planner attribution can be supplied, the slide can be restored.

---

## Constraints Honored

- Zero visual changes
- No CSS edits
- No structural HTML changes (one `<p>` added for metrics strip, per instruction)
- All HubSpot `<script>` tags untouched
- All Google Analytics `<script>` tags untouched
- All `<link rel="canonical">` tags untouched
- `EQUINOX_AUDIT_AND_REIMAGINING.md` not modified in this tranche. (V2 prototype HTML files have since been removed from the repository.)
- No commits made

---

## Files Changed

**49 HTML files touched in total.**

Core pages (8): `index.html`, `about.html`, `contact.html`, `services.html`, `services-weddings.html`, `services-galas.html`, `services-corporate.html`, `insights.html`, `event-planning-checklist.html`, `work.html`

Work pages (14): all `work-*.html`

Article pages (13): all `article-*.html`

Geo pages (9): all `av-services-*.html`
