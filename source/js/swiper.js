import Swiper from 'swiper';
import { Pagination, Scrollbar, Navigation } from 'swiper/modules';

import 'swiper/css';

export const initHeroSwiper = () => new Swiper('.swiper--hero', {
  modules: [Pagination, Scrollbar],
  loop: true,
  speed: 600,

  pagination: {
    el: '.swiper--hero .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
});

export const initToursSwiper = () => new Swiper('.swiper--tours', {
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

export const initTrainingSwiper = () => new Swiper('.swiper--training', {
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

export const initReviewsSwiper = () => new Swiper('.swiper--reviews', {
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

export const initAdvSwiper = () => new Swiper('.swiper--adv', {
  modules: [Navigation],
  enabled: false,
  speed: 600,

  navigation: {
    nextEl: '.adv .swiper-button-next',
    prevEl: '.adv .swiper-button-prev',
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


export const initGallerySwiper = () => new Swiper('.swiper--gallery', {
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


