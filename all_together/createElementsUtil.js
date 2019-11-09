export const create_new_input = (hash, result) => {
  let new_input = document.createElement(hash.type_name);
  new_input.classList.add(hash.class_name);
  new_input.id = hash.id_name + result.counter;
  hash.placeToPushId.push(new_input.id);
  new_input.placeholder = hash.placeholder_name;
  new_input.readOnly = hash.readOnlyParam;
  new_input.setAttribute('data-rule', 'number');
  hash.placeToAppend.appendChild(new_input);
  return new_input;
};

export const create_new_button = (hash) => {
  let newButton = document.createElement(hash.type);
  newButton.id = hash.id;
  newButton.classList.add(hash.class_name);
  newButton.disabled = hash.disabled;
  newButton.innerHTML = hash.text;
  hash.placeToAppend.appendChild(newButton);
  return newButton;
};

export const createRemoveButton = (result, callback) => {
  let remove_button = document.createElement('button');
  remove_button.id = result.counter;
  result.remove_id.push(remove_button.id);
  remove_button.classList.add('icon-btn', 'add-btn');
  remove_button.addEventListener('click', callback);

  let remove_div = document.createElement('div');
  remove_div.classList.add('btn-txt');
  remove_div.id = result.counter;
  remove_div.innerHTML = 'Удалить';
  remove_button.appendChild(remove_div);

  return remove_button;
};

export const createInputDiv = (hash, result) => {
  let input_div = document.createElement(hash.type);
  input_div.classList.add(hash.classname);
  input_div.id = hash.id + result.counter;
  hash.placeToPushId.push(input_div.id);
  hash.placeToAppend.before(input_div);
  return input_div;
};
