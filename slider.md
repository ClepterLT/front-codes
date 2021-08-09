### HTML ###
<div class="slider">
        <div class="slide slide--1">
          <div class="testimonial">
            <h5 class="testimonial__header">Best financial decision ever!</h5>
            <blockquote class="testimonial__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt, numquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis facere pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.
            </blockquote>
            <address class="testimonial__author">
              <img src="img/user-1.jpg" alt="" class="testimonial__photo" />
              <h6 class="testimonial__name">Aarav Lynn</h6>
              <p class="testimonial__location">San Francisco, USA</p>
            </address>
          </div>
        </div>

        <div class="slide slide--2">
          <div class="testimonial">
            <h5 class="testimonial__header">
              The last step to becoming a complete minimalist
            </h5>
            <blockquote class="testimonial__text">
              Quisquam itaque deserunt ullam, quia ea repellendus provident,
              ducimus neque ipsam modi voluptatibus doloremque, corrupti
              laborum. Incidunt numquam perferendis veritatis neque repellendus.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              deserunt exercitationem deleniti.
            </blockquote>
            <address class="testimonial__author">
              <img src="img/user-2.jpg" alt="" class="testimonial__photo" />
              <h6 class="testimonial__name">Miyah Miles</h6>
              <p class="testimonial__location">London, UK</p>
            </address>
          </div>
        </div>

        <div class="slide slide--3">
          <div class="testimonial">
            <h5 class="testimonial__header">
              Finally free from old-school banks
            </h5>
            <blockquote class="testimonial__text">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </blockquote>
            <address class="testimonial__author">
              <img src="img/user-3.jpg" alt="" class="testimonial__photo" />
              <h6 class="testimonial__name">Francisco Gomes</h6>
              <p class="testimonial__location">Lisbon, Portugal</p>
            </address>
          </div>
        </div>

        <!-- <div class="slide"><img src="img/img-1.jpg" alt="Photo 1" /></div>
        <div class="slide"><img src="img/img-2.jpg" alt="Photo 2" /></div>
        <div class="slide"><img src="img/img-3.jpg" alt="Photo 3" /></div>
        <div class="slide"><img src="img/img-4.jpg" alt="Photo 4" /></div> -->
        <button class="slider__btn slider__btn--left">&larr;</button>
        <button class="slider__btn slider__btn--right">&rarr;</button>
        <div class="dots"></div>
      </div>
   
              
### CSS ###
/* SLIDER */
.slider {
  max-width: 100rem;
  height: 50rem;
  margin: 0 auto;
  position: relative;

  /* IN THE END */
  overflow: hidden;
}

.slide {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;

  /* THIS creates the animation! */
  transition: transform 1s;
}

.slide > img {
  /* Only for images that have different size than slide */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider__btn {
  position: absolute;
  top: 50%;
  z-index: 10;

  border: none;
  background: rgba(255, 255, 255, 0.7);
  font-family: inherit;
  color: #333;
  border-radius: 50%;
  height: 5.5rem;
  width: 5.5rem;
  font-size: 3.25rem;
  cursor: pointer;
}

.slider__btn--left {
  left: 6%;
  transform: translate(-50%, -50%);
}

.slider__btn--right {
  right: 6%;
  transform: translate(50%, -50%);
}

.dots {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.dots__dot {
  border: none;
  background-color: #b9b9b9;
  opacity: 0.7;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 1.75rem;
  cursor: pointer;
  transition: all 0.5s;

  /* Only necessary when overlying images */
  /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */
}

.dots__dot:last-child {
  margin: 0;
}

.dots__dot--active {
  /* background-color: #fff; */
  background-color: #888;
  opacity: 1;
}   
              
          
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
