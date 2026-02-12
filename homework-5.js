// Интерактив в браузере для ментора
while (true) {
  userChoice = prompt('Здравствуй, ментор! Это задание №5. Введи пункт задания, которое хочешь проверить(3, 4, 5):');

  if (userChoice === null) {
    break;
  }

  let = userChoice = Number(userChoice);

  if (userChoice === 3) {
    // Функция, которая принимает 2 параметра
    function cityTemp(cityName, temp) {
      cityName = prompt('Введите город:');
      temp = prompt("Введите температуру воздуха в городе:");
      console.log(`Сейчас в ${cityName} температура - ${temp} градусов по Цельсию`);
    };

    cityTemp();

    break;

  } else if (userChoice === 4) {
    // Сравнение переданной скорости с константой скорости света
    const LIGHT_SPEED = 299792458;
    inputSpeed = Number(prompt("Сравнение передаваемой скорости с константой скорости света. Введите скорость для анализа:"));
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
    milk = "Молоко";
    priceMilk = 10;
    currentBudget = Number(prompt("Молоко. Введите ваш бюджет, для приобретения товара:"));
    let result = currentBudget >= priceMilk ? console.log(`${milk} приобретён. Спасибо за покупку!`) : console.log(`Вам не хватает ${priceMilk - currentBudget}$, пополните баланс`);

    break;

  } else {
    alert("Уважаемый ментор, вы ввели неверный пункт. Пожалуйста, используйте только цифры 3, 4 или 5!");
  }
}

// Функция на своё усмотрение
function stock() {

};

//Три переменных на своё усмотрение
strawberryJam = "Клубничное варенье";
speedLimit = 90;
fullBattery = 100;
