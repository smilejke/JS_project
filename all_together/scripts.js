let doc = document;

let attempt = 3;

let validate = () => {
  let username = doc.getElementById("username").value;
  let password = doc.getElementById("password").value;
  if (username == "Smilejke" && password == "Admin") {
    alert("Login successfully");
    let get_div_and_make_invisible = doc.getElementById("dissap");
    doc.body.removeChild(get_div_and_make_invisible);

    let get_div_and_make_visible = doc.getElementById("main_content_div");
    get_div_and_make_visible.classList.remove("visibility");

    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempt");

    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
};

doc.onload =
  (login_form = () => {
    let global_main_for_dissapiar = doc.createElement('div');
    global_main_for_dissapiar.id = "dissap";
    doc.body.appendChild(global_main_for_dissapiar);

    let main_login_div = doc.createElement('div');
    main_login_div.classList.add("main");
    global_main_for_dissapiar.appendChild(main_login_div);

    let h2_in_login_form = doc.createElement('h2');
    h2_in_login_form.innerHTML = "The system of calculating earnings of an employee";
    main_login_div.appendChild(h2_in_login_form);

    let login_form = doc.createElement('form');
    login_form.id = "form_id";
    login_form.method = "post";
    login_form.name = "myform";
    main_login_div.appendChild(login_form);

    let label_userName = doc.createElement('label');
    label_userName.innerHTML = "User Name :";
    login_form.appendChild(label_userName);

    let input_text = doc.createElement('input');
    input_text.type = "text";
    input_text.name = "username";
    input_text.id = "username";
    input_text.className = "input_text";
    login_form.appendChild(input_text);

    let label_userName2 = doc.createElement('label');
    label_userName2.innerHTML = "Password :";
    login_form.appendChild(label_userName2);

    let input_password = doc.createElement('input');
    input_password.type = "password";
    input_password.name = "password";
    input_password.id = "password";
    input_password.className = "input_text";
    login_form.appendChild(input_password);

    let login_button = doc.createElement('input');
    login_button.type = "button";
    login_button.value = "Login";
    login_button.id = "submit";
    login_button.className = "admin_button";
    login_button.onclick = validate;
    login_form.appendChild(login_button);

    let span_text = doc.createElement('span');
    main_login_div.appendChild(span_text);

    let bold_text1 = doc.createElement('b');
    bold_text1.className = "note";
    bold_text1.innerHTML = "Note:";
    span_text.appendChild(bold_text1);

    let text_node = doc.createTextNode(' For this demo use following username and password.');
    span_text.appendChild(text_node);

    let br1 = doc.createElement('br');
    span_text.appendChild(br1);

    let bold_text2 = doc.createElement('b');
    bold_text2.className = "valid";
    span_text.appendChild(bold_text2);

    let text_user = doc.createTextNode("User Name: Smilejke");
    bold_text2.appendChild(text_user);

    let br2 = doc.createElement('br');
    bold_text2.appendChild(br2);

    let text_password = doc.createTextNode("Password : Admin");
    bold_text2.appendChild(text_password);
  })();


//===========================================================================> page 1

let main = doc.createElement('main');
main.classList.add("main-div");
main.id = "main_content_div";
main.className = "visibility";
doc.body.append(main);

let work_div = doc.createElement('div');
work_div.classList.add("button-div");
main.appendChild(work_div);

let button = doc.createElement('button');
button.classList.add("new_day");
button.innerHTML = 'Добавить рабочий день';
work_div.appendChild(button);

let result = {
  marker: true,
  counter: 1,

  input_div_id: [],
  kk_input_div_id: [],
  number_id: [],
  date_id: [],
  ivr_id: [],
  hours_id: [],
  kk_id: [],

  total_numbers: 0,
  date_data: 0,

  total_ivr: 0,
  middle_ivr: 0,

  total_hours: 0,
  sum_hours: 0,

  remove_id: [],
};

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

let create_new_input = (hash) => {
  let new_input = doc.createElement(hash.type_name);
  new_input.classList.add(hash.class_name);
  new_input.id = hash.id_name + result.counter;
  hash.placeToPushId.push(new_input.id);
  new_input.placeholder = hash.placeholder_name;
  new_input.readOnly = hash.readOnlyParam;
  hash.placeToAppend.appendChild(new_input);
};

let create_new_button = (hash) => {
  let buttonName = doc.createElement(hash.type);
  buttonName.id = hash.id;
  buttonName.classList.add(hash.class_name);
  buttonName.disabled = hash.disabled;
  buttonName.innerHTML = hash.text;
  hash.placeToAppend.appendChild(buttonName);
};


let makeNewRow = () => {
  let input_div = doc.createElement('div');
  input_div.classList.add("form-div");
  input_div.id = 'input_div' + result.counter;
  result.input_div_id.push(input_div.id);
  work_div.before(input_div);

  create_new_input({type_name:'input', class_name:"input-date", id_name:"number", placeToPushId:result.number_id, placeholder_name:result.counter, readOnlyParam:true, placeToAppend:input_div});
  create_new_input({type_name:'input', class_name:"input-date", id_name:"date", placeToPushId:result.date_id, placeholder_name:"Дата", readOnlyParam:false, placeToAppend:input_div});
  create_new_input({type_name:'input', class_name:"input-date", id_name:"ivr", placeToPushId:result.ivr_id, placeholder_name:"ИВР", readOnlyParam:false, placeToAppend:input_div});
  create_new_input({type_name:'input', class_name:"input-date", id_name:"hours", placeToPushId:result.hours_id, placeholder_name:"Часы", readOnlyParam:false, placeToAppend:input_div});

  let remove_button = doc.createElement('button');
  remove_button.id = 'remove' + result.counter;
  result.remove_id.push(remove_button.id);
  remove_button.classList.add('icon-btn', 'add-btn');
  remove_button.addEventListener('click', function() {
      main.removeChild(this.parentNode);
  });
  input_div.appendChild(remove_button);

  let remove_div = doc.createElement('div');
  remove_div.classList.add('btn-txt');
  remove_div.innerHTML = "Удалить";
  remove_button.appendChild(remove_div);

  result.counter += 1;
};

let get_data = () => {
  let resultForNumber = [];
  let resultForDate = [];
  let resultForIvr = [];
  let resultForHours = [];

  for (let i in result.date_id) {
    resultForNumber.push(+document.getElementById(result.number_id[i]).placeholder);
    resultForDate.push(+document.getElementById(result.date_id[i]).value);
    resultForIvr.push(+document.getElementById(result.ivr_id[i]).value);
    resultForHours.push(+document.getElementById(result.hours_id[i]).value);
  }
  result.total_ivr = resultForIvr;
  result.total_hours = resultForHours;
  result.date_data = resultForDate;
  result.total_numbers = resultForNumber;
  countAvarageIvr();
  countHoursSum();
  makeSomeNoise();
  make_kk_table();
};

let createForwardButton = () => {
  if (result.marker) {
    let last_div = doc.createElement('div');
    last_div.classList.add("last-div");
    main.appendChild(last_div);

  
    create_new_button({type:'button', id:"backButton", class_name:"forward", disabled:true, text:'Предыдущий показатель', placeToAppend:last_div});
    create_new_button({type:'button', id:"forwardButton", class_name:"forward", disabled:false, text:'Следующий показатель', placeToAppend:last_div});
    let getNextButton = doc.getElementById('forwardButton');
    getNextButton.addEventListener('click', get_data);

  }
  result.marker = false;
};

let makeSomeNoise = () => {
  console.log(`Average IVR is ${result.middle_ivr}`);
  console.log(`Total hours are ${result.sum_hours}`);
  console.log(result.total_numbers);
  console.log(result.date_data);
  console.log(result.total_ivr);
  console.log(result.total_hours);
};

let = create_new_day = () => {
  makeNewRow();
  createForwardButton();
};

button.addEventListener("click", create_new_day);


let make_kk_table = () => {
  result.counter = 1;
  result.marker = true;

  let get_div_and_make_visible = doc.getElementById("main_content_div");
  get_div_and_make_visible.classList.add("visibility");

  let make_kk_div2 = doc.createElement('div');
  make_kk_div2.id = "main_content_div2";
  doc.body.append(make_kk_div2);

  let button_div = doc.createElement('div');
  button_div.classList.add("button-div");
  make_kk_div2.appendChild(button_div);

  let button = doc.createElement('button');
    button.classList.add("new_day");
    button.innerHTML = 'Добавить рабочий день';
    button.disabled = true;
    button_div.appendChild(button);

  for (let i in result.input_div_id) {
    if (i < result.input_div_id.length) {
      let input_div = doc.createElement('div');
      input_div.classList.add("form-div");
      input_div.id = 'input_div' + result.counter;
      result.kk_input_div_id.push(input_div.id);
      button_div.before(input_div);

      create_new_input({type_name:'input', class_name:"input-date", id_name:"number", placeToPushId:result.number_id, placeholder_name:result.counter, readOnlyParam:true, placeToAppend:input_div});
      create_new_input({type_name:'input', class_name:"input-date", id_name:"date", placeToPushId:result.date_id, placeholder_name:"Дата", readOnlyParam:false, placeToAppend:input_div});
      create_new_input({type_name:'input', class_name:"input-date", id_name:"kk", placeToPushId:result.kk_id, placeholder_name:"КК", readOnlyParam:false, placeToAppend:input_div});


      let remove_button = doc.createElement('button');
      remove_button.id = 'remove' + result.counter;
      result.remove_id.push(remove_button.id);
      remove_button.classList.add('icon-btn', 'add-btn');
      input_div.appendChild(remove_button);

      let remove_div = doc.createElement('div');
      remove_div.classList.add('btn-txt');
      remove_div.innerHTML = "Удалить";
      remove_button.appendChild(remove_div);

      result.counter += 1;
    }
    
    if (result.marker) {
      let last_div = doc.createElement('div');
      last_div.classList.add("last-div");
      make_kk_div2.appendChild(last_div);
  
      create_new_button({type:'button', id:"backButton", class_name:"forward", disabled:false, text:'Предыдущий показатель', placeToAppend:last_div});
      create_new_button({type:'button', id:"forwardButton", class_name:"forward", disabled:false, text:'Следующий показатель', placeToAppend:last_div});
    }
    result.marker = false;
  }
  return button_div;
};