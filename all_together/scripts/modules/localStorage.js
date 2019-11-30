const resultParams = [];
const resultExtra = [];

const dataContainer = {
  marker: true,
  counter: 0,

  inputDivIds: [],
  kkInputDivIds: [],
  csatInputDivIds: [],
  extraInputDivIds: [],

  numberIvrIds: [],
  numberKkIds: [],
  numberCsatIds: [],

  dateIvrIds: [],
  dateKkIds: [],
  dateCsatIds: [],
  dateExtraIds: [],

  hoursIvrIds: [],
  hoursExtraIds: [],

  ivrIds: [],
  kkIds: [],
  csatIds: [],
  extraIVRIds: [],

  removeExtraIds: [],
  removeIds: [],
  extra: [],
  extraDays: 0,
  extraDaysId: [],

  shift8: 1,
  shift12: 0.8,
};

const information = {
  lastname: '',
  name: '',
  secondName: '',
  job: '',
  month: '',
  rate: '',
  hourShift: '',
};

const finalData = {
  totalIvr: [],
  totalKk: [],
  totalCsat: [],
  totalExtraIvr: [],

  extraMoney: 0,
  middleIvr: 0,
  middleKk: 0,
  middleCsat: 0,
  middleExtraIvr: 0,
  sumHours: 0,
  totalDaysWorked: 0,
  totalExtraHours: 0,
  ivrToShift: 0,
};

const salaryDataIds = {
  monthId: [],
  daysWorkedId: [],
  middleIvrId: [],
  hoursWorkedId: [],
  middleKkId: [],
  middleCsatId: [],
  extraMoneyId: [],
  rateId: [],
  shiftId: [],
  departmentId: [],
  nameId: [],
};

// localStorage.clear();
localStorage.setItem('result', JSON.stringify(dataContainer));
localStorage.setItem('resultArr', JSON.stringify(resultParams));
localStorage.setItem('controlData', JSON.stringify(finalData));
localStorage.setItem('exxxtra', JSON.stringify(resultExtra));
localStorage.setItem('info', JSON.stringify(information));
localStorage.setItem('money', JSON.stringify(salaryDataIds));

export const storage = localStorage;
export let controlData = JSON.parse(storage.getItem('controlData'));
export let resultArr = JSON.parse(storage.getItem('resultArr'));
export let result = JSON.parse(storage.getItem('result'));
export let exxxtra = JSON.parse(storage.getItem('exxxtra'));
export let info = JSON.parse(storage.getItem('info'));
export let money = JSON.parse(storage.getItem('money'));

export const updateStorage = () => {
  storage.setItem('result', JSON.stringify(result));
  storage.setItem('resultArr', JSON.stringify(resultArr));
  storage.setItem('controlData', JSON.stringify(controlData));
};

export const updateExtraStorage = () => {
  storage.setItem('result', JSON.stringify(result));
  storage.setItem('exxxtra', JSON.stringify(exxxtra));
  storage.setItem('controlData', JSON.stringify(controlData));
};

export const updateStorageInfo = () => {
  storage.setItem('info', JSON.stringify(info));
};

export const updateStorageSalary = () => {
  storage.setItem('money', JSON.stringify(money));
};

export const getDataFromLS = (field) => JSON.parse(storage.getItem(field));
