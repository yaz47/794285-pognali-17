'use strict';

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
