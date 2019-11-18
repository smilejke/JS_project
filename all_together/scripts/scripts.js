import { createForm } from './modules/login.js';

import { createIVRpage } from './modules/IVRpage.js';
import { createExtraActivity } from './modules/extraActivity.js';

let doc = document;

doc.onload = createIVRpage();
