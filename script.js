// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Contact form submission (dummy example)
const form = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple form validation (already required in HTML)
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formResponse.textContent = 'Please fill in all fields.';
    return;
  }

  // Simulate sending message
  formResponse.style.color = '#ff1493';
  formResponse.textContent = 'Sending message...';

  setTimeout(() => {
    formResponse.style.color = 'green';
    formResponse.textContent = 'Thank you! Your message has been sent.';
    form.reset();
  }, 1500);
});
