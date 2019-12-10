import run from '../JS_project/router/app.js';

import main from './css/main.css';

const state = {
  counter: 1,
  iteration: 0,
};

window.addEventListener('load', () => {
  run('container', '/', state);
});
