'use strict'; 

var students ; // var- переменная, students- имя переменной
students = 15 ; // присвоение значения для переменной
console.log(students, 67) ; //в скобках пишем то, что хочим вывести в консоль 


//кот состоит из инструкций, которые заканчиваются символом ;

// в js есть 6 типов данных 

// 1 строка 

var str = 'Студенты'; //строка

var num = 9;  //числа

var boo = true ;//булевые значения true false
var booTwo = false ;

var unknownValue = null ; //значение неизвестно

var notSetVAlue ; // значение не присвоено
console.log(notSetVAlue);

var obj = {type : 'Object'};//Объект

console.log(typeof(num)); //typeof(имя переменной) поределяет тип переменной

var str = 'В JS' ;
var num = 6 ;
var Str = 'типов данных - ';


console.log(str, num, Str, boo);

//Операторы

var num = 50;
var Num = 10;
var summ = num + Num ;
var razn = num - Num ;
var umn = num * Num ;
var del = num / Num ;


var first = 13, second = 4; //задаем значения для нескольких переменных 
var result = first * second ;

console.log (summ, razn, umn, del);
console.log (result);

var str1 = 'дом ';
var str2 = 'бра';
console.log(str1 + str2); //только такой плюс сложит строку, остальные символы выведут NaN

var num = 15;
console.log(num + str1);
console.log(num - str1);

console.log('4' + '6');
console.log(+'4' + +'6');// плюс переводит строку в число 
console.log(+'4' * +'6'); //24

//присваевание = 

var n = 9; //присвоили значение 9
n += 1; // n=n + 1 , переменная теперь равна 10
n *=5 // n= n * 5 // 50 

console.log (n);


// остаток от деления %

var x = 8, y = 3;
console.log(x%y); // остаток 2

var x = '10';
var y = 3;
var z; // остаток от деления x на y 
	//z умножить на 3
	//к результату прибавить 5
z = +x % y;// 1 остаток отделения
z *= 3;    // 3 умножаем результат
z += 5;	   // 8 прибавляем 5
console.log(z);

var num = 57;
num = 'string';  //переопределение переменной
console.log(num);
console.log(typeof(num));

//++ инкремент - увеличивает число на 1
//-- декремент - уменьшает число на 1

var i = 1;
i++; //i = i + 1

var j = 6;
j--; // j = j -1


// Операторы сравнения 

//> < ==(равно)  !=(не равно) >=  <=
//=== строгое равенство

console.log( 5 > 'str'); //false
console.log( 5 > 9); // false 
console.log(0 == false); // это неверно, но выдаст true.надо использовать ===
console.log('' === false);


//тернарный оператор ?

// условие ? значение1 : значение2 

//проверяется условие
//если верно, возвращает значение1
//если неверно - значение2

console.log(5 > 7 ?  'ok' : 'not ok');

var x, y;
// если остаток от деления x на y меньше или равно 4 - > сложить x и y
// если нет - вывести остаток

x = 7;
y = 5;
console.log (x%y <= 4 ? x + y : x%y); //12

var z = 4 / 0; //infinity
console.log(z);

z= -4 / 0 //- infinity
console.log(z);


// var n = 4, m = 6;
//периметр
//если больше 14 -> найти диагональ
// если меньше -> найти площадь
//math.sqrt( ); - квадратный корень от ()
// var p = 2 * (n + m);
// 	d = Math.Sqrt( (n*n + m*m) );
// 	s = n * m;
// console.log(p > 14 ? d : s);


// 1. Задайте высоту, длину и ширину прямоугольного параллелепипеда и найдите его площадь. ++++++
// Узнайте, что больше: ширина или высота и выведите информацию об этом в консоль. ++
// 2. На садовом участке площадью 10 соток , разбили грядки 15 на 25 метров. Сколько м2 осталось незанято? ++
// 3. Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.

var n = 10;
console.log(++n);

var width = 2; //ширина
var	length = 4; //длина
var	height = 5; // высота

var result = width * length * height;
console.log('Площадь = ' + result);

console.log(width > length && width > height ? 'Ширина - бОльший показатель' : 'Ширина не является бОльшим показателем');
console.log(length > width && length > height ? 'Длина - бОльший показатель' : 'Длина не является бОльшим показателем)');
console.log(height > width && height > length ? 'Высота - бОльший показатель' : 'Высота не является бОльшим показателем');




var s = 10*100;
var x = 15;
var y = 25;
var res = s%(x*y);
var result = Math.sqrt(res);
console.log(res); //25
console.log(result); 

var sm = 15 * 100;
var sm2 = 600;
var result = sm - sm2;
console.log(result);


// var a = 1;

// console.log(a++); //постфиксная форма инкремента // 1
// console.log(a)// 2
// var b = 1;
// console.log(++b); // префиксная форма инкремента 3
// console.log(++b); // 3