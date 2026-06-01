# 32 — Localized Test: Native Page Fade Transitions

**Date:** June 1, 2026  
**Status:** Completed — later promoted to global (see Instruction 33)

---

## Objective

Execute an isolated trial of the Cross-Document View Transition API to test a cinematic page-fade effect when navigating between two specific pages before committing it site-wide.

---

## What Was Done

A `<style>` block containing the View Transition CSS was inserted directly before `</head>` in exactly two files:

**`index.html`** (line 117)  
**`work-women-in-leadership-2026.html`** (line 37)

### Style Block Applied

```css
@view-transition {
    navigation: auto;
}
::view-transition-old(root) {
    animation: 300ms ease-out fade-out;
}
::view-transition-new(root) {
    animation: 300ms ease-in fade-in;
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

---

## How It Worked

The Cross-Document View Transition API requires **both** the origin and destination page to declare `@view-transition { navigation: auto; }`. Since only these two pages were updated, the 300ms cross-fade only fired on the Homepage ↔ Women in Leadership route. All other navigation remained instant.

---

## Browser Support

- **Supported:** Chrome/Edge 126+, Opera
- **Not supported:** Firefox, Safari (ignored gracefully — no visual breakage)

---

## Outcome

Test confirmed the effect works as intended. Transition was promoted to the global stylesheet in Instruction 33, and the inline test blocks were removed from both files.
