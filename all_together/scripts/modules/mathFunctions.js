import { controlData, resultArr, result, exxxtra, info } from './localStorage.js';

export const getMiddleKK = () => {
  let middle = 0;
  for (let i in resultArr) {
    controlData.totalKk.push(resultArr[i].kk);
  }
  for (let i in controlData.totalKk) {
    middle += controlData.totalKk[i];
  }
  middle /= controlData.totalKk.length;
  controlData.middleKk = Math.round(middle);
  return controlData.middleKk;
};

export const getMiddleCsat = () => {
  let middle = 0;
  for (let i in resultArr) {
    controlData.totalCsat.push(resultArr[i].csat);
  }
  for (let i in controlData.totalCsat) {
    middle += controlData.totalCsat[i];
  }
  middle /= controlData.totalCsat.length;
  controlData.middleCsat = Math.round(middle);
  return controlData.middleCsat;
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

export const getExtraData = () => {
  for (let i in result.extraIVRIds) {
    const extraDay = {
      date: Number(document.getElementById(result.dateExtraIds[i]).value),
      ivr: Number(document.getElementById(result.extraIVRIds[i]).value),
      hours: Number(document.getElementById(result.hoursExtraIds[i]).value),
    };
    exxxtra.push(extraDay);
  }
};

export const getDataInfo = () => {
  info.lastname = document.getElementById('lastname').value;
  info.name = document.getElementById('name').value;
  info.secondName = document.getElementById('secondName').value;
  info.job = document.getElementById('job').value;
  info.month = document.getElementById('month').value;
  info.rate = document.getElementById('rate').value;
  info.hourShift = document.getElementById('hourShift').value;
};

export const getDataCsat = () => {
  for (let i in result.csatIds) {
    let csat = 0;
    csat += Number(document.getElementById(result.csatIds[i]).value);
    resultArr[i].csat = csat;
  }
};
export const getDataKK = () => {
  for (let i in result.kkIds) {
    let kk = 0;
    kk += Number(document.getElementById(result.kkIds[i]).value);
    resultArr[i].kk = kk;
  }
};
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

  if (Number(info.hourShift) === 8) {
    controlData.ivrToShift = Math.round(controlData.middleIvr * result.shift8);
  }
  if (Number(info.hourShift) === 12) {
    controlData.ivrToShift = Math.round(controlData.middleIvr * result.shift12);
  }
  return controlData.ivrToShift;
};

export const countSalaryScale = () => {
  controlData.salary = controlData.sumHours * +info.rate;

  return controlData.salary;
};

export const countExtraMiddleIvr = () => {
  let average = 0;
  for (let i in exxxtra) {
    controlData.totalExtraIvr.push(exxxtra[i].ivr);
  }
  for (let i in controlData.totalExtraIvr) {
    average += controlData.totalExtraIvr[i];
  }
  average /= controlData.totalExtraIvr.length;
  controlData.middleExtraIvr = Math.round(average);
  return controlData.middleExtraIvr;
};
export const getExtraDays = () => {
  for (let i in result.extraDaysId) {
    let extra = 0;
    extra += Number(document.getElementById(result.extraDaysId[i]).value);
    result.extraDays = extra;
  }
};

export const getTotalExtraHours = () => {
  let hours = 0;
  for (let i in exxxtra) {
    hours += exxxtra[i].hours;
  }
  controlData.totalExtraHours = hours;
  return controlData.totalExtraHours;
};

export const removeNodeCallBack = () => {
  let div = document.getElementById('main-content-div');

  div.onclick = (event) => {
    let target = event.target;

    if (
      target.className === 'icon-btn' ||
      target.className === 'add-btn' ||
      target.className === 'btn-txt' ||
      target.className === 'icon-btn add-btn'
    ) {
      const elemId = result.removeIds.findIndex((el) => el === event.target.id);
      result.inputDivIds.splice(elemId, 1);
      result.numberIvrIds.splice(elemId, 1);
      result.dateIvrIds.splice(elemId, 1);
      result.ivrIds.splice(elemId, 1);
      result.hoursIvrIds.splice(elemId, 1);
      result.removeIds.splice(elemId, 1);
      document
        .getElementById('main-content-div')
        .removeChild(document.getElementById('inputDiv' + event.target.id));
    }
  };
};

