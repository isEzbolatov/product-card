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
const modalRegistration = document.querySelector('.modal');
const regForm = document.getElementById('reg-form');

const hideModal = () => {
  modalRegistration.style.visibility = 'hidden';
  modalRegistration.style.opacity = 0;
};

const closeModal = (event) => {
  if (event.target.closest('.modal__close')) {
    hideModal();
  }
}

const openModal = () => {
  modalRegistration.style.visibility = 'visible';
  modalRegistration.style.opacity = 1;
};

btnRegistration.addEventListener('click', openModal)
modalRegistration.addEventListener('click', closeModal)

regForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  let passwordValue = btoa(formData.get('password'));
  let confirmPasswordValue = btoa(formData.get('confirmPassword'));

  if (passwordValue != confirmPasswordValue) {
    alert('Пароли не совпадают!');
    return;
  };

  const userData = Object.fromEntries(formData.entries());

  delete userData.confirmPassword;

  const user = {
    ...Object.fromEntries(new FormData(event.target)),
    password: passwordValue,
    confirmPassword: confirmPasswordValue,
    createdOn: new Date().toLocaleString()
  };

  console.log(user);
  alert('Регистрация прошла успешно!');

  hideModal();
  event.target.reset();
});