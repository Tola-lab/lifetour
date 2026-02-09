import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

export const initGallerySwiper = () => new Swiper('.gallery__swiper', {
  modules: [Navigation],
  loop: true,
  speed: 600,

  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 5,

  navigation: {
    nextEl: '.gallery .swiper-button-next',
    prevEl: '.gallery .swiper-button-prev',
    disabledClass: 'swiper-button--deactivated',
  },

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 5,
    },
    1440: {
      enabled: false,
      loop: false,
      slidesPerView: 5,
      spaceBetween: 5,
    },
  },
});
