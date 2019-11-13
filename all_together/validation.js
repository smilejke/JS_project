export const ifDataValid = () => {
  let inputs = document.querySelectorAll('input[data-rule]');

  for (let input of inputs) {
    input.addEventListener('blur', () => {
      let rule = input.dataset.rule;
      let value = input.value;
      let check;
      let forwardBtn = document.getElementById('forwardButton');
      let getAllinputs = document.getElementsByTagName('input');

      switch (rule) {
        case 'number':
          check = /^\d+$/.test(value);
          break;
      }
      input.classList.remove('valid');
      input.classList.remove('invalid');
      if (check) {
        input.classList.add('valid');
        forwardBtn.disabled = false;
        for (let i in getAllinputs) {
          if (getAllinputs[i].className == 'input-date invalid') {
            forwardBtn.disabled = true;
          }
        }
      } else {
        input.classList.add('invalid');
      }
      ifNoData();
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
