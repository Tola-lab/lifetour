import { initMobileMenu } from './mobile-menu.js';
import { initHeroSwiper, initToursSwiper, initTrainingSwiper, initReviewsSwiper, initAdvSwiper, initGallerySwiper } from './swiper.js';
import { initFormValidation } from './form-validation.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroSwiper();
  initToursSwiper();
  initTrainingSwiper();
  initReviewsSwiper();
  initAdvSwiper();
  initGallerySwiper();
  initFormValidation();
});


