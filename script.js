// Покраска первой карточки

const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');

const blueHashColor = '#0000ff';

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueHashColor
});

// Покраска всех карточек

const greenHashColor = '#d25d04';

const productCards = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');

recolorAllCardButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = greenHashColor
  )
});

// Переход на страницу Google

const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на страницу Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
};

// Наведение мышки на заголовок

const contentTitle = document.querySelector('.product-selection__title');

contentTitle.addEventListener('mouseover', function () {
  console.log('Выбери свой продукт');
});

// Кнопка перекрашивающая сама себя

const recolorButton = document.querySelector('#recolor-button');

recolorButton.addEventListener('click', event => {
  recolorButton.classList.toggle("bg--cyan");
});
