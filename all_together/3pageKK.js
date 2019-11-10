import { ifDataValid } from './validation.js';
import { makeCsatTable } from './4pageCsat.js';
import { createNewInput, createNewButton, createInputDiv } from './createElementsUtil.js';

import { storage, controlData, resultArr, result } from './localStorage.js';

const getDataKK = () => {
  for (let i in result.kkIds) {
    let kk = 0;
    kk += Number(document.getElementById(result.kkIds[i]).value);
    resultArr[i].kk = kk;
  }
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
  controlData.middleKk = Math.round(middle);
  return controlData.middleKk;
};

export const makeKkTable = () => {
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
        nextPage.addEventListener('click', () => {
          storage.setItem('result', JSON.stringify(result));
          storage.setItem('resultArr', JSON.stringify(resultArr));
          storage.setItem('controlData', JSON.stringify(controlData));
        });
        nextPage.addEventListener('click', makeCsatTable);
      }
      result.marker = false;
    }
  });

  button.addEventListener('click', ifDataValid);
  button_div.appendChild(button);
};
