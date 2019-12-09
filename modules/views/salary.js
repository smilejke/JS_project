import {
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
  fllSalaryInput,
  clearContainer,
} from '../../../JS_project/modules/createElementsUtil.js';

import {
  howGoodNumbers,
  howGoodIndicators,
  salaryExist,
} from '../../../JS_project/modules/validation.js';
import {
  countSalaryWithoutTaxes,
  countTaxesOrTuryacka,
} from '../../../JS_project/modules/mathFunctions.js';

import { person } from '../../../JS_project/modules/localStorage.js';

export default (context) => {
  const makeSalaryPage = () => {
    context.counter = 0;
    context.marker = true;

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

    const newInputDiv = createInputDiv(
      {
        type: 'div',
        classname: 'add-grid-column-1',
        id: 'inputDiv',
        placeToPushId: context.salaryDivIds,
        placeToAppend: buttonDiv,
      },
      context,
    );
    setTimeout(() => {
      newInputDiv.classList.toggle('add-grid-column-1-active');
    });

    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'month',
        placeToPushId: context.monthId,
        placeholder: 'Месяц',
        backText: 'Месяц',
        readOnlyParam: true,
        placeToAppendForm: newInputDiv,
      },
      context,
    );

    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'name',
        placeToPushId: context.nameId,
        placeholder: 'Ф.И.О сотрудника',
        backText: 'Ф.И.О сотрудника',
        readOnlyParam: true,
        placeToAppendForm: newInputDiv,
      },
      context,
    );

    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'department',
        placeToPushId: context.departmentId,
        placeholder: 'Отдел',
        backText: 'Отдел',
        readOnlyParam: true,
        placeToAppendForm: newInputDiv,
      },
      context,
    );

    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'shift',
        placeToPushId: context.shiftId,
        placeholder: 'Часовая смена',
        backText: 'Часовая смена',
        readOnlyParam: true,
        placeToAppendForm: newInputDiv,
      },
      context,
    );

    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'middleIvr',
        placeToPushId: context.middleIvrId,
        backText: 'Средний ИВР',
        placeholder: 'Средний ИВР',
        readOnlyParam: true,
        placeToAppendForm: newInputDiv,
      },
      context,
    );

    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'middleKk',
        placeToPushId: context.middleKkId,
        placeholder: 'Контроль качества',
        backText: 'Контроль качества',
        readOnlyParam: true,
        placeToAppendForm: newInputDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'middleCsat',
        placeToPushId: context.middleCsatId,
        placeholder: 'CSAT',
        backText: 'CSAT',
        readOnlyParam: true,
        placeToAppendForm: newInputDiv,
      },
      context,
    );

    button.addEventListener('click', () => {
      if (context.marker) {
        createForwardButtonDiv(
          {
            type: 'div',
            classname: 'add-grid-3',
            idHtmlToAppend: 'main-content-div5',
          },
          'Назад к доп.активности',
          'Новый сотрудник',
          context,
        );
        part2(context);
        setTimeout(() => {
          buttonDiv.removeChild(button);
        }, 1000);
        fillDataInfo(context);
        howGoodIndicators();
      }

      const finalButton = document.getElementById('forwardButton');
      finalButton.addEventListener('click', () => {
        clearContainer('main-content-div5');
        context.router.navigate('/page2');
      });
      const getBackButton = document.getElementById('backButton');
      getBackButton.addEventListener('click', () => {
        clearContainer('main-content-div5');
        context.router.navigate('/page6');
      });
      context.marker = false;
    });
    context.counter += 1;
  };

  let fillDataInfo = (context) => {
    fllSalaryInput({ id: 'month0', value: context.month });
    fllSalaryInput({
      id: 'name0',
      value: context.lastname + ' ' + context.name[0] + '.' + context.secondName[0],
    });
    fllSalaryInput({ id: 'department0', value: context.job });
    fllSalaryInput({ id: 'shift0', value: context.hourShift });
    fllSalaryInput({ id: 'middleIvr0', value: context.ivrToShift });
    fllSalaryInput({ id: 'middleKk0', value: context.middleKk });
    fllSalaryInput({ id: 'middleCsat0', value: context.middleCsat });
    draw('.add-grid-column-1');
  };

  const part2 = (context) => {
    const salaryCounterDiv = createInputDiv(
      {
        type: 'div',
        classname: 'add-grid-column-2',
        id: 'inputDiv',
        placeToPushId: context.salaryDivIds,
        placeToAppend: document.querySelector('.add-grid-button-1'),
      },
      context,
    );
    setTimeout(() => {
      salaryCounterDiv.classList.toggle('add-grid-column-2-active');
    });

    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'daysWorkedId',
        placeToPushId: context.daysWorkedId,
        placeholder: 'Итого отр.дней',
        backText: 'Итого отр.дней',
        readOnlyParam: true,
        placeToAppendForm: salaryCounterDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'hoursWorkedId',
        placeToPushId: context.hoursWorkedId,
        placeholder: 'Итого отр.часов',
        backText: 'Итого отр.часов',
        readOnlyParam: true,
        placeToAppendForm: salaryCounterDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'rate',
        placeToPushId: context.rateId,
        placeholder: 'Ставка, рубли/час',
        backText: 'Ставка, рубли/час',
        readOnlyParam: true,
        placeToAppendForm: salaryCounterDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'salaryScale',
        placeToPushId: context.salaryScale,
        placeholder: 'Оклад',
        backText: 'Оклад',
        readOnlyParam: true,
        placeToAppendForm: salaryCounterDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'extramoney',
        placeToPushId: context.extraMoneyId,
        placeholder: 'Дополнительный доход',
        backText: 'Дополнительный доход',
        readOnlyParam: true,
        placeToAppendForm: salaryCounterDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'premium',
        placeToPushId: context.premium,
        placeholder: 'Размер премии',
        backText: 'Размер премии',
        readOnlyParam: true,
        placeToAppendForm: salaryCounterDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'dirtyMoney',
        placeToPushId: context.dirtyMoney,
        placeholder: 'Размер штрафа',
        backText: 'Размер штрафа',
        readOnlyParam: false,
        placeToAppendForm: salaryCounterDiv,
      },
      context,
    );

    const buttonDiv2 = createButtonDiv({
      placeToAppend: document.querySelector('#main-content-div5'),
      classname: 'add-grid-button-2',
    });
    const indiButton = createWorkButton({
      placeToAppend: buttonDiv2,
      text: 'Что умеешь?',
    });

    indiButton.addEventListener('click', () => {
      fillDataMoney(context);
      howGoodNumbers();
      countSalaryWithoutTaxes(context);
      countTaxesOrTuryacka(context);
      part3(context);
      setTimeout(() => {
        buttonDiv2.remove(indiButton);
      }, 1000);
    });
    context.counter += 1;
  };
  let fillDataMoney = (context) => {
    fllSalaryInput({ id: 'daysWorkedId1', value: context.totalDaysWorked });
    fllSalaryInput({
      id: 'hoursWorkedId1',
      value: context.sumHours,
    });
    fllSalaryInput({ id: 'rate1', value: context.rate });
    fllSalaryInput({ id: 'salaryScale1', value: context.salary });
    fllSalaryInput({ id: 'extramoney1', value: context.extraMoney });
    fllSalaryInput({ id: 'premium1', value: context.bonus });
    fllSalaryInput({ id: 'dirtyMoney1', value: context.minus });

    draw('.add-grid-column-2');
  };

  let part3 = (context) => {
    const buttonDiv3 = createButtonDiv({
      placeToAppend: document.getElementById('main-content-div5'),
      classname: 'add-grid-button-3',
    });
    const taxButton = createWorkButton({
      placeToAppend: buttonDiv3,
      text: 'Заплати налоги',
    });
    const taxCounterDiv = createInputDiv(
      {
        type: 'div',
        classname: 'add-grid-column-3',
        id: 'inputDiv',
        placeToPushId: context.salaryDivIds,
        placeToAppend: document.querySelector('.add-grid-button-3'),
      },
      context,
    );
    setTimeout(() => {
      taxCounterDiv.classList.toggle('add-grid-column-3-active');
    });

    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'withoutTax',
        placeToPushId: context.withoutTax,
        placeholder: 'Итого, без налогов',
        backText: 'Итого, без налогов',
        readOnlyParam: true,
        placeToAppendForm: taxCounterDiv,
      },
      context,
    );

    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'incomeTax',
        placeToPushId: context.incomeTaxIds,
        placeholder: 'Подоходный налог',
        backText: 'Подоходный налог',
        readOnlyParam: true,
        placeToAppendForm: taxCounterDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'fundTax',
        placeToPushId: context.fundTaxIds,
        placeholder: 'ФСЗН',
        backText: 'ФСЗН',
        readOnlyParam: true,
        placeToAppendForm: taxCounterDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'totalSalary',
        placeToPushId: context.totalSalaryIds,
        placeholder: 'Итого к выплате',
        backText: 'Итого к выплате',
        readOnlyParam: true,
        placeToAppendForm: taxCounterDiv,
      },
      context,
    );
    taxButton.addEventListener('click', () => {
      let lastDiv = document.querySelector('.add-grid-3');
      fillDataTax(context);
      if (lastDiv) {
        setTimeout(() => {
          lastDiv.classList.add('go-up');
        }, 1000);
      }
      setTimeout(() => {
        buttonDiv3.remove(taxButton);
      }, 1000);
    });
    console.log(person);
    console.log(context);
  };

  const fillDataTax = (context) => {
    fllSalaryInput({ id: 'withoutTax2', value: context.salaryWithoutTax });
    fllSalaryInput({ id: 'incomeTax2', value: context.incomeTax });
    fllSalaryInput({ id: 'fundTax2', value: context.fundTax });
    fllSalaryInput({ id: 'totalSalary2', value: context.totalSalary });

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

  return makeSalaryPage();
};
