# Insights Editorial Layout — Work Summary

**Date:** April 27, 2026  
**Scope:** Equinox v2 Insights articles (`article-*.html`) + `design-system-v2.css`

This document summarizes the editorial / “technical culture magazine” refits applied to the Insights article system in this session.

---

## Goals

- Move articles from a default blog feel toward a **high-end technical / editorial** layout.
- Use a **12-column asymmetric grid** inside the 1240px (`.v2`) container.
- Rely on **typography, hairlines, and grid**—no heavy boxes or shadows (where we control styles).
- Token palette for new work: **`--bone`, `--linen`, `--ink`, `--ember`, `--brass`** (v2).

---

## CSS: Section 30 — Editorial Grid (`design-system-v2.css`)

The article block is documented as **Section 30: EDITORIAL GRID** (replacing the older “23.2” article-only header for the same rules).

### Column model

| Zone | Columns | Role |
|------|---------|------|
| **Margin / signature** | 1 | Vertical metadata: read time + category |
| **Quiet Room** | 2–8 | Main narrative (62ch measure on text) |
| **Control Room** | 9–12 | Byline / field notes (9–10), sticky prev/next compass (11–12) |

### Key classes

- **`.article-layout__inner`** — `display: grid; grid-template-columns: repeat(12, minmax(0, 1fr));`
- **`.article-body`** — `grid-column: 2 / 9`
- **`.article-rail`** — Col 1; contains **`.article-rail__stack`** with vertical text (`writing-mode: vertical-rl`), read + **`.article-rail__rule`** (brass hairline) + category
- **`.article-field`** — `grid-column: 9 / 11`; **`.field-note`** (mono, ember) for By / Date only (category moved to rail)
- **`.article-compass`** — `grid-column: 11 / 13`; sticky, vertical **PREV / NEXT**, connected by **1px `var(--brass)`** rule; hover nudge + bottom bar below 1200px

### Breakouts (“artistic”)

- **`.breakout-right`** (and alias **`.breakout-wide`**) — Bleed from the narrative column into the right margin (effectively cols **2–11** within the container), no image radius.
- **`.breakout-full`** — Full width of the 12-col band (cols **1–12**); used for hero wraps and mid-article strips. Optional **`.breakout-full`** on `h2` for full-bleed section titles (hairline only).
- **`.media-break`** — Full-bleed image band between sections; **brass** hairlines top/bottom (no “card” chrome).

### Hero (article top)

- **`.page-hero-v2--editorial`** uses the same 12-col inner; hero image shell uses **`.breakout-full`** (and **`.page-hero-v2__image-wrap`**) at **`grid-column: 1 / 13`**, square corners, full-bleed within the 1240px area.

### Lead-in (opening paragraph)

- First **`p`** in **`.article-body`**: **brass** top border, normal body size for the line.
- **Drop cap** via **`::first-letter`**: `var(--font-display)` large cap + **`::after` clearfix**.

### Responsive

- **≤1199px:** Compass becomes a **fixed bottom bar** (bone, brass top border); `main` gets bottom padding so content isn’t hidden.
- **≤899px:** Inner becomes **block**; rail flips to horizontal; breakouts go full width; field/rail unstick.

---

## HTML: All 13 `article-*.html` pages

Files touched: every **`article-*.html`** in the project root (13 total).

### Structural / class updates (batch + scripts)

- **Hero:** Image wrapper class **`breakout-full`** (was `breakout-wide` in the editorial hero).
- **In-article images:** **`breakout-right`** for wide in-flow figures (replaces `breakout-wide` in body).
- **Col 1 rail:** **`article-rail` → `article-rail__stack`**, read + brass rule + **`article-rail__category`**; **`role="complementary"`** + `aria-label`.
- **Field:** Category removed from field notes (now only **By** + **Date**); category duplicated into rail for the vertical “signature.”
- **Compass:** Links labeled **Prev / Next** (styled uppercase as **PREV / NEXT**); **`aria-label`** still describe target articles.

### Helper script

- **`scripts/patch_editorial_articles.py`**, **`scripts/insert_article_compass.py`**, **`scripts/transform_articles_grid.py`** — optional helpers if new articles are added to match the same structure.

---

## What we did *not* do

- **Per-paragraph field notes** in col 9–12 aligned to arbitrary paragraphs would require more HTML (or scripting). Current layout uses **one** sticky byline block + **one** sticky compass, which matches a practical magazine-style “margin tools” strip.
- **Non-Insights** pages were not part of this pass unless they share the same classes.

---

## Quick verification checklist

- [ ] Open any `article-*.html` in a browser at **≥1200px**: rail left, copy center, field + compass right, no horizontal scrollbar from breakouts.
- [ ] Shrink to **&lt;1200px**: bottom compass bar, readable padding.
- [ ] Shrink to **&lt;900px**: single column, rail horizontal, breakouts full width.

---

## Files reference

| Area | File(s) |
|------|-----------|
| Layout & tokens | `design-system-v2.css` (Section 30 + article page-hero rules) |
| Content | `article-*.html` (×13) |
| Optional scripts | `scripts/patch_editorial_articles.py`, `scripts/insert_article_compass.py`, `scripts/transform_articles_grid.py` |

---

*Generated for internal documentation. Adjust filenames or section numbers in `design-system-v2.css` if the file is reorganized later.*
