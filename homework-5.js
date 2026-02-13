// Интерактив в браузере для ментора
let userChoice;

while (true) {
  userChoice = prompt('Здравствуй, ментор! Это задание №5. Введи пункт задания, которое хочешь проверить(3, 4, 5):');

  if (userChoice === null) {
    break;
  }

  userChoice = Number(userChoice);

  if (userChoice === 3) {
    // Функция, которая принимает 2 параметра
    let cityName;
    let temp;

    function cityTemp() {
      while (true) {
        cityName = prompt('Введите город:');
        temp = prompt("Введите температуру воздуха в городе:");
        if (!cityName || !isNaN(cityName) || isNaN(Number(temp)) || temp === "") {
          alert("Уважаемый ментор, вы ввели неверно город или температуру. Пожалуйста, попробуйте ещё раз!");
        } else {
          break;
        }
      }
      console.log(`Сейчас в ${cityName} температура - ${temp} градусов по Цельсию`);
    };

    cityTemp();
    break;

  } else if (userChoice === 4) {
    // Сравнение переданной скорости с константой скорости света
    const LIGHT_SPEED = 299792458;
    let inputSpeed = Number(prompt("Сравнение передаваемой скорости с константой скорости света. Введите скорость для анализа:"));
    if (LIGHT_SPEED < inputSpeed) {
      console.log("Сверхсветовая скорость");
    } else if (LIGHT_SPEED > inputSpeed) {
      console.log("Субсветовая  скорость");
    } else if (LIGHT_SPEED === inputSpeed) {
      console.log("Скорость света");
    }

    break;

  } else if (userChoice === 5) {
    //Покупка товара
    let milk = "Молоко";
    let priceMilk = 10;
    function buyProduct() {
      let currentBudget = Number(prompt("Молоко. Введите ваш бюджет, для приобретения товара:"));
      let result = currentBudget >= priceMilk ? console.log(`${milk} приобретён. Спасибо за покупку!`) : console.log(`Вам не хватает ${priceMilk - currentBudget}$, пополните баланс`);
    }

    buyProduct();
    break;

  } else {
    alert("Уважаемый ментор, вы ввели неверный пункт. Пожалуйста, используйте только цифры 3, 4 или 5!");
  }
}

// Функция на своё усмотрение
function stock() {

};

//Три переменных на своё усмотрение
let strawberryJam = "Клубничное варенье";
let speedLimit = 90;
const fullBattery = 100;
