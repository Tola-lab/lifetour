import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';

export const initHeroSwiper = () => new Swiper('.hero__swiper', {
  modules: [Pagination],
  loop: true,
  speed: 600,

  pagination: {
    el: '.hero__pagination',
    clickable: true,
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
});
