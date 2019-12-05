import Router from './router.js';

import login from '../modules/login.js';
import information from '../modules/information.js';
import ivr from '../modules/IVRpage.js';
import kk from '../modules/3pageKK.js';
import csat from '../modules/4pageCsat.js';
import extra from '../modules/extraActivity.js';
import salary from '../modules/salary.js';

export default (appRootId, appRootPath, state) => {
  const router = new Router([], 'history', appRootPath);

  const context = {
    root: document.getElementById(appRootId),
    router: router,
    state: state,
    // prevPage:
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
