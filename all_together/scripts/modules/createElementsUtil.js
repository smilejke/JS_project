import { controlData, resultArr, result, updateStorage } from './localStorage.js';

export const mainContainer = (hash) => {
  let main = document.createElement(hash.type);
  main.className = 'main-div';
  main.id = hash.id;
  document.body.append(main);
  return main;
};
export const createButtonDiv = (placeToAppend) => {
  let buttonDiv = document.createElement('div');
  buttonDiv.className = 'button-div';
  placeToAppend.appendChild(buttonDiv);
  return buttonDiv;
};

export const createWorkButton = (hash) => {
  let button = document.createElement('button');
  button.className = 'button_hola';
  let span = document.createElement('span');
  span.innerHTML = hash.text;
  button.appendChild(span);
  hash.placeToAppend.appendChild(button);
  return button;
};

export const createInput = (hash) => {
  let inputContainer = document.createElement('div');
  inputContainer.classList.add('col-3');
  hash.placeToAppendForm.appendChild(inputContainer);

  let input = document.createElement('input');
  input.classList.add('effect');
  input.type = 'text';
  input.className = hash.classname;
  input.placeholder = hash.placeholder;
  input.classList.add(hash.optionalClass);
  input.id = hash.id + result.counter;
  hash.placeToPushId.push(input.id);
  input.addEventListener('click', () => {
    input.placeholder = '';
  });
  input.addEventListener('blur', () => {
    input.placeholder = hash.placeholder;
  });
  input.readOnly = hash.readOnlyParam;
  input.setAttribute('data-rule', 'number');
  input.type = 'text';
  inputContainer.appendChild(input);

  let label = document.createElement('label');
  label.innerHTML = hash.backText;
  inputContainer.appendChild(label);

  let span = document.createElement('span');
  span.classList.add('focus-border');
  let italic = document.createElement('i');
  span.appendChild(italic);
  inputContainer.appendChild(span);

  return input;
};

export const createNewButton = (hash) => {
  let newButton = document.createElement(hash.type);
  newButton.id = hash.id;
  newButton.className = hash.classname;
  newButton.disabled = hash.disabled;
  newButton.innerHTML = hash.text;
  hash.placeToAppend.appendChild(newButton);
  return newButton;
};

export const createRemoveButton = (callback) => {
  let removeButton = document.createElement('button');
  removeButton.id = result.counter;
  result.removeIds.push(removeButton.id);
  removeButton.classList.add('icon-btn', 'add-btn');
  removeButton.addEventListener('click', callback);

  removeButton.addEventListener('click', () => {
    let getAllNumberInputs = document.querySelectorAll('.input-number');
    for (let i = 0; i < getAllNumberInputs.length; i += 1) {
      getAllNumberInputs[i].value = Number([i]) + 1;
      result.counter = getAllNumberInputs.length;
    }
  });

  let removeDiv = document.createElement('div');
  removeDiv.className = 'btn-txt';
  removeDiv.id = result.counter;
  removeDiv.innerHTML = 'Удалить';
  removeButton.appendChild(removeDiv);

  return removeButton;
};

export const createInputDiv = (hash) => {
  let input_div = document.createElement(hash.type);
  input_div.className = hash.classname;
  input_div.id = hash.id + result.counter;
  hash.placeToPushId.push(input_div.id);
  hash.placeToAppend.before(input_div);
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
      disabled: true,
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
