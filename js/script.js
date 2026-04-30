/* NexXt Level Hypotheken — Frontend interactions */

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('is-open');
    links.classList.toggle('is-open');
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('is-open');
      links.classList.remove('is-open');
    });
  });
}

// Highlight current nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path || (path === '' && href === 'index.html')) {
    a.classList.add('is-active');
  }
});

// Step accordion
document.querySelectorAll('.step').forEach((step, idx) => {
  const head = step.querySelector('.step-head');
  if (!head) return;
  // Open the first step by default
  if (idx === 0) step.classList.add('is-open');
  head.addEventListener('click', () => {
    step.classList.toggle('is-open');
  });
});

// Reveal on scroll
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}
// Safety net
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
}, 4000);

// Set current year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Contact form (mailto)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const get = n => (form.elements[n] ? form.elements[n].value : '') || '';
    const name = get('name');
    const org = get('organisation');
    const email = get('email');
    const phone = get('phone');
    const topic = get('topic');
    const msg = get('message');
    const subject = `Aanvraag via website — ${topic || 'Algemeen'}`;
    const body =
`Naam: ${name}
Organisatie: ${org}
E-mail: ${email}
Telefoon: ${phone}
Onderwerp: ${topic}

Bericht:
${msg}`;
    window.location.href = `mailto:info@nexxtlevelhypotheken.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
