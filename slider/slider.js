### JS ###
const slider = function() {
  const slides = document.querySelectorAll(".slide");
  const btnRight = document.querySelector(".slider__btn--right");
  const btnLeft = document.querySelector(".slider__btn--left");
  const dotsContainer = document.querySelector(".dots");

  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = function() {
    slides.forEach(function(_, i) {
      dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
    });
  }

  const activateDot = function(slide) {
    document.querySelectorAll(".dots__dot").forEach(d => d.classList.remove("dots__dot--active"));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
  }

  const goToSlide = function(slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  const nextSlide = function() {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  }

  const previousSlide = function() {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDot(currentSlide);
  }

  const init = function() {
    goToSlide(0);
    createDots();
    activateDot(0);
  }
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', previousSlide);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') previousSlide();
    if (e.key === 'ArrowRight') nextSlide();
  })

  dotsContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains("dots__dot")) {
      const {slide} = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
slider();
