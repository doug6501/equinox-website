# Cumulative update summary — April 27, 2026

**Role context:** Senior Release Engineer handoff — consolidated record of implementation work completed in this session (design system, insights articles, navigation, typography, and production SEO artifacts).

---

## 1. Navigation — split “Margin Compass” (two vertical rails)

The former single-margin compass pattern was replaced by **two independent vertical navigation rails** in the **12-column editorial grid** (`design-system-v2.css`, §30 Editorial Grid):

| Column(s) | Element | Role |
|-----------|---------|------|
| **1** | `<nav class="compass-rail compass-rail--prev">` | Previous insight (`PREV_INSIGHT`) |
| **2** | `.article-margin-left` | Read time + category (`.article-rail` only) |
| **3–9** | `.article-body` / `<article class="article-body">` | Main narrative (7 tracks) |
| **10–11** | `.article-field` | Field notes |
| **12** | `<nav class="compass-rail compass-rail--next">` | Next insight (`NEXT_INSIGHT`) |

**Desktop (≥1200px):** split rails are visible; **&lt;1200px:** rails are hidden and **`article-compass-bar`** (fixed bottom) provides prev/next.

**HTML rule:** Both rails are **direct children** of **`.article-layout__inner`**, **siblings** of the narrative block — **not** nested inside **`.article-body` / `<article class="article-body">`**, so grid row height and sticky behavior remain correct.

---

## 2. Stickiness — resolving `position: sticky` failure

**Symptoms:** Split-rail links did not remain in view while scrolling long articles.

**Technical causes addressed:**

1. **Ancestor overflow** — `body.v2` previously used `overflow-x: hidden`, which commonly breaks sticky by altering scroll containment. **Change:** `overflow-x: clip` on **`body.v2`**, with **`@supports not (overflow-x: clip)`** fallback to **`overflow-x: visible`**. **`overflow: visible`** added explicitly on **`.article-layout`** and **`.article-layout__inner`** so parents do not clip sticky descendants.

2. **Grid item stretch** — Sticky rails use **`align-self: start`** (and **`justify-self`** as needed for cols 1 / 12) so rails **do not stretch** to full grid-cell height in a way that fights sticky offset math.

3. **Sticky rail styling** — **`.compass-rail`**: **`position: sticky`**, **`top: 150px`** (clears ~72px fixed header), **`z-index: 100`**, **`align-self: start`**. The prior **`transform: translateY(-50%)`** on the **sticky container** was **removed** (decorative **`::before`** hairlines may still use transform independently).

4. **Markup validity** — Narrative wrapper updated from `<div class="article-body">` to **`<article class="article-body">`** with a matching **`</article>`** immediately before **`compass-rail--next`**. An outer **`<main>`** already wraps the page; a second nested **`<main>`** would be invalid HTML5, so **`article`** preserves both semantics and a single document **`main`**.

**Container height:** **`.article-layout__inner`** has **no fixed height**; the editorial row grows with article content.

---

## 3. Accessibility — article list labels (contrast)

**Issue:** Legacy globals could style strong labels in lists with a **light orange/yellow** tone that fails **WCAG AA** on **`--bone` / `--linen`**.

**v2 fix (in `design-system-v2.css`):**

- **Selectors:** `.v2 .article-layout .article-body ul li strong`, `ol li strong`, and **`b`** variants.
- **`color: var(--ember)`** (`#C2582A`).
- **`font-weight: 600`** where specified.
- **List markers:** **`::marker`** uses **`var(--ember)`** for ordered/unordered lists as documented in the article layout layer.

This pivots list emphasis from problematic light yellow toward the approved **ember** token for sufficient contrast on v2 backgrounds.

*(See also `markdowns/ARTICLE_NAV_AND_CONTRAST_SUMMARY.md` for the parallel doc trail.)*

---

## 4. Logical links — 13-article sequential loop

All **13** **`article-*.html`** files participate in a **closed sequential loop** for compass rails, bottom bar, and pagination targets:

**Forward “Next” chain (cycles):**

