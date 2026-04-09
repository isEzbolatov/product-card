import Modal from './Modal.js';
import Form from './Form.js';

// (4): Валидация кнопки подписаться и вывод в консоль.
const subscribeForm = document.getElementById('email-form');

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  subscribeForm.reset();
})

// (5, 6): Модальной окно регистрации.
const btnRegistration = document.getElementById('registration-button');
const regForm = document.getElementById('reg-form');

const myRegWindow = new Modal('modal-registration-id');
const myRegForm = new Form('reg-form');

btnRegistration.addEventListener('click', () => myRegWindow.open());

regForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = myRegForm.formValidity();
  console.log('Валидность формы:', isValid);

  const formData = new FormData(event.target);
  let passwordValue = btoa(formData.get('password'));
  let confirmPasswordValue = btoa(formData.get('confirmPassword'));

  if (passwordValue != confirmPasswordValue) {
    alert('Пароли не совпадают!');
    return;
  };

  delete myRegForm.confirmPassword;

  Object.freeze(myRegForm);

  console.log('Зарегистрирован пользователь:', myRegForm.getValues());
  alert('Регистрация прошла успешно!');

  myRegWindow.close();
  myRegForm.formReset();
});