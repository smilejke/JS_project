export const ifDataValid = (contId) => {
  let eventContainer = document.getElementById(contId);

  eventContainer.addEventListener('click', (event) => {
    let target = event.target;
    if (target.tagName == 'INPUT') {
      let inputs = document.querySelectorAll('input[data-rule]');

      for (let input of inputs) {
        input.addEventListener('change', () => {
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

          if (check) {
            input.classList.remove('invalid');
            input.classList.add('valid');
          } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
          }

          switch (rule) {
            case 'number':
              check = /^\d+$/.test(value);
              break;
          }

          if (check && check2) {
            input.classList.remove('invalid');
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
            input.classList.remove('valid');
            input.classList.add('invalid');
            forwardBtn.disabled = true;
            forwardBtn.classList.add('not-correct');
          }
          ifNoData();
        });
      }
    }
  });
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

export const howGoodIndicators = () => {
  const ivr = document.getElementById('middleIvr0');
  const kk = document.getElementById('middleKk0');
  const csat = document.getElementById('middleCsat0');

  if (ivr.value <= 45) {
    ivr.classList.add('red-zone');
  }
  if (ivr.value > 45 && ivr.value <= 80) {
    ivr.classList.add('blue-zone');
  }
  if (ivr.value > 80) {
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
  const premium = document.getElementById('premium1');
  const dirty = document.getElementById('dirtyMoney1');
  const extra = document.getElementById('extramoney1');
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

export const salaryExist = () => {
  const salary = document.getElementById('totalSalary2');
  if (salary.value > 0) {
    salary.classList.add('golden-zone');
  }
};

export const formValidation = () => {
  let form = document.getElementById('formUser');
  let goNext = document.getElementById('forwardButton');

  form.onclick = (event) => {
    let target = event.target;

    if (target.type === 'text') {
      target.addEventListener('change', () => {
        let check;
        check = /^[а-яА-ЯёЁ]+$/.test(target.value);
        target.classList.remove('form-input-correct');
        target.classList.remove('form-input-wrong');
        if (check) {
          target.classList.add('form-input-correct');
        } else {
          target.classList.add('form-input-wrong');
        }
      });
    }
    if (target.type === 'number') {
      target.addEventListener('change', () => {
        let check;
        check = /^\d+$/.test(target.value);
        target.classList.remove('form-input-wrong');
        target.classList.remove('form-input-correct');
        if (check) {
          target.classList.add('form-input-correct');
        } else {
          target.classList.add('form-input-wrong');
        }
      });
    }
    if (target.tagName === 'INPUT') {
      target.addEventListener('blur', () => {
        if (target.value === '') {
          goNext.disabled = true;
          goNext.classList.add('not-correct');
        } else {
          ifYouCanGoNext();
        }
      });
    }
  };
};

const ifYouCanGoNext = () => {
  let inputs = document.getElementsByTagName('input');
  let goNext = document.getElementById('forwardButton');

  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value == '') {
      goNext.disabled = true;
      goNext.classList.add('not-correct');
    } else {
      goNext.disabled = false;
      goNext.classList.remove('not-correct');
      goNext.classList.add('all-correct');
    }
  }
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].className == 'form-input-wrong') {
      goNext.disabled = true;
      goNext.classList.add('not-correct');
    }
  }
};

export const kkMoreThan100 = (divId) => {
  let mainDiv = document.getElementById(divId);
  let goNext = document.getElementById('forwardButton');

  mainDiv.onclick = (event) => {
    let target = event.target;
    let kk = Number(target.dataset.kk);
    if (kk === 100) {
      target.addEventListener('blur', () => {
        if (target.value > kk) {
          target.classList.remove('valid');
          target.classList.add('invalid');
          goNext.disabled = true;
          goNext.classList.remove('all-correct');
          goNext.classList.add('not-correct');
        }
      });
    }
  };
};

export const csatMoreThan100 = (divId) => {
  let mainDiv = document.getElementById(divId);
  let goNext = document.getElementById('forwardButton');

  mainDiv.onclick = (event) => {
    let target = event.target;
    let csat = Number(target.dataset.csat);
    if (csat === 100) {
      target.addEventListener('blur', () => {
        if (target.value > csat) {
          target.classList.remove('valid');
          target.classList.add('invalid');
          goNext.disabled = true;
          goNext.classList.remove('all-correct');
          goNext.classList.add('not-correct');
        }
      });
    }
  };
};

export const validateHourAndDate = () => {
  let formDiv = document.querySelectorAll('.form-div');
  let goNext = document.getElementById('forwardButton');

  for (let i = 0; i < formDiv.length; i += 1) {
    formDiv[i].onclick = (event) => {
      let target = event.target;
      let hour = +target.dataset.hour;
      let date = +target.dataset.date;

      if (hour === 24) {
        target.addEventListener('blur', () => {
          if (target.value > hour) {
            target.classList.remove('valid');
            target.classList.add('invalid');
            goNext.disabled = true;
            goNext.classList.remove('all-correct');
            goNext.classList.add('not-correct');
          }
        });
      }
      if (date === 31) {
        target.addEventListener('blur', () => {
          if (target.value > date) {
            target.classList.remove('valid');
            target.classList.add('invalid');
            goNext.disabled = true;
            goNext.classList.remove('all-correct');
            goNext.classList.add('not-correct');
          }
        });
      }
    };
  }
};

export const setAttr = (inputPath, hash) => {
  for (let i = 0; i < inputPath.length; i += 1) {
    document.getElementById(inputPath[i]).setAttribute(hash.name, hash.data);
  }
};
