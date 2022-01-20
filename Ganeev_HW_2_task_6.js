/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций, используя функции из пункта 5, и вернуть полученное значение, используя switch. */


function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function mult(a, b) {
  return a * b;
}

function mathOperation(arg1, arg2, operation){
    			switch(operation){
       				 case plus:
           				 result = plus(arg1, arg2);
           				 break;
       				 case minus:
           				 result = minus(arg1, arg2);
            			 break;
        			 case div:
                   result = div(arg1, arg2);
            			 break;
       				 case mult:
           				 result = mult(arg1, arg2);
            			 break;
   				}
          return result;
		}

alert(mathOperation(2, 3, plus));
alert(mathOperation(2, 3, minus));
alert(mathOperation(2, 3, div));
alert(mathOperation(2, 3, mult));