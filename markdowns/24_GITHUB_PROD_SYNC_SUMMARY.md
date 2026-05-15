# 24 — GitHub production synchronization (verification)

**Date:** May 14, 2026  
**Repository:** [doug6501/equinox-website](https://github.com/doug6501/equinox-website)  
**Goal:** Confirm that `main` on GitHub matches the intended production state (including `markdowns/` and the prior push summary) after the typography, spacing, and cleanup batch landed on `origin/main`.

## Verification performed

| Check | Method | Result |
|------|--------|--------|
| Remote `main` tip | `git ls-remote origin refs/heads/main` | `4cec152214d686362437da004af39ed45bf97a20` |
| `markdowns/` on remote | `git ls-tree origin/main markdowns` | Tree present (`040000 tree ee01ef2c…`) |
| `23_GITHUB_PUSH_SUMMARY.md` on remote | `git cat-file -e origin/main:markdowns/23_GITHUB_PUSH_SUMMARY.md` | Object exists |
| Public raw file | `GET https://raw.githubusercontent.com/doug6501/equinox-website/main/markdowns/23_GITHUB_PUSH_SUMMARY.md` | **HTTP 200** |
| Local vs remote | `git fetch origin main` then `git rev-parse HEAD` and `origin/main` | **Aligned** — both at `4cec152` (working tree had only unstaged `.DS_Store` at verification time) |

## Tip of `origin/main` (verified)

- **Commit:** `4cec152` — `docs: add 23 GitHub push summary`

Recent history on `main` (newest first) includes the v2.1 batch that preceded that doc commit:

1. `4cec152` — `docs: add 23 GitHub push summary`  
2. `8a34a3b` — `docs: add 22 production deploy summary (v2.1)`  
3. `7690ad9` — `EQX AV v2.1: Final editorial alignment, typography overhaul, and Max Breath spacing pass`

## Outcome

- **GitHub `main`:** Verified — `markdowns/` is present on the default branch, and `markdowns/23_GITHUB_PUSH_SUMMARY.md` resolves on both Git objects and the public raw URL.  
- **Netlify:** Not verified from this session; confirm a production deploy for commit `4cec152` (or the matching deploy log time) in the Netlify dashboard if you need build-level proof.

## Note on this document

`markdowns/24_GITHUB_PROD_SYNC_SUMMARY.md` was added locally as the task deliverable. To publish it to GitHub and trigger another Netlify build, commit and push when ready:

```bash
git add markdowns/24_GITHUB_PROD_SYNC_SUMMARY.md
git commit -m "docs: add 24 GitHub prod sync summary"
git push origin main
```
