import {
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
} from './createElementsUtil.js';

import { controlData, result, info, money } from './localStorage.js';
import { howGood } from './validation.js';

import router from '../../router/applicationRouter.js';

export const makeSalaryPage = () => {
  result.counter = 0;
  result.marker = true;

  const makeExtraActDiv = mainContainer({
    type: 'div',
    id: 'main-content-div5',
  });

  const buttonDiv = createButtonDiv({ placeToAppend: makeExtraActDiv, classname: 'add-grid-2' });

  const button = createWorkButton({
    placeToAppend: buttonDiv,
    text: 'Получить данные',
  });
  const newInputDiv = createInputDiv({
    type: 'div',
    classname: 'add-grid-1',
    id: 'inputDiv',
    placeToPushId: result.inputDivIds,
    placeToAppend: buttonDiv,
  });

  createInput({
    optionalClass: 'input-date',
    id: 'month',
    placeToPushId: money.monthId,
    placeholder: 'Месяц',
    backText: 'Месяц',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    optionalClass: 'input-date',
    id: 'name',
    placeToPushId: money.nameId,
    placeholder: 'Ф.И.О сотрудника',
    backText: 'Ф.И.О сотрудника',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    optionalClass: 'input-date',
    id: 'department',
    placeToPushId: money.departmentId,
    placeholder: 'Отдел',
    backText: 'Отдел',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    optionalClass: 'input-date',
    id: 'daysWorkedId',
    placeToPushId: money.daysWorkedId,
    placeholder: 'Итого отр.дней',
    backText: 'Итого отр.дней',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    optionalClass: 'input-date',
    id: 'hoursWorkedId',
    placeToPushId: money.hoursWorkedId,
    placeholder: 'Итого отр.часов',
    backText: 'Итого отр.часов',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    optionalClass: 'input-date',
    id: 'middleIvr',
    placeToPushId: money.middleIvrId,
    backText: 'Средний ИВР',
    placeholder: 'Средний ИВР',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    optionalClass: 'input-date',
    id: 'middleKk',
    placeToPushId: money.middleKkId,
    placeholder: 'Контроль качества',
    backText: 'Контроль качества',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'middleCsat',
    placeToPushId: money.middleCsatId,
    placeholder: 'CSAT',
    backText: 'CSAT',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'extramoney',
    placeToPushId: money.extraMoneyId,
    placeholder: 'Дополнительный доход',
    backText: 'Дополнительный доход',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'rate',
    placeToPushId: money.rateId,
    placeholder: 'Ставка, рубли/час',
    backText: 'Ставка, рубли/час',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'shift',
    placeToPushId: money.shiftId,
    placeholder: 'Часовая смена',
    backText: 'Часовая смена',
    readOnlyParam: true,
    placeToAppendForm: newInputDiv,
  });

  const inputDivs = document.getElementsByClassName('col-3');
  for (let i = 0; i < inputDivs.length; i += 1) {
    inputDivs[i].style.width = '250px';
  }

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
    }
    button.addEventListener('click', fillData());
    button.addEventListener('click', howGood());
    result.marker = false;
  });
};

let fillData = () => {
  let month = document.getElementById('month0');
  month.value = info.month;

  let name = document.getElementById('name0');
  name.value = info.lastname + ' ' + info.name[0] + '.' + info.secondName[0];

  let department = document.getElementById('department0');
  department.value = info.job;

  let totalDaysWorked = document.getElementById('daysWorkedId0');
  totalDaysWorked.value = controlData.totalDaysWorked;

  let middleIvr = document.getElementById('middleIvr0');
  middleIvr.value = controlData.middleIvr;

  let totalHoursWorked = document.getElementById('hoursWorkedId0');
  totalHoursWorked.value = controlData.sumHours;

  let middleKk = document.getElementById('middleKk0');
  middleKk.value = controlData.middleKk;

  let middleCsat = document.getElementById('middleCsat0');
  middleCsat.value = controlData.middleCsat;

  let shift = document.getElementById('shift0');
  shift.value = info.hourShift;

  let rate = document.getElementById('rate0');
  rate.value = info.rate;

  let extramoney = document.getElementById('extramoney0');
  extramoney.value = controlData.extraMoney;

  justDoIt();
  let getBackButton = document.getElementById('backButton');
  getBackButton.addEventListener('click', () => {
    router.navigate('/csat');
    document.body.removeChild(document.getElementById('main-content-div5'));
  });
};

let justDoIt = () => {
  let labels = document.getElementsByTagName('label');
  let inputs = document.getElementsByClassName('input-date');

  for (let i = 0; i < inputs.length; i += 1) {
    if (!inputs[i].value == '') {
      for (let j = 0; j < inputs.length; j += 1) {
        // labels[j].classList.add('just-do-it');
        labels[j].style.top = '-18px';
        labels[j].style.left = '0';
        labels[j].style.fontSize = '12px';
        labels[j].style.color = '#1289a7';
        labels[j].style.transition = '0.3s';
      }
    }
  }
};
