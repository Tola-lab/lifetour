import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

export const initToursSwiper = () => new Swiper('.tours__swiper', {
  modules: [Navigation],
  loop: false,
  speed: 600,

  slidesPerView: 1,
  spaceBetween: 18,

  navigation: {
    nextEl: '.tours .swiper-button-next',
    prevEl: '.tours .swiper-button-prev',
    disabledClass: 'swiper-button--deactivated',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
