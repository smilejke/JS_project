const resultParams = [];

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

  removeIds: [],

  extraDays: 0,
  extraDaysId: [],
};

const finalData = {
  totalIvr: [],
  totalKk: [],
  totalCsat: [],

  middleIvr: 0,
  middleKk: 0,
  middleCsat: 0,
  sumHours: 0,
  totalDaysWorked: 0,
};
localStorage.clear();
localStorage.setItem('result', JSON.stringify(dataContainer));
localStorage.setItem('resultArr', JSON.stringify(resultParams));
localStorage.setItem('controlData', JSON.stringify(finalData));

export const storage = localStorage;
export let controlData = JSON.parse(storage.getItem('controlData'));
export let resultArr = JSON.parse(storage.getItem('resultArr'));
export let result = JSON.parse(storage.getItem('result'));

export const updateStorage = () => {
  storage.setItem('result', JSON.stringify(result));
  storage.setItem('resultArr', JSON.stringify(resultArr));
  storage.setItem('controlData', JSON.stringify(controlData));
};
