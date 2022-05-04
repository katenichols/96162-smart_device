import {lastFocus} from '../main';
import {onEscKeydown, body, popup} from './header-link';

const closePopup = () => {
  body.style.position = 'relative';
  body.style.top = 'auto';
  popup.classList.remove('is-open');
  lastFocus.focus();

  document.removeEventListener('keydown', onEscKeydown);
};

export {closePopup};
