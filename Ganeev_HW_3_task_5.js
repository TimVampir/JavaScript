/* 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */


let result = '';

for (let i = 0; i < 20; i++) {
  result += '*';
  console.log(result);
}