// FAQ toggle with animation
const questions = document.querySelectorAll('.faq-item .question');
questions.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle('show');
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
}


