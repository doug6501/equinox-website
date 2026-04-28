# Emoji and decorative symbol removal — summary

**Date:** April 28, 2026  
**Goal:** Site-wide typography-only presentation aligned with the technical “Field Notes” aesthetic. **SVG** markup, **inline icons** used as UI chrome (e.g. header hamburger, lightbox controls), and **structural** patterns such as the **Assurance Ledger** or **contact wizard** were **not** altered—only **text-node** emoji and similar pictographs were removed.

## Scan scope

- All **`.html`** files under the repo were scanned (**52** files found, including `assets/`).
- The user brief referenced **48** HTML files; the working tree currently contains **52** HTML paths—every one was included in the scan.

## Detection method

- Unicode ranges covering **emoji / pictographs** (e.g. U+1F300–U+1FAFF), **miscellaneous symbols** (U+2600–U+27BF), **emoticons** (U+1F600–U+1F64F), **transport & map** (U+1F680–U+1F6FF), **supplemental symbols** (U+1F900–U+1F9FF), and **musical symbol blocks** (U+1D100–U+1D24F, e.g. staff / clef code points).
- **No** `𝄞` (U+1D11E treble clef) literal appeared in **`article-hire-av-lead.html`** or elsewhere in HTML; that article used a **musical score emoji** (🎼) at the end of one paragraph, which was removed.

## Files edited (9)

| File | Change |
|------|--------|
| `article-hire-av-lead.html` | Removed trailing **🎼** from narrative `<p>`. |
| `article-switch-av-partners.html` | Removed trailing **🚩** from narrative `<p>`. |
| `article-conference-speaking.html` | Removed trailing **😴** from narrative `<p>`. |
| `av-services-albany-ny.html` | Service card titles: removed **🔊** / **💡** / **🎥** prefixes (text labels only). |
| `av-services-berkshires-ma.html` | Same three service card titles. |
| `av-services-keene-nh.html` | Same three service card titles. |
| `av-services-saratoga-springs-ny.html` | Same three service card titles. |
| `assets/2026-Event-Planners-Technical-Checklist.html` | Footer contact lines: removed **📧** / **🌐** / **📱** / **💼** prefixes; left plain labels and URLs. |

## Verification

- Re-scan of **all** HTML files: **zero** characters remaining in the emoji / musical-symbol ranges used above.
- Other region **`av-services-*.html`** pages (e.g. Bennington, Burlington) already used **emoji-free** service titles; no change required there.
- **Ledger** (`index.html`), **compass rails**, and **SVG-only** UI were not part of this pass and contained no text emoji in the scanned ranges.

## Intentionally preserved

- **Typographic punctuation** already in copy: en dash, em dash, ellipsis entities, **`*`** for stage directions in prose, **middot** (`&middot;`) in UI strings.
- **`<svg>`** paths and **`<img>`** assets (logos, photos).
- **No** Font Awesome text classes were present in the edited snippets; if added later, keep icons as markup/CSS, not raw emoji in body copy.

## Follow-up (optional)

- When adding new articles or region pages, **avoid** pasting emoji into **`article-body`** or **`service-card-v2__title`** text; prefer mono labels or plain English per the design system.
