import {footerNavList} from '../main';
import {footerContactsList} from '../main';
import {arr} from '../main';

export const onFooterTitleClick = (el) => {
  if (el === arr[0] && el.classList.contains('is-close') && arr[1].classList.contains('is-close')) {
    el.classList.remove('is-close');
    el.classList.add('is-open');
    footerNavList.classList.add('is-open');
    return;
  }

  if (el === arr[1] && el.classList.contains('is-close') && arr[0].classList.contains('is-close')) {
    el.classList.remove('is-close');
    el.classList.add('is-open');
    footerContactsList.classList.add('is-open');
    return;
  }

  if (el === arr[0] && el.classList.contains('is-close') && arr[1].classList.contains('is-open')) {
    el.classList.remove('is-close');
    el.classList.add('is-open');
    footerNavList.classList.remove('is-close');
    footerNavList.classList.add('is-open');
    arr[1].classList.remove('is-open');
    arr[1].classList.add('is-close');
    footerContactsList.classList.remove('is-open');
    footerContactsList.classList.add('is-close');
    return;
  }

  if (el === arr[0] && el.classList.contains('is-open') && arr[1].classList.contains('is-close')) {
    el.classList.remove('is-open');
    el.classList.add('is-close');
    footerNavList.classList.remove('is-open');
    footerNavList.classList.add('is-close');
    arr[1].classList.remove('is-close');
    arr[1].classList.add('is-open');
    footerContactsList.classList.remove('is-close');
    footerContactsList.classList.add('is-open');
    return;
  }

  if (el === arr[1] && el.classList.contains('is-open') && arr[0].classList.contains('is-close')) {
    el.classList.remove('is-open');
    el.classList.add('is-close');
    footerContactsList.classList.remove('is-open');
    footerContactsList.classList.add('is-close');
    arr[0].classList.remove('is-close');
    arr[0].classList.add('is-open');
    footerNavList.classList.remove('is-close');
    footerNavList.classList.add('is-open');
    return;
  }

  if (el === arr[1] && el.classList.contains('is-close') && arr[0].classList.contains('is-open')) {
    el.classList.remove('is-close');
    el.classList.add('is-open');
    footerContactsList.classList.remove('is-close');
    footerContactsList.classList.add('is-open');
    arr[0].classList.remove('is-open');
    arr[0].classList.add('is-close');
    footerNavList.classList.remove('is-open');
    footerNavList.classList.add('is-close');
    return;
  }
  // switch (el) {
  //   case (el === arr[0] && el.classList.contains('is-close') && arr[1].classList.contains('is-close')): {
  //     el.classList.remove('is-close');
  //     el.classList.add('is-open');
  //     footerNavList.classList.add('is-open');
  //     break;
  //   }
  //   case (el === arr[1] && el.classList.contains('is-close') && arr[0].classList.contains('is-close')): {
  //     el.classList.remove('is-close');
  //     el.classList.add('is-open');
  //     footerContactsList.classList.add('is-open');
  //     break;
  //   }

  //   case (el === arr[0] && el.classList.contains('is-close') && arr[1].classList.contains('is-open')): {
  //     el.classList.remove('is-close');
  //     el.classList.add('is-open');
  //     footerNavList.classList.remove('is-close');
  //     footerNavList.classList.add('is-open');
  //     arr[1].classList.remove('is-open');
  //     arr[1].classList.add('is-close');
  //     footerContactsList.classList.remove('is-open');
  //     footerContactsList.classList.add('is-close');
  //     break;
  //   }

  //   case (el === arr[0] && el.classList.contains('is-open') && arr[1].classList.contains('is-close')): {
  //     el.classList.remove('is-open');
  //     el.classList.add('is-close');
  //     footerNavList.classList.remove('is-open');
  //     footerNavList.classList.add('is-close');
  //     arr[1].classList.remove('is-close');
  //     arr[1].classList.add('is-open');
  //     footerContactsList.classList.remove('is-close');
  //     footerContactsList.classList.add('is-open');
  //     break;
  //   }

  //   case (el === arr[1] && el.classList.contains('is-open') && arr[0].classList.contains('is-close')): {
  //     el.classList.remove('is-open');
  //     el.classList.add('is-close');
  //     footerContactsList.classList.remove('is-open');
  //     footerContactsList.classList.add('is-close');
  //     arr[0].classList.remove('is-close');
  //     arr[0].classList.add('is-open');
  //     footerNavList.classList.remove('is-close');
  //     footerNavList.classList.add('is-open');
  //     break;
  //   }

  //   case (el === arr[1] && el.classList.contains('is-close') && arr[0].classList.contains('is-open')): {
  //     el.classList.remove('is-close');
  //     el.classList.add('is-open');
  //     footerContactsList.classList.remove('is-close');
  //     footerContactsList.classList.add('is-open');
  //     arr[0].classList.remove('is-open');
  //     arr[0].classList.add('is-close');
  //     footerNavList.classList.remove('is-open');
  //     footerNavList.classList.add('is-close');
  //     break;
  //   }
  // }
};
