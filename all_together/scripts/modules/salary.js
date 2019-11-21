import {
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
} from './createElementsUtil.js';

import { controlData, resultArr, result, updateStorage } from './localStorage.js';

export const createSalary = () => {
  const getDivToRemove = document.getElementById('main-content-div4');
  document.body.removeChild(getDivToRemove);
  result.marker = true;
  const makeExtraActDiv = mainContainer({
    type: 'div',
    id: 'main-content-div5',
  });

  const buttonDiv = createButtonDiv({ placeToAppend: makeExtraActDiv, classname: 'add-grid-2' });

  const button = createWorkButton({
    placeToAppend: buttonDiv,
    text: 'Рассчитать зарплату',
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
    id: 'number',
    placeToPushId: result.numberIvrIds,
    placeholder: 'Месяц',
    backText: 'Месяц',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });

  createInput({
    optionalClass: 'input-date',
    id: 'date',
    placeToPushId: result.dateIvrIds,
    placeholder: 'Итого отр.дней',
    backText: 'Итого отр.дней',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'ivr',
    placeToPushId: result.ivrIds,
    backText: 'Средний ИВР',
    placeholder: 'Средний ИВР',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'hours',
    placeToPushId: result.hoursIvrIds,
    placeholder: 'Итого отр.часов',
    backText: 'Итого отр.часов',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'hours',
    placeToPushId: result.hoursIvrIds,
    placeholder: 'КК',
    backText: 'КК',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'hours',
    placeToPushId: result.hoursIvrIds,
    placeholder: 'CSAT',
    backText: 'CSAT',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'hours',
    placeToPushId: result.hoursIvrIds,
    placeholder: 'Цена доп.активности',
    backText: 'Цена доп.активности',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'hours',
    placeToPushId: result.hoursIvrIds,
    placeholder: 'Ставка, рубли/час',
    backText: 'Ставка, рубли/час',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'hours',
    placeToPushId: result.hoursIvrIds,
    placeholder: 'Часовая смена',
    backText: 'Часовая смена',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });

  const inputs = document.getElementsByClassName('col-3');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].style.width = '200px';
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
    result.marker = false;
  });
};