export const removeNodeCallBackExtra = () => {
  let div = document.getElementById('main-content-div4');

  div.onclick = (event) => {
    let target = event.target;

    if (
      target.className === 'icon-btn' ||
      target.className === 'add-btn' ||
      target.className === 'btn-txt' ||
      target.className === 'icon-btn add-btn'
    ) {
      const elemId = result.removeExtraIds.findIndex((el) => el === event.target.id);
      result.extraInputDivIds.splice(elemId, 1);
      result.dateExtraIds.splice(elemId, 1);
      result.extraIVRIds.splice(elemId, 1);
      result.hoursExtraIds.splice(elemId, 1);
      result.removeExtraIds.splice(elemId, 1);
      document
        .querySelector('.extra-div-2')
        .removeChild(document.getElementById('extra_input_div' + event.target.id));
    }
  };
};

export const newNumbers = () => {
  const getAllNumberInputs = document.querySelectorAll('.input-number');
  for (let i = 0; i < getAllNumberInputs.length; i += 1) {
    getAllNumberInputs[i].value = Number([i]) + 1;
    result.counter = getAllNumberInputs.length;
  }
};

export const countExtraMoney = () => {
  let totalIvr = 0;
  let ivrPerHour = totalIvr / controlData.totalExtraHours;

  for (let i in controlData.totalExtraIvr) {
    totalIvr += controlData.totalExtraIvr[i];
  }
  if (ivrPerHour < 15) {
    controlData.extraMoney += 250 * controlData.totalExtraHours;
  } else {
    controlData.extraMoney += 400 * controlData.totalExtraHours;
  }
  controlData.extraMoney = Math.round(controlData.extraMoney);
};

export const premium = () => {
  if (+info.hourShift === 8) {
    if (
      controlData.ivrToShift >= 80 &&
      controlData.ivrToShift <= 115 &&
      controlData.middleCsat >= 90 &&
      controlData.middleKk >= 90
    ) {
      controlData.bonus = Math.round(controlData.salary * 1.1 - controlData.salary);
    }
    if (
      controlData.ivrToShift > 115 &&
      controlData.ivrToShift < 150 &&
      controlData.middleCsat === 100 &&
      controlData.middleKk === 100
    ) {
      controlData.bonus = Math.round(controlData.salary * 1.3 - controlData.salary);
    }
    if (
      controlData.ivrToShift >= 150 &&
      controlData.middleCsat === 100 &&
      controlData.middleKk === 100
    ) {
      controlData.bonus = Math.round(controlData.salary * 1.5 - controlData.salary);
    }
  }

  if (+info.hourShift === 12) {
    if (
      controlData.ivrToShift >= 80 &&
      controlData.ivrToShift <= 100 &&
      controlData.middleCsat >= 85 &&
      controlData.middleKk >= 85
    ) {
      controlData.bonus = Math.round(controlData.salary * 1.1 - controlData.salary);
    }
    if (
      controlData.ivrToShift > 100 &&
      controlData.ivrToShift < 135 &&
      controlData.middleCsat === 95 &&
      controlData.middleKk === 95
    ) {
      controlData.bonus = Math.round(controlData.salary * 1.3 - controlData.salary);
    }
    if (
      controlData.ivrToShift >= 135 &&
      controlData.middleCsat === 100 &&
      controlData.middleKk === 100
    ) {
      controlData.bonus = Math.round(controlData.salary * 1.5 - controlData.salary);
    }
  }
};

export const badBoys = () => {
  if (+info.hourShift === 8) {
    if (
      controlData.ivrToShift <= 45 ||
      controlData.middleKk <= 60 ||
      controlData.middleCsat <= 60
    ) {
      controlData.minus = Math.round(controlData.salary - controlData.salary * 0.8);
    }
  }
  if (+info.hourShift === 12) {
    if (
      controlData.ivrToShift <= 60 ||
      controlData.middleKk <= 70 ||
      controlData.middleCsat <= 70
    ) {
      controlData.minus = Math.round(controlData.salary - controlData.salary * 0.8);
    }
  }
};

export const countSalaryWithoutTaxes = () => {
  controlData.salaryWithoutTax = Number(
    controlData.salary + controlData.extraMoney + controlData.bonus - controlData.minus,
  );
  return controlData.salaryWithoutTax;
};

export const countTaxesOrTuryacka = () => {
  controlData.incomeTax = Math.floor(controlData.salaryWithoutTax * 0.13 * 100) / 100;
  controlData.fundTax = Math.floor(controlData.salaryWithoutTax * 0.01 * 100) / 100;
  countTotalSalary();
};

export const countTotalSalary = () => {
  controlData.totalSalary =
    controlData.salaryWithoutTax - (controlData.incomeTax + controlData.fundTax);
  return controlData.totalSalary;
};
