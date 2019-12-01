import { createForm } from './modules/login.js';

import { informationPage } from './modules/information.js';
import { makeSalaryPage } from './modules/salary.js';
import { makeIvrPage } from './modules/IVRpage.js';

let doc = document;

doc.onload = makeIvrPage();
