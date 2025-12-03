const body = document.querySelector('.page__body');
const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
const menuLink = navMain.querySelectorAll('.navigation__link');

const toggleMenu = (method) => {
  navMain.classList[method]('navigation--open');
  navToggle.classList[method]('navigation__toggle--close');
  body.classList[method]('page__body--no-scroll');
};

const openMenu = () => {
  toggleMenu('add');
};

const closeMenu = () => {
  toggleMenu('remove');
};


const showMenu = () => {
  const isShown = navMain.classList.contains('navigation--open');

  if (isShown) {
    closeMenu();
  } else {
    openMenu();
  }
};

const onMenuItemClick = () => {
  menuLink.forEach((item) => {
    item.addEventListener('click', () => {
      if (navMain.classList.contains('navigation--open')) {
        closeMenu();
      }
    });
  });
};

const initMobileMenu = () => {
  navToggle.addEventListener('click', showMenu);
  onMenuItemClick();
};

export {initMobileMenu};

