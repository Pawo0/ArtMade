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
    // console.log(e.clientX >= left)
    // console.log(e.clientX <= right)
    // console.log(e.clientY <= top)
    // console.log(e.clientY >= bottom)
    // console.log('-------------------')
    if (menuActive && !(e.clientX >= left && e.clientX <= right && e.clientY >= top && e.clientY <= bottom)) {
        changeVis()
    }
})