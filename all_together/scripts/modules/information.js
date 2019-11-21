import {
  createInputDiv,
  createForwardButtonDiv,
  createInput,
  mainContainer,
  createButtonDiv,
  createWorkButton,
} from './createElementsUtil.js';

import { controlData, resultArr, result, updateStorage } from './localStorage.js';

export const informationPage = () => {
  result.marker = true;
  mainContainer({
    type: 'div',
    id: 'main-content-div6',
  });

  let mainCont = document.getElementById('main-content-div6');

  let mainFormConainer = document.createElement('div');
  mainFormConainer.className = 'form-style-5';
  mainCont.appendChild(mainFormConainer);

  let form = document.createElement('form');
  mainFormConainer.appendChild(form);

  let fieldsetTop = document.createElement('fieldset');
  form.appendChild(fieldsetTop);

  let legend1 = document.createElement('legend');
  let span1 = document.createElement('span');
  span1.className = 'number';
  span1.innerHTML = '1';
  legend1.appendChild(span1);
  let text = document.createTextNode('Информация о сотруднике');
  legend1.appendChild(text);
  fieldsetTop.appendChild(legend1);

  let inputLegend1 = document.createElement('input');
  inputLegend1.type = 'text';
  inputLegend1.name = 'field1';
  inputLegend1.placeholder = 'Фамилия *';
  fieldsetTop.appendChild(inputLegend1);

  let inputLegend2 = document.createElement('input');
  inputLegend2.type = 'text';
  inputLegend2.name = 'field2';
  inputLegend2.placeholder = 'Имя *';
  fieldsetTop.appendChild(inputLegend2);

  let inputLegend3 = document.createElement('input');
  inputLegend3.type = 'text';
  inputLegend3.name = 'field2';
  inputLegend3.placeholder = 'Отчество *';
  fieldsetTop.appendChild(inputLegend3);

  let labelDepartment = document.createElement('label');
  labelDepartment.for = 'job';
  labelDepartment.innerHTML = 'Отдел';
  fieldsetTop.appendChild(labelDepartment);

  let select = document.createElement('select');
  select.id = 'job';
  select.name = 'field4';
  fieldsetTop.appendChild(select);

  let optgroup1 = document.createElement('optgroup');
  optgroup1.label = 'ЧС';

  let option1 = document.createElement('option');
  option1.value = 'ДТП';
  option1.innerHTML = 'ДТП';
  optgroup1.appendChild(option1);

  let option2 = document.createElement('option');
  option2.value = 'Ургент';
  option2.innerHTML = 'Ургент';
  optgroup1.appendChild(option2);

  let option3 = document.createElement('option');
  option3.value = 'НСП';
  option3.innerHTML = 'НСП';
  optgroup1.appendChild(option3);

  let option4 = document.createElement('option');
  option4.value = 'Корп.клиенты';
  option4.innerHTML = 'Корп.клиенты';
  optgroup1.appendChild(option4);

  let option5 = document.createElement('option');
  option5.value = 'Ночники';
  option5.innerHTML = 'Ночники';
  optgroup1.appendChild(option5);

  select.appendChild(optgroup1);

  let optgroup2 = document.createElement('optgroup');
  optgroup2.label = 'Водительские';
  select.appendChild(optgroup2);

  let option6 = document.createElement('option');
  option6.value = 'Финансы';
  option6.innerHTML = 'Финансы';
  optgroup2.appendChild(option6);

  let option7 = document.createElement('option');
  option7.value = 'Автоконтроль';
  option7.innerHTML = 'Автоконтроль';
  optgroup2.appendChild(option7);

  let option8 = document.createElement('option');
  option8.value = 'Бонусы';
  option8.innerHTML = 'Бонусы';
  optgroup2.appendChild(option8);

  let option9 = document.createElement('option');
  option9.value = 'Парки';
  option9.innerHTML = 'Парки';
  optgroup2.appendChild(option9);

  let option10 = document.createElement('option');
  option10.value = 'Тарифы';
  option10.innerHTML = 'Тарифы';
  optgroup2.appendChild(option10);

  let fieldsetBottom = document.createElement('fieldset');
  form.appendChild(fieldsetBottom);

  let legend2 = document.createElement('legend');
  let span2 = document.createElement('span');
  span2.className = 'number';
  span2.innerHTML = '2';
  legend2.appendChild(span2);
  let text2 = document.createTextNode('Дополнительная информация');
  legend2.appendChild(text2);
  fieldsetBottom.appendChild(legend2);

  let textarea = document.createElement('textarea');
  textarea.name = 'field3';
  textarea.placeholder = 'Отпуска, больничные, обучения и т.п.';
  fieldsetBottom.appendChild(textarea);

  let inputLegend4 = document.createElement('input');
  inputLegend4.type = 'text';
  inputLegend4.name = 'field2';
  inputLegend4.placeholder = 'Текущий месяц *';
  fieldsetBottom.appendChild(inputLegend4);

  let inputValues = document.createElement('input');
  inputValues.type = 'submit';
  inputValues.value = 'Apply';
  form.appendChild(inputValues);

  //   createForwardButtonDiv(
  //     {
  //       type: 'div',
  //       classname: 'navigation-div',
  //       idHtmlToAppend: 'main-content-div6',
  //     },
  //     'Выйти из программы',
  //     'Перейти к заполнению показателей',
  //   );
};
