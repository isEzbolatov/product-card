class Drink {
  #temp;

  constructor(name, size, price, temp) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temp = temp;
  }

  getInfoDrink() {
    return `${this.name} - (${this.size} мл) ${this.price} руб`;
  }

  getTemp() {
    return `${this.#temp} °C`;
  }

  setTemp(value) {
    if (value < 0 || value > 100) {
      console.error("Некорректная температура!")
      return;
    }
    console.log(`${this.#temp = value} °C`);
  }

  #makeDrink() {
    console.log('Заказ принят!');
    console.log('Готовится...');
    console.log('Заказ готов.');
  }

  serveDrink() {
    this.#makeDrink();
    console.log(this.getInfoDrink(), ' подан клиенту.');
  }
};

class Tea extends Drink {
  constructor(name, size, price, temp, greenTea) {
    super(name, size, price, temp);
    this.greenTea = greenTea
  }
};

class Coffee extends Drink {
  constructor(name, size, price, temp, typeBeanArabica) {
    super(name, size, price, temp);
    this.typeBeanArabica = typeBeanArabica;
  }
};

class Milk extends Drink {
  constructor(name, size, price, temp, goatMilk) {
    super(name, size, price, temp);
    this.goatMilk = goatMilk;
  }
};

class Сompote extends Drink {
  constructor(name, size, price, temp, fruitCompote) {
    super(name, size, price, temp);
    this.fruitCompote = fruitCompote;
  }
};

class Cafe {
  constructor(nameCafe, location) {
    this.nameCafe = nameCafe;
    this.location = location;
  }

  getInfoCafe() {
    return `Кафе "${this.nameCafe}" Адрес: ${this.location}`;
  }

  orderDrink(drink) {
    drink.serveDrink();
  }
}

const myCafe = new Cafe('ЧитаЕшь', 'г.Махачкала, улица Пушкина, 1');
const greenTea = new Tea('Жасминовый чай', 0.5, 150, 85, 'Зелёный');
const fruitCompote = new Сompote('Компот', 0.5, 90, 10, 'Фруктовый')

myCafe.orderDrink(fruitCompote);
