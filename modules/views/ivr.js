import {
  createRemoveButton,
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
  clearContainer,
} from '../../../JS_project/modules/createElementsUtil.js';

import {
  ifDataValid,
  ifNoData,
  validateHourAndDate,
  setAttr,
} from '../../../JS_project/modules/validation.js';
// import { context, updateStorage } from '../../../JS_project/modules/localStorage.js';

import {
  getMiddleIVR,
  getSumHours,
  totalDaysWorked,
  getDataIvr,
  removeNodeCallBack,
  countSalaryScale,
  newNumbers,
} from '../../../JS_project/modules/mathFunctions.js';

export default (context) => {
  const renderIvrPage = () => {
    context.counter = 0;
    context.marker = true;
    context.eventPretender = true;

    let main = mainContainer({ type: 'div', id: 'main-content-div' });
    let workDiv = createButtonDiv({ placeToAppend: main, classname: 'button-div' });
    let button = createWorkButton({ placeToAppend: workDiv, text: 'Добавить рабочий день' });

    button.addEventListener('click', () => {
      if (context.counter <= 30) {
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
      placeToPushId: context.inputDivIds,
      placeToAppend: workDiv,
    });
    setTimeout(() => {
      newInputDiv.classList.toggle('form-div-active');
    });
    const numberValue = createInput({
      col: 'col-3',
      optionalClass: 'input-number',
      id: 'number',
      placeToPushId: context.numberIvrIds,
      placeholder: 'Номер',
      backText: 'Номер',
      readOnlyParam: true,
      placeToAppendForm: newInputDiv,
    });

    numberValue.value = context.counter + 1;

    createInput({
      col: 'col-3',
      optionalClass: 'input-date',
      id: 'date',
      placeToPushId: context.dateIvrIds,
      placeholder: 'Дата',
      backText: 'Дата',
      readOnlyParam: false,
      placeToAppendForm: newInputDiv,
    });
    createInput({
      col: 'col-3',
      optionalClass: 'input-date',
      id: 'ivr',
      placeToPushId: context.ivrIds,
      backText: 'ИВР',
      placeholder: 'ИВР',
      readOnlyParam: false,
      placeToAppendForm: newInputDiv,
    });
    createInput({
      col: 'col-3',
      optionalClass: 'input-date',
      id: 'hours',
      placeToPushId: context.hoursIvrIds,
      placeholder: 'Часы',
      backText: 'Часы',
      readOnlyParam: false,
      placeToAppendForm: newInputDiv,
    });

    newInputDiv.appendChild(createRemoveButton(context.removeIds));

    createForwardButtonDiv(
      {
        type: 'div',
        classname: 'last-div',
        idHtmlToAppend: 'main-content-div',
      },
      'Предыдущий показатель',
      'Внести данные по контролю качества',
    );

    if (context.eventPretender) {
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
      // getNextButton.addEventListener('click', updateStorage);

      getNextButton.addEventListener('click', () => {
        context.router.navigate('/page4');
        clearContainer('main-content-div');
      });
      context.eventPretender = false;
    }
    if (document.getElementById('main-content-div')) {
      let timeId = setInterval(newNumbers, 500);
      let getNextButton = document.getElementById('forwardButton');
      getNextButton.addEventListener('click', () => {
        clearInterval(timeId);
      });
    }

    ifNoData();
    ifDataValid('main-content-div');
    setAttr(context.hoursIvrIds, { name: 'data-hour', data: 24 });
    setAttr(context.dateIvrIds, { name: 'data-date', data: 31 });
    validateHourAndDate('.form-div');
    context.counter += 1;
  };
  return renderIvrPage();
};
