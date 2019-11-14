import { controlData, resultArr, result, updateStorage } from './localStorage.js';

export const createNewInput = (hash) => {
  let newInput = document.createElement(hash.type);
  newInput.className = hash.classname;
  newInput.id = hash.id + result.counter;
  hash.placeToPushId.push(newInput.id);
  newInput.placeholder = hash.placeholder;
  newInput.readOnly = hash.readOnlyParam;
  newInput.setAttribute('data-rule', 'number');
  hash.placeToAppend.appendChild(newInput);
  return newInput;
};

// const numberValue = createNewInput({
//   classname: 'newinput',
//   optionalClass: 'input-number',
//   id: 'number',
//   placeToPushId: result.numberIvrIds,
//   placeholder: result.counter + 1,
//   readOnlyParam: true,
//   placeToAppend: newInputDiv,
// });

// numberValue.value = result.counter + 1;

//   createNewInput({
//     classname: 'newinput',
//     optionalClass: 'input-date',
//     id: 'date',
//     placeToPushId: result.dateIvrIds,
//     placeholder: 'Дата',
//     readOnlyParam: false,
//     placeToAppend: newInputDiv,
//   });
//   createNewInput({
//     classname: 'input-date',
//     optionalClass: 'input-date',
//     id: 'ivr',
//     placeToPushId: result.ivrIds,
//     placeholder: 'ИВР',
//     readOnlyParam: false,
//     placeToAppend: newInputDiv,
//   });
//   createNewInput({

//     classname: 'input-date',
//     optionalClass: 'input-date',
//     id: 'hours',
//     placeToPushId: result.hoursIvrIds,
//     placeholder: 'Часы',
//     readOnlyParam: false,
//     placeToAppend: newInputDiv,
//   });

export const createInput = (hash) => {
  let divGroup = document.createElement('div');
  divGroup.className = 'group';
  hash.placeToAppendForm.appendChild(divGroup);

  let input = document.createElement('input');
  input.className = hash.classname; //newinput
  input.classList.add(hash.optionalClass); //for operation old class
  input.id = hash.id + result.counter;
  hash.placeToPushId.push(input.id);
  input.readOnly = hash.readOnlyParam;
  input.setAttribute('data-rule', 'number');

  input.type = 'text';
  input.required = true;
  divGroup.appendChild(input);

  let span1 = document.createElement('span');
  span1.className = 'highlight';
  divGroup.appendChild(span1);

  let span2 = document.createElement('span');
  span2.className = 'bar';
  divGroup.appendChild(span2);

  let label = document.createElement('label');
  label.innerHTML = hash.placeholder;
  divGroup.appendChild(label);

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
