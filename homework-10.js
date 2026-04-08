// (3): Структура на наше усмотрение с реализованным наследованием классов.
class Car {
  constructor(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
  };

  start() {
    console.log(`${this.brand}, ${this.model}, ${this.engine} в работу принят!`);
  };
};

class BritishCar extends Car {
  constructor(brand, model, engine, transmission) {
    super(brand, model, engine);
    this.transmission = transmission;
  };

  checkTransmission() {
    console.log(`Проверка ${this.brand} ${this.model} ${this.engine} c трансмиссией ${this.transmission}, произведена! Всё в порядке.`);
  };
};

const RR = new BritishCar('Land Rover', 'Range Rover', '4.2 Supercharged', 'AT');
RR.start();
RR.checkTransmission();