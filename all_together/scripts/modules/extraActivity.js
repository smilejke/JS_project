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
  result,
  updateExtraStorage,
  exxxtra,
  resultArr,
  info,
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
import { createSalary } from './salary.js';

export const createExtraActivity = () => {
  result.counter = 1;
  result.marker = true;
  let modal = document.getElementById('myModal');
  document.body.removeChild(modal);
  const getDivToRemove = document.getElementById('main-content-div3');
  document.body.removeChild(getDivToRemove);

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
  extraInpitDiv.appendChild(createRemoveButton(result.removeExtraIds, removeNodeCallBackExtra));

  extraActivityNavigation();
  const lastDiv = document.querySelector('.last-div');
  lastDiv.style.justifyContent = 'center';
  lastDiv.style.marginTop = '25px';

  const inputs = document.getElementById('buttonDiv2').querySelectorAll('.col-3');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].style.margin = '0 40px';
  }
  let nextButton = document.getElementById('forwardButton');
  nextButton.addEventListener('click', getExtraData);
  nextButton.addEventListener('click', countExtraMiddleIvr);
  nextButton.addEventListener('click', getTotalExtraHours);
  nextButton.addEventListener('click', updateExtraStorage);
  nextButton.addEventListener('click', countExtraMoney);
  nextButton.addEventListener('click', makeSomeNoise);
  // nextButton.addEventListener('click', () => {
  //   document.body.remove(document.getElementById('main-content-div4'));
  // });
  nextButton.addEventListener('click', createSalary);
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
