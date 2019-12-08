export const getMiddleKK = (context) => {
  let middle = 0;
  for (let i in context.resultArr) {
    context.totalKk.push(context.resultArr[i].kk);
  }
  for (let i in context.totalKk) {
    middle += context.totalKk[i];
  }
  middle /= context.totalKk.length;
  context.middleKk = Math.round(middle);
  return context.middleKk;
};

export const getMiddleCsat = (context) => {
  let middle = 0;
  for (let i in context.resultArr) {
    context.totalCsat.push(context.resultArr[i].csat);
  }
  for (let i in context.totalCsat) {
    middle += context.totalCsat[i];
  }
  middle /= context.totalCsat.length;
  context.middleCsat = Math.round(middle);
  return context.middleCsat;
};

export const getSumHours = (context) => {
  let sum = 0;
  for (let i in context.resultArr) {
    sum += context.resultArr[i].hours;
  }
  context.sumHours = sum;
  return context.sumHours;
};

export const totalDaysWorked = (context) => {
  context.totalDaysWorked = context.numberIvrIds.length;
  return context.totalDaysWorked;
};

export const getDataIvr = (context) => {
  for (let i in context.dateIvrIds) {
    const day = {
      number: Number(document.getElementById(context.numberIvrIds[i]).value),
      date: Number(document.getElementById(context.dateIvrIds[i]).value),
      ivr: Number(document.getElementById(context.ivrIds[i]).value),
      hours: Number(document.getElementById(context.hoursIvrIds[i]).value),
    };
    context.resultArr.push(day);
  }
};

export const getExtraData = (context) => {
  for (let i in context.extraIVRIds) {
    const extraDay = {
      date: Number(document.getElementById(context.dateExtraIds[i]).value),
      ivr: Number(document.getElementById(context.extraIVRIds[i]).value),
      hours: Number(document.getElementById(context.hoursExtraIds[i]).value),
    };
    context.exxxtra.push(extraDay);
  }
};

export const getDataInfo = (context) => {
  context.lastname = document.getElementById('lastname').value;
  context.name = document.getElementById('name').value;
  context.secondName = document.getElementById('secondName').value;
  context.job = document.getElementById('job').value;
  context.month = document.getElementById('month').value;
  context.rate = document.getElementById('rate').value;
  context.hourShift = document.getElementById('hourShift').value;
};

export const getDataCsat = (context) => {
  for (let i in context.csatIds) {
    let csat = 0;
    csat += Number(document.getElementById(context.csatIds[i]).value);
    context.resultArr[i].csat = csat;
  }
};
export const getDataKK = (context) => {
  for (let i in context.kkIds) {
    let kk = 0;
    kk += Number(document.getElementById(context.kkIds[i]).value);
    context.resultArr[i].kk = kk;
  }
};
export const getMiddleIVR = (context) => {
  let avarage = 0;
  for (let i in context.resultArr) {
    context.totalIvr.push(context.resultArr[i].ivr);
  }
  for (let i in context.totalIvr) {
    avarage += context.totalIvr[i];
  }
  avarage /= context.totalIvr.length;
  context.middleIvr = Math.round(avarage);

  if (Number(context.hourShift) === 8) {
    context.ivrToShift = Math.round(context.middleIvr * context.shift8);
  }
  if (Number(context.hourShift) === 12) {
    context.ivrToShift = Math.round(context.middleIvr * context.shift12);
  }
  return context.ivrToShift;
};

export const countSalaryScale = (context) => {
  context.salary = context.sumHours * +context.rate;

  return context.salary;
};

export const countExtraMiddleIvr = (context) => {
  let average = 0;
  for (let i in context.exxxtra) {
    context.totalExtraIvr.push(context.exxxtra[i].ivr);
  }
  for (let i in context.totalExtraIvr) {
    average += context.totalExtraIvr[i];
  }
  average /= context.totalExtraIvr.length;
  context.middleExtraIvr = Math.round(average);
  return context.middleExtraIvr;
};
export const getExtraDays = (context) => {
  const getInput = document.getElementById('dayCounter1');
  if (!getInput.value == '') {
    for (let i in context.extraDaysId) {
      let extra = 0;
      extra += Number(document.getElementById(context.extraDaysId[i]).value);
      context.extraDays = extra;
    }
  } else {
    getInput.value = 1;
  }
};

export const getTotalExtraHours = (context) => {
  let hours = 0;
  for (let i in context.exxxtra) {
    hours += context.exxxtra[i].hours;
  }
  context.totalExtraHours = hours;
  return context.totalExtraHours;
};

