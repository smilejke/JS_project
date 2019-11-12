export const ifDataValid = () => {
  let inputs = document.querySelectorAll('input[data-rule]');

  for (let input of inputs) {
    input.addEventListener('blur', () => {
      let rule = input.dataset.rule;
      let value = input.value;
      let check;
      let forwardBtn = document.getElementById('forwardButton');

      switch (rule) {
        case 'number':
          check = /^\d+$/.test(value);
      }
      input.classList.remove('valid');
      input.classList.remove('invalid');
      if (check) {
        input.classList.add('valid');
        forwardBtn.disabled = false;
      } else {
        input.classList.add('invalid');
        forwardBtn.disabled = true;
      }
    });
  }
};

export const ifNoData = () => {
  let inputs = document.getElementsByTagName('input');
  let goNext = document.getElementById('forwardButton');
  for (let i in inputs) {
    if (inputs[i].value === '') {
      goNext.disabled = true;
    }
  }
};
