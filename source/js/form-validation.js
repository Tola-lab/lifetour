const formContainer = document.querySelector('.form');
const form = formContainer.querySelector('form');

export const initFormValidation = () => {
  form.addEventListener('submit', (evt) => {
    if (!form.checkValidity()) {
      evt.preventDefault();
      formContainer.classList.add('form--error');
      form.reportValidity();
    } else {
      formContainer.classList.remove('form--error');
    }
  });
};
