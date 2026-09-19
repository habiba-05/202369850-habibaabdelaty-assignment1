# Habiba Abdelaty — Personal Portfolio

A simple, responsive personal portfolio site built as Assignment 1. It introduces me, shows a few
sample projects, and includes a working (front-end only) contact form.

## About this project

This is the starting point of my professional portfolio, built to practice core HTML, CSS, and
JavaScript, apply responsive design, and practice core HTML, CSS, and JavaScript, apply responsive design, and develop a practical workflow for planning, coding, testing, and revising a project. The design direction is soft and "girly" — a blush and berry color palette,
a serif display font, and small code-comment-style labels (`/* like this */`) that nod to my
Software Engineering major.

## Sections

- **About Me** — a short intro, tagline, and a few quick facts
- **Projects** — three projects (Fitfeed, Wiper Trip AI Prediction, NavKFUPM), each with a title,
  description, tags, and a placeholder image
- **Skills** — languages, tools, and what I'm currently learning
- **Contact** — a Name / Email / Message form with client-side validation (no backend)

## Features

- Fully responsive layout (desktop, tablet, mobile) using CSS Grid and Flexbox
- Light / dark theme toggle
- Mobile hamburger navigation menu
- Scroll-spy navigation that highlights the section currently in view
- Time-of-day greeting message ("good morning" / "good afternoon" / "good evening")
- Client-side contact form validation with inline error messages

## Folder structure

```
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/          # hand-built SVG illustrations (no external image credits needed)
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Running it locally

No build step or dependencies are required — it's plain HTML/CSS/JS.

1. Clone the repository:
   ```
   git clone https://github.com/202369850-habibaabdelaty-assignment1.git
   cd 202369850-habibaabdelaty-assignment1
   ```
2. Open `index.html` directly in a browser, **or** serve it locally so relative paths and fonts
   behave exactly like production:
   ```
   # Python
   python3 -m http.server 8000

   # or, with Node
   npx serve .
   ```
3. Visit `http://localhost:8000` (or whichever port your server prints).

## AI usage

I used Claude (Anthropic) to help scaffold this project — see
[`docs/ai-usage-report.md`](docs/ai-usage-report.md) for the full breakdown of what I used it for,
what I changed, and what I learned. In short: AI helped me with initial structures, code examples, explanations, and debugging suggestions for the HTML, CSS, and JavaScript. I then adapted the code, added and refined features, and reviewed the result through testing. I also made the main design and content decisions myself.

## Technical documentation

See [`docs/technical-documentation.md`](docs/technical-documentation.md) for details on the code
architecture, the design system (colors/type/layout tokens), and how each JavaScript feature works.

## Academic integrity note

This project was built with AI assistance as an explicitly allowed tool for this assignment. I reviewed, tested, and modified the AI-assisted parts of the project before submitting it. I also made my own decisions about the content, design, accessibility, and final implementation.
See `docs/ai-usage-report.md` for details.
