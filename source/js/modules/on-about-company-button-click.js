import {aboutCompanyWrapper, aboutCompanyButton, aboutCompanyInnerSpan} from '../main';

export const onAboutCompanyButtonClick = () => {
  if (document.body.contains(aboutCompanyWrapper) && document.body.contains(aboutCompanyButton) && document.body.contains(aboutCompanyInnerSpan)) {
    if (aboutCompanyButton.classList.contains('is-close')) {
      aboutCompanyInnerSpan.classList.remove('is-close');
      aboutCompanyInnerSpan.classList.add('is-open');
      aboutCompanyWrapper.classList.remove('is-close');
      aboutCompanyWrapper.classList.add('is-open');
      aboutCompanyButton.classList.remove('is-close');
      aboutCompanyButton.classList.add('is-open');
    } else {
      aboutCompanyInnerSpan.classList.remove('is-open');
      aboutCompanyInnerSpan.classList.add('is-close');
      aboutCompanyWrapper.classList.remove('is-open');
      aboutCompanyWrapper.classList.add('is-close');
      aboutCompanyButton.classList.remove('is-open');
      aboutCompanyButton.classList.add('is-close');
    }
  } else {
    return;
  }
};
