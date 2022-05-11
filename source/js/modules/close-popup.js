import {lastFocus} from '../main';
import {onEscKeydown, focusTrap, body, popup} from './header-link';

const closePopup = () => {

  body.style.position = 'relative';
  body.style.top = 'auto';
  body.style.padding = '0 0 0 0';
  popup.classList.remove('is-open');
  lastFocus.focus();

  document.removeEventListener('keydown', () => {
    onEscKeydown();
    focusTrap();
  });
};

export {closePopup};
