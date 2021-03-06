export const clearDataContext = (context) => {
  (context.resultArr = []), (context.exxxtra = []);
  context.lastname = '';
  context.name = '';
  context.secondName = '';
  context.job = '';
  context.month = '';
  context.rate = '';
  context.hourShift = '';
  context.marker = true;
  context.eventPretender = true;
  context.counter = 0;
  context.inputDivIds = [];
  context.kkInputDivIds = [];
  context.csatInputDivIds = [];
  context.extraInputDivIds = [];
  context.salaryDivIds = [];
  context.numberIvrIds = [];
  context.numberKkIds = [];
  context.numberCsatIds = [];
  context.dateIvrIds = [];
  context.dateKkIds = [];
  context.dateCsatIds = [];
  context.dateExtraIds = [];
  context.hoursIvrIds = [];
  context.hoursExtraIds = [];
  context.ivrIds = [];
  context.kkIds = [];
  context.csatIds = [];
  context.extraIVRIds = [];
  context.removeExtraIds = [];
  context.removeIds = [];
  context.extra = [];
  context.extraDays = 0;
  context.extraDaysId = [];
  context.shift8 = 1;
  context.shift12 = 0.8;
  context.totalIvr = [];
  context.totalKk = [];
  context.totalCsat = [];
  context.totalExtraIvr = [];
  context.extraMoney = 0;
  context.middleIvr = 0;
  context.middleKk = 0;
  context.middleCsat = 0;
  context.middleExtraIvr = 0;
  context.sumHours = 0;
  context.totalDaysWorked = 0;
  context.totalExtraHours = 0;
  context.ivrToShift = 0;
  context.bonus = 0;
  context.salary = 0;
  context.minus = 0;
  context.salaryWithoutTax = 0;
  context.incomeTax = 0;
  context.fundTax = 0;
  context.totalSalary = 0;
  context.monthId = [];
  context.daysWorkedId = [];
  context.middleIvrId = [];
  context.hoursWorkedId = [];
  context.middleKkId = [];
  context.middleCsatId = [];
  context.extraMoneyId = [];
  context.rateId = [];
  context.shiftId = [];
  context.departmentId = [];
  context.nameId = [];
  context.salaryScale = [];
  context.premium = [];
  context.dirtyMoney = [];
  context.withoutTax = [];
  context.incomeTaxIds = [];
  context.fundTaxIds = [];
  context.totalSalaryIds = [];
};

export const clearContextForIVR = (context) => {
  context.inputDivIds = [];
  context.numberIvrIds = [];
  context.hoursIvrIds = [];
  context.dateIvrIds = [];
  context.ivrIds = [];
  context.removeIds = [];
  context.resultArr = [];
  context.totalIvr = [];
  context.middleIvr = [];
  context.ivrToShift = [];
  context.sumHours = [];
  context.salary = 0;
  context.totalDaysWorked = 0;
};

export const clearContextForKK = (context) => {
  context.kkInputDivIds = [];
  context.numberKkIds = [];
  context.dateKkIds = [];
  context.kkIds = [];
  context.totalKk = [];
  context.middleKk = 0;
  delete context.resultArr.kk;
};

export const clearContextForCsat = (context) => {
  context.csatInputDivIds = [];
  context.numberCsatIds = [];
  context.dateCsatIds = [];
  context.csatIds = [];
  context.totalCsat = [];
  context.middleCsat = 0;
  delete context.resultArr.csat;
};

export const clearContextForExtra = (context) => {
  context.extraIVRIds = [];
  context.dateExtraIds = [];
  context.extraInputDivIds = [];
  context.hoursExtraIds = [];
  context.exxxtra = [];
  context.totalExtraIvr = [];
  context.middleExtraIvr = [];
  context.totalExtraHours = [];
  context.extraMoney = 0;
  context.extraDays = 0;
};
