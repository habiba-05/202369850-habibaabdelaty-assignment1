/* =========================================================
   Habiba Abdelaty — Portfolio Scripts
   Features:
   1. Time-of-day greeting in the hero comment line
   2. Mobile nav toggle (hamburger menu)
   3. Scroll-spy: highlights the current section link in nav
   4. Light/dark theme toggle, saved to localStorage
   5. Contact form validation (client-side only, no backend)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  setGreeting();
  setupMobileNav();
  setupScrollSpy();
  setupThemeToggle();
  setupContactForm();
  setupBackToTop();
});

/* ---------------------------------------------------------
   1. Greeting message based on current time of day
--------------------------------------------------------- */
function setGreeting() {
  const el = document.getElementById('greeting');
  if (!el) return;

  const hour = new Date().getHours();
  let greeting = 'hello';

  if (hour < 5) greeting = "you're up late";
  else if (hour < 12) greeting = 'good morning';
  else if (hour < 18) greeting = 'good afternoon';
  else greeting = 'good evening';

  el.textContent = greeting;
}

/* ---------------------------------------------------------
   2. Mobile navigation toggle
--------------------------------------------------------- */
function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the menu after a link is tapped (mobile)
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------------------------------------------------
   3. Scroll-spy: highlight the nav link for the visible section
--------------------------------------------------------- */
function setupScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const linkFor = (id) =>
    document.querySelector(`.nav-link[href="#${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove('is-active'));
          const activeLink = linkFor(entry.target.id);
          if (activeLink) activeLink.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ---------------------------------------------------------
   4. Theme toggle (light / dark), persisted in localStorage
--------------------------------------------------------- */
function setupThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const root = document.documentElement;
  if (!toggleBtn) return;

  const stored = localStorage.getItem('theme');
  if (stored) {
    root.setAttribute('data-theme', stored);
  }

  updateToggleIcon();

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleIcon();
  });

  function updateToggleIcon() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const icon = toggleBtn.querySelector('.theme-icon');
    if (icon) icon.textContent = isDark ? '☾' : '☀︎';
    toggleBtn.setAttribute(
      'aria-label',
      isDark ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }
}

/* ---------------------------------------------------------
   5. Contact form validation (no backend — simulated send)
--------------------------------------------------------- */
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');

  const fields = {
    name: {
      input: document.getElementById('name'),
      error: document.getElementById('nameError'),
      validate: (value) => value.trim().length >= 2,
      message: 'Please enter your name (at least 2 characters).',
    },
    email: {
      input: document.getElementById('email'),
      error: document.getElementById('emailError'),
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: 'Please enter a valid email address.',
    },
    message: {
      input: document.getElementById('message'),
      error: document.getElementById('messageError'),
      validate: (value) => value.trim().length >= 10,
      message: 'Your message should be at least 10 characters.',
    },
  };

  // Validate a single field and reflect the result in the UI
  function validateField(key) {
    const field = fields[key];
    const isValid = field.validate(field.input.value);
    const wrapper = field.input.closest('.form-field');

    if (isValid) {
      wrapper.classList.remove('has-error');
      field.error.textContent = '';
    } else {
      wrapper.classList.add('has-error');
      field.error.textContent = field.message;
    }
    return isValid;
  }

  // Validate on blur for immediate, gentle feedback
  Object.keys(fields).forEach((key) => {
    fields[key].input.addEventListener('blur', () => validateField(key));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const results = Object.keys(fields).map((key) => validateField(key));
    const allValid = results.every(Boolean);

    if (!allValid) {
      status.textContent = 'Please fix the highlighted fields and try again.';
      status.className = 'form-status is-error';
      return;
    }

    // No backend is connected for this assignment — simulate a successful send.
    status.textContent = `Thanks, ${fields.name.input.value.trim()}! Your message is ready to send (demo only — no backend connected).`;
    status.className = 'form-status is-success';
    form.reset();
  });
}

/* ---------------------------------------------------------
   Back-to-top button
--------------------------------------------------------- */
function setupBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
