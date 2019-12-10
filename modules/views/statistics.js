import {
  mainContainer,
  createInputDivStat,
  createList,
  createHeader,
  createForwardButtonDiv,
  clearContainer,
} from '../../../JS_project/modules/createElementsUtil.js';

import { person } from '../localStorage.js';

export default (context) => {
  context.marker = true;
  let main = mainContainer({ type: 'div', id: 'main-content-div7' });
  createHeader(main, context);

  for (let i = 0; i < person.length; i += 1) {
    let smalldiv = createInputDivStat(
      {
        type: 'div',
        classname: 'list-div',
        id: 'statDiv',
        placeToPushId: context.inputStatDivIds,
        placeToAppend: main,
      },
      context,
    );
    createList(smalldiv, {
      name: person[i].name,
      ivr: person[i].ivr,
      kk: person[i].kk,
      csat: person[i].csat,
      salary: person[i].salary,
    });
  }
  createForwardButtonDiv(
    {
      type: 'div',
      classname: 'last-div',
      idHtmlToAppend: 'main-content-div7',
    },
    'Вернуться к показателям',
    'Выйти из программы',
    context,
  );

  let getBackButton = document.getElementById('backButton');
  getBackButton.addEventListener('click', () => {
    person.pop();
    context.router.navigate('/page7');
    clearContainer('main-content-div7');
  });
  let getNextButton = document.getElementById('forwardButton');
  getNextButton.addEventListener('click', () => {
    localStorage.clear();
    context.router.navigate(window.onload);
    clearContainer('main-content-div7');
  });
};
