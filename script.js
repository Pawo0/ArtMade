const menuBtn = document.getElementById('menu-toggle');
const options = Array.from(document.querySelectorAll(".options"))
const menuUl = document.querySelector('#header--nav ul')
let menuActive = false;

function changeVis() {
    menuActive = !menuActive
    options.forEach(option => {
        option.classList.toggle('active')
    })
}

menuBtn.addEventListener('click', () => changeVis())


window.addEventListener('click', (e) => {
    const {left, right, top, bottom} = menuUl.getBoundingClientRect();
    if (menuActive && !(e.clientX >= left && e.clientX <= right && e.clientY >= top && e.clientY <= bottom)) {
        changeVis()
    }
})