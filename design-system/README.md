# Equinox Design System (export)

Machine-readable Quiet Room tokens for the marketing site and **Equinox Flow / ERP**.

| File | Purpose |
|------|---------|
| [MASTER.md](MASTER.md) | Human source of truth for implementers |
| [tokens.json](tokens.json) | Importable colors, type, space, motion, brand strings |
| [pages/insights.md](pages/insights.md) | Insights hub + article magazine overrides |
| [../docs/brand-guidelines.md](../docs/brand-guidelines.md) | Full branding rules |
| [../docs/marketing-guidelines.md](../docs/marketing-guidelines.md) | Voice, CTA, page jobs |

## Website ↔ Flow

1. Treat `tokens.json` as the shared contract — do not fork hex values in the app.
2. Primary CTA string must remain **`Start a project`** (see `brand.ctaPrimary`).
3. Marketing site CSS remains the visual reference: `stable-header.css` + `design-system-v2.css` on `body.v2`.
4. Page overrides (rare) go in `design-system/pages/<name>.md` and override MASTER for that surface only.

## Import sketch (Flow)

```ts
import tokens from './tokens.json';

const theme = {
  colors: tokens.color,
  space: tokens.space,
  fonts: tokens.typography,
  cta: tokens.brand.ctaPrimary,
};
```
