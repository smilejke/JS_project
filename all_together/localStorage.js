const resultArr = [];

let result = {
  marker: true,
  counter: 0,

  inputDivIds: [],
  kkInputDivIds: [],
  csatInputDivIds: [],

  numberIvrIds: [],
  numberKkIds: [],
  numberCsatIds: [],

  dateIvrIds: [],
  dateKkIds: [],
  dateCsatIds: [],

  hoursIvrIds: [],

  ivrIds: [],
  kkIds: [],
  csatIds: [],

  removeIds: [],
};

let controlData = {
  totalIvr: [],
  totalKk: [],
  totalCsat: [],

  middleIvr: 0,
  middleKk: 0,
  middleCsat: 0,
  sumHours: 0,
  totalDaysWorked: 0,
};

localStorage.setItem('result', JSON.stringify(result));
localStorage.setItem('resultArr', JSON.stringify(resultArr));
localStorage.setItem('controlData', JSON.stringify(controlData));
export const storage = localStorage;
