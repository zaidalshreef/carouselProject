


const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

moveAfterInterval();

function moveAfterInterval() {
    setInterval(moveToNextSlide, 5000);
}

function moveToNextSlide() {
    
    if (slidePosition === totalSlides - 1) {
        slides[slidePosition].classList.remove("carousel-item-visible");
        slidePosition = 0;
    } else {
        slides[slidePosition].classList.remove("carousel-item-visible");
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    
     
    if (slidePosition === 0) {
        slides[slidePosition].classList.remove("carousel-item-visible");
        slidePosition = totalSlides-1;
    } else {
        slides[slidePosition].classList.remove("carousel-item-visible");
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
}
    