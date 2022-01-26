/* 2, 3. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. */


const basket = [
  ['Футболка', 1000],
  ['Штаны', 8000],
  ['Ботинки', 12000],
];

const total = getTotalPrice(basket);

console.log(total);

function getTotalPrice(basket) {
  let result = 0;
  for (let i of basket) {
    result += i[1];
  }
  return result;
}