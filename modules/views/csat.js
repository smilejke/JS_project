import {
  ifDataValid,
  ifNoData,
  csatMoreThan100,
  setAttr,
} from '../../../JS_project/modules/validation.js';
import {
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
  clearContainer,
} from '../../../JS_project/modules/createElementsUtil.js';

import {
  getMiddleCsat,
  getDataCsat,
  premium,
  badBoys,
} from '../../../JS_project/modules/mathFunctions.js';
import { modalWindowCsat, launchModalCsat } from '../../../JS_project/modules/views/modal.js';

export default (context) => {
  const makeCsatTable = () => {
    context.counter = 1;
    context.marker = true;
    context.eventPretender = true;

    const makeCsatDiv3 = mainContainer({ type: 'div', id: 'main-content-div3' });
    const buttonDiv = createButtonDiv({ placeToAppend: makeCsatDiv3, classname: 'button-div' });
    const button = createWorkButton({ placeToAppend: buttonDiv, text: 'Получить данные' });
    button.disabled = false;

    button.addEventListener('click', () => {
      if (context.counter == 1) {
        button.disabled = true;
      }
      for (let i in context.numberIvrIds) {
        if (i < context.numberIvrIds.length) {
          const csatInputDiv = createInputDiv(
            {
              type: 'div',
              classname: 'form-div',
              id: 'csat_input_div',
              placeToPushId: context.csatInputDivIds,
              placeToAppend: buttonDiv,
            },
            context,
          );
          setTimeout(() => {
            csatInputDiv.classList.toggle('form-div-active');
          });
          const numberValue = createInput(
            {
              col: 'col-3',
              optionalClass: 'input-date',
              id: 'numberKK',
              placeToPushId: context.numberCsatIds,
              placeholder: 'Номер',
              backText: 'Номер',
              readOnlyParam: true,
              placeToAppendForm: csatInputDiv,
            },
            context,
          );

          numberValue.value = context.counter;

          const dateKkData = createInput(
            {
              col: 'col-3',
              optionalClass: 'input-date',
              id: 'date',
              placeToPushId: context.dateCsatIds,
              placeholder: 'Дата',
              backText: 'Дата',
              readOnlyParam: false,
              placeToAppendForm: csatInputDiv,
            },
            context,
          );

          dateKkData.value = context.resultArr[i].date;

          createInput(
            {
              col: 'col-3',
              optionalClass: 'input-date',
              id: 'csat',
              placeToPushId: context.csatIds,
              placeholder: 'CSAT',
              backText: 'CSAT',
              readOnlyParam: false,
              placeToAppendForm: csatInputDiv,
            },
            context,
          );

          context.counter += 1;
        }
        createForwardButtonDiv(
          {
            type: 'div',
            classname: 'last-div',
            idHtmlToAppend: 'main-content-div3',
          },
          'Вернуться к контролю качества',
          'Рассчитать зарплату',
          context,
        );
      }
      if (context.eventPretender) {
        let getBackButton = document.getElementById('backButton');
        getBackButton.addEventListener('click', () => {
          context.router.navigate('/page4');
          clearContainer('main-content-div3');
        });
        const moveForward = document.getElementById('forwardButton');
        moveForward.addEventListener('click', () => {
          getDataCsat(context);
          getMiddleCsat(context);
          premium(context);
          badBoys(context);
          modalWindowCsat(
            {
              loginStatus: 'Внимание!',
              loginText: 'Следующий показатель необязателен.',
              loginText2: 'Была ли у сотрудника доп.активность?',
            },
            context,
          );
          launchModalCsat(context);
        });

        context.eventPretender = false;
      }

      csatMoreThan100('main-content-div3'),
        setAttr(context.csatIds, { name: 'data-csat', data: 100 });
      ifNoData();
      ifDataValid('main-content-div3');
    });
  };
  return makeCsatTable();
};
