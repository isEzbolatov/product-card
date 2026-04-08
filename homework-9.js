import { Modal } from "./Modal.js";

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

//let user;

btnRegistration.addEventListener('click', myRegWindow.open);

regForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!regForm.checkValidity()) {
    alert('Проверьте введённые данные!')
    return;
  };

  const formData = new FormData(event.target);
  let passwordValue = btoa(formData.get('password'));
  let confirmPasswordValue = btoa(formData.get('confirmPassword'));

  if (passwordValue != confirmPasswordValue) {
    alert('Пароли не совпадают!');
    return;
  };

  const user = Object.fromEntries(formData.entries());


  user = {
    ...Object.fromEntries(new FormData(event.target)),
    password: passwordValue,
    confirmPassword: confirmPasswordValue,
    createdOn: new Date().toLocaleString()
  };

  delete user.confirmPassword;

  Object.freeze(user);

  console.log(user);
  alert('Регистрация прошла успешно!');

  myRegWindow.close();
  event.target.reset();
});