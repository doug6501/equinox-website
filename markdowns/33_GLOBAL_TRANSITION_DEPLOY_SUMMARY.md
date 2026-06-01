# 33 — Global Cross-Document View Transitions Deployed

**Date:** June 1, 2026  
**Status:** Live in production

---

## Objective

Promote the page fade transition from a two-page inline test (Instruction 32) to a global rule in `design-system-v2.css`, making the cinematic fade apply across the entire site.

---

## What Was Done

### 1. Removed Inline Test Blocks
The temporary `<style>` blocks added in Instruction 32 were stripped from both:
- `index.html`
- `work-women-in-leadership-2026.html`

### 2. Appended Global Rule to `design-system-v2.css`

```css
@view-transition {
    navigation: auto;
}
::view-transition-old(root) {
    animation: 350ms ease-out fade-out;
}
::view-transition-new(root) {
    animation: 350ms ease-in fade-in;
}
@keyframes fade-out {
    from { opacity: 1; }
    to   { opacity: 0; }
}
@keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
}
```

Duration was extended from 300ms (test) to **350ms** for a slightly more cinematic feel at the global level.

### 3. Committed and Pushed

```
git commit -m "Feature: Southwestern Vermont Chamber logo in footer + global page transitions"
git push origin main
```

Commit hash: `f7d50f5`  
All 57 changed files pushed to `origin/main`.

---

## How It Works at Scale

Because `design-system-v2.css` is loaded on every page, the `@view-transition { navigation: auto; }` declaration is present site-wide. The API activates a cross-fade on any same-origin navigation where both origin and destination pages load this stylesheet — which is every page on the site.

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 126+ | ✅ Full |
| Edge 126+ | ✅ Full |
| Opera | ✅ Full |
| Firefox | ❌ Ignored gracefully |
| Safari | ❌ Ignored gracefully |

---

## Live URL

[https://www.eqxav.com](https://www.eqxav.com)
