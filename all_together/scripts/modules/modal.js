import { createForwardButtonDiv } from './createElementsUtil.js';
import { result } from './localStorage.js';
import { makeSomeNoiseNoExtra } from './4pageCsat.js';
import router from '../../router/applicationRouter.js';

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
      classname: 'last-div-modal',
      idHtmlToAppend: 'modalFooter',
    },
    'НЕТ',
    'ДА',
  );
};

export const launchModal = () => {
  let modal = document.getElementById('myModal');
  let span = document.getElementsByClassName('close')[0];

  modal.classList.add('show');

  span.onclick = () => {
    document.body.removeChild(modal);
  };
  window.onclick = (event) => {
    if (event.target == modal) {
      document.body.removeChild(modal);
    }
  };
};

export const launchModalCsat = () => {
  let modal = document.getElementById('myModal');
  let span = document.getElementsByClassName('close')[0];
  let removePage = document.getElementById('main-content-div3');

  modal.style.display = 'block';

  span.onclick = () => {
    modal.classList.add('visibility');
  };
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.classList.add('visibility');
    }
  };

  let nope = document.getElementById('modalFooter').querySelector('#backButton');
  nope.disabled = false;
  nope.addEventListener('click', () => {
    if (removePage) {
      router.navigate('/salary');
      document.body.removeChild(modal);
      document.body.removeChild(removePage);
      makeSomeNoiseNoExtra();
    }
  });
  let yeah = document.getElementById('modalFooter').querySelector('#forwardButton');
  yeah.addEventListener('click', () => {
    router.navigate('/extra');
    document.body.removeChild(removePage);
  });
};

export const failed = () => {
  let modalHeader = document.querySelector('.modal-header');
  let modalBody = document.querySelector('.modal-body');
  let modalFooter = document.querySelector('.modal-footer');
  let mainModalBox = document.querySelector('.modal-content');
  modalHeader.classList.remove('modal-header');
  modalBody.classList.remove('modal-body');
  modalFooter.classList.remove('modal-footer');
  mainModalBox.classList.remove('modal-content');

  modalHeader.classList.add('modal-header-fail');
  modalBody.classList.add('modal-body-fail');
  modalFooter.classList.add('modal-footer-fail');
  mainModalBox.classList.add('modal-content-fail');
};

// $on(window, 'load', setView)
// $on(window,'hashchange', setView)
