# 22 — Production deploy summary (EQX AV v2.1)

**Date:** April 28, 2026  
**Release label:** v2.1 (editorial alignment, typography, Max Breath spacing)

## 1. Final workspace cleanup

| Item | Result |
|------|--------|
| **`*.bak` files** | None found in the repository. |
| **Legacy v1 / duplicate CSS** | **Removed `production.css`** (~99 KB). It was not referenced by any `*.html` or `*.js` file; the site uses `stable-header.css` and `design-system-v2.css` only. |
| **Other orphan CSS** | No additional unused stylesheets at repo root. |

## 2. Git staging and version commit

- **Staged:** Full working tree with `git add .` (HTML, `markdowns/`, assets, `_redirects`, `sitemap.xml`, `robots.txt`, scripts, etc.).
- **Commit message:** `EQX AV v2.1: Final editorial alignment, typography overhaul, and Max Breath spacing pass`
- **Commits on `main`:** **`7690ad9`** (v2.1 release) plus a small follow-up commit that adds this file.
- **Scope (7690ad9):** 296 files changed (large asset rename / documentation moves included).

## 3. Push to GitHub (origin)

**Status in this environment:** `git push origin main` **did not complete** because HTTPS authentication to `https://github.com/doug6501/equinox-website.git` is not available in the agent environment (`could not read Username for 'https://github.com': Device not configured`).

**Action required on your machine** (with credentials or SSH configured):

```bash
cd /path/to/equinox-website
git push origin main
```

After a successful push, Netlify (if connected to this repo and branch) should queue a **Production deploy** for `eqxav.com`.

## 4. Netlify — dashboard checks (manual)

The agent **cannot** sign in to the Netlify UI. After you push, please:

1. Open the Netlify project for **eqxav.com**.
2. Confirm a new **Production deploy** appears for the **current tip of `main`** after you push (should include the v2.1 commit and this summary if both are present locally).
3. In the **Deploy log**, confirm:
   - **`_redirects`** is applied (Netlify reports redirect rules; line count varies by project).
   - **Static assets** and **`sitemap.xml`** / **`robots.txt`** are present in the published output (no 404 for those paths on the live host).

**Reference:** Pre-flight behavior and sitemap/redirect notes are documented in [09_NETLIFY_PREFLIGHT_SUMMARY.md](09_NETLIFY_PREFLIGHT_SUMMARY.md).

## 5. Post-launch verification (live)

**URLs checked (HTTP, Apr 28, 2026):** `https://www.eqxav.com/services-corporate.html`, `https://www.eqxav.com/insights.html`, `https://www.eqxav.com/sitemap.xml` — all returned **HTTP 200** with **Server: Netlify**.

**Spot-check note:** At the time of this summary, the **live** `services-corporate.html` still showed the **older** inline `page-hero` block (not the local v2.1 `page-hero-v2` section), which is **expected** until `main` is pushed and the production deploy finishes. The **live** `insights.html` already exposes **category** filter controls (`All Articles`, `Weddings`, `Corporate Events`, `Technology`, `Professional Tips`).

**After your push completes,** re-open in a browser (hard refresh or private window):

- [Corporate services](https://www.eqxav.com/services-corporate.html) — confirm the **v2.1** corporate hero (e.g. `page-hero-v2` / updated layout per repo).
- [Insights](https://www.eqxav.com/insights.html) — confirm **navigation pills** / category controls match the shipped HTML.

## 6. One-line model note (task routing)

This run was **operations and documentation** (Tier 1–2). A **fast, low-cost** model is appropriate; no heavy multi-file refactor was required for the deploy steps themselves.

---

*Generated for task 22. Main release commit: **`7690ad9`**. Run `git log -2 --oneline` after pull to see the summary commit on your machine.*
