export const ifDataValid = () => {
  let inputs = document.querySelectorAll('input[data-rule]');

  for (let input of inputs) {
    input.addEventListener('blur', () => {
      let rule = input.dataset.rule;
      let value = input.value;
      let check;

      switch (rule) {
        case 'number':
          check = /^\d+$/.test(value);
          break;
      }
      input.classList.remove('valid');
      input.classList.remove('invalid');
      if (check) {
        input.classList.add('valid');
      } else {
        input.classList.add('invalid');
      }
    });
  }
};
