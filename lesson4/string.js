'use strict'

console.log('strings');


var str = 'String';

str = 'very\nlong\nString';

console.log(str);

// \n перенос строки
// \ экранирование
str = 'use \\n'
console.log(str);

str = 'String \'STRING\'';
console.log(str);

str = 'string "string"';
console.log(str);


console.log('методы и свойства строк');

str = 'string'
console.log(str.length) //длина строки

console.log(str.charAt(2));// доступ к символу по позиции, начало с 0

console.log(str[2]);//также доступ к символу

console.log(str.indexOf('n')); // номер индекса символа возвращает -1 если ничего не нашел

console.log(str.indexOf('n', 2)); //позиция с которой начинается поиск

//с помощью цикла дз решить необходимо

str = 'String'
console.log(str.toUpperCase());
console.log(str.toLowerCase());


console.log(str[2].toLowerCase()); //вернет букву и нужном регистре

console.log(str.substr(1, 2)); //вернет строку начинаяя с индекса на кол-во символов

console.log(str.slice(1, 4));// вернет строку начиная с первого индекса заканчивая последним не включительно




str = 'String';

console.log(str.localeCompare('Stringfff'));

//0 строки равны
// -1 tckb строка2 > стр1
// 1 если стр1 > стр2 

var height = '12.6 sm';
var weight = '35 sm';

console.log(parseInt(height));
console.log(parseInt(weight)); //округляет и приводит к числу

console.log(parseFloat(height));//возвращает все число и приводит к числу









// 1.1 Написать программу, которая найдет все вхождения строки blaStr в строку strWithBla
// 1.2 Написать функцию, которая на вход принимает строку и подстроку и ищет
// все вхождения подстроки в строку

var strWithBla = 'String with "bla-bla-bla"';
var blaStr = 'bla';

//if (strWithBla.indexOf(blaStr) != -1 ){
  //console.log(strWithBla.indexOf(blaStr));
//};
    
while (strWithBla.indexOf(blaStr) != -1 ){
  var newBlaStr = (strWithBla.indexOf(blaStr));
  console.log(strWithBla.indexOf(blaStr, newBlaStr)); 
   














































