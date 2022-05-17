import {footerNavList, footerContactsList, arrFooterTitles} from '../main';

export const onFooterTitleClick = (el) => {
  if (el === arrFooterTitles[0] && el.classList.contains('is-close') && arrFooterTitles[1].classList.contains('is-close')) {
    el.classList.remove('is-close');
    el.classList.add('is-open');
    footerNavList.classList.add('is-open');
    return;
  }

  if (el === arrFooterTitles[1] && el.classList.contains('is-close') && arrFooterTitles[0].classList.contains('is-close')) {
    el.classList.remove('is-close');
    el.classList.add('is-open');
    footerContactsList.classList.add('is-open');
    return;
  }

  if (el === arrFooterTitles[0] && el.classList.contains('is-close') && arrFooterTitles[1].classList.contains('is-open')) {
    el.classList.remove('is-close');
    el.classList.add('is-open');
    footerNavList.classList.remove('is-close');
    footerNavList.classList.add('is-open');
    arrFooterTitles[1].classList.remove('is-open');
    arrFooterTitles[1].classList.add('is-close');
    footerContactsList.classList.remove('is-open');
    footerContactsList.classList.add('is-close');
    return;
  }

  if (el === arrFooterTitles[0] && el.classList.contains('is-open') && arrFooterTitles[1].classList.contains('is-close')) {
    el.classList.remove('is-open');
    el.classList.add('is-close');
    footerNavList.classList.remove('is-open');
    footerNavList.classList.add('is-close');
    arrFooterTitles[1].classList.remove('is-close');
    arrFooterTitles[1].classList.add('is-open');
    footerContactsList.classList.remove('is-close');
    footerContactsList.classList.add('is-open');
    return;
  }

  if (el === arrFooterTitles[1] && el.classList.contains('is-open') && arrFooterTitles[0].classList.contains('is-close')) {
    el.classList.remove('is-open');
    el.classList.add('is-close');
    footerContactsList.classList.remove('is-open');
    footerContactsList.classList.add('is-close');
    arrFooterTitles[0].classList.remove('is-close');
    arrFooterTitles[0].classList.add('is-open');
    footerNavList.classList.remove('is-close');
    footerNavList.classList.add('is-open');
    return;
  }

  if (el === arrFooterTitles[1] && el.classList.contains('is-close') && arrFooterTitles[0].classList.contains('is-open')) {
    el.classList.remove('is-close');
    el.classList.add('is-open');
    footerContactsList.classList.remove('is-close');
    footerContactsList.classList.add('is-open');
    arrFooterTitles[0].classList.remove('is-open');
    arrFooterTitles[0].classList.add('is-close');
    footerNavList.classList.remove('is-open');
    footerNavList.classList.add('is-close');
    return;
  }
};
