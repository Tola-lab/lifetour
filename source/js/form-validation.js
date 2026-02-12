import { phoneInputValidation } from './phone-validation.js';

export const initFormValidation = () => {
  const form = document.querySelector('.form form');
  const container = form.closest('.form');
  const inputs = form.querySelectorAll('input');
  const phoneInput = form.querySelector('input[type="tel"]');
  const errorClass = 'form--error';

  if (phoneInput) {
    phoneInputValidation(phoneInput);
  }

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      container?.classList.remove(errorClass);
    });
  });

  form.addEventListener('invalid', () => {
    container?.classList.add(errorClass);
  }, true);

  form.addEventListener('submit', (evt) => {
    if (!form.checkValidity()) {
      evt.preventDefault();
      form.reportValidity();
      container?.classList.add(errorClass);
    } else {
      container?.classList.remove(errorClass);
    }
  });
};

