import {
  ifDataValid,
  ifNoData,
  setAttr,
  kkMoreThan100,
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

// import { context.resultArr, context, updateStorage } from '../../../JS_project/modules/localStorage.js';
import { getMiddleKK, getDataKK } from '../../../JS_project/modules/mathFunctions.js';

export default (context) => {
  context.counter = 1;
  context.marker = true;
  context.eventPretender = true;

  const makeKkDiv2 = mainContainer({ type: 'div', id: 'main-content-div2' });

  const buttonDiv = createButtonDiv({ placeToAppend: makeKkDiv2, classname: 'button-div' });

  const button = createWorkButton({ placeToAppend: buttonDiv, text: 'Получить данные' });
  button.addEventListener('click', () => {
    if (context.counter == 1) {
      button.disabled = true;
    }

    for (let i in context.numberIvrIds) {
      if (i < context.numberIvrIds.length) {
        const kkInputDiv = createInputDiv(
          {
            col: 'col-3',
            type: 'div',
            classname: 'form-div',
            id: 'kkInputDiv',
            placeToPushId: context.kkInputDivIds,
            placeToAppend: buttonDiv,
          },
          context,
        );
        setTimeout(() => {
          kkInputDiv.classList.toggle('form-div-active');
        });
        const numberValue = createInput({
          col: 'col-3',
          optionalClass: 'input-date',
          id: 'numberKK',
          placeToPushId: context.numberKkIds,
          backText: 'Номер',
          placeholder: 'Номер',
          readOnlyParam: true,
          placeToAppendForm: kkInputDiv,
        });

        numberValue.value = context.counter;

        const dateKkData = createInput({
          col: 'col-3',
          optionalClass: 'input-date',
          id: 'date_kk',
          placeToPushId: context.dateKkIds,
          placeholder: 'Дата',
          backText: 'Дата',
          readOnlyParam: false,
          placeToAppendForm: kkInputDiv,
        });

        dateKkData.value = context.resultArr[i].date;
        if (dateKkData.value == 0) {
          dateKkData.value = '';
        } else {
          dateKkData.classList.add('valid');
        }
        createInput({
          col: 'col-3',
          optionalClass: 'input-date',
          id: 'kk',
          placeToPushId: context.kkIds,
          backText: 'КК',
          placeholder: 'КК',
          readOnlyParam: false,
          placeToAppendForm: kkInputDiv,
        });

        context.counter += 1;
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

      if (context.eventPretender) {
        let getBackButton = document.getElementById('backButton');
        getBackButton.addEventListener('click', () => {
          context.router.navigate('/page3');
          clearContainer('main-content-div2');
        });
        const nextPage = document.getElementById('forwardButton');
        nextPage.addEventListener('click', getDataKK);
        nextPage.addEventListener('click', getMiddleKK);
        // nextPage.addEventListener('click', updateStorage);

        nextPage.addEventListener('click', () => {
          context.router.navigate('/page5');
          clearContainer('main-content-div2');
        });
        context.eventPretender = false;
      }
    }
    ifNoData();
    ifDataValid('main-content-div2');
    setAttr(context.kkIds, { name: 'data-kk', data: 100 });
    kkMoreThan100('main-content-div2');
  });
};
