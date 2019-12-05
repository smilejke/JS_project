import {
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
  fllSalaryInput,
  clearContainer,
} from './createElementsUtil.js';

import { controlData, result, info, money, updateStorageSalary } from './localStorage.js';
import { howGoodNumbers, howGoodIndicators, salaryExist } from './validation.js';
import { countSalaryWithoutTaxes, countTaxesOrTuryacka } from './mathFunctions.js';

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

  const newInputDiv = createInputDiv({
    type: 'div',
    classname: 'add-grid-column-1',
    id: 'inputDiv',
    placeToPushId: result.salaryDivIds,
    placeToAppend: buttonDiv,
  });
  setTimeout(() => {
    newInputDiv.classList.toggle('add-grid-column-1-active');
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

  button.addEventListener('click', () => {
    if (result.marker) {
      createForwardButtonDiv(
        {
          type: 'div',
          classname: 'add-grid-3',
          idHtmlToAppend: 'main-content-div5',
        },
        'Вернуться в начало',
        'Завершить работу',
      );
      part2();
      setTimeout(() => {
        buttonDiv.removeChild(button);
      }, 1000);
    }
    button.addEventListener('click', fillDataInfo());
    button.addEventListener('click', howGoodIndicators());

    let getBackButton = document.getElementById('backButton');
    getBackButton.addEventListener('click', () => {
      clearContainer('main-content-div5');
    });
    result.marker = false;
  });
  result.counter += 1;
};

let fillDataInfo = () => {
  fllSalaryInput({ id: 'month0', value: info.month });
  fllSalaryInput({
    id: 'name0',
    value: info.lastname + ' ' + info.name[0] + '.' + info.secondName[0],
  });
  fllSalaryInput({ id: 'department0', value: info.job });
  fllSalaryInput({ id: 'shift0', value: info.hourShift });
  fllSalaryInput({ id: 'middleIvr0', value: controlData.ivrToShift });
  fllSalaryInput({ id: 'middleKk0', value: controlData.middleKk });
  fllSalaryInput({ id: 'middleCsat0', value: controlData.middleCsat });
  draw('.add-grid-column-1');
};

const part2 = () => {
  const salaryCounterDiv = createInputDiv({
    type: 'div',
    classname: 'add-grid-column-2',
    id: 'inputDiv',
    placeToPushId: result.salaryDivIds,
    placeToAppend: document.querySelector('.add-grid-button-1'),
  });
  setTimeout(() => {
    salaryCounterDiv.classList.toggle('add-grid-column-2-active');
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
  indiButton.addEventListener('click', countSalaryWithoutTaxes);
  indiButton.addEventListener('click', countTaxesOrTuryacka);
  indiButton.addEventListener('click', () => {
    part3();
    setTimeout(() => {
      buttonDiv2.remove(indiButton);
    }, 1000);
  });
  result.counter += 1;
};
let fillDataMoney = () => {
  fllSalaryInput({ id: 'daysWorkedId1', value: controlData.totalDaysWorked });
  fllSalaryInput({
    id: 'hoursWorkedId1',
    value: controlData.sumHours,
  });
  fllSalaryInput({ id: 'rate1', value: info.rate });
  fllSalaryInput({ id: 'salaryScale1', value: controlData.salary });
  fllSalaryInput({ id: 'extramoney1', value: controlData.extraMoney });
  fllSalaryInput({ id: 'premium1', value: controlData.bonus });
  fllSalaryInput({ id: 'dirtyMoney1', value: controlData.minus });

  draw('.add-grid-column-2');
};

let part3 = () => {
  const buttonDiv3 = createButtonDiv({
    placeToAppend: document.getElementById('main-content-div5'),
    classname: 'add-grid-button-3',
  });
  const taxButton = createWorkButton({
    placeToAppend: buttonDiv3,
    text: 'Заплати налоги',
  });
  const taxCounterDiv = createInputDiv({
    type: 'div',
    classname: 'add-grid-column-3',
    id: 'inputDiv',
    placeToPushId: result.salaryDivIds,
    placeToAppend: document.querySelector('.add-grid-button-3'),
  });
  setTimeout(() => {
    taxCounterDiv.classList.toggle('add-grid-column-3-active');
  });

  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'withoutTax',
    placeToPushId: money.withoutTax,
    placeholder: 'Итого, без налогов',
    backText: 'Итого, без налогов',
    readOnlyParam: true,
    placeToAppendForm: taxCounterDiv,
  });
  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'incomeTax',
    placeToPushId: money.incomeTax,
    placeholder: 'Подоходный налог',
    backText: 'Подоходный налог',
    readOnlyParam: true,
    placeToAppendForm: taxCounterDiv,
  });
  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'fundTax',
    placeToPushId: money.fundTax,
    placeholder: 'ФСЗН',
    backText: 'ФСЗН',
    readOnlyParam: true,
    placeToAppendForm: taxCounterDiv,
  });
  createInput({
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'totalSalary',
    placeToPushId: money.totalSalary,
    placeholder: 'Итого к выплате',
    backText: 'Итого к выплате',
    readOnlyParam: true,
    placeToAppendForm: taxCounterDiv,
  });
  taxButton.addEventListener('click', fillDataTax);
  taxButton.addEventListener('click', updateStorageSalary);
  taxButton.addEventListener('click', () => {
    setTimeout(() => {
      buttonDiv3.remove(taxButton);
    }, 1000);
  });
  taxButton.addEventListener('click', () => {
    setTimeout(() => {
      let lastDiv = document.querySelector('.add-grid-3');
      lastDiv.classList.add('go-up');
    }, 1000);
  });
};

const fillDataTax = () => {
  fllSalaryInput({ id: 'withoutTax2', value: controlData.salaryWithoutTax });
  fllSalaryInput({ id: 'incomeTax2', value: controlData.incomeTax });
  fllSalaryInput({ id: 'fundTax2', value: controlData.fundTax });
  fllSalaryInput({ id: 'totalSalary2', value: controlData.totalSalary });

  draw('.add-grid-column-3');
  salaryExist();
};

let draw = (querySelClass) => {
  let div = document.querySelector(querySelClass);
  let inputs = div.getElementsByClassName('input-date');

  for (let i = 0; i < inputs.length; i += 1) {
    if (!inputs[i].value == '') {
      inputs[i].classList.remove('input-style');
      inputs[i].classList.add('input-style-final');
    }
  }
};
