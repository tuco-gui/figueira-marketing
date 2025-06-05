// script.js

// 1. Menu responsivo para mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// 2. Animação de mostrar/esconder FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    answer.classList.toggle('active');
    question.classList.toggle('open');
  });
});

// 3. (Opcional) Envio do formulário com feedback
const form = document.querySelector('#consult-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso! Em breve entraremos em contato.');
    form.reset();
  });
}
