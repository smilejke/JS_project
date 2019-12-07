import Router from '../../../all_together/scripts/router/router.js';

import login from '../../../all_together/scripts/modules/controllers/login.js';
import information from '../../../all_together/scripts/modules/controllers/infopage.js';
import ivr from '../../../all_together/scripts/modules/controllers/ivr.js';
import kk from '../../../all_together/scripts/modules/controllers/kk.js';
import csat from '../../../all_together/scripts/modules/controllers/csat.js';
import extra from '../../../all_together/scripts/modules/controllers/extraActivity.js';
import salary from '../../../all_together/scripts/modules/controllers/salary.js';

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
  router.check();
  // router.navigate('/');
};
