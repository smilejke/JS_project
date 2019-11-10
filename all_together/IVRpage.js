import {
  createNewInput,
  createRemoveButton,
  createNewButton,
  createInputDiv,
} from './createElementsUtil.js';

import { ifDataValid } from './validation.js';

const resultArr = [];

let result = {
  marker: true,
  counter: 0,

  inputDivIds: [],
  kkInputDivIds: [],
  csatInputDivIds: [],

  numberIvrIds: [],
  numberKkIds: [],
  numberCsatIds: [],

  dateIvrIds: [],
  dateKkIds: [],
  dateCsatIds: [],

  hoursIvrIds: [],

  ivrIds: [],
  kkIds: [],
  csatIds: [],

  removeIds: [],
};

let controlData = {
  totalIvr: [],
  totalKk: [],
  totalCsat: [],

  middleIvr: 0,
  middleKk: 0,
  middleCsat: 0,
  sumHours: 0,
  totalDaysWorked: 0,
};

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

const getMiddleKK = () => {
  let middle = 0;
  for (let i in resultArr) {
    controlData.totalKk.push(resultArr[i].kk);
  }
  for (let i in controlData.totalKk) {
    middle += controlData.totalKk[i];
  }
  middle /= controlData.totalKk.length;
  controlData.middleKk = middle;
  return controlData.middleKk;
};

const getMiddleCsat = () => {
  let middle = 0;
  for (let i in resultArr) {
    controlData.totalCsat.push(resultArr[i].csat);
  }
  for (let i in controlData.totalCsat) {
    middle += controlData.totalCsat[i];
  }
  middle /= controlData.totalCsat.length;
  controlData.middleCsat = middle;
  return controlData.middleCsat;
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
  result.numberIvrIds.splice(elemId, 1);
  result.dateIvrIds.splice(elemId, 1);
  result.ivrIds.splice(elemId, 1);
  result.hoursIvrIds.splice(elemId, 1);
  result.removeIds.splice(elemId, 1);

  document
    .getElementById('main-content-div')
    .removeChild(document.getElementById('inputDiv' + e.target.id));
};

//===========================================================================> page 1

const getDataKK = () => {
  for (let i in result.kkIds) {
    let kk = 0;
    kk += Number(document.getElementById(result.kkIds[i]).value);
    resultArr[i].kk = kk;
  }
};

const getDataCsat = () => {
  for (let i in result.csatIds) {
    let csat = 0;
    csat += Number(document.getElementById(result.csatIds[i]).value);
    resultArr[i].csat = csat;
  }
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
    const getNextButton = document.getElementById('forwardButton');
    getNextButton.addEventListener('click', getDataIvr);
    getNextButton.addEventListener('click', getMiddleIVR);
    getNextButton.addEventListener('click', getSumHours);
    getNextButton.addEventListener('click', totalDaysWorked);
    getNextButton.addEventListener('click', makeKkTable);
  }
  result.marker = false;
};

//===================================> page 3

const makeKkTable = () => {
  result.counter = 1;
  result.marker = true;

  const getDivToRomove = document.getElementById('main-content-div');
  document.body.removeChild(getDivToRomove);

  const makeKkDiv2 = document.createElement('div');
  makeKkDiv2.id = 'main-content-div2';
  document.body.append(makeKkDiv2);

  const button_div = document.createElement('div');
  button_div.classList.add('button-div');
  makeKkDiv2.appendChild(button_div);

  const button = document.createElement('button');
  button.classList.add('new-day');
  button.innerHTML = 'Получить данные';
  button.disabled = false;
  button.addEventListener('click', () => {
    if (result.counter == 1) {
      button.disabled = true;
    }

    for (let i in result.numberIvrIds) {
      if (i < result.numberIvrIds.length) {
        const kkInputDiv = createInputDiv(
          {
            type: 'div',
            classname: 'form-div',
            id: 'kkInputDiv',
            placeToPushId: result.kkInputDivIds,
            placeToAppend: button_div,
          },
          result,
        );

        const numberValue = createNewInput(
          {
            type: 'input',
            classname: 'input-date',
            id: 'numberKK',
            placeToPushId: result.numberKkIds,
            placeholder: result.counter,
            readOnlyParam: true,
            placeToAppend: kkInputDiv,
          },
          result,
        );
        numberValue.value = result.counter;

        const dateKkData = createNewInput(
          {
            type: 'input',
            classname: 'input-date',
            id: 'date_kk',
            placeToPushId: result.dateKkIds,
            placeholder: 'Дата',
            readOnlyParam: false,
            placeToAppend: kkInputDiv,
          },
          result,
        );
        dateKkData.value = resultArr[i].date;
        if (dateKkData.value == 0) {
          dateKkData.value = '';
        } else {
          dateKkData.classList.add('valid');
        }

        createNewInput(
          {
            type: 'input',
            classname: 'input-date',
            id: 'kk',
            placeToPushId: result.kkIds,
            placeholder: 'КК',
            readOnlyParam: false,
            placeToAppend: kkInputDiv,
          },
          result,
        );
        result.counter += 1;
      }

      if (result.marker) {
        const last_div = document.createElement('div');
        last_div.classList.add('last-div');
        makeKkDiv2.appendChild(last_div);

        createNewButton({
          type: 'button',
          id: 'backButton',
          classname: 'forward',
          disabled: false,
          text: 'Вернуться к ИВР',
          placeToAppend: last_div,
        });
        createNewButton({
          type: 'button',
          id: 'forwardButton',
          classname: 'forward',
          disabled: false,
          text: 'Внести данные CSAT',
          placeToAppend: last_div,
        });
        const nextPage = document.getElementById('forwardButton');
        nextPage.addEventListener('click', getDataKK);
        nextPage.addEventListener('click', getMiddleKK);
        nextPage.addEventListener('click', makeCsatTable);
      }
      result.marker = false;
    }
  });

  button.addEventListener('click', ifDataValid);
  button_div.appendChild(button);
};

