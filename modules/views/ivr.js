import {
  createRemoveButton,
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
  clearContainer,
  styleStaticInputs,
} from '../../../JS_project/modules/createElementsUtil.js';

import {
  ifDataValid,
  ifNoData,
  validateHourAndDate,
  setAttr,
} from '../../../JS_project/modules/validation.js';

import {
  getMiddleIVR,
  getSumHours,
  totalDaysWorked,
  getDataIvr,
  removeNodeCallBack,
  countSalaryScale,
} from '../../../JS_project/modules/mathFunctions.js';

import { clearContextForIVR } from '../../../JS_project/modules/contextCleaner.js';

export default (context) => {
  clearContextForIVR(context);
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
      removeNodeCallBack(context);
    });
  };

  const makeNewRow = (workDiv) => {
    const newInputDiv = createInputDiv(
      {
        type: 'div',
        classname: 'form-div',
        id: 'inputDiv',
        placeToPushId: context.inputDivIds,
        placeToAppend: workDiv,
      },
      context,
    );
    setTimeout(() => {
      newInputDiv.classList.toggle('form-div-active');
    });
    const numberValue = createInput(
      {
        col: 'col-3',
        optionalClass: 'input-number',
        id: 'number',
        placeToPushId: context.numberIvrIds,
        placeholder: 'Номер',
        backText: 'Номер',
        readOnlyParam: true,
        placeToAppendForm: newInputDiv,
      },
      context,
    );
    styleStaticInputs(numberValue, context.counter + 1);

    createInput(
      {
        col: 'col-3',
        optionalClass: 'input-date',
        id: 'date',
        placeToPushId: context.dateIvrIds,
        placeholder: 'Дата',
        backText: 'Дата',
        readOnlyParam: false,
        placeToAppendForm: newInputDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-3',
        optionalClass: 'input-date',
        id: 'ivr',
        placeToPushId: context.ivrIds,
        backText: 'ИВР',
        placeholder: 'ИВР',
        readOnlyParam: false,
        placeToAppendForm: newInputDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-3',
        optionalClass: 'input-date',
        id: 'hours',
        placeToPushId: context.hoursIvrIds,
        placeholder: 'Часы',
        backText: 'Часы',
        readOnlyParam: false,
        placeToAppendForm: newInputDiv,
      },
      context,
    );

    newInputDiv.appendChild(createRemoveButton(context.removeIds, context));
    createForwardButtonDiv(
      {
        type: 'div',
        classname: 'last-div',
        idHtmlToAppend: 'main-content-div',
      },
      'Предыдущий показатель',
      'Внести данные по контролю качества',
      context,
    );

    if (context.eventPretender) {
      let getBackButton = document.getElementById('backButton');
      getBackButton.addEventListener('click', () => {
        clearContainer('main-content-div');
        context.router.navigate('/page2');
      });
      let getNextButton = document.getElementById('forwardButton');
      getNextButton.addEventListener('click', () => {
        getDataIvr(context);
        getMiddleIVR(context);
        getSumHours(context);
        countSalaryScale(context);
        totalDaysWorked(context);
        context.router.navigate('/page4');
        clearContainer('main-content-div');
      });
      context.eventPretender = false;
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
