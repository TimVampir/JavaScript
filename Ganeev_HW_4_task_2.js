/* 2. Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы? Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу. */


function countBasketPrice(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i].price * arr[i].pcs;
  }
  return sum;
}

var productID_0 = { productName: 'футболка', type: 1, price: 1000, brand: 'Zara', pcs: 2 };
var productID_1 = { productName: 'штаны', type: 2, price: 8000, brand: 'Polo', pcs: 2 };
var productID_2 = { productName: 'ботинки', type: 6, price: 12000, brand: 'H&M', pcs: 1 };

var basket = [];

basket.push(productID_0);
basket.push(productID_1);
basket.push(productID_2);

console.log('Сумма товаров в корзине: ' + countBasketPrice(basket));