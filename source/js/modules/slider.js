import Swiper from "swiper";

export default () => {
  let storySlider;
  let sliderContainer = document.getElementById(`story`);
  const pageHeader = document.querySelector(`.page-header`);
  const headerClasses = [`page-header--water`, `page-header--ice`, `page-header--light`];
  sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
  document.body.addEventListener(`screenChanged`, (e) => {
    changeHeaderClass(e.detail.screenName);
  });

  const changeHeaderClass = (screen) => {
    pageHeader.classList.remove(...headerClasses);
    if (screen && screen !== `story`) {
      return;
    }
    if (storySlider.activeIndex === 0 || storySlider.activeIndex === 1) {
      pageHeader.classList.add(headerClasses[2]);
    } else if (storySlider.activeIndex === 2 || storySlider.activeIndex === 3) {
      pageHeader.classList.add(headerClasses[0]);
    } else if (storySlider.activeIndex === 4 || storySlider.activeIndex === 5) {
      pageHeader.classList.add(headerClasses[1]);
    }
  };

  const setSlider = function () {
    if (((window.innerWidth / window.innerHeight) < 1) || window.innerWidth < 769) {
      storySlider = new Swiper(`.js-slider`, {
        pagination: {
          el: `.swiper-pagination`,
          type: `bullets`
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            if (storySlider.activeIndex === 0 || storySlider.activeIndex === 1) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg"), linear-gradient(180deg, rgba(83, 65, 118, 0) 0%, #523E75 16.85%)`;
            } else if (storySlider.activeIndex === 2 || storySlider.activeIndex === 3) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg"), linear-gradient(180deg, rgba(45, 54, 179, 0) 0%, #2A34B0 16.85%)`;
            } else if (storySlider.activeIndex === 4 || storySlider.activeIndex === 5) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg"), linear-gradient(180deg, rgba(92, 138, 198, 0) 0%, #5183C4 16.85%)`;
            } else if (storySlider.activeIndex === 6 || storySlider.activeIndex === 7) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg"), linear-gradient(180deg, rgba(45, 39, 63, 0) 0%, #2F2A42 16.85%)`;
            }
            changeHeaderClass();
          },
          resize: () => {
            storySlider.update();
          },
        },
        observer: true,
        observeParents: true
      });
    } else {
      storySlider = new Swiper(`.js-slider`, {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`
        },
        navigation: {
          nextEl: `.js-control-next`,
          prevEl: `.js-control-prev`,
        },
        keyboard: {
          enabled: true
        },
        on: {
          slideChange: () => {
            if (storySlider.activeIndex === 0) {
              sliderContainer.style.backgroundImage = `url("img/slide1.jpg")`;
            } else if (storySlider.activeIndex === 2) {
              sliderContainer.style.backgroundImage = `url("img/slide2.jpg")`;
            } else if (storySlider.activeIndex === 4) {
              sliderContainer.style.backgroundImage = `url("img/slide3.jpg")`;
            } else if (storySlider.activeIndex === 6) {
              sliderContainer.style.backgroundImage = `url("img/slide4.jpg")`;
            }
            changeHeaderClass();
          },
          resize: () => {
            storySlider.update();
          }
        },
        observer: true,
        observeParents: true
      });
    }
  };

  window.addEventListener(`resize`, function () {
    if (storySlider) {
      storySlider.destroy();
    }
    setSlider();
  });

  setSlider();
};
