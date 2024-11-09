
const slide = document.querySelector('.slides')
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.slides button');
const displaySlide = Array.from(document.getElementsByClassName('displaySlide'));
const displayImg = document.getElementById('displayImg')
const displayVideo = document.getElementById('displayVideo')
let slideId = 0;
let intervalId = null;


window.addEventListener("DOMContentLoaded", function () {
    showSlide(0);
    startSlides();
})

displaySlide.forEach(display => {
    display.addEventListener("mouseenter", stopSlides);
    display.addEventListener("mouseleave", startSlides);
});

function startSlides() {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            nextSlide()
        }, 5000)
        // console.log('started')
    }
}

function stopSlides() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        // console.log('stopped')
    }
}

function showSlide(slideIdIn) {
    stopSlides();
    startSlides();
    if (slideIdIn < 0) slideIdIn = slides.length - 1;
    if (slideIdIn >= slides.length) slideIdIn = 0;
    slides[slideId].classList.remove("showSlide");
    slides[slideIdIn].classList.add("showSlide");
    slideId = slideIdIn
    if (slides[slideIdIn].nodeName === "VIDEO") {
        displayImg.style.display = 'none'
        displayVideo.style.display = 'block'
        displaySlide[1].alt = slides[slideIdIn].alt
        displaySlide[1].src = slides[slideIdIn].src
    } else {
        displayImg.style.display = 'block'
        displayVideo.style.display = 'none'
        displaySlide[0].alt = slides[slideIdIn].alt
        displaySlide[0].src = slides[slideIdIn].src
        displaySlide[1].removeAttribute('src')
        displaySlide[1].load()

    }
}

function nextSlide() {
    stopSlides();
    startSlides();
    slides[slideId].classList.remove("showSlide");
    showSlide(slideId + 1);
}

function prevSlide() {
    stopSlides();
    startSlides();
    slides[slideId].classList.remove("showSlide");
    showSlide(slideId - 1);
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