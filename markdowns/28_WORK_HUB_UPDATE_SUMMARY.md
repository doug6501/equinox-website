# 28 — Work hub update (Women in Leadership 2026)

**Date:** May 14, 2026  
**Goal:** Surface the new case study on `work.html` with a v2.1-consistent card, thumbnail, and verified links to Instruction 27.

## Changes

| Area | Detail |
|------|--------|
| Listing container | The main index wrapper is now `<div class="container work-grid">` so the hub has an explicit **`.work-grid`** hook (the page previously used `.container` only). |
| New card (top of list) | First **`.case-row`** after the client logo strip: **`work-women-in-leadership-2026.html`**, title **Women in Leadership Luncheon**, category line **Corporate / Community** (in `case-row__meta` with venue and **May 13, 2026**), thumbnail **`assets/thumb-hildene-2026.jpg`** (`loading="eager"` + `fetchpriority="high"`). |
| Category label | New **`work-index__category`**: **Corporate / Community** — placed above the new row and **above** the existing Weddings block so the show is first in the index. |
| Row numbering | All previous rows renumbered **02–15**; the new project is **01**. |
| Typography | **`.case-row__name`** now uses **`var(--font-heading)`** (Newsreader) at **`font-weight: 600`** site-wide on this page for parity with v2.1 Technical Producer headings. |
| SEO copy | Meta descriptions updated from **fourteen** to **fifteen** case studies. |

## Photography (Instruction 28 + your four files)

Source files in **`assets/`** (uploaded JPEGs):

- `women-in-leadership-luncheon-2026-hildene-01.JPG` … `04.JPG`

Derived for the site:

| File | Source | Notes |
|------|--------|--------|
| `assets/hero-hildene-2026.jpg` | `…-hildene-04.JPG` | Long edge **1920px** — case study hero (`work-women-in-leadership-2026.html`). |
| `assets/thumb-hildene-2026.jpg` | `…-hildene-01.JPG` | Long edge **800px** — work hub card (`work.html`). |

## Link audit (Instruction 27 ↔ 28)

| Check | Result |
|-------|--------|
| `work-women-in-leadership-2026.html` exists at repo root | **OK** |
| New card `href` | **`work-women-in-leadership-2026.html`** |
| Thumbnail `src` | **`assets/thumb-hildene-2026.jpg`** (file present) |
| Case page hero `src` | **`assets/hero-hildene-2026.jpg`** (regenerated from **-04**; file present) |

No automated crawl was run; verification is filesystem + string match on the three paths above.

## Optional next steps

- Use **`women-in-leadership-luncheon-2026-hildene-02.JPG`** and **`-03.JPG`** in a future gallery block on the case page if you want all four frames on that URL.
