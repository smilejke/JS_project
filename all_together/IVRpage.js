import {
  createNewInput,
  createRemoveButton,
  createNewButton,
  createInputDiv,
  createForwardButtonDiv,
} from './createElementsUtil.js';

import { ifDataValid } from './validation.js';
import { controlData, resultArr, result, updateStorage } from './localStorage.js';
import { makeKkTable } from './3pageKK.js';
import { getMiddleIVR, getSumHours, totalDaysWorked, getDataIvr } from './mathFunctions.js';

export const createIVRpage = () => {
  let main = document.createElement('main');
  main.className = 'main-div';
  main.id = 'main-content-div';
  document.body.append(main);

  let workDiv = document.createElement('div');
  workDiv.className = 'button-div';
  main.appendChild(workDiv);

  let button = document.createElement('button');
  button.className = 'new-day';
  button.innerHTML = 'Добавить рабочий день';
  button.addEventListener('click', () => {
    makeNewRow(workDiv);
  });
  button.addEventListener('click', ifDataValid);

  workDiv.appendChild(button);
};

const makeNewRow = (workDiv) => {
  const newInputDiv = createInputDiv({
    type: 'div',
    classname: 'form-div',
    id: 'inputDiv',
    placeToPushId: result.inputDivIds,
    placeToAppend: workDiv,
  });

  const numberValue = createNewInput({
    type: 'input',
    classname: 'input-number',
    id: 'number',
    placeToPushId: result.numberIvrIds,
    placeholder: result.counter + 1,
    readOnlyParam: true,
    placeToAppend: newInputDiv,
  });

  numberValue.value = result.counter + 1;

  createNewInput({
    type: 'input',
    classname: 'input-date',
    id: 'date',
    placeToPushId: result.dateIvrIds,
    placeholder: 'Дата',
    readOnlyParam: false,
    placeToAppend: newInputDiv,
  });
  createNewInput({
    type: 'input',
    classname: 'input-date',
    id: 'ivr',
    placeToPushId: result.ivrIds,
    placeholder: 'ИВР',
    readOnlyParam: false,
    placeToAppend: newInputDiv,
  });
  createNewInput({
    type: 'input',
    classname: 'input-date',
    id: 'hours',
    placeToPushId: result.hoursIvrIds,
    placeholder: 'Часы',
    readOnlyParam: false,
    placeToAppend: newInputDiv,
  });

  newInputDiv.appendChild(createRemoveButton(removeNodeCallBack));
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

const removeNodeCallBack = (e) => {
  const elemId = result.removeIds.findIndex((el) => el === e.target.id);
  result.inputDivIds.splice(elemId, 1);
  result.numberIvrIds.splice(elemId, 1);
  result.dateIvrIds.splice(elemId, 1);
  result.ivrIds.splice(elemId, 1);
  result.hoursIvrIds.splice(elemId, 1);
  result.removeIds.splice(elemId, 1);
  document
    .getElementById('main-content-div')
    .removeChild(document.getElementById('inputDiv' + e.target.id));
};
