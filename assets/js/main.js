// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const btn = document.querySelector('.nav-mobile-btn');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Count games dynamically from the grid (excludes coming-soon cards)
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.game-card:not(.coming-soon)');
  const counter = document.getElementById('gameCount');
  if (counter) counter.textContent = cards.length;
});
