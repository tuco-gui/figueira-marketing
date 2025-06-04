// FAQ toggle
const questions = document.querySelectorAll('.faq-item .question');
questions.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