`article-av-trends-2026.html` → `article-av-trends-2025.html` → `article-top-5-av-items.html` → `article-choose-av-partner.html` → `article-switch-av-partners.html` → `article-hire-av-lead.html` → `article-make-time-rehearsal.html` → `article-breakout-management.html` → `article-engaging-presentation.html` → `article-conference-speaking.html` → `article-small-meetings.html` → `article-zoom-meeting-tips.html` → `article-wedding-av-equipment.html` → **back to** `article-av-trends-2026.html`.

**Previous** links mirror the reverse order. Each page updates **`compass-rail--prev` / `--next`**, **`article-compass-bar`**, and **`article-pagination`** consistently.

---

## 5. Global alignment — centered headings + A/V rack spacing

**Horizontal alignment (`design-system-v2.css`):**

- **`h1`–`h6`** under **`.v2`**: **`text-align: center`** for symmetrical “technical authority” layout (with documented exceptions: e.g. **`.run-of-show`** remains functional left/right; **`.main-footer`** heading styles reset to column labels).

**Spacing tokens (`stable-header.css`):**

Functional aliases wired into typography:

- **`--space-h1-top` / `--space-h1-bottom`**: **3rem** (primary narrative “breath” around **h1**).
- **`--space-h2-top` / `--space-h3-top`**: **2rem** (section breaks).
- **`--space-heading-hairline-gap`**: **0.5rem** under **h2/h3** before a **`1px solid var(--brass)`** hairline.
- **`--space-p-bottom`**: **1rem** paragraph rhythm.

**Hero exclusions:** Full-bleed heroes (e.g. **`.case-study-hero`**, **`.page-hero-v2`**, **`.work-hero`**) **do not** receive the large **h1** rack margins or heading hairlines so hero layout stays intact.

**Component spacing integrity:**

- **Ledger** (homepage): **`padding-bottom: var(--space-1)`** on entries for row separation.
- **Run-of-show** (case studies): row separation via **`padding`** (and **`box-shadow`** removed on the sidebar where updated for quieter chrome).

---

## 6. Site scope — where changes apply

| Layer | Scope |
|--------|--------|
| **`design-system-v2.css`** | All pages with **`body.v2`** — global typography, article grid, compass rails, footer/header exceptions, ledger/run-of-show, content sections, etc. |
| **`stable-header.css`** | Shared **v2 spacing tokens** (rack aliases). |
| **`article-*.html` (×13)** | Editorial grid HTML, compass targets, **`article.article-body`** closure before **`compass-rail--next`**, sequential prev/next loop. |
| **`work.html`** | Work index header/centering and **`.case-row`** padding rhythm (inline + shared classes). |
| **Case studies** | **14** **`work-*.html`** files inherit layout/CSS (no per-file compass edits required unless already customized). |
| **Core marketing pages** | **`services.html`**, geo **`av-services-*.html`**, **`index.html`**, **`about.html`**, **`insights.html`**, **`contact.html`**, **`process.html`**, **`regions.html`**, etc. — inherit **`.v2`** rules (centering, spacing, cards, heroes). |

**SEO / production (same session branch of work):**

- **`sitemap.xml`** at repo root: **48** URLs, base **`https://www.eqxav.com/`**, priorities aligned with hubs vs. case studies vs. supporting tiers.
- **`robots.txt`**: **`Sitemap:`** pointed at **`https://www.eqxav.com/sitemap.xml`** for crawler consistency.

---

## Files touched (reference)

| Area | Primary files |
|------|----------------|
| Design system | `design-system-v2.css`, `stable-header.css` |
| Insights | All `article-*.html` (13), plus `markdowns/` docs as cited |
| Work index | `work.html` |
| Production discovery | `sitemap.xml`, `robots.txt` |

---

## Verification checklist (release)

- [ ] Spot-check one **long** insight article ≥1200px: rails stick while scrolling; no horizontal scrollbar regression from **`overflow-x: clip`** vs. **`visible`** fallback.
- [ ] **&lt;1200px:** bottom **`article-compass-bar`** usable; rails hidden.
- [ ] **Keyboard:** **`compass-rail__link`** focus states still visible (**ember** → **ink** on hover/focus).
- [ ] **Contrast:** sample **`<ul><li><strong>`** on **`--bone`** passes intended AA target with **ember**.
- [ ] **Loop:** click through **Next** across all 13 articles and confirm return to start.

---

*End of cumulative summary — April 27, 2026.*