//===================================================================>

const makeCsatTable = () => {
  result.counter = 1;
  result.marker = true;

  const getDivToRomove = document.getElementById('main-content-div2');
  document.body.removeChild(getDivToRomove);

  const makeCsatDiv3 = document.createElement('div');
  makeCsatDiv3.id = 'main-content-div3';
  document.body.append(makeCsatDiv3);

  const button_div = document.createElement('div');
  button_div.classList.add('button-div');
  makeCsatDiv3.appendChild(button_div);

  const button = document.createElement('button');
  button.classList.add('new-day');
  button.innerHTML = 'Получить данные';
  button.disabled = false;
  button.addEventListener('click', () => {
    if (result.counter == 1) {
      button.disabled = true;
    }
    for (let i in result.numberIvrIds) {
      if (i < result.numberIvrIds.length) {
        const csatInputDiv = createInputDiv(
          {
            type: 'div',
            classname: 'form-div',
            id: 'csat_input_div',
            placeToPushId: result.csatInputDivIds,
            placeToAppend: button_div,
          },
          result,
        );

        const numberValue = createNewInput(
          {
            type: 'input',
            classname: 'input-date',
            id: 'number',
            placeToPushId: result.numberCsatIds,
            placeholder: result.counter,
            readOnlyParam: true,
            placeToAppend: csatInputDiv,
          },
          result,
        );
        numberValue.value = result.counter;

        const dateCsatData = createNewInput(
          {
            type: 'input',
            classname: 'input-date',
            id: 'date',
            placeToPushId: result.dateCsatIds,
            placeholder: 'Дата',
            readOnlyParam: false,
            placeToAppend: csatInputDiv,
          },
          result,
        );
        dateCsatData.value = resultArr[i].date;
        if (dateCsatData.value == 0) {
          dateCsatData.value = '';
        } else {
          dateCsatData.classList.add('valid');
        }

        createNewInput(
          {
            type: 'input',
            classname: 'input-date',
            id: 'csat',
            placeToPushId: result.csatIds,
            placeholder: 'СSAT',
            readOnlyParam: false,
            placeToAppend: csatInputDiv,
          },
          result,
        );

        result.counter += 1;
      }

      if (result.marker) {
        const last_div = document.createElement('div');
        last_div.classList.add('last-div');
        makeCsatDiv3.appendChild(last_div);

        createNewButton({
          type: 'button',
          id: 'backButton',
          classname: 'forward',
          disabled: false,
          text: 'Вернуться к контролю качества',
          placeToAppend: last_div,
        });
        let moveForward = createNewButton({
          type: 'button',
          id: 'forwardButton',
          classname: 'forward',
          disabled: false,
          text: 'Внести доп.активность',
          placeToAppend: last_div,
        });
        moveForward.addEventListener('click', getDataCsat);
        moveForward.addEventListener('click', getMiddleCsat);
        moveForward.addEventListener('click', makeSomeNoise);
        result.marker = false;
      }
    }
    return button_div;
  });
  button.addEventListener('click', ifDataValid);
  button_div.appendChild(button);
};

let makeSomeNoise = () => {
  console.log(`Total days worked is ${controlData.totalDaysWorked}`);
  console.log(`Average IVR is ${controlData.middleIvr}`);
  console.log(`Total hours are ${controlData.sumHours}`);
  console.log(`Avarage KK is ${controlData.middleKk}`);
  console.log(`Avarage CSAT is ${controlData.middleCsat}`);
  console.log(resultArr);
};
