let totalSlides = document.querySelectorAll('.sliderItem').length;
let currentSlide = 0;

document.querySelector('.sliderWidth').style.width = 
    `calc(100vw *${totalSlides})`;
document.querySelector('.sliderControls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;


function goPrev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  updateMargin();
}
function goNext() {
  currentSlide++;
  if (currentSlide > (totalSlides - 1)) {
    currentSlide = 0;
  }
  updateMargin();
}

function updateMargin() {
  let sliderItemWidth = document.querySelector('.sliderItem').clientWidth;
  let newMargin = (currentSlide * sliderItemWidth);
  document.querySelector('.sliderWidth').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);