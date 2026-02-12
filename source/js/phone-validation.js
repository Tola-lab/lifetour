export const phoneInputValidation = (phoneInput) => {
  phoneInput.addEventListener('input', (evt) => {
    const value = evt.target.value;

    let numbers = value.replace(/\D/g, '');

    if (numbers.length === 0) {
      evt.target.value = '';
      return;
    }

    if (!numbers.startsWith('7')) {
      numbers = `7${ numbers}`;
    }

    let formatted = '+7';

    if (numbers.length > 1) {
      formatted += ` (${ numbers.substring(1, 4)}`;
    }
    if (numbers.length >= 5) {
      formatted += `) ${ numbers.substring(4, 7)}`;
    }
    if (numbers.length >= 8) {
      formatted += `-${ numbers.substring(7, 9)}`;
    }
    if (numbers.length >= 10) {
      formatted += `-${ numbers.substring(9, 11)}`;
    }

    evt.target.value = formatted;
  });

  phoneInput.addEventListener('focus', (evt) => {
    if (evt.target.value === '') {
      evt.target.value = '+7 ';
    }
  });

  phoneInput.addEventListener('blur', (evt) => {
    if (evt.target.value === '+7 ' || evt.target.value === '+7') {
      evt.target.value = '';
    }
  });
};
