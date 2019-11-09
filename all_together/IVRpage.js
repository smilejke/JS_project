import {
  create_new_input,
  createRemoveButton,
  create_new_button,
  createInputDiv,
  ifDataValid,
} from './createElementsUtil.js';

const resultArr = [];

let result = {
  marker: true,
  counter: 0,

  input_div_id: [],
  kk_input_div_id: [],
  csat_input_div_id: [],

  number_ivr_id: [],
  number_kk_id: [],
  number_csat_id: [],

  date_ivr_id: [],
  date_kk_id: [],
  date_csat_id: [],

  hours_ivr_id: [],
  hours_kk_id: [],
  hours_csat_id: [],

  ivr_id: [],
  kk_id: [],
  csat_id: [],

  remove_id: [],
};

let controlData = {
  total_ivr: [],
  total_hours: 0,

  middle_ivr: 0,
  sum_hours: 0,
};

let getMiddleIVR = () => {
  let avarage = 0;
  for (let i in resultArr) {
    controlData.total_ivr.push(resultArr[i].ivr);
  }
  for (let i in controlData.total_ivr) {
    avarage += controlData.total_ivr[i];
  }
  avarage /= controlData.total_ivr.length;
  controlData.middle_ivr = Math.round(avarage);
  return controlData.middle_ivr;
};

let getSumHours = () => {
  let sum = 0;
  for (let i in resultArr) {
    sum += resultArr[i].hours;
  }

  controlData.sum_hours = sum;
  return controlData.sum_hours;
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
  button.addEventListener('click', ifDataValid);
  work_div.appendChild(button);
};

const makeNewRow = (work_div) => {
  let newInputDiv = createInputDiv(
    {
      type: 'div',
      classname: 'form-div',
      id: 'input_div',
      placeToPushId: result.input_div_id,
      placeToAppend: work_div,
    },
    result,
  );

  create_new_input(
    {
      type_name: 'input',
      class_name: 'input-date',
      id_name: 'number',
      placeToPushId: result.number_ivr_id,
      placeholder_name: result.counter + 1,
      readOnlyParam: true,
      placeToAppend: newInputDiv,
    },
    result,
  );

  create_new_input(
    {
      type_name: 'input',
      class_name: 'input-date',
      id_name: 'date',
      placeToPushId: result.date_ivr_id,
      placeholder_name: 'Дата',
      readOnlyParam: false,
      placeToAppend: newInputDiv,
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
      placeToAppend: newInputDiv,
    },
    result,
  );
  create_new_input(
    {
      type_name: 'input',
      class_name: 'input-date',
      id_name: 'hours',
      placeToPushId: result.hours_ivr_id,
      placeholder_name: 'Часы',
      readOnlyParam: false,
      placeToAppend: newInputDiv,
    },
    result,
  );

  newInputDiv.appendChild(createRemoveButton(result, removeNodeCallBack));

  createForwardButton();
  result.counter += 1;
};

const removeNodeCallBack = (e) => {
  const elemId = result.remove_id.findIndex((el) => el === e.target.id);
  result.number_ivr_id.splice(elemId, 1);
  result.date_ivr_id.splice(elemId, 1);
  result.ivr_id.splice(elemId, 1);
  result.hours_ivr_id.splice(elemId, 1);
  result.remove_id.splice(elemId, 1);

  document
    .getElementById('main_content_div')
    .removeChild(document.getElementById('input_div' + e.target.id));
};

//===========================================================================> page 1

let get_data = () => {
  for (let i in result.date_ivr_id) {
    const day = {
      number: +document.getElementById(result.number_ivr_id[i]).placeholder,
      date: +document.getElementById(result.date_ivr_id[i]).value,
      ivr: +document.getElementById(result.ivr_id[i]).value,
      hours: +document.getElementById(result.hours_ivr_id[i]).value,
    };
    resultArr.push(day);
  }
  getSumHours();
  getMiddleIVR();
  makeSomeNoise();
  make_kk_table();
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

//===================================> page 3

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
  button.innerHTML = 'Получить данные';
  button.disabled = false;
  button.addEventListener('click', () => {
    if (result.counter == 1) {
      button.disabled = true;
    }

    for (let i in result.number_ivr_id) {
      if (i < result.number_ivr_id.length) {
        let kkInputDiv = createInputDiv(
          {
            type: 'div',
            classname: 'form-div',
            id: 'kk_input_div',
            placeToPushId: result.kk_input_div_id,
            placeToAppend: button_div,
          },
          result,
        );

        create_new_input(
          {
            type_name: 'input',
            class_name: 'input-date',
            id_name: 'number_kk',
            placeToPushId: result.number_kk_id,
            placeholder_name: result.counter,
            readOnlyParam: true,
            placeToAppend: kkInputDiv,
          },
          result,
        );
        create_new_input(
          {
            type_name: 'input',
            class_name: 'input-date',
            id_name: 'date_kk',
            placeToPushId: result.date_kk_id,
            placeholder_name: 'Дата',
            readOnlyParam: false,
            placeToAppend: kkInputDiv,
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
            placeToAppend: kkInputDiv,
          },
          result,
        );

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
        let nextPage = document.getElementById('forwardButton');
        nextPage.addEventListener('click', make_csat_table);
      }
      result.marker = false;
    }
  });
  button.addEventListener('click', ifDataValid);
  button_div.appendChild(button);
};

//===================================================================>

let make_csat_table = () => {
  result.counter = 1;
  result.marker = true;

  let get_div_and_make_visible = document.getElementById('main_content_div2');
  document.body.removeChild(get_div_and_make_visible);

  let make_csat_div3 = document.createElement('div');
  make_csat_div3.id = 'main_content_div3';
  document.body.append(make_csat_div3);

  let button_div = document.createElement('div');
  button_div.classList.add('button-div');
  make_csat_div3.appendChild(button_div);

  let button = document.createElement('button');
  button.classList.add('new_day');
  button.innerHTML = 'Добавить рабочий день';
  button.disabled = true;
  button_div.appendChild(button);

  for (let i in result.number_ivr_id) {
    if (i < result.number_ivr_id.length) {
      let csatInputDiv = createInputDiv(
        {
          type: 'div',
          classname: 'form-div',
          id: 'csat_input_div',
          placeToPushId: result.csat_input_div_id,
          placeToAppend: button_div,
        },
        result,
      );

      create_new_input(
        {
          type_name: 'input',
          class_name: 'input-date',
          id_name: 'number',
          placeToPushId: result.number_csat_id,
          placeholder_name: result.counter,
          readOnlyParam: true,
          placeToAppend: csatInputDiv,
        },
        result,
      );
      create_new_input(
        {
          type_name: 'input',
          class_name: 'input-date',
          id_name: 'date',
          placeToPushId: result.date_csat_id,
          placeholder_name: 'Дата',
          readOnlyParam: false,
          placeToAppend: csatInputDiv,
        },
        result,
      );
      create_new_input(
        {
          type_name: 'input',
          class_name: 'input-date',
          id_name: 'csat',
          placeToPushId: result.csat_id,
          placeholder_name: 'СSAT',
          readOnlyParam: false,
          placeToAppend: csatInputDiv,
        },
        result,
      );

      result.counter += 1;
    }

    if (result.marker) {
      let last_div = document.createElement('div');
      last_div.classList.add('last-div');
      make_csat_div3.appendChild(last_div);

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
  console.log(`Average IVR is ${controlData.middle_ivr}`);
  console.log(`Total hours are ${controlData.sum_hours}`);
  console.log(resultArr);
};
