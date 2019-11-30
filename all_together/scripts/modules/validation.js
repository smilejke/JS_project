export const ifDataValid = () => {
  let inputs = document.querySelectorAll('input[data-rule]');

  for (let input of inputs) {
    input.addEventListener('blur', () => {
      let rule = input.dataset.rule;
      let rule2 = input.dataset.rule2;
      let value = input.value;
      let check;
      let check2;
      let forwardBtn = document.getElementById('forwardButton');
      let getAllinputs = document.getElementsByTagName('input');

      switch (rule2) {
        case 'length':
          let length = value.length;
          let from = Number(input.dataset.from);
          let to = Number(input.dataset.to);
          check2 = length >= from && length <= to;
          break;
      }
      input.classList.remove('valid');
      input.classList.remove('invalid');
      if (check) {
        input.classList.add('valid');
      } else {
        input.classList.add('invalid');
      }

      switch (rule) {
        case 'number':
          check = /^\d+$/.test(value);
          break;
      }

      if (check && check2) {
        input.classList.add('valid');
        forwardBtn.classList.remove('not-correct');
        forwardBtn.classList.add('all-correct');
        forwardBtn.disabled = false;

        for (let i in getAllinputs) {
          if (getAllinputs[i].className == 'input-style input-date invalid') {
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

export const howGoodIndicators = () => {
  const ivr = document.getElementById('middleIvr0');
  const kk = document.getElementById('middleKk0');
  const csat = document.getElementById('middleCsat0');

  if (ivr.value <= 70) {
    ivr.classList.add('red-zone');
  }
  if (ivr.value > 70 && ivr.value <= 100) {
    ivr.classList.add('blue-zone');
  }
  if (ivr.value > 100) {
    ivr.classList.add('green-zone');
  }

  if (kk.value <= 70) {
    kk.classList.add('red-zone');
  }
  if (kk.value > 80 && kk.value < 100) {
    kk.classList.add('blue-zone');
  }
  if (kk.value == 100) {
    kk.classList.add('green-zone');
  }

  if (csat.value <= 70) {
    csat.classList.add('red-zone');
  }
  if (csat.value > 70 && csat.value < 100) {
    csat.classList.add('blue-zone');
  }
  if (csat.value == 100) {
    csat.classList.add('green-zone');
  }
};

export const howGoodNumbers = () => {
  const premium = document.getElementById('premium0');
  const dirty = document.getElementById('dirtyMoney0');
  const extra = document.getElementById('extramoney0');
  if (premium.value > 0) {
    premium.classList.add('green-zone');
  }
  if (dirty.value > 0) {
    dirty.classList.add('red-zone');
  }
  if (extra.value > 0) {
    extra.classList.add('green-zone');
  }
};
