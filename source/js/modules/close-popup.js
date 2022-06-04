import {lastFocus} from '../main';
import {onEscKeydown, focusTrap, body, popup} from './header-link';

const closePopup = () => {

  body.style.position = 'relative';
  body.style.top = 'auto';
  popup.classList.remove('is-open');
  lastFocus.focus();

  if (popup.classList.contains('is-open')) {
    popup.classList.remove('is-open');
    if (navigator.userAgent.includes('Chrome')) {
      body.style.padding = '0 0 0 0';
    }
  }

  document.removeEventListener('keydown', () => {
    onEscKeydown();
    focusTrap();
  });
};

export {closePopup};
