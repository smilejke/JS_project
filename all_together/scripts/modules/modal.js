import { createNewButton } from './createElementsUtil.js';

export const modalWindow = (hash) => {
  let modalContainer = document.createElement('div');
  modalContainer.id = 'myModal';
  modalContainer.className = 'modal';
  document.body.appendChild(modalContainer);

  let modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContainer.appendChild(modalContent);

  let modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  modalContent.appendChild(modalHeader);

  let modalHeaderSpan = document.createElement('span');
  modalHeaderSpan.className = 'close';
  modalHeaderSpan.innerHTML = '&times';
  modalHeader.appendChild(modalHeaderSpan);

  let modalHeaderH2 = document.createElement('h2');
  modalHeaderH2.innerHTML = hash.loginStatus;
  modalHeader.appendChild(modalHeaderH2);

  let modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  modalContent.appendChild(modalBody);

  let modalBodyText = document.createElement('p');
  modalBodyText.innerHTML = hash.loginText;
  modalBody.appendChild(modalBodyText);

  let modalBodyText2 = document.createElement('p');
  modalBodyText2.innerHTML = hash.loginText2;
  modalBody.appendChild(modalBodyText2);

  let modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';
  modalFooter.id = 'modalFooter';
  modalContent.appendChild(modalFooter);

  let modalFooterH3 = document.createElement('h3');
  modalFooterH3.innerHTML = hash.loginFooterText;
  modalFooter.appendChild(modalFooterH3);
  launchModal();
  return modalContainer;
};

export const modalWindowCsat = (hash) => {
  let modalContainer = document.createElement('div');
  modalContainer.id = 'myModal';
  modalContainer.className = 'modal';
  document.body.appendChild(modalContainer);

  let modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContainer.appendChild(modalContent);

  let modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  modalContent.appendChild(modalHeader);

  let modalHeaderSpan = document.createElement('span');
  modalHeaderSpan.className = 'close';
  modalHeaderSpan.innerHTML = '&times';
  modalHeader.appendChild(modalHeaderSpan);

  let modalHeaderH2 = document.createElement('h2');
  modalHeaderH2.innerHTML = hash.loginStatus;
  modalHeader.appendChild(modalHeaderH2);

  let modalBody = document.createElement('div');
  modalBody.className = 'modal-body';
  modalContent.appendChild(modalBody);

  let modalBodyText = document.createElement('p');
  modalBodyText.innerHTML = hash.loginText;
  modalBody.appendChild(modalBodyText);

  let modalBodyText2 = document.createElement('p');
  modalBodyText2.innerHTML = hash.loginText2;
  modalBody.appendChild(modalBodyText2);

  let modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';
  modalFooter.id = 'modalFooter';
  modalContent.appendChild(modalFooter);

  const last_div = document.createElement('div');
  last_div.className = 'last-div';
  last_div.style.margin = '15px';
  document.getElementById('modalFooter').appendChild(last_div);

  createNewButton({
    type: 'button',
    id: 'backButtonModal',
    classname: 'forward',
    disabled: false,
    text: 'НЕТ',
    placeToAppend: last_div,
  });
  createNewButton({
    type: 'button',
    id: 'forwardButtonModal',
    classname: 'forward',
    disabled: false,
    text: 'ДА',
    placeToAppend: last_div,
  });
};

export const launchModal = () => {
  let modal = document.getElementById('myModal');
  let span = document.getElementsByClassName('close')[0];

  modal.style.display = 'block';

  span.onclick = () => {
    let modalContainer = document.getElementById('myModal');
    document.body.removeChild(modalContainer);
  };
  window.onclick = (event) => {
    if (event.target == modal) {
      let modalContainer = document.getElementById('myModal');
      document.body.removeChild(modalContainer);
    }
  };
};

export const failed = () => {
  let modalHeader = document.querySelector('.modal-header');
  let modalBody = document.querySelector('.modal-body');
  let modalFooter = document.querySelector('.modal-footer');
  let mainModalBox = document.querySelector('.modal-content');
  modalHeader.style.color = '#ff4757';
  modalBody.style.color = '#ff4757';
  modalFooter.style.color = '#ff4757';
  mainModalBox.style.borderColor = '#ff4757';
};
