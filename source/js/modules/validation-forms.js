import {outlineIfError, outlineIfNotError} from '../utils/error-outline';
import iMask from './../vendor/imask';

const maskOptions = {mask: '+{7}(000)000-00-00'};
const nameInputs = document.querySelectorAll('[data-name]');
const phoneInputs = document.querySelectorAll('[data-phone]');
const checkboxLabels = document.querySelectorAll('[data-checkbox-label]');
const checkboxInputs = document.querySelectorAll('[data-checkbox-input]');

for (let z = 0; z < nameInputs.length; z++) {
  nameInputs[z].addEventListener('input', () => {
    outlineIfNotError(nameInputs[z]);
  });
}

for (let i = 0; i < phoneInputs.length; i++) {
  phoneInputs[i].addEventListener('input', () => {
    outlineIfNotError(phoneInputs[i]);

    phoneInputs[i].addEventListener('keydown', (evt) => {
      if (phoneInputs[i].length === 4 && evt.keyCode === 8) {
        if (evt.preventDefault) {
          evt.preventDefault();
        }
        phoneInputs[i].value = '+7(';
      }
    });

    iMask(phoneInputs[i], maskOptions);
  });
}

export const checkNameInput = (nameInput) => {
  nameInput.setCustomValidity('');
  const inputName = nameInput.value.trim();

  if (!inputName) {
    nameInput.setCustomValidity('Укажите свое имя.');
    outlineIfError(nameInput);
  } else {
    outlineIfNotError(nameInput);
    return;
  }

  nameInput.reportValidity();
};

export const checkPhoneInput = (phoneInput) => {
  phoneInput.setCustomValidity('');
  const inputPhone = phoneInput.value;

  if (!inputPhone || inputPhone.length < 16) {
    phoneInput.setCustomValidity('Укажите свой телефон.');
    outlineIfError(phoneInput);
  } else {
    outlineIfNotError(phoneInput);
    return;
  }
  phoneInput.reportValidity();
};

if (checkboxLabels.length > 0 && checkboxInputs.length > 0) {
  for (let i = 0; i < checkboxLabels.length; i++) {
    checkboxLabels[i].addEventListener('click', () => {
      checkboxInputs[i].setCustomValidity('');

      if (checkboxInputs[i].checked === false) {
        checkboxLabels[i].classList.remove('is-checked');
        checkboxLabels[i].classList.add('error');
        checkboxInputs[i].setCustomValidity('Необходимо дать согласие на обработку персональных данных.');
      } else {
        checkboxLabels[i].classList.add('is-checked');
        checkboxLabels[i].classList.remove('error');
        checkboxInputs[i].setCustomValidity('');
      }

      checkboxInputs[i].reportValidity();
    });
  }
}

export const formValidity = (elem) => {
  const form = elem.closest('[data-form]');
  const nameInput = form.querySelector('[data-name]');
  const phoneInput = form.querySelector('[data-phone]');

  checkPhoneInput(phoneInput);
  checkNameInput(nameInput);
};
