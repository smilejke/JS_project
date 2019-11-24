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
        forwardBtn.classList.remove('not-correct');
        forwardBtn.classList.add('all-correct');
        forwardBtn.disabled = false;

        for (let i in getAllinputs) {
          if (getAllinputs[i].className == 'effect input-date invalid') {
            forwardBtn.disabled = true;
            forwardBtn.classList.add('not-correct');
          }
        }
      } else {
        input.classList.add('invalid');
        forwardBtn.disabled = true;
        forwardBtn.classList.add('not-correct');
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
      goNext.classList.add('not-correct');
    }
  }
};

export const ifNoDataInfo = () => {
  let inputs = document.getElementsByTagName('input');
  let goNext = document.getElementById('forwardButton');

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value === '') {
      goNext.disabled = true;
      goNext.classList.add('not-correct');
    } else {
      goNext.disabled = false;
      goNext.classList.remove('not-correct');
      goNext.classList.add('all-correct');
    }
  }
};