export const removeNodeCallBack = (context) => {
  let div = document.getElementById('main-content-div');

  div.onclick = (event) => {
    let target = event.target;
    if (
      target.className === 'icon-btn' ||
      target.className === 'add-btn' ||
      target.className === 'btn-txt' ||
      target.className === 'icon-btn add-btn'
    ) {
      const elemId = context.removeIds.findIndex((el) => el === event.target.id);
      context.inputDivIds.splice(elemId, 1);
      context.numberIvrIds.splice(elemId, 1);
      context.dateIvrIds.splice(elemId, 1);
      context.ivrIds.splice(elemId, 1);
      context.hoursIvrIds.splice(elemId, 1);
      context.removeIds.splice(elemId, 1);
      document
        .getElementById('main-content-div')
        .removeChild(document.getElementById('inputDiv' + event.target.id));
      setInterval(newNumbers(context), 500);
    }
  };
};

export const removeNodeCallBackExtra = (context) => {
  let div = document.getElementById('main-content-div4');

  div.onclick = (event) => {
    let target = event.target;

    if (
      target.className === 'icon-btn' ||
      target.className === 'add-btn' ||
      target.className === 'btn-txt' ||
      target.className === 'icon-btn add-btn'
    ) {
      const elemId = context.removeExtraIds.findIndex((el) => el === event.target.id);
      context.extraInputDivIds.splice(elemId, 1);
      context.dateExtraIds.splice(elemId, 1);
      context.extraIVRIds.splice(elemId, 1);
      context.hoursExtraIds.splice(elemId, 1);
      context.removeExtraIds.splice(elemId, 1);
      document
        .querySelector('.extra-div-2')
        .removeChild(document.getElementById('extra_input_div' + event.target.id));
    }
  };
};

export const newNumbers = (context) => {
  const getAllNumberInputs = document.querySelectorAll('.input-number');
  for (let i = 0; i < getAllNumberInputs.length; i += 1) {
    getAllNumberInputs[i].value = Number([i]) + 1;
    context.counter = getAllNumberInputs.length;
  }
};

export const countExtraMoney = (context) => {
  let totalIvr = 0;
  let ivrPerHour = totalIvr / context.totalExtraHours;

  for (let i in context.totalExtraIvr) {
    totalIvr += context.totalExtraIvr[i];
  }
  if (ivrPerHour < 15) {
    context.extraMoney += 250 * context.totalExtraHours;
  } else {
    context.extraMoney += 400 * context.totalExtraHours;
  }
  context.extraMoney = Math.round(context.extraMoney);
};

export const premium = (context) => {
  if (+context.hourShift === 8) {
    if (
      context.ivrToShift >= 80 &&
      context.ivrToShift <= 115 &&
      context.middleCsat >= 90 &&
      context.middleKk >= 90
    ) {
      context.bonus = Math.round(context.salary * 1.1 - context.salary);
    }
    if (
      context.ivrToShift > 115 &&
      context.ivrToShift < 150 &&
      context.middleCsat === 100 &&
      context.middleKk === 100
    ) {
      context.bonus = Math.round(context.salary * 1.3 - context.salary);
    }
    if (context.ivrToShift >= 150 && context.middleCsat === 100 && context.middleKk === 100) {
      context.bonus = Math.round(context.salary * 1.5 - context.salary);
    }
  }

  if (+context.hourShift === 12) {
    if (
      context.ivrToShift >= 80 &&
      context.ivrToShift <= 100 &&
      context.middleCsat >= 85 &&
      context.middleKk >= 85
    ) {
      context.bonus = Math.round(context.salary * 1.1 - context.salary);
    }
    if (
      context.ivrToShift > 100 &&
      context.ivrToShift < 135 &&
      context.middleCsat === 95 &&
      context.middleKk === 95
    ) {
      context.bonus = Math.round(context.salary * 1.3 - context.salary);
    }
    if (context.ivrToShift >= 135 && context.middleCsat === 100 && context.middleKk === 100) {
      context.bonus = Math.round(context.salary * 1.5 - context.salary);
    }
  }
};

export const badBoys = (context) => {
  if (+context.hourShift === 8) {
    if (context.ivrToShift <= 45 || context.middleKk <= 60 || context.middleCsat <= 60) {
      context.minus = Math.round(context.salary - context.salary * 0.8);
    }
  }
  if (+context.hourShift === 12) {
    if (context.ivrToShift <= 60 || context.middleKk <= 70 || context.middleCsat <= 70) {
      context.minus = Math.round(context.salary - context.salary * 0.8);
    }
  }
};

export const countSalaryWithoutTaxes = (context) => {
  context.salaryWithoutTax = Number(
    context.salary + context.extraMoney + context.bonus - context.minus,
  );
  return context.salaryWithoutTax;
};

export const countTaxesOrTuryacka = (context) => {
  context.incomeTax = Math.floor(context.salaryWithoutTax * 0.13 * 100) / 100;
  context.fundTax = Math.floor(context.salaryWithoutTax * 0.01 * 100) / 100;
  countTotalSalary(context);
};

export const countTotalSalary = (context) => {
  context.totalSalary = context.salaryWithoutTax - (context.incomeTax + context.fundTax);
  return context.totalSalary;
};
