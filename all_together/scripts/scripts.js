import { createForm } from './modules/login.js';

import { informationPage } from './modules/information.js';
import { makeSalaryPage } from './modules/salary.js';
import { makeIvrPage } from './modules/IVRpage.js';
import { makeExtraActivity } from './modules/extraActivity.js';

let doc = document;

doc.onload = createForm();
