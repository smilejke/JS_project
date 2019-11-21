import { createNewButton, createForwardButtonDiv } from './createElementsUtil.js';
import { result } from './localStorage.js';
import { createExtraActivity } from './extraActivity.js';
import { makeSomeNoiseNoExtra } from './4pageCsat.js';

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
  result.marker = true;
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

  createForwardButtonDiv(
    {
      type: 'div',
      classname: 'last-div',
      idHtmlToAppend: 'modalFooter',
    },
    'НЕТ',
    'ДА',
  );
  let lastDiv = document.getElementById('modalFooter').querySelector('.last-div');
  lastDiv.style.margin = '15px';
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

export const launchModalCsat = () => {
  let modal = document.getElementById('myModal');
  let span = document.getElementsByClassName('close')[0];

  modal.style.display = 'block';

  span.onclick = () => {
    modal.style.display = 'none';
  };
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  let nope = document.getElementById('modalFooter').querySelector('#backButton');
  nope.disabled = false;
  nope.addEventListener('click', () => {
    if (document.getElementById('main-content-div3')) {
      document.body.remove(document.getElementById('main-content-div3'));
      makeSomeNoiseNoExtra();
    }
  });
  let yeah = document.getElementById('modalFooter').querySelector('#forwardButton');
  yeah.addEventListener('click', createExtraActivity);
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
