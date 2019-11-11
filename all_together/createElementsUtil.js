export const createNewInput = (hash, result) => {
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

export const createNewButton = (hash) => {
  let newButton = document.createElement(hash.type);
  newButton.id = hash.id;
  newButton.className = hash.classname;
  newButton.disabled = hash.disabled;
  newButton.innerHTML = hash.text;
  hash.placeToAppend.appendChild(newButton);
  return newButton;
};

export const createRemoveButton = (result, callback) => {
  let removeButton = document.createElement('button');
  removeButton.id = result.counter;
  result.removeIds.push(removeButton.id);
  removeButton.classList.add('icon-btn', 'add-btn');
  removeButton.addEventListener('click', callback);
  // removeButton.addEventListener('click', () => {
  //   let getAllNumberInputs = document.querySelectorAll('.input-number');
  //   for (let i in getAllNumberInputs) {
  //     getAllNumberInputs[i].value = Number([i]) + 1;
  //     result.counter = getAllNumberInputs.length;
  //   }
  // });

  let removeDiv = document.createElement('div');
  removeDiv.className = 'btn-txt';
  removeDiv.id = result.counter;
  removeDiv.innerHTML = 'Удалить';
  removeButton.appendChild(removeDiv);

  return removeButton;
};

export const createInputDiv = (hash, result) => {
  let input_div = document.createElement(hash.type);
  input_div.className = hash.classname;
  input_div.id = hash.id + result.counter;
  hash.placeToPushId.push(input_div.id);
  hash.placeToAppend.before(input_div);
  return input_div;
};
