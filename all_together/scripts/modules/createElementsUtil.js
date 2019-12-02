import { result } from './localStorage.js';

export const mainContainer = (hash) => {
  const main = document.createElement(hash.type);
  main.className = 'main-div';
  main.id = hash.id;
  document.body.appendChild(main);
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

export const createInput = (hash) => {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add(hash.col);
  hash.placeToAppendForm.appendChild(inputContainer);

  const input = document.createElement('input');
  input.classList.add('input-style');
  input.type = 'text';
  input.placeholder = hash.placeholder;
  input.classList.add(hash.optionalClass);
  input.id = hash.id + result.counter;
  hash.placeToPushId.push(input.id);
  input.addEventListener('blur', () => {
    input.placeholder = hash.placeholder;
  });
  input.readOnly = hash.readOnlyParam;
  input.setAttribute('data-rule', 'number');
  input.setAttribute('data-rule2', 'length');
  input.setAttribute('data-from', 1);
  input.setAttribute('data-to', 3);
  input.setAttribute('data-max', 100);
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

export const createRemoveButton = (placeToPushId) => {
  const removeButton = document.createElement('button');
  removeButton.id = result.counter;
  placeToPushId.push(removeButton.id);
  removeButton.classList.add('icon-btn', 'add-btn');

  let removeDiv = document.createElement('div');
  removeDiv.className = 'btn-txt';
  removeDiv.id = result.counter;
  removeDiv.innerHTML = 'Удалить';
  removeButton.appendChild(removeDiv);

  return removeButton;
};

export const createInputDiv = (hash) => {
  const input_div = document.createElement(hash.type);
  input_div.className = hash.classname;
  input_div.id = hash.id + result.counter;
  hash.placeToPushId.push(input_div.id);
  hash.placeToAppend.before(input_div);
  return input_div;
};
export const createExtraInputDiv = (hash) => {
  const input_div = document.createElement(hash.type);
  input_div.className = hash.classname;
  input_div.id = hash.id + result.counter;
  hash.placeToPushId.push(input_div.id);
  hash.placeToAppend.appendChild(input_div);
  return input_div;
};

export const createForwardButtonDiv = (hash, textOnBackward, textOnForward) => {
  if (result.marker) {
    const last_div = document.createElement(hash.type);
    last_div.className = hash.classname;
    document.getElementById(hash.idHtmlToAppend).appendChild(last_div);

    createNewButton({
      type: 'button',
      id: 'backButton',
      classname: 'forward',
      disabled: false,
      text: textOnBackward,
      placeToAppend: last_div,
    });
    createNewButton({
      type: 'button',
      id: 'forwardButton',
      classname: 'forward',
      disabled: false,
      text: textOnForward,
      placeToAppend: last_div,
    });
  }
  result.marker = false;
};

export const extraActivityNavigation = () => {
  if (result.marker) {
    createForwardButtonDiv(
      {
        type: 'div',
        classname: 'last-div-center',
        idHtmlToAppend: 'buttonDiv2',
      },
      'Вернуться к CSAT',
      'Подсчет итогов',
    );
  } else {
    document.querySelector('#buttonDiv2').removeChild(document.querySelector('.last-div-center'));
    result.marker = true;
    createForwardButtonDiv(
      {
        type: 'div',
        classname: 'last-div-center',
        idHtmlToAppend: 'buttonDiv2',
      },
      'Вернуться к CSAT',
      'Подсчет итогов',
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
