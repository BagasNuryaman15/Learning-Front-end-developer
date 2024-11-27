const btnToggle = document.querySelector('.btn_toggle');
const navMenu = document.querySelector('.nav_menu');

btnToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu'); // Toggle class to show/hide menu
    
    // Toggle icon between 'menu' and 'close'
    if (navMenu.classList.contains('show-menu')) {
        btnToggle.classList.remove('ri-menu-line');
        btnToggle.classList.add('ri-close-line');
    } else {
        btnToggle.classList.remove('ri-close-line');
        btnToggle.classList.add('ri-menu-line');
    }
});
