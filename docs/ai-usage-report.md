# AI Usage Report

## Tools used & use cases

**Claude (Anthropic)** was the main AI tool I used for this assignment, through the Claude.ai chat
interface.

| Use case | How I used it |
|---|---|
| Project scaffolding | Asked Claude to set up the folder structure (`css/`, `js/`, `assets/images/`, `docs/`) matching the assignment's suggested layout. |
| Code generation | Had Claude generate a first draft of `index.html`, `styles.css`, and `script.js` based on a design brief I gave it (soft/"girly" palette, my name, my major, three sections minimum). |
| Design direction | Asked for a distinct visual identity rather than a generic template — a blush/berry color palette, a serif display font (Fraunces) paired with a rounded sans (Manrope), and small monospace "code comment" labels that tie the feminine look back to my Software Engineering major. |
| Debugging / review | Asked Claude to double check the responsive breakpoints (project row layout, nav collapsing into a hamburger menu) and the contact-form validation logic for edge cases (empty fields, invalid email format). |
| Documentation support | Used Claude to draft the initial structure of this report and the technical documentation, which I then edited into my own words and filled in with the actual decisions I made. |

## Recommended AI tools (per assignment brief)

- **GitHub Copilot** — inline code completion & generation while editing in an IDE
- **ChatGPT / Claude** — problem-solving, explanations, and first-draft generation
- **Cursor** — AI-powered code editor for larger refactors
- **Replit** — AI-assisted online IDE, useful for quick prototyping
- **AWS CodeWhisperer** — AI code generation integrated with AWS tooling

I only used Claude for this assignment, but I'd like to try Copilot for in-editor completions on
future projects.

## Benefits & challenges

**Benefits**

- Saved a lot of time on boilerplate: the base HTML skeleton, the CSS reset, and the responsive
  grid rules would have taken me much longer to write from scratch.
- Claude was good at explaining *why* a piece of CSS worked (e.g. why `grid-template-columns` needed
  to change at each breakpoint), which helped me actually understand the code instead of just
  copying it.
- It pushed back on a generic "template-y" first pass and helped me land on a more specific
  color/type system instead of the default pink-on-white look I originally had in mind.

**Challenges**

- AI-generated copy (the placeholder project descriptions, the About Me text) needed a real edit
  pass to sound like me and not like generic portfolio filler.
- I had to double-check accessibility details myself (alt text on images, focus states, label/input
  pairing on the form) — the first draft covered some of this but not all of it.
- Since there's no backend, I had to be careful that the AI-suggested "form submission" logic didn't
  imply the message was actually being sent anywhere; I adjusted the success message to be explicit
  that it's a front-end-only demo.

## Learning outcomes

- Practiced translating a written design brief (color, type, layout) into actual CSS custom
  properties and a consistent design system, rather than styling section by section.
- Got more comfortable with `IntersectionObserver` for the scroll-spy nav highlight, which I hadn't
  used before this project.
- Learned to treat AI output as a first draft, not a final answer — I re-read every file, renamed
  things that didn't match my voice, and simplified a few CSS rules Claude had made more
  complicated than they needed to be.
- Reinforced the habit of testing responsiveness at multiple breakpoints (not just resizing the
  browser once) using DevTools' device toolbar.

## Responsible use & modifications

- I reviewed every file Claude generated line by line before accepting it, and ran the site locally
  to test all interactive features (theme toggle, mobile menu, form validation, scroll-spy).
- I rewrote the About Me copy, project descriptions, and section intros in my own words so the
  content reflects my actual background and voice, not generic AI phrasing.
- I adjusted the color palette and typography choices after an initial pass that felt too close to a
  generic "AI portfolio" look, to make sure the result felt intentional and specific to me.
- I removed or simplified a few AI-suggested additions that felt like unnecessary complexity for a
  simple assignment (e.g. kept the JavaScript to a small number of clearly-commented functions
  instead of a larger framework-style setup).
- I understand every part of the final HTML, CSS, and JavaScript in this repository and can explain
  how each feature works.
