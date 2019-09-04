'use strict';

const header = document.querySelector('.site-header');

if (header) {
  let isBelow300 = false;
  const toggle = header.querySelector('.site-header__toggle');
  const logo = header.querySelector('.site-header__site-logo');

  const changeLogo = (color) => {
    return `<picture class="site-logo__picture site-logo__picture--${color}">
    <source type="image/webp" media="(min-width: 1440px)" srcset="img/logo-desktop-${color}@1x.webp 1x, img/logo-desktop-${color}@2x.webp 2x" />
    <source type="image/webp" media="(min-width: 768px)" srcset="img/logo-tablet-${color}@1x.webp 1x, img/logo-tablet-${color}@2x.webp 2x" />
    <source type="image/webp" media="(min-width: 320px)" srcset="img/logo-mobile-${color}@1x.webp 1x, img/logo-mobile-${color}@2x.webp 2x" />
    <source media="(min-width: 1440px)" srcset="img/logo-desktop-${color}@1x.png 1x, img/logo-desktop-${color}@2x.png 2x" />
    <source media="(min-width: 768px)" srcset="img/logo-tablet-${color}@1x.png 1x, img/logo-tablet-${color}@2x.png 2x" /><img class="site-logo__img" src="img/logo-mobile-${color}@1x.png" srcset="img/logo-mobile-${color}@2x.png 2x" alt="Лого Поехали" /></picture>`;
  };

  const toggleMenu = () => {
    toggle.classList.toggle('toggle--active');
    header.classList.toggle('site-header--closed');

    if (header.classList.contains('site-header--closed') &&
      !header.classList.contains('site-header--fixed')) {
      logo.innerHTML = changeLogo('white');
    }

    if (!header.classList.contains('site-header--closed') &&
      !header.classList.contains('site-header--fixed')) {
      logo.innerHTML = changeLogo('blue');
    }
  };

  const fixHeaderOnScroll = () => {
    if (window.pageYOffset >= 300) {
      header.classList.add('site-header--fixed');
    } else {
      header.classList.remove('site-header--fixed');
    }

    if (window.pageYOffset >= 300 &&
      logo.firstChild.classList.contains('site-logo__picture--white')) {
        logo.innerHTML = changeLogo('blue');
    }

    if (window.pageYOffset < 300 &&
      header.classList.contains('site-header--closed') &&
      logo.firstChild.classList.contains('site-logo__picture--blue')) {
        logo.innerHTML = changeLogo('white');
    }
  };

  toggleMenu();
  fixHeaderOnScroll();

  toggle.onclick = toggleMenu;
  window.onscroll = fixHeaderOnScroll;
}

const mapContainer = document.querySelector('.map');

if (mapContainer) {
  mapContainer.innerHTML = '<iframe class="map__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6037872533277!2d30.320858716096975!3d59.93871648187614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2sBolshaya+Konyushennaya+Street%2C+19%2F8%2C+Sankt-Peterburg%2C+191186!5e0!3m2!1sen!2sru!4v1564585909035!5m2!1sen!2sru" width="320" height="352" frameborder="0" style="border: 0;" allowfullscreen></iframe>';
}

const modal = document.querySelector('.modal');

if (modal) {
  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.js-modal-rates')) {
      evt.preventDefault();
      modal.classList.remove('modal--hide');
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal-rates__close')) {
      evt.preventDefault();
      modal.firstElementChild.classList.add('modal__section--zoom-out');
    }
  });

  document.addEventListener('keyup', (evt) => {
    if (evt.keyCode === 27) {
      modal.firstElementChild.classList.add('modal__section--zoom-out');
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target.matches('.modal')) {
      evt.target.firstElementChild.classList.add('modal__section--zoom-out');
    }
  });

  document.addEventListener('animationend', (evt) => {
    if (evt.target.matches('.modal__section--zoom-out')) {
      evt.target.closest('.modal').classList.add('modal--hide');
      evt.target.classList.remove('modal__section--zoom-out');
    }
  });
}

const filter = document.querySelector('.filter');

if (filter) {
  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.js-filter')) {
      evt.preventDefault();
      filter.classList.toggle('filter--closed');
    }
  });
}

const search = document.querySelector('.search');

if (search) {
  document.addEventListener('click', (evt) => {
    if (evt.target.closest('.js-search')) {
      evt.preventDefault();
      evt.target.closest('.search__fieldset').classList.toggle('search__fieldset--opened');
    }
  });
}
