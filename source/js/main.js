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
const footerNav = document.querySelector('[data-footer-nav]');
const footerContacts = document.querySelector('[data-footer-contacts]');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  if (document.body.contains(footerNav) && document.body.contains(footerContacts) && document.body.contains(footerNavList) && document.body.contains(footerContactsList) && arrFooterTitles.length > 1) {
    footerNav.classList.remove('footer__nav--nojs');
    footerContacts.classList.remove('footer__contacts--nojs');
    footerNavList.classList.add('is-close');
    footerContactsList.classList.add('is-close');
    arrFooterTitles.forEach((item) => {
      item.classList.add('is-close');
    });
  }

  if (document.body.contains(aboutCompanyWrapper)) {
    aboutCompanyWrapper.classList.add('is-close');
  }

  if (document.body.contains(aboutCompanyButton)) {
    aboutCompanyButton.classList.remove('about-company__button--nojs');
    aboutCompanyButton.classList.add('is-close');
  }

  if (document.body.contains(aboutCompanyInnerSpan)) {
    aboutCompanyInnerSpan.classList.add('is-close');
  }

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();

    if (arrFooterTitles.length > 0 && document.body.contains(footerNavList) && document.body.contains(footerContactsList)) {
      for (let i = 0; i < arrFooterTitles.length; i++) {
        arrFooterTitles[i].addEventListener('click', () => {
          onFooterTitleClick(arrFooterTitles[i]);
        });
      }
    }

    if (document.body.contains(aboutCompanyButton)) {
      aboutCompanyButton.addEventListener('click', () => {
        onAboutCompanyButtonClick();
      });
    }

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
