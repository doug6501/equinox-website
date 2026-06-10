# 34 — Design Skill Calibration Summary (UI/UX Pro Max)

**Date:** June 9, 2026
**Scope:** Wire the local `ui-ux-pro-max` design-intelligence database into the project as a strict QC layer, and run a verification audit of `work.html` spacing against the local UX guidelines.

---

## 1. Model Routing (per Global Routing Protocol)

| Field | Value |
|-------|-------|
| Task tier | **Tier 2 (Moderate)** — rules-file authoring + localized structural audit |
| Recommended model | **Gemini 3.1 Pro** (balanced reasoning, efficient token use) |
| Model actually used | **Claude Opus 4.8** (heavier than required) |
| Cost warning | This task ran on a Tier-3-class model. Routing it to Gemini 3.1 Pro next time would lower token cost with no loss of quality for this work. |

---

## 2. What Was Changed

### Created `.cursorrules` (project root)
The site previously had **no** global rules file (`.cursorrules`, `AGENTS.md`, and `.cursor/rules/` were all absent). A new `.cursorrules` was created with the **DESIGN SYSTEM INTEL (UI/UX PRO MAX)** directive placed at the very top, followed by a short project-context block (token locations, `.v2` scoping).

The directive enforces:
- **Location:** `.cursor/skills/ui-ux-pro-max/`
- **Verify HTML structure** against `ui-reasoning.csv` on every HTML create/modify.
- **Equinox AV v2.1 boundaries:** Premium Service Minimalism / Content-First Dark Mode; Newsreader serif headers + sans body; 15rem "Max Breath" verticals; 350ms global view transitions.
- **Silent-abort anti-patterns:** no neumorphism/gradient-mesh clutter, no "AI Indigo" purple→pink, no emoji icons (SVG only), no layout shift (explicit image dimensions).

### Confirmed local design database is present
`.cursor/skills/ui-ux-pro-max/` contains the full searchable corpus — `ui-reasoning.csv` (161 product archetypes), color/typography/landing/stack CSVs, and the `search.py` engine. The relevant archetypes for this site are **#39 Wedding/Event Planning** and **#33 Luxury/Premium Brand** ("storytelling + social proof," elegant/refined typography, slow premium reveals 400–600ms).

---

## 3. Verification Audit — `work.html` Spacing

**Reference guidelines:** `.cursor/skills/ui-ux-pro-max/cli/assets/data/ui-reasoning.csv` (layout/anti-pattern rules) and live tokens in `stable-header.css` `:root`.

### Token baseline (from `stable-header.css`)
```
--space-6: 96px  (6rem)
--space-7: 160px (10rem)   ← largest spatial token in the system
--dur-2:   320ms           ← largest "standard" motion token
--measure: 62ch
```

### Point-by-point findings

1. **Section vertical rhythm — `.work-index` (`work.html:39`)**
   - `padding: var(--space-6) 0 var(--space-7) 0;` → **96px top / 160px bottom**.
   - Directive requires **15rem (240px) "Max Breath"**. The section tops out at **10rem bottom / 6rem top**, so it is **80px short of the bottom target and 144px short on top**. ⚠️ **Gap vs directive.**

2. **CTA block — `.work-cta` (`work.html:247`)**
   - Same `var(--space-6) 0 var(--space-7) 0;` pattern → identical 6rem/10rem rhythm. Consistent internally, but again caps at 10rem, not the mandated 15rem. ⚠️

3. **No 15rem token exists yet.** The scale ends at `--space-7: 160px`. To honor the Spatial Rule literally, a `--space-8: 240px;` (15rem) token should be added to `stable-header.css` and applied to the core section boundaries. ✅ **Recommended action.**

4. **Header / intro internal spacing — `.work-index__header`, `.work-index__intro`**
   - Uses `--space-2`→`--space-6` consistently with a `--measure` (62ch) cap on the intro. Hierarchy is clean and content-first. ✅ **Compliant.**

5. **Category dividers — `.work-index__category`**
   - `padding: var(--space-4) 0 var(--space-2) 0;` with `:first-of-type` zeroing the top. Good rhythmic reset between groups. ✅ **Compliant.**

6. **Animation timing — cross-document view transitions**
   - `design-system-v2.css` defines `::view-transition-old/new(root)` at **600ms**. Directive locks these at **350ms**. ⚠️ **Gap vs directive (250ms over).**
   - In-page transitions in `work.html` use `--dur-1`/`--dur-2` (160/320ms), which sit within the spirit of the 350ms ceiling. ✅

7. **Typography — header pairing**
   - `.case-row__name` uses `--font-heading` (= **Newsreader** under `.v2`) ✅, but `.work-index__title` and `.work-cta__body` use `--font-display` (**Fraunces / DM Serif Display** family). Two serif families coexist in headers. ⚠️ **Minor:** confirm this is intentional layering vs. the "preserve Newsreader headers" rule.

### Anti-pattern scan (silent-abort checklist)

| Anti-pattern | Status | Evidence |
|---|---|---|
| Emoji as icons | ✅ Pass | Arrows use `&rarr;` HTML entities, not emoji glyphs |
| AI Indigo / purple→pink | ✅ Pass | Palette is ink/bone/ember/slate/linen — no indigo |
| Neumorphism / gradient mesh | ✅ Pass | Flat editorial list; only subtle linear masks on thumbs |
| Layout shift / missing dimensions | ⚠️ Mixed | `.case-row__thumb` has explicit `320×168` ✅; **client logos** use `height:52px; width:auto` (no reserved width) and the **hero `<video>`** has no explicit aspect-ratio → both can cause minor CLS on load |
| Hover layout shift | ⚠️ Minor | `.case-row:hover` mutates `margin`/`padding` (negative-margin inset), which reflows the row rather than using a non-reflowing color/opacity transition |

---

## 4. Recommended Follow-ups (not yet applied)

1. Add `--space-8: 240px; /* 15rem — Max Breath */` to `stable-header.css` and apply it to `.work-index` / `.work-cta` outer padding to satisfy the Spatial Rule.
2. Retune `::view-transition-old/new(root)` from `600ms` → `350ms` in `design-system-v2.css` to match the Animation rule.
3. Reserve dimensions for the client-logo strip and hero `<video>` (explicit `width`/`aspect-ratio`) to eliminate CLS.
4. Replace the hover `margin/padding` shift on `.case-row` with a non-reflowing treatment (background/box-shadow only).
5. Decide whether dual serif families (`--font-display` + `--font-heading`) are intentional, or consolidate to Newsreader per the directive.

> These are surfaced for review only — no layout/animation files were modified in this calibration pass. Only `.cursorrules` and this summary were created.

---

## 5. Files Touched

- **Created:** `.cursorrules`
- **Created:** `markdowns/34_DESIGN_SKILL_CALIBRATION_SUMMARY.md`
- **Read/audited (unchanged):** `work.html`, `stable-header.css`, `design-system-v2.css`, `.cursor/skills/ui-ux-pro-max/**`
