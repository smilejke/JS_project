import Router from '../../JS_project/router/router.js';

import login from '../../JS_project/modules/controllers/login.js';
import information from '../../JS_project/modules/controllers/infopage.js';
import ivr from '../../JS_project/modules/controllers/ivr.js';
import kk from '../../JS_project/modules/controllers/kk.js';
import csat from '../../JS_project/modules/controllers/csat.js';
import extra from '../../JS_project/modules/controllers/extraActivity.js';
import salary from '../../JS_project/modules/controllers/salary.js';

export default (appRootId, appRootPath, state) => {
  const router = new Router([], 'history', appRootPath);

  const context = {
    root: document.getElementById(appRootId),
    router: router,
    state: state,
    resultArr: [],
    exxxtra: [],
    lastname: '',
    name: '',
    secondName: '',
    job: '',
    month: '',
    rate: '',
    hourShift: '',
    marker: true,
    eventPretender: true,
    counter: 0,
    inputDivIds: [],
    kkInputDivIds: [],
    csatInputDivIds: [],
    extraInputDivIds: [],
    salaryDivIds: [],
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
    bonus: 0,
    salary: 0,
    minus: 0,
    salaryWithoutTax: 0,
    incomeTax: 0,
    fundTax: 0,
    totalSalary: 0,
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
    salaryScale: [],
    premium: [],
    dirtyMoney: [],
    withoutTax: [],
    incomeTaxIds: [],
    fundTaxIds: [],
    totalSalaryIds: [],
  };

  router.add(/^\/$/, () => {
    login(context);
  });

  // router.add(/^page1\/(.*)\/(.*)$/, (p1, p2) => {
  //   const extContext = {
  //     ...context,
  //     field1: parseInt(p1, 10),
  //     field2: parseInt(p2, 10),
  //   };

  //   page1render(extContext);
  // });

  router.add(/^page2$/, () => {
    information(context);
  });

  router.add(/^page3$/, () => {
    ivr(context);
  });

  router.add(/^page4$/, () => {
    kk(context);
  });

  router.add(/^page5$/, () => {
    csat(context);
  });
  router.add(/^page6$/, () => {
    extra(context);
  });
  router.add(/^page7$/, () => {
    salary(context);
  });
  router.listen();
  router.navigate('/');
};
