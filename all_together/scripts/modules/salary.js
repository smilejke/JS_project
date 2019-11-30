import {
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
} from './createElementsUtil.js';

import { storage, controlData, result, info, money } from './localStorage.js';
import { howGoodNumbers, howGoodIndicators } from './validation.js';

import router from '../../router/applicationRouter.js';

export const makeSalaryPage = () => {
  result.counter = 0;
  result.marker = true;

  const makeExtraActDiv = mainContainer({
    type: 'div',
    id: 'main-content-div5',
  });

  const buttonDiv = createButtonDiv({
    placeToAppend: makeExtraActDiv,
    classname: 'add-grid-button-1',
  });
  const button = createWorkButton({
    placeToAppend: buttonDiv,
    text: 'Кто такой?',
  });

  const buttonDiv3 = createButtonDiv({
    placeToAppend: makeExtraActDiv,
    classname: 'add-grid-button-3',
  });
  const taxButton = createWorkButton({
    placeToAppend: buttonDiv3,
    text: 'Получи profit',
  });
  taxButton.style.display = 'none';

  const newInputDiv = createInputDiv({
    type: 'div',
    classname: 'add-grid-column-1',
    id: 'inputDiv',
    placeToPushId: result.salaryDivIds,
    placeToAppend: buttonDiv,
  });

  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'month',
    placeToPushId: money.monthId,
    placeholder: 'Месяц',
    backText: 'Месяц',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'name',
    placeToPushId: money.nameId,
    placeholder: 'Ф.И.О сотрудника',
    backText: 'Ф.И.О сотрудника',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'department',
    placeToPushId: money.departmentId,
    placeholder: 'Отдел',
    backText: 'Отдел',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'shift',
    placeToPushId: money.shiftId,
    placeholder: 'Часовая смена',
    backText: 'Часовая смена',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'middleIvr',
    placeToPushId: money.middleIvrId,
    backText: 'Средний ИВР',
    placeholder: 'Средний ИВР',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'middleKk',
    placeToPushId: money.middleKkId,
    placeholder: 'Контроль качества',
    backText: 'Контроль качества',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'middleCsat',
    placeToPushId: money.middleCsatId,
    placeholder: 'CSAT',
    backText: 'CSAT',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  //==========================================================

  //==========================================================
  createInputDiv({
    type: 'div',
    classname: 'add-grid-column-3',
    id: 'inputDiv',
    placeToPushId: result.salaryDivIds,
    placeToAppend: buttonDiv,
  });

  button.addEventListener('click', () => {
    if (result.marker) {
      createForwardButtonDiv(
        {
          type: 'div',
          classname: 'add-grid-3',
          idHtmlToAppend: 'main-content-div5',
        },
        'Вернуться назад к показателям',
        'Посчитать налоги',
      );
      setTimeout(part2, 1000);
    }
    button.addEventListener('click', fillDataInfo());
    button.addEventListener('click', howGoodIndicators());

    let getBackButton = document.getElementById('backButton');
    getBackButton.addEventListener('click', () => {
      router.navigate('/csat');
      document.body.removeChild(document.getElementById('main-content-div5'));
    });
    result.marker = false;
  });
};

let fillDataInfo = () => {
  let month = document.getElementById('month0');
  month.value = info.month;

  let name = document.getElementById('name0');
  name.value = info.lastname + ' ' + info.name[0] + '.' + info.secondName[0];

  let department = document.getElementById('department0');
  department.value = info.job;

  let shift = document.getElementById('shift0');
  shift.value = info.hourShift;

  let middleIvr = document.getElementById('middleIvr0');
  middleIvr.value = controlData.ivrToShift;

  let middleKk = document.getElementById('middleKk0');
  middleKk.value = controlData.middleKk;

  let middleCsat = document.getElementById('middleCsat0');
  middleCsat.value = controlData.middleCsat;

  draw();
};

let draw = () => {
  let div = document.querySelector('.add-grid-column-1');
  let inputs = div.getElementsByClassName('input-date');

  for (let i = 0; i < inputs.length; i += 1) {
    if (!inputs[i].value == '') {
      inputs[i].classList.remove('input-style');
      inputs[i].classList.add('input-style-final');
    }
  }
};

const part2 = () => {
  const salaryCounterDiv = createInputDiv({
    type: 'div',
    classname: 'add-grid-column-2',
    id: 'inputDiv',
    placeToPushId: result.salaryDivIds,
    placeToAppend: document.querySelector('.add-grid-button-1'),
  });

  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'daysWorkedId',
    placeToPushId: money.daysWorkedId,
    placeholder: 'Итого отр.дней',
    backText: 'Итого отр.дней',
    readOnlyParam: true,
    placeToAppendForm: salaryCounterDiv,
  });
  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'hoursWorkedId',
    placeToPushId: money.hoursWorkedId,
    placeholder: 'Итого отр.часов',
    backText: 'Итого отр.часов',
    readOnlyParam: true,
    placeToAppendForm: salaryCounterDiv,
  });
  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'rate',
    placeToPushId: money.rateId,
    placeholder: 'Ставка, рубли/час',
    backText: 'Ставка, рубли/час',
    readOnlyParam: true,
    placeToAppendForm: salaryCounterDiv,
  });
  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'salaryScale',
    placeToPushId: money.salaryScale,
    placeholder: 'Оклад',
    backText: 'Оклад',
    readOnlyParam: true,
    placeToAppendForm: salaryCounterDiv,
  });
  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'extramoney',
    placeToPushId: money.extraMoneyId,
    placeholder: 'Дополнительный доход',
    backText: 'Дополнительный доход',
    readOnlyParam: true,
    placeToAppendForm: salaryCounterDiv,
  });
  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'premium',
    placeToPushId: money.premium,
    placeholder: 'Размер премии',
    backText: 'Размер премии',
    readOnlyParam: true,
    placeToAppendForm: salaryCounterDiv,
  });
  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'dirtyMoney',
    placeToPushId: money.dirtyMoney,
    placeholder: 'Размер штрафа',
    backText: 'Размер штрафа',
    readOnlyParam: false,
    placeToAppendForm: salaryCounterDiv,
  });

  const buttonDiv2 = createButtonDiv({
    placeToAppend: document.querySelector('#main-content-div5'),
    classname: 'add-grid-button-2',
  });
  const indiButton = createWorkButton({
    placeToAppend: buttonDiv2,
    text: 'Что умеешь?',
  });
  indiButton.addEventListener('click', fillDataMoney);
  indiButton.addEventListener('click', howGoodNumbers);
};
let fillDataMoney = () => {
  let totalDaysWorked = document.getElementById('daysWorkedId0');
  totalDaysWorked.value = controlData.totalDaysWorked;

  let totalHoursWorked = document.getElementById('hoursWorkedId0');
  totalHoursWorked.value = controlData.sumHours;

  let rate = document.getElementById('rate0');
  rate.value = info.rate;

  let scale = document.getElementById('salaryScale0');
  scale.value = controlData.salary;

  let extramoney = document.getElementById('extramoney0');
  extramoney.value = controlData.extraMoney;

  let bonus = document.getElementById('premium0');
  bonus.value = controlData.bonus;

  let dirty = document.getElementById('dirtyMoney0');
  dirty.value = controlData.minus;
  draw2();
};

let draw2 = () => {
  let div = document.querySelector('.add-grid-column-2');
  let inputs = div.getElementsByClassName('input-date');

  for (let i = 0; i < inputs.length; i += 1) {
    if (!inputs[i].value == '') {
      inputs[i].classList.remove('input-style');
      inputs[i].classList.add('input-style-final');
    }
  }
};
