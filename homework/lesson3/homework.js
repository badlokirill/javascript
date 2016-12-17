// 1. Напишите функцию (), которая в зависимости от переданных в нее целочисленных аргументов "количество дней", 
// будет выводить слово "день" в нужно форме ("если передали - 1, то 1 день", "если передали - 3, то 3 дня" и т.д). ++
// 2. Дано целое число n. Вычислите сумму его цифр. Использовать только рекурсию.

//Задача №3 ко вторнику (13.12.2016).
//(на замыкание)
//Написать функцию, которая возвращает новую функцию, которая увеличивает/уменьшает 
//переданное число на указанный при карировании шаг. 

function NumberOfDays(days) {
	'use strict'
	if(days == 1){
		console.log(days + ' день')
	}else if(days >= 2 && days <= 4) {

		console.log(days + ' дня');
	}else {
		console.log(days + ' дней')
	}
};

 NumberOfDays(1);

function SumOfNumEl(n) {
	if (n<10){
		return n
	}else {
		return n%10 + Math.floor(SumOfNumEl(n / 10));
	}
};

console.log(SumOfNumEl(345));


 function fun1(){

 	return function carry(x, y){
 		var x = x++;
 		var y = y--;
 		  
 	};
 };

console.log (fun1());



var func = (function(){
	var x = 0;
	return function(){
		return ++x; 
	}
}());

console.log(func());
console.log(func());
console.log(func());