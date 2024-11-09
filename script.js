const menuBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('header--nav');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})
