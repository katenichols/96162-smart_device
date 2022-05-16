import {escKey} from './../utils/esc-key';
import {closePopup} from './close-popup';
import {outlineIfNotError} from '../utils/error-outline';

export const body = document.querySelector('[data-body]');
export const headerLink = document.querySelector('[data-header-link]');
export const popup = document.querySelector('[data-popup]');
export const focusables = popup.querySelectorAll('[data-close-popup], [data-name], [data-phone], [data-textarea], [data-submit], [data-checkbox-label]');
export const popupOverlay = popup.querySelector('[data-popup-overlay]');
export const firstFocusable = focusables[0];
const header = document.querySelector('[data-header]');
const closePopupButton = popup.querySelector('[data-close-popup]');
const lastFocusable = focusables[focusables.length - 1];

const onEscKeydown = (evt) => {
  if (escKey(evt)) {
    closePopup();
    return;
  }
};

const focusTrap = (evt) => {
  if (popup.classList.contains('is-open')) {
    if (evt.key === 'Tab') {
      if (evt.shiftKey) {
        if (document.activeElement === firstFocusable) {
          evt.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          evt.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }
};

const openPopup = () => {
  body.style.position = 'fixed';
  body.style.top = '0';
  body.style.padding = '0 calc(20px - (100vw - 100%)) 0 0';
  header.style.paddingRight = 'calc(20px - (100vw - 100%))';
  popup.classList.add('is-open');
  focusables[1].focus();
  outlineIfNotError(focusables[1]);
  outlineIfNotError(focusables[2]);
};

closePopupButton.addEventListener('click', () => {
  closePopup();
});

document.addEventListener('click', (evt) => {
  if (evt.target === popupOverlay) {
    closePopup();
  }
});

document.addEventListener('keydown', (evt) => {
  onEscKeydown(evt);
  focusTrap(evt);
});

headerLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  openPopup();
});