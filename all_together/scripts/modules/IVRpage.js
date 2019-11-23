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
import { controlData, resultArr, result, updateStorage } from './localStorage.js';
import { makeKkTable } from './3pageKK.js';
import {
  getMiddleIVR,
  getSumHours,
  totalDaysWorked,
  getDataIvr,
  removeNodeCallBack,
} from './mathFunctions.js';

export const createIVRpage = () => {
  result.counter = 0;
  result.marker = true;

  let removePrev = document.getElementById('main-content-div6');
  document.body.removeChild(removePrev);

  let main = mainContainer({ type: 'div', id: 'main-content-div' });
  let workDiv = createButtonDiv({ placeToAppend: main, classname: 'button-div' });
  let button = createWorkButton({ placeToAppend: workDiv, text: 'Добавить рабочий день' });
  button.addEventListener('click', () => {
    if (result.counter <= 30) {
      makeNewRow(workDiv);
    }
    ifNoData();
    ifDataValid();
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
    optionalClass: 'input-date',
    id: 'date',
    placeToPushId: result.dateIvrIds,
    placeholder: 'Дата',
    backText: 'Дата',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'ivr',
    placeToPushId: result.ivrIds,
    backText: 'ИВР',
    placeholder: 'ИВР',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'hours',
    placeToPushId: result.hoursIvrIds,
    placeholder: 'Часы',
    backText: 'Часы',
    readOnlyParam: false,
    placeToAppendForm: newInputDiv,
  });

  newInputDiv.appendChild(createRemoveButton(result.removeIds, removeNodeCallBack));

  createForwardButtonDiv(
    {
      type: 'div',
      classname: 'last-div',
      idHtmlToAppend: 'main-content-div',
    },
    'Предыдущий показатель',
    'Внести данные по контролю качества',
  );

  let getNextButton = document.getElementById('forwardButton');
  getNextButton.addEventListener('click', getDataIvr);
  getNextButton.addEventListener('click', getMiddleIVR);
  getNextButton.addEventListener('click', getSumHours);
  getNextButton.addEventListener('click', totalDaysWorked);
  getNextButton.addEventListener('click', updateStorage);
  getNextButton.addEventListener('click', makeKkTable);

  result.counter += 1;
};
