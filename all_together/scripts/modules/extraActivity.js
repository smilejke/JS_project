import {
  mainContainer,
  createButtonDiv,
  createWorkButton,
  createInput,
  extraActivityNavigation,
  createExtraInputDiv,
  createRemoveButton,
} from './createElementsUtil.js';
import { controlData, resultArr, result, updateStorage } from './localStorage.js';
import { getExtraDays } from './mathFunctions.js';

export const createExtraActivity = () => {
  result.counter = 1;
  result.marker = true;
  const getDivToRomove = document.getElementById('main-content-div3');
  document.body.removeChild(getDivToRomove);

  const makeExtraActDiv = mainContainer({
    type: 'div',
    id: 'main-content-div4',
  });
  const buttonDiv = createButtonDiv({ placeToAppend: makeExtraActDiv, classname: 'extra-div-1' });
  buttonDiv.id = 'buttonDiv1';
  const buttonDiv2 = createButtonDiv({ placeToAppend: makeExtraActDiv, classname: 'extra-div-2' });
  buttonDiv2.id = 'buttonDiv2';
  const button = createWorkButton({
    placeToAppend: buttonDiv,
    text: 'Сколько раз сотрудник выходил в доп? Тык!',
  });

  createInput({
    optionalClass: 'input-date',
    id: 'dayCounter',
    placeToPushId: result.extraDaysId,
    placeholder: 'Сколько дней создать?',
    backText: 'Кол-во дней доп.активности',
    readOnlyParam: false,
    placeToAppendForm: buttonDiv,
  });
  const howManyDaysInput = document.getElementById('buttonDiv1').querySelector('.col-3');
  howManyDaysInput.style.width = '240px';
  howManyDaysInput.style.marginTop = '35px';

  button.addEventListener('click', () => {
    getExtraDays();

    for (let i = 0; i < result.extraDays; i += 1) {
      if (i < result.extraDays) {
        makeExtraRow(buttonDiv2);
      }
    }

    const getInput = document.getElementById('dayCounter1');
    getInput.value = 1;
  });
  return buttonDiv;
};

const makeExtraRow = (buttonDiv2) => {
  const extraInpitDiv = createExtraInputDiv({
    type: 'div',
    classname: 'form-div',
    id: 'extra_input_div',
    placeToPushId: result.extraInputDivIds,
    placeToAppend: buttonDiv2,
  });
  extraInpitDiv.style.justifyContent = 'center';

  createInput({
    optionalClass: 'input-date',
    id: 'dateExtra',
    placeToPushId: result.dateExtraIds,
    placeholder: 'Дата',
    backText: 'Дата',
    readOnlyParam: false,
    placeToAppendForm: extraInpitDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'hoursExtra',
    placeToPushId: result.hoursExtraIds,
    placeholder: 'Часы',
    backText: 'Часы',
    readOnlyParam: false,
    placeToAppendForm: extraInpitDiv,
  });
  createInput({
    optionalClass: 'input-date',
    id: 'extraIVR',
    placeToPushId: result.extraIVRIds,
    placeholder: 'ИВР',
    backText: 'ИВР',
    readOnlyParam: false,
    placeToAppendForm: extraInpitDiv,
  });
  extraInpitDiv.appendChild(createRemoveButton());

  result.counter += 1;

  extraActivityNavigation();
  const lastDiv = document.querySelector('.last-div');
  lastDiv.style.justifyContent = 'center';
  lastDiv.style.marginTop = '25px';

  const inputs = document.getElementById('buttonDiv2').querySelectorAll('.col-3');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].style.margin = '0 40px';
  }
};
