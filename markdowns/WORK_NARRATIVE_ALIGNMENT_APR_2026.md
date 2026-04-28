# Work narrative alignment — April 2026

Case study story columns are left-anchored at **`62ch`** with typography tuned toward the Insights editorial language—without adopting the full 12-column article grid.

## CSS (`design-system-v2.css`)

### Global centering exception

- **`.v2 main p` / `.v2 main li`** still center most pages.
- **`.v2 main .case-body__narrative p`** and **`li`** explicitly **`text-align: left`** so case stories override the default.

### `.case-body__narrative`

- **`max-width: var(--measure)`**, **`margin-left: 0`**, **`margin-right: auto`**, **`text-align: left`** on the column.
- **Paragraphs**: **`margin-bottom: var(--space-p-bottom)`** (**`0.75rem`**), rack-aligned spacing.
- **Lead paragraph** (**`> p:first-of-type`**): **`border-top: 1px solid var(--brass)`**, **`padding-top: 1.5rem`**, **`font-size: 1.15rem`** (declared *after* base `p` rules so size wins in the cascade).

### Headings (future-proof for stories that add sections)

- **H2 / H3**: Display serif scale tokens, **`margin-top`**: **`var(--space-h2-top)`** / **`var(--space-h3-top)`** (**`1.25rem`**), **`padding-bottom: var(--space-heading-hairline-gap)`** (**`0.25rem`**), **`border-bottom: 1px solid var(--ember)`**.
- **H4**: Left-aligned subheads without an extra hairline (no bottom border) to avoid noise next to H2/H3.
- **Heading + following `p`**: **`margin-top: 0`** on that paragraph to keep rack rhythm tight.

### Sidebar

- **`.run-of-show`** is unchanged (sticky, linen panel, mono table). The main grid remains **`1fr 280px`** with **`align-items: start`** so the technical column stays top-aligned beside the new left prose column.

## HTML (14 case studies)

All **`work-*.html`** files link **`design-system-v2.css?v=6`** for cache busting.

## Files touched

| Item | Count |
|------|--------|
| `design-system-v2.css` | 1 |
| `work-*.html` | 14 |
