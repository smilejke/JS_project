export const mainContainer = (hash) => {
  const main = document.createElement(hash.type);
  const cont = document.getElementById('container');
  main.className = 'main-div';
  main.id = hash.id;
  cont.appendChild(main);
  return main;
};
export const createButtonDiv = (hash) => {
  const buttonDiv = document.createElement('div');
  buttonDiv.className = hash.classname;
  hash.placeToAppend.appendChild(buttonDiv);
  return buttonDiv;
};

export const createWorkButton = (hash) => {
  const button = document.createElement('button');
  button.className = 'button_hola';
  const span = document.createElement('span');
  span.innerHTML = hash.text;
  button.appendChild(span);
  hash.placeToAppend.appendChild(button);
  return button;
};

export const createInput = (hash, context) => {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add(hash.col);
  hash.placeToAppendForm.appendChild(inputContainer);

  const input = document.createElement('input');
  input.classList.add('input-style');
  input.type = 'text';
  input.placeholder = hash.placeholder;
  input.classList.add(hash.optionalClass);
  input.id = hash.id + context.counter;
  hash.placeToPushId.push(input.id);
  input.addEventListener('blur', () => {
    input.placeholder = hash.placeholder;
  });
  input.addEventListener('focus', () => {
    input.placeholder = '';
  });
  input.readOnly = hash.readOnlyParam;
  input.setAttribute('data-rule', 'number');
  input.setAttribute('data-rule2', 'length');
  input.setAttribute('data-from', 1);
  input.setAttribute('data-to', 3);
  input.type = 'text';
  inputContainer.appendChild(input);

  const label = document.createElement('label');
  label.innerHTML = hash.backText;
  inputContainer.appendChild(label);

  const span = document.createElement('span');
  span.classList.add('focus-border');
  const italic = document.createElement('i');
  span.appendChild(italic);
  inputContainer.appendChild(span);
  return input;
};

export const createNewButton = (hash) => {
  const newButton = document.createElement(hash.type);
  newButton.id = hash.id;
  newButton.className = hash.classname;
  newButton.disabled = hash.disabled;
  newButton.innerHTML = hash.text;
  hash.placeToAppend.appendChild(newButton);
  return newButton;
};

export const createRemoveButton = (placeToPushId, context) => {
  const removeButton = document.createElement('button');
  removeButton.id = context.counter;
  placeToPushId.push(removeButton.id);
  removeButton.classList.add('icon-btn', 'add-btn');

  let removeDiv = document.createElement('div');
  removeDiv.className = 'btn-txt';
  removeDiv.id = context.counter;
  removeDiv.innerHTML = 'Удалить';
  removeButton.appendChild(removeDiv);
  return removeButton;
};

export const createInputDiv = (hash, context) => {
  const inputDiv = document.createElement(hash.type);
  inputDiv.className = hash.classname;
  inputDiv.id = hash.id + context.counter;
  hash.placeToPushId.push(inputDiv.id);
  hash.placeToAppend.before(inputDiv);
  return inputDiv;
};

export const createExtraInputDiv = (hash, context) => {
  const inputDiv = document.createElement(hash.type);
  inputDiv.className = hash.classname;
  inputDiv.id = hash.id + context.counter;
  hash.placeToPushId.push(inputDiv.id);
  hash.placeToAppend.appendChild(inputDiv);
  return inputDiv;
};

export const createForwardButtonDiv = (hash, textOnBackward, textOnForward, context) => {
  if (context.marker) {
    const lastDiv = document.createElement(hash.type);
    lastDiv.className = hash.classname;
    document.getElementById(hash.idHtmlToAppend).appendChild(lastDiv);

    createNewButton({
      type: 'button',
      id: 'backButton',
      classname: 'forward',
      disabled: false,
      text: textOnBackward,
      placeToAppend: lastDiv,
    });
    createNewButton({
      type: 'button',
      id: 'forwardButton',
      classname: 'forward',
      disabled: false,
      text: textOnForward,
      placeToAppend: lastDiv,
    });
  }
  context.marker = false;
};

export const extraActivityNavigation = (context) => {
  if (context.marker) {
    createForwardButtonDiv(
      {
        type: 'div',
        classname: 'last-div-center',
        idHtmlToAppend: 'buttonDiv2',
      },
      'Вернуться к CSAT',
      'Подсчет итогов',
      context,
    );
  } else {
    document.querySelector('#buttonDiv2').removeChild(document.querySelector('.last-div-center'));
    context.marker = true;
    createForwardButtonDiv(
      {
        type: 'div',
        classname: 'last-div-center',
        idHtmlToAppend: 'buttonDiv2',
      },
      'Вернуться к CSAT',
      'Подсчет итогов',
      context,
    );
  }
};

export const createOption = (hash) => {
  let option = document.createElement('option');
  option.value = hash.value;
  option.innerHTML = hash.text;
  hash.placeToAppend.appendChild(option);
};

export const fllSalaryInput = (hash) => {
  let inpt = document.getElementById(hash.id);
  inpt.value = hash.value;
  return inpt;
};

export const clearContainer = (divId) => {
  const container = document.getElementById('container');
  const main = document.getElementById(divId);
  container.removeChild(main);
};
export const styleStaticInputs = (input, startingValue) => {
  input.value = startingValue;
  if (input.value == 0) {
    input.value = '';
  } else {
    input.classList.add('valid');
  }
};

export const createInputDivStat = (hash, context) => {
  const inputDiv = document.createElement(hash.type);
  inputDiv.className = hash.classname;
  inputDiv.id = hash.id + context.counter;
  hash.placeToPushId.push(inputDiv.id);
  hash.placeToAppend.appendChild(inputDiv);
  return inputDiv;
};

export const createList = (inputDiv, hash) => {
  let ol = document.createElement('ol');
  let text = document.createElement('span');
  text.innerHTML = hash.name;
  ol.appendChild(text);
  ol.className = 'rounded';
  inputDiv.appendChild(ol);

  createListItem('ИВР: ' + hash.ivr, ol);
  createListItem('Контроль качества: ' + hash.kk, ol);
  createListItem('CSAT: ' + hash.csat, ol);
  createListItem('Итого к выплате: ' + hash.salary, ol);
};

const createListItem = (data, placeToAppend) => {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.href = '#';
  a.innerHTML = data;
  li.appendChild(a);
  placeToAppend.appendChild(li);
};

export const createHeader = (main, context) => {
  let header = document.createElement('h3');
  header.innerHTML = 'Данные о зарплате сотрудников за ' + context.month;
  main.appendChild(header);
};
