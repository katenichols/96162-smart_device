// import {navLinks} from './header-modal';
const mainScreenLink = document.querySelector('[data-main-screen-link]');

mainScreenLink.addEventListener('click', (evt) => {
  evt.preventDefault();

  const blockID = mainScreenLink.getAttribute('href').substr(1);

  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
