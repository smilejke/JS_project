import {
  mainContainer,
  createButtonDiv,
  createWorkButton,
  createInput,
  extraActivityNavigation,
  createExtraInputDiv,
  createRemoveButton,
  clearContainer,
} from '../../../JS_project/modules/createElementsUtil.js';

import {
  getExtraDays,
  countExtraMiddleIvr,
  getTotalExtraHours,
  getExtraData,
  removeNodeCallBackExtra,
  countExtraMoney,
} from '../../../JS_project/modules/mathFunctions.js';
import {
  ifNoData,
  ifDataValid,
  setAttr,
  validateHourAndDate,
} from '../../../JS_project/modules/validation.js';

export default (context) => {
  const makeExtraActivity = () => {
    context.counter = 1;
    context.marker = true;

    let modal = document.getElementById('myModal');
    if (modal) {
      document.body.removeChild(modal);
    }

    const makeExtraActDiv = mainContainer({
      type: 'div',
      id: 'main-content-div4',
    });
    const buttonDiv = createButtonDiv({ placeToAppend: makeExtraActDiv, classname: 'extra-div-1' });
    buttonDiv.id = 'buttonDiv1';
    const buttonDiv2 = createButtonDiv(
      {
        placeToAppend: makeExtraActDiv,
        classname: 'extra-div-2',
      },
      context,
    );
    buttonDiv2.id = 'buttonDiv2';
    const button = createWorkButton({
      placeToAppend: buttonDiv,
      text: 'Сколько раз сотрудник выходил в доп? Тык!',
    });

    createInput(
      {
        col: 'col-4',
        optionalClass: 'input-date',
        id: 'dayCounter',
        placeToPushId: context.extraDaysId,
        placeholder: 'Сколько дней создать?',
        backText: 'Кол-во дней доп.активности',
        readOnlyParam: false,
        placeToAppendForm: buttonDiv,
      },
      context,
    );

    button.addEventListener('click', () => {
      const getInput = document.getElementById('dayCounter1');
      getExtraDays(context);
      for (let i = 0; i < context.extraDays; i += 1) {
        if (i < context.extraDays) {
          makeExtraRow(buttonDiv2);
        }
      }
      removeNodeCallBackExtra(context);
      getInput.value = 1;
    });
  };

  const makeExtraRow = (buttonDiv2) => {
    const extraInpitDiv = createExtraInputDiv(
      {
        col: 'col-2',
        type: 'div',
        classname: 'form-div-center',
        id: 'extra_input_div',
        placeToPushId: context.extraInputDivIds,
        placeToAppend: buttonDiv2,
      },
      context,
    );

    createInput(
      {
        col: 'col-2',
        optionalClass: 'input-date',
        id: 'dateExtra',
        placeToPushId: context.dateExtraIds,
        placeholder: 'Дата',
        backText: 'Дата',
        readOnlyParam: false,
        placeToAppendForm: extraInpitDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-2',
        optionalClass: 'input-date',
        id: 'hoursExtra',
        placeToPushId: context.hoursExtraIds,
        placeholder: 'Часы',
        backText: 'Часы',
        readOnlyParam: false,
        placeToAppendForm: extraInpitDiv,
      },
      context,
    );
    createInput(
      {
        col: 'col-2',
        optionalClass: 'input-date',
        id: 'extraIVR',
        placeToPushId: context.extraIVRIds,
        placeholder: 'ИВР',
        backText: 'ИВР',
        readOnlyParam: false,
        placeToAppendForm: extraInpitDiv,
      },
      context,
    );
    extraInpitDiv.appendChild(createRemoveButton(context.removeExtraIds, context));
    extraActivityNavigation(context);

    let getBackButton = document.getElementById('backButton');
    getBackButton.addEventListener('click', () => {
      context.router.navigate('/page5');
      clearContainer('main-content-div4');
    });
    let nextButton = document.getElementById('forwardButton');
    nextButton.addEventListener('click', () => {
      getExtraData(context);
      countExtraMiddleIvr(context);
      getTotalExtraHours(context);
      countExtraMoney(context);
      context.router.navigate('/page7');
      clearContainer('main-content-div4');
    });
    ifNoData();
    ifDataValid('main-content-div4');

    setAttr(context.hoursExtraIds, { name: 'data-hour', data: 24 });
    setAttr(context.dateExtraIds, { name: 'data-date', data: 31 });
    validateHourAndDate('.form-div-center');
    context.counter += 1;
  };

  return makeExtraActivity();
};
