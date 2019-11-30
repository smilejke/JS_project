import { createForm } from './modules/login.js';

import { informationPage } from './modules/information.js';
import { makeSalaryPage } from './modules/salary.js';

let doc = document;

doc.onload = informationPage();
