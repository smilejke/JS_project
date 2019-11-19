import { ifDataValid, ifNoData } from './validation.js';
import {
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
} from './createElementsUtil.js';

import { controlData, resultArr, result, updateStorage } from './localStorage.js';
import { getMiddleCsat, getDataCsat } from './mathFunctions.js';
import { createExtraActivity } from './extraActivity.js';
import { modalWindowCsat, launchModal } from './modal.js';

export const makeCsatTable = () => {
  result.counter = 1;
  result.marker = true;

  const getDivToRomove = document.getElementById('main-content-div2');
  document.body.removeChild(getDivToRomove);
  const makeCsatDiv3 = mainContainer({ type: 'div', id: 'main-content-div3' });
  const buttonDiv = createButtonDiv({ placeToAppend: makeCsatDiv3, classname: 'button-div' });
  const button = createWorkButton({ placeToAppend: buttonDiv, text: 'Получить данные' });
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
            placeToAppend: buttonDiv,
          },
          result,
        );
        const numberValue = createInput({
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
    }
    ifNoData();
    ifDataValid();

    const moveForward = document.getElementById('forwardButton');
    moveForward.addEventListener('click', getDataCsat);
    moveForward.addEventListener('click', getMiddleCsat);
    moveForward.addEventListener('click', updateStorage);
    moveForward.addEventListener(
      'click',
      modalWindowCsat({
        loginStatus: 'Внимание!',
        loginText: 'Следующий показатель необязателен.',
        loginText2: 'Была ли у сотрудника доп.активность?',
      }),
    );
    moveForward.addEventListener('click', launchModal);
    moveForward.addEventListener('click', () => {
      let nope = document.getElementById('backButtonModal');
      nope.addEventListener('click', () => {
        document.body.remove(document.getElementById('main-content-div3'));
      });

      let yeah = document.getElementById('forwardButtonModal');
      yeah.addEventListener('click', () => {
        let modalContainer = document.getElementById('myModal');
        document.body.removeChild(modalContainer);
        createExtraActivity();
      });
    });

    return buttonDiv;
  });
};
