import { socialMediaComments } from "./comments.js";

// (2): Отфильтрованный массив чисел начинающийся с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArrayNumbers = numbers.filter(number => number >= 5);

// (3): Проверка наличия определённой сущности в массиве строк.
const cars = ["Kia", "Mercedes", "Land Rover", "BMW"];

const availabilityСheckingCar = cars.find(car => car === "Kia");

// (4): Функция переворачивающаяся массив
function reverseMyArray(myArray) {
  myArray.reverse();
};

reverseMyArray(numbers);
reverseMyArray(cars);

// (7): Вывод в консоль массив комментариев, почта пользователей содержащий в себе ".com".
const containEmailDotCom = socialMediaComments.filter(comment => comment.email.includes(".com"));

// (8): Переборка массива пользователей у которых id <= 5 postId: 2, а те, у кого id > 5, postId: 1.
const distributedUsers = socialMediaComments.map(comment =>
  comment.id <= 5
    ? ({ ...comment, postId: 2 })
    : ({ ...comment, postId: 1 })
);

// (9): Переборка массива состоящий только из айди и имени.
const onlyIdName = socialMediaComments.map(({ id, name }) => ({ id, name }));

// (10): Переборка массива с добавлением нового свойства.
const lengthBodyMessage = socialMediaComments.map(comment => ({
  ...comment, isInvalid: comment.body.length > 180
}));

// (11): Вывод массива из почт с помощью "reduce" и "map".
const arrayEmailReduce = socialMediaComments.reduce(function (acc, comment) {
  acc.push(comment.email);
  return acc;
}, []);

const arrayEmailMap = socialMediaComments.map(comment => ({
  [comment.id]: comment.email
}));

// (12): Приведение массива с задания №11 к строке, используя методы "toString()" и "join()".
const arrayEmailJoin = arrayEmailReduce.join(", ");
