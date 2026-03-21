import { productCards } from "./array-product-cards.js";



const productCardTemplate = document.getElementById('product-card-template');
const productCardList = document.getElementById('product-card-list');

productCards.forEach(card => {
  const cardClone = productCardTemplate.content.cloneNode(true);

  const img = cardClone.querySelector('.product-card__img');

  img.src = `images/${card.img}.png`;
  img.alt = card.productName;

  cardClone.querySelector('.product-card__type-skin').textContent = card.typeSkin;
  cardClone.querySelector('.product-card-name').textContent = card.productName;
  cardClone.querySelector('.product-card__description').textContent = card.description;
  cardClone.querySelector('.product-card__compound').textContent = card.compound.name;

  const componentList = cardClone.querySelector('.product-card__active-components-list');

  card.compound.activeComponents.forEach(componentText => {
    const li = document.createElement('li');
    li.classList.add('product-card__active-components');
    li.textContent = componentText;

    componentList.appendChild(li);
  });

  cardClone.querySelector('.product-card__price-name').textContent = card.price.name;
  cardClone.querySelector('.product-card__price-value').textContent = card.price.value.toLocaleString('ru-RU') + ' ₽';
  productCardList.appendChild(cardClone);
});

