import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {onFooterTitleClick} from './modules/on-footer-title-click';
import {onAboutCompanyButtonClick} from './modules/on-about-company-button-click';
import {closePopup} from './modules/close-popup';
import './modules/header-link';
import './modules/anchors';
import './modules/validation-forms';
import {popupOverlay} from './modules/header-link';
import {formValidity} from './modules/validation-forms';

export const footerTitles = document.querySelectorAll('[data-footer-title]');
export const footerNavList = document.querySelector('[data-nav-list]');
export const footerContactsList = document.querySelector('[data-contacts-list]');
export const aboutCompanyWrapper = document.querySelector('[data-about-company-wrapper]');
export const aboutCompanyButton = document.querySelector('[data-about-company-button]');
export const aboutCompanyInnerSpan = document.querySelector('[data-about-company-inner-span]');
export const arrFooterTitles = Array.from(footerTitles);
export const lastFocus = document.activeElement;

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  arrFooterTitles.forEach((item) => {
    item.classList.add('is-close');
  });
  footerNavList.classList.add('is-close');
  footerContactsList.classList.add('is-close');
  aboutCompanyInnerSpan.classList.add('is-close');
  aboutCompanyWrapper.classList.add('is-close');
  aboutCompanyButton.classList.remove('about-company__button--nojs');
  aboutCompanyButton.classList.add('is-close');

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();

    for (let i = 0; i < arrFooterTitles.length; i++) {
      arrFooterTitles[i].addEventListener('click', () => {
        onFooterTitleClick(arrFooterTitles[i]);
      });
    }

    aboutCompanyButton.addEventListener('click', () => {
      onAboutCompanyButtonClick();
    });

    document.addEventListener('click', (evt) => {
      if (evt.target === popupOverlay) {
        closePopup();
        return;
      }

      if (evt.target.type === 'submit') {
        if (formValidity(evt.target)) {
          evt.preventDefault();
          closePopup();
        }
      }
    });
  });
});
