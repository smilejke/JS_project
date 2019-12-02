let attempt = 3;
import { modalWindow, launchModal, failed } from './modal.js';
import { informationPage } from './information.js';

export const createForm = () => {
  let loginContainer = document.createElement('div');
  loginContainer.id = 'dissap';
  document.body.appendChild(loginContainer);

  let mainLoginDiv = document.createElement('div');
  mainLoginDiv.classList.add('main');
  loginContainer.appendChild(mainLoginDiv);

  let loginHeader = document.createElement('h2');
  loginHeader.innerHTML = 'The system of calculating earnings of an employee';
  mainLoginDiv.appendChild(loginHeader);

  let loginForm = document.createElement('form');
  loginForm.id = 'form_id';
  loginForm.method = 'post';
  loginForm.name = 'myform';
  mainLoginDiv.appendChild(loginForm);

  let label_userName = document.createElement('span');
  label_userName.innerHTML = 'User Name :';
  loginForm.appendChild(label_userName);

  let input_text = document.createElement('input');
  input_text.type = 'text';
  input_text.name = 'username';
  input_text.id = 'username';
  input_text.className = 'input_text';
  loginForm.appendChild(input_text);

  let spanUserName2 = document.createElement('span');
  spanUserName2.innerHTML = 'Password :';
  loginForm.appendChild(spanUserName2);

  let input_password = document.createElement('input');
  input_password.type = 'password';
  input_password.name = 'password';
  input_password.id = 'password';
  input_password.className = 'input_text';
  loginForm.appendChild(input_password);

  let login_button = document.createElement('input');
  login_button.type = 'button';
  login_button.value = 'Login';
  login_button.id = 'submit';
  login_button.className = 'admin_button';
  login_button.addEventListener('click', isCredValid);
  loginForm.appendChild(login_button);

  let span_text = document.createElement('span');
  mainLoginDiv.appendChild(span_text);

  let bold_text1 = document.createElement('strong');
  bold_text1.className = 'note';
  bold_text1.innerHTML = 'Note:';
  span_text.appendChild(bold_text1);

  let text_node = document.createTextNode(' For this demo use following username and password.');
  span_text.appendChild(text_node);

  let br1 = document.createElement('br');
  span_text.appendChild(br1);

  let bold_text2 = document.createElement('strong');
  bold_text2.className = 'valid';
  span_text.appendChild(bold_text2);

  let text_user = document.createTextNode('User Name: Smilejke');
  bold_text2.appendChild(text_user);

  let br2 = document.createElement('br');
  bold_text2.appendChild(br2);

  let text_password = document.createTextNode('Password : Admin');
  bold_text2.appendChild(text_password);

  return loginContainer;
};

const isCredValid = () => {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (username == 'Smilejke' && password == 'Admin') {
    let get_div_and_make_invisible = document.getElementById('dissap');
    document.body.removeChild(get_div_and_make_invisible);

    modalWindow({
      loginStatus: 'Login successfuly.',
      loginText: 'Congratulations!',
      loginText2: 'Your next step is to enter main indicators.',
      loginFooterText: 'Have a nice day!',
    }),
      launchModal();

    informationPage();

    return false;
  } else {
    attempt--;
    if (attempt == 0) {
      failed();
    } else {
      modalWindow({
        loginStatus: 'Login failed.',
        loginText: 'You have left ' + attempt + ' attempt.',
        loginText2: 'Be careful, if you fail validation, form will be blocked.',
        loginFooterText: 'Have a nice day!',
      });
    }

    if (attempt === 0) {
      document.getElementById('username').disabled = true;
      document.getElementById('password').disabled = true;
      document.getElementById('submit').disabled = true;

      return false;
    }
  }
};
