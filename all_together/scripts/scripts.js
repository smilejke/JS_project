import run from '../../all_together/scripts/router/app.js';

const state = {
  counter: 1,
  iteration: 0,
};

window.addEventListener('load', () => {
  run('container', '/', state);
});
