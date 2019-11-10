import {
  createNewInput,
  createRemoveButton,
  createNewButton,
  createInputDiv,
} from './createElementsUtil.js';

import { ifDataValid } from './validation.js';
import { storage, controlData, resultArr, result } from './localStorage.js';
import { makeKkTable } from './3pageKK.js';

const getMiddleIVR = () => {
  let avarage = 0;
  for (let i in resultArr) {
    controlData.totalIvr.push(resultArr[i].ivr);
  }
  for (let i in controlData.totalIvr) {
    avarage += controlData.totalIvr[i];
  }
  avarage /= controlData.totalIvr.length;
  controlData.middleIvr = Math.round(avarage);
  return controlData.middleIvr;
};

const getSumHours = () => {
  let sum = 0;
  for (let i in resultArr) {
    sum += resultArr[i].hours;
  }

  controlData.sumHours = sum;
  return controlData.sumHours;
};

let totalDaysWorked = () => {
  controlData.totalDaysWorked = result.numberIvrIds.length;
  return controlData.totalDaysWorked;
};

export const createIVRpage = () => {
  let main = document.createElement('main');
  main.classList.add('main-div');
  main.id = 'main-content-div';
  document.body.append(main);

  let workDiv = document.createElement('div');
  workDiv.classList.add('button-div');
  main.appendChild(workDiv);

  let button = document.createElement('button');
  button.classList.add('new-day');
  button.innerHTML = 'Добавить рабочий день';
  button.addEventListener('click', () => {
    makeNewRow(workDiv);
  });
  button.addEventListener('click', ifDataValid);
  workDiv.appendChild(button);
};

const makeNewRow = (workDiv) => {
  const newInputDiv = createInputDiv(
    {
      type: 'div',
      classname: 'form-div',
      id: 'inputDiv',
      placeToPushId: result.inputDivIds,
      placeToAppend: workDiv,
    },
    result,
  );

  const numberValue = createNewInput(
    {
      type: 'input',
      classname: 'input-date',
      id: 'number',
      placeToPushId: result.numberIvrIds,
      placeholder: result.counter + 1,
      readOnlyParam: true,
      placeToAppend: newInputDiv,
    },
    result,
  );

  numberValue.value = result.counter + 1;

  createNewInput(
    {
      type: 'input',
      classname: 'input-date',
      id: 'date',
      placeToPushId: result.dateIvrIds,
      placeholder: 'Дата',
      readOnlyParam: false,
      placeToAppend: newInputDiv,
    },
    result,
  );
  createNewInput(
    {
      type: 'input',
      classname: 'input-date',
      id: 'ivr',
      placeToPushId: result.ivrIds,
      placeholder: 'ИВР',
      readOnlyParam: false,
      placeToAppend: newInputDiv,
    },
    result,
  );
  createNewInput(
    {
      type: 'input',
      classname: 'input-date',
      id: 'hours',
      placeToPushId: result.hoursIvrIds,
      placeholder: 'Часы',
      readOnlyParam: false,
      placeToAppend: newInputDiv,
    },
    result,
  );

  newInputDiv.appendChild(createRemoveButton(result, removeNodeCallBack));

  createForwardButton();
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

const getDataIvr = () => {
  for (let i in result.dateIvrIds) {
    const day = {
      number: Number(document.getElementById(result.numberIvrIds[i]).placeholder),
      date: Number(document.getElementById(result.dateIvrIds[i]).value),
      ivr: Number(document.getElementById(result.ivrIds[i]).value),
      hours: Number(document.getElementById(result.hoursIvrIds[i]).value),
    };
    resultArr.push(day);
  }
};

const createForwardButton = () => {
  if (result.marker) {
    const last_div = document.createElement('div');
    last_div.classList.add('last-div');
    document.getElementById('main-content-div').appendChild(last_div);

    createNewButton({
      type: 'button',
      id: 'backButton',
      classname: 'forward',
      disabled: true,
      text: 'Предыдущий показатель',
      placeToAppend: last_div,
    });
    createNewButton({
      type: 'button',
      id: 'forwardButton',
      classname: 'forward',
      disabled: false,
      text: 'Внести данные по контролю качества',
      placeToAppend: last_div,
    });
    let getNextButton = document.getElementById('forwardButton');
    getNextButton.addEventListener('click', getDataIvr);
    getNextButton.addEventListener('click', getMiddleIVR);
    getNextButton.addEventListener('click', getSumHours);
    getNextButton.addEventListener('click', totalDaysWorked);
    getNextButton.addEventListener('click', () => {
      storage.setItem('result', JSON.stringify(result));
      storage.setItem('resultArr', JSON.stringify(resultArr));
      storage.setItem('controlData', JSON.stringify(controlData));
    });
    getNextButton.addEventListener('click', makeKkTable);
  }
  result.marker = false;
};
