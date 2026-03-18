/* ─── Active nav highlight on scroll ────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.style.color =
      link.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

/* ─── Fade-in on scroll (Intersection Observer) ─────────── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll('.project-card, .skill-card, .blog-card, .timeline-item')
  .forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

/* ─── Contact form handler ───────────────────────────────── */
const formBtn = document.querySelector('.contact-form .btn-primary');
if (formBtn) {
  formBtn.addEventListener('click', (e) => {
    const name    = document.getElementById('name')?.value.trim();
    const email   = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields before sending.');
    }
  });
}
