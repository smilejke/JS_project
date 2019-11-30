import { createForwardButtonDiv, mainContainer, createOption } from './createElementsUtil.js';

import { info, result, updateStorageInfo } from './localStorage.js';
import { getDataInfo } from './mathFunctions.js';
import { ifNoDataInfo } from './validation.js';

import router from '../../router/applicationRouter.js';

export const informationPage = () => {
  result.marker = true;
  mainContainer({
    type: 'div',
    id: 'main-content-div6',
  });
  let mainCont = document.getElementById('main-content-div6');
  mainCont.classList.remove('main-div');

  let mainFormConainer = document.createElement('div');
  mainFormConainer.className = 'form-style-5';
  mainCont.appendChild(mainFormConainer);

  let form = document.createElement('form');
  form.id = 'formUser';
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
  inputLegend1.id = 'lastname';
  inputLegend1.placeholder = 'Фамилия *';
  fieldsetTop.appendChild(inputLegend1);

  let inputLegend2 = document.createElement('input');
  inputLegend2.type = 'text';
  inputLegend2.name = 'field2';
  inputLegend2.id = 'name';
  inputLegend2.placeholder = 'Имя *';
  fieldsetTop.appendChild(inputLegend2);

  let inputLegend3 = document.createElement('input');
  inputLegend3.type = 'text';
  inputLegend3.name = 'field2';
  inputLegend3.id = 'secondName';
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
  createOption({ value: 'ДТП', text: 'ДТП', placeToAppend: optgroup1 });
  createOption({ value: 'Ургент', text: 'Ургент', placeToAppend: optgroup1 });
  createOption({ value: 'НСП', text: 'НСП', placeToAppend: optgroup1 });
  createOption({ value: 'Корп.клиенты', text: 'Корп.клиенты', placeToAppend: optgroup1 });
  createOption({ value: 'Ночники', text: 'Ночники', placeToAppend: optgroup1 });
  select.appendChild(optgroup1);

  let optgroup2 = document.createElement('optgroup');
  optgroup2.label = 'Водительские';
  createOption({ value: 'Финансы', text: 'Финансы', placeToAppend: optgroup2 });
  createOption({ value: 'Автоконтроль', text: 'Автоконтроль', placeToAppend: optgroup2 });
  createOption({ value: 'Бонусы', text: 'Бонусы', placeToAppend: optgroup2 });
  createOption({ value: 'Парки', text: 'Парки', placeToAppend: optgroup2 });
  createOption({ value: 'Тарифы', text: 'Тарифы', placeToAppend: optgroup2 });
  select.appendChild(optgroup2);

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

  let select2 = document.createElement('select');
  select2.id = 'month';
  select2.name = 'field4';
  fieldsetBottom.appendChild(select2);

  let optgroup3 = document.createElement('optgroup');
  optgroup3.label = 'Месяц';

  createOption({ value: 'Январь', text: 'Январь', placeToAppend: optgroup3 });
  createOption({ value: 'Февраль', text: 'Февраль', placeToAppend: optgroup3 });
  createOption({ value: 'Март', text: 'Март', placeToAppend: optgroup3 });
  createOption({ value: 'Апрель', text: 'Апрель', placeToAppend: optgroup3 });
  createOption({ value: 'Май', text: 'Май', placeToAppend: optgroup3 });
  createOption({ value: 'Июнь', text: 'Июнь', placeToAppend: optgroup3 });
  createOption({ value: 'Июль', text: 'Июль', placeToAppend: optgroup3 });
  createOption({ value: 'Август', text: 'Август', placeToAppend: optgroup3 });
  createOption({ value: 'Сентябрь', text: 'Сентябрь', placeToAppend: optgroup3 });
  createOption({ value: 'Октябрь', text: 'Октябрь', placeToAppend: optgroup3 });
  createOption({ value: 'Ноябрь', text: 'Ноябрь', placeToAppend: optgroup3 });
  createOption({ value: 'Декабрь', text: 'Декабрь', placeToAppend: optgroup3 });

  select2.appendChild(optgroup3);

  let select3 = document.createElement('select');
  select3.id = 'hourShift';
  select3.name = 'hourShift';
  fieldsetBottom.appendChild(select3);

  let optgroup4 = document.createElement('optgroup');
  optgroup4.label = 'Смена, часов/день';
  optgroup4.id = 'shiftId';
  createOption({ value: 8, text: '8-ми часовая смена', placeToAppend: optgroup4 });
  createOption({ value: 12, text: '12-ти часовая смена', placeToAppend: optgroup4 });
  select3.appendChild(optgroup4);

  let inputLegend4 = document.createElement('input');
  inputLegend4.type = 'text';
  inputLegend4.name = 'rate';
  inputLegend4.id = 'rate';
  inputLegend4.placeholder = 'Ставка, руб/ч *';
  fieldsetBottom.appendChild(inputLegend4);

  createForwardButtonDiv(
    {
      type: 'div',
      classname: 'information-button-div',
      idHtmlToAppend: 'main-content-div6',
    },
    'Выйти из программы',
    'Перейти к заполнению показателей',
  );
  let but = document.getElementById('forwardButton');
  but.disabled = true;
  but.classList.add('not-correct');
  but.addEventListener('click', getDataInfo);
  but.addEventListener('click', updateStorageInfo);
  but.addEventListener('click', () => {
    router.navigate('/ivr');
    let removePage = document.getElementById('main-content-div6');
    document.body.removeChild(removePage);
  });

  let inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].addEventListener('blur', ifNoDataInfo);
  }
};
