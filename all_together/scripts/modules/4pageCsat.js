import { ifDataValid, ifNoData, csatMoreThan100, setAttr } from './validation.js';
import {
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
  clearContainer,
} from './createElementsUtil.js';

import { controlData, result, resultArr, updateStorage } from './localStorage.js';
import { getMiddleCsat, getDataCsat } from './mathFunctions.js';
import { modalWindowCsat, launchModalCsat } from './modal.js';
import { premium, badBoys } from './mathFunctions.js';

export default (context) => {
  const makeCsatTable = () => {
    result.counter = 1;
    result.marker = true;
    result.eventPretender = true;

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
          setTimeout(() => {
            csatInputDiv.classList.toggle('form-div-active');
          });
          const numberValue = createInput({
            col: 'col-3',
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
            col: 'col-3',
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
            col: 'col-3',
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
          'Рассчитать зарплату',
        );
      }
      if (result.eventPretender) {
        let getBackButton = document.getElementById('backButton');
        getBackButton.addEventListener('click', () => {
          context.router.navigate('/page4');
          clearContainer('main-content-div3');
        });
        const moveForward = document.getElementById('forwardButton');
        moveForward.addEventListener('click', getDataCsat);
        moveForward.addEventListener('click', getMiddleCsat);
        moveForward.addEventListener('click', premium);
        moveForward.addEventListener('click', badBoys);
        moveForward.addEventListener('click', updateStorage);
        moveForward.addEventListener(
          'click',
          modalWindowCsat({
            loginStatus: 'Внимание!',
            loginText: 'Следующий показатель необязателен.',
            loginText2: 'Была ли у сотрудника доп.активность?',
          }),
        );
        moveForward.addEventListener('click', launchModalCsat(context));
        result.eventPretender = false;
      }

      csatMoreThan100('main-content-div3'),
        setAttr(result.csatIds, { name: 'data-csat', data: 100 });
      ifNoData();
      ifDataValid('main-content-div3');
    });
  };
  return makeCsatTable();
};
