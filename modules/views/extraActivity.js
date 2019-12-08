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
// import { context, updateExtraStorage } from '../../../JS_project/modules/localStorage.js';

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
    const buttonDiv2 = createButtonDiv({
      placeToAppend: makeExtraActDiv,
      classname: 'extra-div-2',
    });
    buttonDiv2.id = 'buttonDiv2';
    const button = createWorkButton({
      placeToAppend: buttonDiv,
      text: 'Сколько раз сотрудник выходил в доп? Тык!',
    });

    createInput({
      col: 'col-4',
      optionalClass: 'input-date',
      id: 'dayCounter',
      placeToPushId: context.extraDaysId,
      placeholder: 'Сколько дней создать?',
      backText: 'Кол-во дней доп.активности',
      readOnlyParam: false,
      placeToAppendForm: buttonDiv,
    });

    button.addEventListener('click', () => {
      getExtraDays();
      for (let i = 0; i < context.extraDays; i += 1) {
        if (i < context.extraDays) {
          makeExtraRow(buttonDiv2);
        }
      }
      const getInput = document.getElementById('dayCounter1');
      getInput.value = 1;
      removeNodeCallBackExtra();
    });
  };

  const makeExtraRow = (buttonDiv2) => {
    const extraInpitDiv = createExtraInputDiv({
      col: 'col-2',
      type: 'div',
      classname: 'form-div-center',
      id: 'extra_input_div',
      placeToPushId: context.extraInputDivIds,
      placeToAppend: buttonDiv2,
    });

    createInput({
      col: 'col-2',
      optionalClass: 'input-date',
      id: 'dateExtra',
      placeToPushId: context.dateExtraIds,
      placeholder: 'Дата',
      backText: 'Дата',
      readOnlyParam: false,
      placeToAppendForm: extraInpitDiv,
    });
    createInput({
      col: 'col-2',
      optionalClass: 'input-date',
      id: 'hoursExtra',
      placeToPushId: context.hoursExtraIds,
      placeholder: 'Часы',
      backText: 'Часы',
      readOnlyParam: false,
      placeToAppendForm: extraInpitDiv,
    });
    createInput({
      col: 'col-2',
      optionalClass: 'input-date',
      id: 'extraIVR',
      placeToPushId: context.extraIVRIds,
      placeholder: 'ИВР',
      backText: 'ИВР',
      readOnlyParam: false,
      placeToAppendForm: extraInpitDiv,
    });
    extraInpitDiv.appendChild(createRemoveButton(context.removeExtraIds));
    extraActivityNavigation();

    let getBackButton = document.getElementById('backButton');
    getBackButton.addEventListener('click', () => {
      context.router.navigate('/page5');
      clearContainer('main-content-div4');
    });
    let nextButton = document.getElementById('forwardButton');
    nextButton.addEventListener('click', getExtraData);
    nextButton.addEventListener('click', countExtraMiddleIvr);
    nextButton.addEventListener('click', getTotalExtraHours);
    // nextButton.addEventListener('click', updateExtraStorage);
    nextButton.addEventListener('click', countExtraMoney);
    nextButton.addEventListener('click', () => {
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
