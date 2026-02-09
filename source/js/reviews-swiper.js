import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

export const initReviewsSwiper = () => new Swiper('.reviews__swiper', {
  modules: [Navigation],
  loop: false,
  speed: 600,

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev',
    disabledClass: 'swiper-button--deactivated',
  },

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 120,
    },
  },
});
