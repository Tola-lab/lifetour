import { initMobileMenu } from './mobile-menu.js';
import {initHeroSwiper} from './hero-swiper.js';
import {initToursSwiper} from './tours-swiper.js';
import {initTrainingSwiper} from './training-swiper.js';
import {initReviewsSwiper} from './reviews-swiper.js';
import {initAdvantagesSwiper} from './advantages-swiper.js';
import { initGallerySwiper } from './gallery-swiper.js';
import { initFormValidation } from './form-validation.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroSwiper();
  initToursSwiper();
  initTrainingSwiper();
  initReviewsSwiper();
  initAdvantagesSwiper();
  initGallerySwiper();
  initFormValidation();
});


