// (3): Объект на основе моих данных.
const userProfile = {
  firstName: "Ismail",
  surName: "Ezbolatov",
  mail: "mr.yfam@mail.ru",
  job: "Corrugator",
  age: 23,
  country: "Russia",
  city: "Beloozersky",
  marital: "Single",
  languages: [
    { language: "Russian", level: "Native" },
    { language: "Kumyk", level: "Native" },
    { language: "English", level: "A2" }
  ]
};
// (4): Данные об автомобиле + доп. свойство: владелец авто.
const autoInfo = {
  make: "Mercedes-Benz",
  model: "W211",
  year: 2004,
  color: "Metallic Blue",
  transmission: "AT"
};

let owner = userProfile;
autoInfo.owner = userProfile;

// (5): Функция проверки максимальной скорости авто.
function setMaxSpeed(maxSpeedKmh) {
  if (maxSpeedKmh in autoInfo) {
    return;
  } else {
    let maxSpeedKmh = autoInfo.maxSpeedKmh = 245;
  };
};

setMaxSpeed();

// (6): Функция, котороя выводит свойство и его значение.
const movies = {
  drama: "The Green Mile",
  comedy: "1+1",
  fantasy: "Interstellar",
  cartoon: "Soul"
};

const searchKeyMovie = "cartoon";

function getPropertyMovie(obj, key) {
  const value = obj[key];

  console.log(`${key}: ${value}`);
};

getPropertyMovie(movies, searchKeyMovie);

// (7): Массив, который содержит названия продуктов (строки).

const productList = {
  fruit: "Apple",
  vegetable: "Cucumber",
  berry: "Raspberry",
  bakery: "Bread",
  dairyProducts: "Milk"
};

// (8): Создали массив состоящий из объектов и добавили в его конец ещё один объект.
const premiumCollectionBooks = [
  {
    bookName: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    yearPublication: 1997,
    coverСolor: "Purple",
    genre: "Self-development"
  },

  {
    bookName: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    yearPublication: 1997,
    coverСolor: "Red",
    genre: "Fantasy"
  },

  {
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublication: 1925,
    coverСolor: "Blue",
    genre: "Classic literature"
  },

  {
    bookName: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    yearPublication: 1979,
    coverСolor: "Black / Bright yellow",
    genre: "Science Fiction"
  }
];

premiumCollectionBooks.push = {
  bookName: "The Hobbit",
  author: "J.R.R. Tolkien",
  yearPublication: 1937,
  coverСolor: "Green/White",
  genre: "Fantas / Adventure"
};

/* 
(9): Массивы внутри одной вселенной и их объединение в общую структуру.
(Первый массив скопировал по индексу из предыдущего задания)
*/

const firstBook = [premiumCollectionBooks[1]];
const secondBook = [{
  bookName: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
  yearPublication: 1998,
  coverСolor: "Blue",
  genre: "Fantasy / Young Adult Fiction"
}];

const harryPotterCollection = [...firstBook, ...secondBook];

// (10): Работа с методом "Map"
function getOldBooksStatus(harryPotterCollection) {
  const updateCollection = harryPotterCollection.map((book) => {
    return {
      ...book,
      isOldBook: book.yearPublication < 1998
    };
  });
  return updateCollection;
}

const booksWithOldStatus = getOldBooksStatus(harryPotterCollection);
console.log(booksWithOldStatus);