const employeeData = [];

localStorage.setItem('person', JSON.stringify(employeeData));

export const storage = localStorage;

export let person = JSON.parse(storage.getItem('person'));

export const updateStorageFinal = () => {
  storage.setItem('person', JSON.stringify(person));
};

export const getDataFromLS = (field) => JSON.parse(storage.getItem(field));

export const clearStorage = () => {
  storage.clear();
};
