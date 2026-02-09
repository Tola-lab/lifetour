import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

export const initTrainingSwiper = () => new Swiper('.training__swiper', {
  modules: [Navigation],
  loop: false,
  speed: 600,

  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.training .swiper-button-next',
    prevEl: '.training .swiper-button-prev',
    disabledClass: 'swiper-button--deactivated',
  },

  breakpoints: {
    320: {
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      initialSlide: 0,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
