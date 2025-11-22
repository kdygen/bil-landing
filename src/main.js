const form = document.getElementById('contactForm');
const success = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  success.classList.remove('hidden');
  form.reset();
});
