import {
  createRemoveButton,
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
  clearContainer,
} from '../createElementsUtil.js';

import { ifDataValid, ifNoData, validateHourAndDate, setAttr } from '../validation.js';
import { result, updateStorage, clearStorage, storage } from '../localStorage.js';

import {
  getMiddleIVR,
  getSumHours,
  totalDaysWorked,
  getDataIvr,
  removeNodeCallBack,
  countSalaryScale,
  newNumbers,
} from '../mathFunctions.js';

export default (context) => {
  const renderIvrPage = () => {
    result.counter = 0;
    result.marker = true;
    result.eventPretender = true;

    let main = mainContainer({ type: 'div', id: 'main-content-div' });
    let workDiv = createButtonDiv({ placeToAppend: main, classname: 'button-div' });
    let button = createWorkButton({ placeToAppend: workDiv, text: 'Добавить рабочий день' });

    button.addEventListener('click', () => {
      if (result.counter <= 30) {
        makeNewRow(workDiv);
      }
    });
    button.addEventListener('click', () => {
      removeNodeCallBack();
    });
  };

  const makeNewRow = (workDiv) => {
    const newInputDiv = createInputDiv({
      type: 'div',
      classname: 'form-div',
      id: 'inputDiv',
      placeToPushId: result.inputDivIds,
      placeToAppend: workDiv,
    });
    setTimeout(() => {
      newInputDiv.classList.toggle('form-div-active');
    });
    const numberValue = createInput({
      col: 'col-3',
      optionalClass: 'input-number',
      id: 'number',
      placeToPushId: result.numberIvrIds,
      placeholder: 'Номер',
      backText: 'Номер',
      readOnlyParam: true,
      placeToAppendForm: newInputDiv,
    });

    numberValue.value = result.counter + 1;

    createInput({
      col: 'col-3',
      optionalClass: 'input-date',
      id: 'date',
      placeToPushId: result.dateIvrIds,
      placeholder: 'Дата',
      backText: 'Дата',
      readOnlyParam: false,
      placeToAppendForm: newInputDiv,
    });
    createInput({
      col: 'col-3',
      optionalClass: 'input-date',
      id: 'ivr',
      placeToPushId: result.ivrIds,
      backText: 'ИВР',
      placeholder: 'ИВР',
      readOnlyParam: false,
      placeToAppendForm: newInputDiv,
    });
    createInput({
      col: 'col-3',
      optionalClass: 'input-date',
      id: 'hours',
      placeToPushId: result.hoursIvrIds,
      placeholder: 'Часы',
      backText: 'Часы',
      readOnlyParam: false,
      placeToAppendForm: newInputDiv,
    });

    newInputDiv.appendChild(createRemoveButton(result.removeIds));

    createForwardButtonDiv(
      {
        type: 'div',
        classname: 'last-div',
        idHtmlToAppend: 'main-content-div',
      },
      'Предыдущий показатель',
      'Внести данные по контролю качества',
    );

    if (result.eventPretender) {
      let getBackButton = document.getElementById('backButton');
      getBackButton.addEventListener('click', () => {
        context.router.navigate('/page2');
        clearContainer('main-content-div');
      });
      let getNextButton = document.getElementById('forwardButton');
      getNextButton.addEventListener('click', getDataIvr);
      getNextButton.addEventListener('click', getMiddleIVR);
      getNextButton.addEventListener('click', getSumHours);
      getNextButton.addEventListener('click', countSalaryScale);
      getNextButton.addEventListener('click', totalDaysWorked);
      getNextButton.addEventListener('click', updateStorage);
      getNextButton.addEventListener('click', () => {
        context.router.navigate('/page4');
        clearContainer('main-content-div');
      });
      result.eventPretender = false;
    }
    if (document.getElementById('main-content-div')) {
      setInterval(newNumbers, 500);
    }

    ifNoData();
    ifDataValid('main-content-div');
    setAttr(result.hoursIvrIds, { name: 'data-hour', data: 24 });
    setAttr(result.dateIvrIds, { name: 'data-date', data: 31 });
    validateHourAndDate('.form-div');
    result.counter += 1;
  };
  return renderIvrPage();
};
