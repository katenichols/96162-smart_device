import {escKey} from './../utils/esc-key';
import {closePopup} from './close-popup';

export const body = document.querySelector('[data-body]');
export const headerLink = document.querySelector('[data-header-link]');
export const popup = document.querySelector('[data-popup]');
const popupOverlay = popup.querySelector('[data-popup-overlay]');
const closePopupButton = popup.querySelector('[data-close-popup]');
const form = popup.querySelector('[data-form]');

const onEscKeydown = (evt) => {
  if (escKey(evt)) {
    closePopup();
  }
};

const openPopup = () => {
  body.style.position = 'fixed';
  body.style.top = '0';
  popup.classList.add('is-open');
};

closePopupButton.addEventListener('click', () => {
  closePopup();
});

document.addEventListener('click', (evt) => {
  if (evt.target === popupOverlay) {
    closePopup();
  }
});

document.addEventListener('keydown', onEscKeydown);

headerLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  openPopup();
});
