# 18 — Service narrative alignment & paragraph breathing

**Date:** April 28, 2026  
**Scope:** `design-system-v2.css`, selectors under `body.v2.services-detail` only.

## Goal

Service detail pages (Corporate, Weddings, Galas) felt cramped due to centered body copy and tight paragraph spacing. The hub page (`services.html`, `body` class `v2` only) must stay on the existing centered “technical authority” layout.

## What changed

| Area | Implementation |
|------|----------------|
| **Scope** | All new/changed rules use `body.v2.services-detail` so **`services.html` and other `.v2` pages without `services-detail` are unchanged.** |
| **Measure lock** | `.content-section-v2__prose` uses `max-width: var(--measure)` (62ch), `margin-left: 0`, `margin-right: auto`, and `text-align: left` for a left-rail “technical manual” column. |
| **Body copy** | `.content-section-v2__prose p` and `li`: `text-align: left`. Paragraphs override `.v2 p` horizontal centering with `margin-left: 0; margin-right: 0`. |
| **Paragraph rhythm** | Prose paragraphs use `margin-bottom: 1.25rem` (up from the `0.75rem` `--space-p-bottom` baseline); `p:last-child` keeps `margin-bottom: 0`. |
| **Lists** | Prose `li` items: `margin-bottom: 0.5rem` so bullets read as distinct lines. |
| **Headings in prose** | `h2` and `h3` inside `__prose`: `text-align: left`, `padding-bottom: 0.25rem` under the existing brass bottom border (replacing the **centered** global `h2`/`h3` treatment for this rail only). |
| **Section titles outside prose** | `.content-section-v2__inner > h2` (e.g. “How Pricing Works.”): `text-align: left`, `padding-bottom: 0.25rem` — same left + brass hairline, not the global centered rack headline. |
| **Blockquotes** | `blockquote p` inside `__prose`: left-aligned with horizontal margins reset so quotes match the narrative rail. |

## Files touched

- `design-system-v2.css` — narrative block inserted after existing `body.v2.services-detail` spacing rules (~lines 2564–2604).

## Verification hints

- Open `services-corporate.html`, `services-weddings.html`, or `services-galas.html`: narrative column should be **left-aligned** with **wider paragraph gaps** and **spaced list items**.
- Open `services.html`: intro prose and cards should match **prior** hub behavior (no `services-detail` on `<body>`).
