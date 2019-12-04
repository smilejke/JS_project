import { ifDataValid, ifNoData, setAttr, kkMoreThan100 } from './validation.js';
import {
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
  clearContainer,
} from './createElementsUtil.js';

import { resultArr, result, updateStorage } from './localStorage.js';
import { getMiddleKK, getDataKK } from './mathFunctions.js';
import router from '../../router/applicationRouter.js';

export const makeKkTable = () => {
  result.counter = 1;
  result.marker = true;
  result.eventPretender = true;

  const makeKkDiv2 = mainContainer({ type: 'div', id: 'main-content-div2' });

  const buttonDiv = createButtonDiv({ placeToAppend: makeKkDiv2, classname: 'button-div' });

  const button = createWorkButton({ placeToAppend: buttonDiv, text: 'Получить данные' });
  button.addEventListener('click', () => {
    if (result.counter == 1) {
      button.disabled = true;
    }

    for (let i in result.numberIvrIds) {
      if (i < result.numberIvrIds.length) {
        const kkInputDiv = createInputDiv(
          {
            col: 'col-3',
            type: 'div',
            classname: 'form-div',
            id: 'kkInputDiv',
            placeToPushId: result.kkInputDivIds,
            placeToAppend: buttonDiv,
          },
          result,
        );
        const numberValue = createInput({
          col: 'col-3',
          optionalClass: 'input-date',
          id: 'numberKK',
          placeToPushId: result.numberKkIds,
          backText: 'Номер',
          placeholder: 'Номер',
          readOnlyParam: true,
          placeToAppendForm: kkInputDiv,
        });

        numberValue.value = result.counter;

        const dateKkData = createInput({
          col: 'col-3',
          optionalClass: 'input-date',
          id: 'date_kk',
          placeToPushId: result.dateKkIds,
          placeholder: 'Дата',
          backText: 'Дата',
          readOnlyParam: false,
          placeToAppendForm: kkInputDiv,
        });

        dateKkData.value = resultArr[i].date;
        if (dateKkData.value == 0) {
          dateKkData.value = '';
        } else {
          dateKkData.classList.add('valid');
        }
        createInput({
          col: 'col-3',
          optionalClass: 'input-date',
          id: 'kk',
          placeToPushId: result.kkIds,
          backText: 'КК',
          placeholder: 'КК',
          readOnlyParam: false,
          placeToAppendForm: kkInputDiv,
        });

        result.counter += 1;
      }

      createForwardButtonDiv(
        {
          type: 'div',
          classname: 'last-div',
          idHtmlToAppend: 'main-content-div2',
        },
        'Вернуться к ИВР',
        'Внести данные CSAT',
      );

      if (result.eventPretender) {
        let getBackButton = document.getElementById('backButton');
        getBackButton.addEventListener('click', () => {
          router.navigate('/ivr');
          clearContainer('main-content-div2');
        });
        const nextPage = document.getElementById('forwardButton');
        nextPage.addEventListener('click', getDataKK);
        nextPage.addEventListener('click', getMiddleKK);
        nextPage.addEventListener('click', updateStorage);

        nextPage.addEventListener('click', () => {
          router.navigate('/csat');
          clearContainer('main-content-div2');
        });
        result.eventPretender = false;
      }
    }
    ifNoData();
    ifDataValid('main-content-div2');
    setAttr(result.kkIds, { name: 'data-kk', data: 100 });
    kkMoreThan100('main-content-div2');
  });
};
