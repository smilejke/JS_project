import {
  createRemoveButton,
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
} from './createElementsUtil.js';

import { ifDataValid, ifNoData } from './validation.js';
import { result, updateStorage } from './localStorage.js';

import {
  getMiddleIVR,
  getSumHours,
  totalDaysWorked,
  getDataIvr,
  removeNodeCallBack,
  countSalaryScale,
  getRemoveBut,
} from './mathFunctions.js';

import router from '../../router/applicationRouter.js';

export const makeIvrPage = () => {
  result.counter = 0;
  result.marker = true;

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

  let getBackButton = document.getElementById('backButton');
  getBackButton.addEventListener('click', () => {
    router.navigate('/info');
    document.body.removeChild(document.getElementById('main-content-div'));
  });
  let getNextButton = document.getElementById('forwardButton');
  getNextButton.addEventListener('click', getDataIvr);
  getNextButton.addEventListener('click', getMiddleIVR);
  getNextButton.addEventListener('click', getSumHours);
  getNextButton.addEventListener('click', countSalaryScale);
  getNextButton.addEventListener('click', totalDaysWorked);
  getNextButton.addEventListener('click', updateStorage);
  getNextButton.addEventListener('click', () => {
    let main = document.getElementById('main-content-div');
    document.body.removeChild(main);
    router.navigate('/kk');
  });

  setInterval(getRemoveBut, 500);
  ifNoData();
  ifDataValid('main-content-div');

  result.counter += 1;
};
