import Modal from './Modal.js';
import Form from './Form.js';

const myRegForm = new Form('reg-form');

// (4): Валидация кнопки подписаться и вывод в консоль.
myRegForm.subscribeForm();

// (5, 6): Модальной окно регистрации.
const btnRegistration = document.getElementById('registration-button');
const regForm = document.getElementById('reg-form');

const myRegWindow = new Modal('modal-registration-id');

btnRegistration.addEventListener('click', () => myRegWindow.open());

regForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = myRegForm.formValidity();
  console.log('Валидность формы:', isValid);

  const values = myRegForm.getValues();

  if (values.password !== values.confirmPassword) {
    alert('Пароли не совпадают!');
    return;
  };

  const encrypted = myRegForm.encryptionPassword(values.password);
  values.password = encrypted;
  delete values.confirmPassword;

  Object.freeze(values);

  console.log('Зарегистрирован пользователь:', values);
  alert('Регистрация прошла успешно!');

  myRegWindow.close();
  myRegForm.formReset();
});