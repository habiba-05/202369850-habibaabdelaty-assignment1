# Technical Documentation

## Overview

Plain HTML/CSS/JavaScript site — no build tools, no frameworks, no dependencies. Everything runs
directly in the browser from static files.

## File structure

```
index.html          Page structure & content (About, Projects, Skills, Contact)
css/styles.css       All styling: design tokens, layout, components, responsive rules
js/script.js         All interactivity, organized into small single-purpose functions
assets/images/       Hand-built SVG illustrations used as profile art & project placeholders
docs/                This documentation + the AI usage report
```

## Design system

### Color tokens (defined as CSS custom properties in `:root`)

| Token | Light value | Role |
|---|---|---|
| `--color-bg` | `#FBF3F0` | Page background |
| `--color-bg-alt` | `#F6E4D8` | Alternate section background (Projects, Contact) |
| `--color-surface` | `#FFFFFF` | Cards, form, chips |
| `--color-ink` | `#2B1B22` | Primary text |
| `--color-ink-soft` | `#6B5560` | Secondary text |
| `--color-rose` | `#C6547A` | Primary accent (buttons, links, active states) |
| `--color-rose-pale` | `#F3D9DF` | Soft accent backgrounds |
| `--color-lavender` | `#8A6FA8` | Secondary accent (tags) |
| `--color-border` | `#E7CFD6` | Borders / dividers |

A parallel **dark theme** ("night bloom") redefines the same tokens under
`:root[data-theme="dark"]` and under `prefers-color-scheme: dark` (when the user hasn't chosen a
theme explicitly), so every component restyles automatically — no component-level dark-mode CSS is
needed.

### Typography

- **Display / headings:** [Fraunces](https://fonts.google.com/specimen/Fraunces) — a soft, high-contrast
  serif used for the hero name and section titles.
- **Body:** [Manrope](https://fonts.google.com/specimen/Manrope) — a friendly, rounded sans-serif for
  all paragraph and UI text.
- **Accent / labels:** [Space Mono](https://fonts.google.com/specimen/Space+Mono) — used only for the
  small `/* section-label */` comment-style tags and project index numbers, as a nod to the
  Software Engineering theme.

### Layout

- CSS Grid for page-level layout (hero, about, contact, skills grid, project rows).
- Flexbox for smaller components (nav, buttons, tag/chip lists, footer).
- A shared `.section-inner` wrapper caps content width at `1120px` and handles horizontal padding
  everywhere, so every section stays aligned.

## Responsive breakpoints

| Breakpoint | Range | Key changes |
|---|---|---|
| Desktop | `> 900px` | Default multi-column layout (hero 2 cols, projects 3-col row, skills 3-col grid) |
| Tablet | `≤ 900px` | Hero and About/Contact collapse to 1 column; project rows keep image+text side by side |
| Mobile | `≤ 640px` | Nav collapses into a hamburger menu; project rows stack fully; skills grid becomes 1 column |

Tested by resizing the browser and using Chrome DevTools' device toolbar (iPhone SE, iPad Air, and
a standard 1440px desktop viewport).

## JavaScript features (`js/script.js`)

The script is split into small, independently-commented functions, each initialized once on
`DOMContentLoaded`:

1. **`setGreeting()`** — reads `Date().getHours()` and sets the hero's `#greeting` text to
   "good morning" / "good afternoon" / "good evening" / "you're up late".
2. **`setupMobileNav()`** — toggles the `.is-open` class on the nav links list and animates the
   hamburger icon into an ✕; closes the menu automatically when a link is tapped.
3. **`setupScrollSpy()`** — uses `IntersectionObserver` on each `<section id="...">` to add an
   `.is-active` class to the matching nav link as the user scrolls.
4. **`setupThemeToggle()`** — toggles `data-theme="light" | "dark"` on `<html>`, persists the
   choice in `localStorage`, and updates the toggle button's icon and `aria-label`.
5. **`setupContactForm()`** — validates Name (≥ 2 chars), Email (regex format check), and Message
   (≥ 10 chars) on blur and on submit; shows inline error text per field and a success/error status
   message. There is no backend, so a successful submit just resets the form and shows a status
   message that says so explicitly.
6. **`setupBackToTop()`** — smooth-scrolls to the top of the page from the footer button.

## Accessibility notes

- A "skip to content" link is the first focusable element on the page.
- All interactive controls (`nav-toggle`, `theme-toggle`, back-to-top) have `aria-label`s.
- Form fields use real `<label for>` associations and `role="alert"` on inline error text.
- Focus states use a visible `outline` via `:focus-visible` rather than removing the browser default.
- `prefers-reduced-motion` is respected — animations and smooth scroll are disabled for users who
  request it.
- All images (including decorative SVGs) have appropriate `alt` text or `aria-hidden`, as
  appropriate.

## Known limitations / next steps

- The contact form does not send data anywhere (by design, per assignment scope). A future version
  could wire it up to a service like Formspree or a small serverless function.
- Project links are placeholders (`href="#"`) until real project repositories/demos exist.
- Profile and project images are custom SVG illustrations rather than real photos/screenshots —
  swap in real assets in `assets/images/` and update the `src`/`alt` attributes in `index.html` as
  the portfolio grows.
