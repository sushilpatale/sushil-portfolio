// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn && menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Animate skill bars
window.addEventListener('load', () => {
  document.querySelectorAll('.fill').forEach(el => {
    el.style.width = el.dataset.fill;
  });
  document.getElementById('year').textContent = new Date().getFullYear();
});