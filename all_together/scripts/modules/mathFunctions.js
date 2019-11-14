import { controlData, resultArr, result } from './localStorage.js';

export const getMiddleIVR = () => {
  let avarage = 0;
  for (let i in resultArr) {
    controlData.totalIvr.push(resultArr[i].ivr);
  }
  for (let i in controlData.totalIvr) {
    avarage += controlData.totalIvr[i];
  }
  avarage /= controlData.totalIvr.length;
  controlData.middleIvr = Math.round(avarage);
  return controlData.middleIvr;
};

export const getSumHours = () => {
  let sum = 0;
  for (let i in resultArr) {
    sum += resultArr[i].hours;
  }
  controlData.sumHours = sum;
  return controlData.sumHours;
};

export const totalDaysWorked = () => {
  controlData.totalDaysWorked = result.numberIvrIds.length;
  return controlData.totalDaysWorked;
};

export const getDataIvr = () => {
  for (let i in result.dateIvrIds) {
    const day = {
      number: Number(document.getElementById(result.numberIvrIds[i]).value),
      date: Number(document.getElementById(result.dateIvrIds[i]).value),
      ivr: Number(document.getElementById(result.ivrIds[i]).value),
      hours: Number(document.getElementById(result.hoursIvrIds[i]).value),
    };
    resultArr.push(day);
  }
};

export const removeNodeCallBack = (e) => {
  const elemId = result.removeIds.findIndex((el) => el === e.target.id);
  result.inputDivIds.splice(elemId, 1);
  result.numberIvrIds.splice(elemId, 1);
  result.dateIvrIds.splice(elemId, 1);
  result.ivrIds.splice(elemId, 1);
  result.hoursIvrIds.splice(elemId, 1);
  result.removeIds.splice(elemId, 1);
  document
    .getElementById('main-content-div')
    .removeChild(document.getElementById('inputDiv' + e.target.id));
};
