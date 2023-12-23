const menu = document.getElementById('list-icon');
const nav_menu = document.getElementById('menu');

menu.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
})