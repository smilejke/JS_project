import {
  mainContainer,
  createButtonDiv,
  createWorkButton,
  createInput,
  extraActivityNavigation,
  createExtraInputDiv,
  createRemoveButton,
} from './createElementsUtil.js';
import {
  controlData,
  info,
  resultArr,
  exxxtra,
  result,
  updateExtraStorage,
} from './localStorage.js';

import {
  getExtraDays,
  countExtraMiddleIvr,
  getTotalExtraHours,
  getExtraData,
  removeNodeCallBackExtra,
  countExtraMoney,
} from './mathFunctions.js';
import { ifNoData, ifDataValid } from './validation.js';
import router from '../../router/applicationRouter.js';

export const makeExtraActivity = () => {
  result.counter = 1;
  result.marker = true;
  let modal = document.getElementById('myModal');
  document.body.removeChild(modal);

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
    col: 'col-4',
    optionalClass: 'input-date',
    id: 'dayCounter',
    placeToPushId: result.extraDaysId,
    placeholder: 'Сколько дней создать?',
    backText: 'Кол-во дней доп.активности',
    readOnlyParam: false,
    placeToAppendForm: buttonDiv,
  });
  const howManyDaysInput = document.getElementById('buttonDiv1').querySelector('.col-3');

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
    col: 'col-2',
    type: 'div',
    classname: 'form-div-center',
    id: 'extra_input_div',
    placeToPushId: result.extraInputDivIds,
    placeToAppend: buttonDiv2,
  });

  createInput({
    col: 'col-2',
    optionalClass: 'input-date',
    id: 'dateExtra',
    placeToPushId: result.dateExtraIds,
    placeholder: 'Дата',
    backText: 'Дата',
    readOnlyParam: false,
    placeToAppendForm: extraInpitDiv,
  });
  createInput({
    col: 'col-2',
    optionalClass: 'input-date',
    id: 'hoursExtra',
    placeToPushId: result.hoursExtraIds,
    placeholder: 'Часы',
    backText: 'Часы',
    readOnlyParam: false,
    placeToAppendForm: extraInpitDiv,
  });
  createInput({
    col: 'col-2',
    optionalClass: 'input-date',
    id: 'extraIVR',
    placeToPushId: result.extraIVRIds,
    placeholder: 'ИВР',
    backText: 'ИВР',
    readOnlyParam: false,
    placeToAppendForm: extraInpitDiv,
  });
  extraInpitDiv.appendChild(createRemoveButton(result.removeExtraIds, removeNodeCallBackExtra));

  extraActivityNavigation();

  let getBackButton = document.getElementById('backButton');
  getBackButton.addEventListener('click', () => {
    router.navigate('/csat');
    document.body.removeChild(document.getElementById('main-content-div4'));
  });
  let nextButton = document.getElementById('forwardButton');
  nextButton.addEventListener('click', getExtraData);
  nextButton.addEventListener('click', countExtraMiddleIvr);
  nextButton.addEventListener('click', getTotalExtraHours);
  nextButton.addEventListener('click', updateExtraStorage);
  nextButton.addEventListener('click', countExtraMoney);
  nextButton.addEventListener('click', makeSomeNoise);
  nextButton.addEventListener('click', () => {
    router.navigate('/salary');
    let removePage = document.getElementById('main-content-div4');
    document.body.removeChild(removePage);
  });
  ifNoData();
  ifDataValid();
  result.counter += 1;
};

const makeSomeNoise = () => {
  console.log(exxxtra);
  console.log(resultArr);
  console.log(info);
  console.log(`Total days worked is ${controlData.totalDaysWorked}`);
  console.log(`Average IVR is ${controlData.middleIvr}`);
  console.log(`Total hours are ${controlData.sumHours}`);
  console.log(`Avarage KK is ${controlData.middleKk}`);
  console.log(`Avarage CSAT is ${controlData.middleCsat}`);
  console.log(`Average extra IVR is ${controlData.middleExtraIvr}`);
  console.log(`Total extra hours are ${controlData.totalExtraHours}`);
};
