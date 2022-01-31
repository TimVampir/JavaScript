/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {'единицы': 5, 'десятки': 4, 'сотни': 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */


var max = 999;
var digit = {
  число: Math.round(Math.random() * max),
  единицы: 0,
  десятки: 0,
  сотни: 0,
};
if (digit.число <= 9) {
  digit.единицы = digit.число;
} else if (digit.число <= 999) {
  digit.единицы = Math.floor(digit.число % 10);
  digit.десятки = Math.floor(digit.число / 10 % 10);
  digit.сотни = Math.floor(digit.число / 100 % 10);
} else {
  digit.число = 0;
  console.log('Вы ввели число за диапазоном 0 - 999');
}
console.log(digit);