import { create_new_input, createRemoveButton, create_new_button } from './createElementsUtil.js';

const resultArr = [];

let result = {
  marker: true,
  counter: 0,

  input_div_id: [],
  kk_input_div_id: [],
  number_id: [],
  date_id: [],
  ivr_id: [],
  hours_id: [],
  kk_id: [],

  total_ivr: [],
  middle_ivr: 0,

  total_hours: 0,
  sum_hours: 0,

  remove_id: [],
};

export const createIVRpage = () => {
  let main = document.createElement('main');
  main.classList.add('main-div');
  main.id = 'main_content_div';
  document.body.append(main);

  let work_div = document.createElement('div');
  work_div.classList.add('button-div');
  main.appendChild(work_div);

  let button = document.createElement('button');
  button.classList.add('new_day');
  button.innerHTML = 'Добавить рабочий день';
  button.addEventListener('click', () => {
    makeNewRow(work_div);
  });
  work_div.appendChild(button);
};

const makeNewRow = (work_div) => {
  let input_div = document.createElement('div');
  input_div.classList.add('form-div');
  input_div.id = 'input_div' + result.counter;
  result.input_div_id.push(input_div.id);
  work_div.before(input_div);

  create_new_input(
    {
      type_name: 'input',
      class_name: 'input-date',
      id_name: 'number',
      placeToPushId: result.number_id,
      placeholder_name: result.counter + 1,
      readOnlyParam: true,
      placeToAppend: input_div,
    },
    result,
  );
  create_new_input(
    {
      type_name: 'input',
      class_name: 'input-date',
      id_name: 'date',
      placeToPushId: result.date_id,
      placeholder_name: 'Дата',
      readOnlyParam: false,
      placeToAppend: input_div,
    },
    result,
  );
  create_new_input(
    {
      type_name: 'input',
      class_name: 'input-date',
      id_name: 'ivr',
      placeToPushId: result.ivr_id,
      placeholder_name: 'ИВР',
      readOnlyParam: false,
      placeToAppend: input_div,
    },
    result,
  );
  create_new_input(
    {
      type_name: 'input',
      class_name: 'input-date',
      id_name: 'hours',
      placeToPushId: result.hours_id,
      placeholder_name: 'Часы',
      readOnlyParam: false,
      placeToAppend: input_div,
    },
    result,
  );

  input_div.appendChild(createRemoveButton(result, removeNodeCallBack));

  createForwardButton();
  result.counter += 1;
};

const removeNodeCallBack = (e) => {
  const elemId = result.remove_id.findIndex((el) => el === e.target.id);
  result.number_id.splice(elemId, 1);
  result.date_id.splice(elemId, 1);
  result.ivr_id.splice(elemId, 1);
  result.hours_id.splice(elemId, 1);
  result.remove_id.splice(elemId, 1);

  document
    .getElementById('main_content_div')
    .removeChild(document.getElementById('input_div' + e.target.id));
};

//===========================================================================> page 1

let countAvarageIvr = () => {
  let average_ivr = 0;
  for (let i in result.total_ivr) {
    average_ivr += result.total_ivr[i];
  }
  average_ivr /= result.total_ivr.length;
  result.middle_ivr = Math.round(average_ivr);
  return result.middle_ivr;
};

let countHoursSum = () => {
  let sum_of_hours = 0;
  for (let i in result.total_hours) {
    sum_of_hours += result.total_hours[i];
  }
  result.sum_hours = sum_of_hours;
  return result.sum_hours;
};

let get_data = () => {
  for (let i in result.date_id) {
    const day = {
      number: +document.getElementById(result.number_id[i]).placeholder,
      date: +document.getElementById(result.date_id[i]).value,
      ivr: +document.getElementById(result.ivr_id[i]).value,
      hours: +document.getElementById(result.hours_id[i]).value,
    };
    resultArr.push(day);
    console.log(day);
  }

  countAvarageIvr();
  countHoursSum();
  console.log(resultArr);
  // makeSomeNoise();
  // make_kk_table();
};

