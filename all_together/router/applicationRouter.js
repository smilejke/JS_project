import Router from './router.js';

import { informationPage } from '../scripts/modules/information.js';
import { makeIvrPage } from '../scripts/modules/IVRpage.js';
import { makeKkTable } from '../scripts/modules/3pageKK.js';
import { makeCsatTable } from '../scripts/modules/4pageCsat.js';
import { makeExtraActivity } from '../scripts/modules/extraActivity.js';
import { makeSalaryPage } from '../scripts/modules/salary.js';

let router = new Router([], 'history', '/');

router.add(/^info$/, informationPage);
router.add(/^ivr$/, makeIvrPage);
router.add(/^kk$/, makeKkTable);
router.add(/^csat$/, makeCsatTable);
router.add(/^extra$/, makeExtraActivity);
router.add(/^salary$/, makeSalaryPage);

router.listen();

export default router;

// export const getRounter = () => {
//   return router;
// };
