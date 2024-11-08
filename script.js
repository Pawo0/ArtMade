const menuBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('header--nav');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

const slide = document.querySelector('.slides')
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.slides button');
const displaySlide = document.getElementById('displaySlide')
let slideId = 0;
let intervalId;


window.addEventListener("DOMContentLoaded", function () {
    showSlide(0);
    intervalId = setInterval(() => {
        nextSlide()
    }, 5000)
})

function showSlide(slideIdIn) {
    if (slideIdIn < 0) slideIdIn = slides.length - 1;
    if (slideIdIn >= slides.length) slideIdIn = 0;
    slides[slideIdIn].classList.add("showSlide");
    displaySlide.src = slides[slideIdIn].src
    slideId = slideIdIn
}

function nextSlide() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        nextSlide()
    }, 5000);
    console.log(slideId)
    slides[slideId].classList.remove("showSlide");
    showSlide(++slideId);
}

function prevSlide() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        nextSlide()
    }, 5000);
    slides[slideId].classList.remove("showSlide");
    showSlide(--slideId);
}


slide.addEventListener("mouseover", () => {
    btns.forEach(btn => {
        btn.style.backgroundColor = "hsla(0, 0%, 0%, 0.5)"
    })
});

slide.addEventListener("mouseout", () => {
    btns.forEach(btn => {
        btn.style.backgroundColor = "hsla(0, 0%, 0%, 0.1)"
    })
});