let createForwardButton = () => {
  if (result.marker) {
    let last_div = document.createElement('div');
    last_div.classList.add('last-div');
    document.getElementById('main_content_div').appendChild(last_div);

    create_new_button({
      type: 'button',
      id: 'backButton',
      class_name: 'forward',
      disabled: true,
      text: 'Предыдущий показатель',
      placeToAppend: last_div,
    });
    create_new_button({
      type: 'button',
      id: 'forwardButton',
      class_name: 'forward',
      disabled: false,
      text: 'Следующий показатель',
      placeToAppend: last_div,
    });
    let getNextButton = document.getElementById('forwardButton');
    getNextButton.addEventListener('click', get_data);
  }
  result.marker = false;
};

let make_kk_table = () => {
  result.counter = 1;
  result.marker = true;

  let get_div_and_make_visible = document.getElementById('main_content_div');
  document.body.removeChild(get_div_and_make_visible);

  let make_kk_div2 = document.createElement('div');
  make_kk_div2.id = 'main_content_div2';
  document.body.append(make_kk_div2);

  let button_div = document.createElement('div');
  button_div.classList.add('button-div');
  make_kk_div2.appendChild(button_div);

  let button = document.createElement('button');
  button.classList.add('new_day');
  button.innerHTML = 'Добавить рабочий день';
  button.disabled = true;
  button_div.appendChild(button);

  for (let i in result.number_id) {
    if (i < result.number_id.length) {
      let input_div = document.createElement('div');
      input_div.classList.add('form-div');
      input_div.id = 'input_div' + result.counter;
      result.kk_input_div_id.push(input_div.id);
      button_div.before(input_div);

      create_new_input(
        {
          type_name: 'input',
          class_name: 'input-date',
          id_name: 'number',
          placeToPushId: result.number_id,
          placeholder_name: result.counter,
          readOnlyParam: true,
          placeToAppend: input_div,
        },
        result,
      );
      create_new_input(
        {
          type_name: 'input',
          class_name: 'input-date',
          id_name: 'date',
          placeToPushId: result.date_id,
          placeholder_name: 'Дата',
          readOnlyParam: false,
          placeToAppend: input_div,
        },
        result,
      );
      create_new_input(
        {
          type_name: 'input',
          class_name: 'input-date',
          id_name: 'kk',
          placeToPushId: result.kk_id,
          placeholder_name: 'КК',
          readOnlyParam: false,
          placeToAppend: input_div,
        },
        result,
      );

      let remove_button = document.createElement('button');
      remove_button.id = 'remove' + result.counter;
      result.remove_id.push(remove_button.id);
      remove_button.classList.add('icon-btn', 'add-btn');
      input_div.appendChild(remove_button);

      let remove_div = document.createElement('div');
      remove_div.classList.add('btn-txt');
      remove_div.innerHTML = 'Удалить';
      remove_button.appendChild(remove_div);

      result.counter += 1;
    }

    if (result.marker) {
      let last_div = document.createElement('div');
      last_div.classList.add('last-div');
      make_kk_div2.appendChild(last_div);

      create_new_button({
        type: 'button',
        id: 'backButton',
        class_name: 'forward',
        disabled: false,
        text: 'Предыдущий показатель',
        placeToAppend: last_div,
      });
      create_new_button({
        type: 'button',
        id: 'forwardButton',
        class_name: 'forward',
        disabled: false,
        text: 'Следующий показатель',
        placeToAppend: last_div,
      });
    }
    result.marker = false;
  }
  return button_div;
};

let makeSomeNoise = () => {
  console.log(`Average IVR is ${result.middle_ivr}`);
  console.log(`Total hours are ${result.sum_hours}`);
  console.log(result.total_numbers);
  console.log(result.date_data);
  console.log(result.total_ivr);
  console.log(result.total_hours);
};
