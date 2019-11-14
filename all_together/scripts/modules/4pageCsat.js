import { ifDataValid, ifNoData } from './validation.js';
import { createInputDiv, createForwardButtonDiv, createInput } from './createElementsUtil.js';

import { controlData, resultArr, result, updateStorage } from './localStorage.js';

const getDataCsat = () => {
  for (let i in result.csatIds) {
    let csat = 0;
    csat += Number(document.getElementById(result.csatIds[i]).value);
    resultArr[i].csat = csat;
  }
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
  controlData.middleCsat = Math.round(middle);
  return controlData.middleCsat;
};

export const makeCsatTable = () => {
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
        const numberValue = createInput({
          classname: 'newinput',
          optionalClass: 'input-date',
          id: 'numberKK',
          placeToPushId: result.numberCsatIds,
          placeholder: 'Номер',
          backText: 'Номер',
          readOnlyParam: true,
          placeToAppendForm: csatInputDiv,
        });

        numberValue.value = result.counter;

        const dateKkData = createInput({
          classname: 'newinput',
          optionalClass: 'input-date',
          id: 'date',
          placeToPushId: result.dateCsatIds,
          placeholder: 'Дата',
          backText: 'Дата',
          readOnlyParam: false,
          placeToAppendForm: csatInputDiv,
        });

        dateKkData.value = resultArr[i].date;
        if (dateKkData.value == 0) {
          dateKkData.value = '';
        } else {
          dateKkData.classList.add('valid');
        }
        createInput({
          classname: 'newinput',
          optionalClass: 'input-date',
          id: 'csat',
          placeToPushId: result.csatIds,
          placeholder: 'CSAT',
          backText: 'CSAT',
          readOnlyParam: false,
          placeToAppendForm: csatInputDiv,
        });

        result.counter += 1;
      }
      createForwardButtonDiv(
        {
          type: 'div',
          classname: 'last-div',
          idHtmlToAppend: 'main-content-div3',
        },
        'Вернуться к контролю качества',
        'Внести доп.активность',
      );
      const moveForward = document.getElementById('forwardButton');
      moveForward.addEventListener('click', getDataCsat);
      moveForward.addEventListener('click', getMiddleCsat);
      moveForward.addEventListener('click', updateStorage);
      moveForward.addEventListener('click', makeSomeNoise);
    }
    return button_div;
  });
  button.addEventListener('click', ifNoData);
  button.addEventListener('click', ifDataValid);
  button_div.appendChild(button);
};

const makeSomeNoise = () => {
  console.log(`Total days worked is ${controlData.totalDaysWorked}`);
  console.log(`Average IVR is ${controlData.middleIvr}`);
  console.log(`Total hours are ${controlData.sumHours}`);
  console.log(`Avarage KK is ${controlData.middleKk}`);
  console.log(`Avarage CSAT is ${controlData.middleCsat}`);
  console.log(resultArr);
};
