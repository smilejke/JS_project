import { createForm } from './modules/login.js';

import { createIVRpage } from './modules/IVRpage.js';
import { createExtraActivity } from './modules/extraActivity.js';
import { createSalary } from './modules/salary.js';
import { informationPage } from './modules/information.js';

let doc = document;

doc.onload = createForm();
