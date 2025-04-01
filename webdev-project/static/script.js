// img slideshow mechanics
let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow img');

function changeSlide(step) {
  currentSlide += step;
  
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === currentSlide) {
      slide.classList.add('active');
    }
  });
}

setInterval(() => {
  changeSlide(1);
}, 5000);

changeSlide(0);
