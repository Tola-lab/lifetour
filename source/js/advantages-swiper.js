import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

export const initAdvantagesSwiper = () => new Swiper('.advantages__swiper', {
  modules: [Navigation],
  enabled: false,
  speed: 600,

  navigation: {
    nextEl: '.advantages .swiper-button-next',
    prevEl: '.advantages .swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 'auto',
    },
    1440: {
      enabled: true,
      loop: true,
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      centeredSlides: true,
      initialSlide: 2,
      spaceBetween: 30,
    },
  },
});
