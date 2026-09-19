# AI Usage Report

## Tools used & use cases

**Claude (Anthropic)** was the main AI tool I used for this assignment, through the Claude.ai chat
interface.

| Use case | How I used it |
|---|---|
| Code support | Used Claude to suggest starting structures and code examples for index.html, styles.css, and script.js, then adapted and expanded them while developing the project. |
| Design direction | Asked for a distinct visual identity rather than a generic template — a blush/berry color palette, a serif display font (Fraunces) paired with a rounded sans (Manrope), and small monospace "code comment" labels that tie the feminine look back to my Software Engineering major. |
| Debugging / review | Asked Claude to double check the responsive breakpoints (project row layout, nav collapsing into a hamburger menu) and the contact-form validation logic for edge cases (empty fields, invalid email format). |
| Documentation support | Used Claude to draft the initial structure of this report and the technical documentation, which I then edited into my own words and filled in with the actual decisions I made. |

## Recommended AI tools (per assignment brief)

- **GitHub Copilot** — inline code completion & generation while editing in an IDE
- **ChatGPT / Claude** — problem-solving, explanations, and first-draft generation
- **Google Gemini** — interactive code explanation, step-by-step layout refactoring support, and documentation review

## Benefits & challenges

**Benefits**

- Helped me work through the initial boilerplate and gave me examples for the HTML structure, CSS reset, and responsive grid rules, which I then adjusted for my project.
- Claude was good at explaining *why* a piece of CSS worked (e.g. why `grid-template-columns` needed
  to change at each breakpoint), which helped me actually understand the code instead of just
  copying it.
- It pushed back on a generic "template-y" first pass and helped me land on a more specific
  color/type system instead of the default pink-on-white look I originally had in mind.

**Challenges**

- I used Claude’s suggestions while establishing the initial structure of the project, but I was responsible for filling in the content and adapting it to fit my own style and goals. I edited the placeholder project descriptions and About Me section so they sounded more personal and less generic.
- I reviewed the accessibility details myself, including image alt text, visible focus states, and proper label/input pairing in the form. I also made improvements where the initial structure needed more attention.
- Since the project has no backend, I made sure the form behavior was represented accurately. I adjusted the success message to clarify that it is only a front-end demonstration and that no message is actually being sent.

## Learning outcomes

- Practiced translating a written design brief (color, type, layout) into actual CSS custom
  properties and a consistent design system, rather than styling section by section.
- Practiced building a page structure with semantic HTML elements.
- Gained more experience using JavaScript for theme toggling, mobile navigation, scroll-spy behavior, and form validation.
- Learned how to debug and simplify code instead of accepting the first suggested solution.
- Practiced testing the site at multiple screen sizes using the browser’s developer tools.
- Learned to treat AI output as a starting point that still requires personal decisions, testing, and revision.

## Responsible use & modifications

- I used Claude for initial suggestions, explanations, and debugging support, but I reviewed and modified the resulting code before including it in the project.
- I refined the page structure and made the final decisions about the visual identity, content, responsive behavior, accessibility improvements, and interactive features. I also removed or simplified suggestions that were unnecessary for the assignment.
- The final project reflects my own design choices and revisions, and I tested the main features locally, including the theme toggle, mobile menu, form validation, and scroll-spy navigation.
- I removed or simplified a few AI-suggested additions that felt like unnecessary complexity for a
  simple assignment (e.g. kept the JavaScript to a small number of clearly-commented functions
  instead of a larger framework-style setup).
- I reviewed the final HTML, CSS, and JavaScript and can explain how the main features work.
