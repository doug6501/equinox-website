# Equinox Full-Site Review Synthesis — 2026-08-05

**Method:** dual-agent (A: 897e6481 · B: 5f27dc62) + Hallmark audit 8901c035 + pattern explore e2564d0e  
Hallmark study (Signal Blue/Porcelain) · brand hypothesis · live browser (index/work/about) · Aug 3 baseline re-verify.

**Overall score: 6.6 / 10** (Δ +0.2 vs Aug 3’s 6.4)  
Heuristics (Assessment A): **23/36 Acceptable**. Detector: 4 slop warnings (mostly advisory/false-positive for Equinox voice).  
Gains: Lincoln Essay hero → still photo; risk files mitigated; CTA copy clean; Dorset geo more specific.  
Still dragging: Veo pools live (watermarks reconfirmed); FAQ schema mismatch; hub heading dead zones; contact `#FF6B35` + dark planner; work logo marquee; services triad.

---

## Brand DNA study (Phase 1)

See `.hallmark/study-signal-blue-2026-08-05.md`.

- Porcelain `#F8F7F4` ≈ bone tint — not a new world.
- Signal Blue `#0057FF` as flood primary = refuse for hospitality Equinox.
- Hybrid lean: optional interactive `--signal` only; keep ink fills + Newsreader + bone.

## Brand hypothesis (Phase 2)

See `.hallmark/brand-hypothesis-2026-08-05.md`.

**Recommend: Improve Quiet Room (option 1 or 2 Hybrid). Do not pivot to Signal Blue world (option 3).**

---

## Hallmark audit (hubs) — 6 critical · 11 major · 5 minor

Worst: `services.html` 3-icon card template; global centered type; shared `page-hero-v2` shell; Ft3 footer; legacy colors in `stable-header.css`; index 100vh centered hero + 3 work cards + auto-carousel.

Best structural hub: `process.html` (timeline + visible FAQ).

---

## Pattern / Aug 3 P0 re-verify

| Item | Status |
|------|--------|
| Hildene Lincoln 2026 hero video | **Fixed** (still photo) |
| Veo pools work/about/insights | **OPEN** |
| Crooked Ram gallery flythrough | **OPEN** |
| Orphan Veo files | **OPEN** (5 files) |
| Meta suffix duplication | **OPEN** (48 pages; worse) |
| Empty telephone schema | **OPEN** (10 pages) |
| Duplicate H1 index/about | **OPEN** |
| FAQ schema vs visible | **OPEN** (12 schema-only; process has FAQ, no schema) |
| Service → case deep links | **OPEN** |
| Hub listing headings as div | **OPEN** |
| Client logo strip on work.html | **Brand conflict** (guidelines ban logo marquees) |
| CTA “Start a project” | **Clean** |
| body.v2 | **Clean** (except redirect stub) |

Detector (hubs): advisory em-dash on index/about; buzzword/aphorism flags on process (mostly false-positive for Equinox voice).

---

## Decision gate (required before implementation)

1. **Keep Quiet Room** — compliance + P0/P1 backlog only  
2. **Hybrid** — add cooler interactive accent token with strict roles  
3. **Pivot** — Signal Blue/Porcelain as brand world (not recommended)

---

## Suggested PR slices (later)

1. P0 video purge (pools + Crooked Ram + delete orphans)  
2. FAQ integrity (render or remove schema; add process FAQPage)  
3. SEO/AEO (headings, telephone, meta uniqueness)  
4. Brand/chrome (services triad, centering defaults, logo strip)  
5. Optional hybrid accent tokens (only if option 2)
