# Work narrative alignment — summary

**Date:** April 28, 2026  
**Scope:** Case study story columns (`work-*.html` + `design-system-v2.css`)

## What we changed

### Story prose (global centering removed)

- **`.v2 main p` / `.v2 main li`** still center most v2 pages.
- Case narratives now use **`.v2 main .case-body__narrative`** (higher specificity) so story **`p` / `li`** are **`text-align: left`** and win over the global main rule without a duplicate early override block.

### Measure and alignment

- **Column:** `max-width: var(--measure)` (**`62ch`** in `stable-header.css`), `margin-left: 0`, `margin-right: auto`, **`text-align: left`**.
- **Paragraphs:** Same **`max-width: var(--measure)`** with left margins so blocks stay rack-aligned, not auto-centered like generic `.v2 p`.

### Lead-in (project abstract)

- **Selector:** `.v2 main .case-body__narrative > p:first-of-type`
- **Brass top rule:** `border-top: 1px solid var(--brass)`
- **Spacing:** `padding-top: 1.5rem`
- **Type scale:** `font-size: 1.15rem`

### H2 / H3 editorial hairline (Insights parity)

- **Before:** Bottom hairline used **`var(--ember)`** on narrative H2/H3.
- **After:** **`padding-bottom: var(--space-heading-hairline-gap)`** and **`border-bottom: 1px solid var(--brass)`** — same brass hairline treatment as **`.v2 .article-layout .article-body h2` / `h3`** on Insights articles.
- **H4** remains a subhead **without** an extra bottom hairline (avoids visual noise next to H2/H3).

## Files touched

| File | Change |
|------|--------|
| `design-system-v2.css` | Section 15: narrative selectors scoped to **`main`**, brass H2/H3 hairlines, inline **`62ch`** comments on measure rules. |
| `work-*.html` (14 files) | Stylesheet query bumped **`?v=7` → `?v=8`** so deployed browsers pick up the CSS update. |

## HTML body copy

No structural edits were required in the 14 case files: prose already lives in **`.case-body__narrative`**; there were no inline **`text-align: center`** overrides on story paragraphs.

## Cache bust

After future edits to **`design-system-v2.css`**, increment the **`?v=`** query on **`work-*.html`** (and other pages that load v2) so CDN and browser caches refresh.
