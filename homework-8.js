import { productCards } from "./array-product-cards.js";

const productCardTemplate = document.getElementById('product-card-template');
const productCardList = document.getElementById('product-card-list');

// (5): Функция, которая отрисовывает введённое количество карточек.
function getAmount() {
  const cardsToDisplay = Number(prompt('Введите количество карточек от 1 до 5, которое хотите увидеть:'));
  if (cardsToDisplay >= 1 && cardsToDisplay <= 5) {
    return cardsToDisplay;
  } else {
    alert('Вы ввели неверное число, попробуйте ещё раз!');
  };
};

const count = getAmount();

if (count) {
  const dataToShow = productCards.slice(0, count);
  renderCards(dataToShow);
}

function renderCards(data) {
  data.forEach(card => {
    const cardClone = productCardTemplate.content.cloneNode(true);

    const img = cardClone.querySelector('.product-card__img');

    img.src = `images/${card.img}.png`;
    img.alt = card.productName;

    cardClone.querySelector('.product-card__type-skin').textContent = card.typeSkin;
    cardClone.querySelector('.product-card-name').textContent = card.productName;
    cardClone.querySelector('.product-card__description').textContent = card.description;

    const componentList = cardClone.querySelector('.product-card__compound');

    card.compound.forEach(componentText => {
      const li = document.createElement('li');
      li.classList.add('product-card__active-components');
      li.textContent = componentText;

      componentList.appendChild(li);
    });

    cardClone.querySelector('.product-card__price-value').textContent = card.price.toLocaleString('ru-RU') + ' ₽';
    productCardList.appendChild(cardClone);
  });
};

// (4): Массив объектов с помощью метода reduce. Ключ - название продукта, значение - описание.
const arrayCard = productCards.reduce((acc, product) => {
  acc[product.productName] = product.description
  return acc
}, []);
console.log(arrayCard);
