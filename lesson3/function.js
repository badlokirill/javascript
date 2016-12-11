// 'use strict'

console.log('Функции')

//function имя_функции ([параметр1,...параметриN]){

	//тело функции, код, который выполяется при обращении к функции
	//return;
//}

//Имя функции должно быть глаголом и отображать суть

console.log('Именнованные функции FunctionDeclaration')

function printSelf () {
	'use strict'
	console.log(printSelf);
}

//имя_функции(); // вызов функции

function printName(name) {
	console.log('Привет' + name);
}
printName('Василий')

function summ (a , b){
	console.log(a + b);
}

summ(5, 10);


function printName(name) {
	for (var i=0;i < arguments.length; i++){
	console.log(arguments[i]);
}

	console.log('Привет' + name);
}
printName('Василий' ,25) //




function printName(name, surname) {
		console.log('Привет' , name , surname)

};
printName('Василий'); //underfind


function printName(name, surname) {
		name = name || 'имя не известно' // условие функции
		surname = surname || 'фамилия не известна'
		console.log('Привет' , name , surname);

};

printName('Василий');



function checkType(a, b) {
		if (typeof a == 'number' && typeof b == 'number'){
			console.log('Все ништяк!');
			return true;
		}else {
			console.log('не число');
			return false;
		}

		

};
checkType(7, 9);

function summ(a, b){
	checkType(a, b);
	console.log(a + b)
}

summ(5, 'fbfb'); //выведит 5fbfb


//с помощью ruturn прерывает функцию 



function summ(a, b){
	var checkTypeRes = checkType (a, b);
	if(checkTypeRes) {
		console.log(a+b)
	}else{
		return;
	}
	// console.log(a + b)
}

summ(5, 'df');


//return по умолч

function ret(){
	return 7
}
var x = ret;



function calc(a, b, c){
	  if(typeof a == 'number' && typeof b == 'number'){
	  	console.log(calc())
	  }else{
	  	a == +'a' && b == +'b';
	  }

	  if(c == '-'){
	  	console.log(a - b);
	  }else if(c == '+'){
	  	console.log(a + b);
	  }else if(c == '*'){
	  	console.log(a * b);
	  }	else if(c == '/'){
	  	console.log(a / b);
	  }else{
	  	return;
	  }	

}


calc(15, 10, '+')


//НЕИМЕНОВАННЫЕ ФУНКЦИИ  

console.log('Анонимные функции FunctionExpration');

var checkEvenRes = function(x){
	if (x%2 == 0){
		console.log('Четное число')
	}else{
		console.log('Нечетное число')
	}
} 

console.log(checkEvenRes(15))


//Анонимные функции можно вызывать только после их объявления
//Именованные можно объявлять где угодно

//РЕКУРСИВНАЯ ФУНКЦИЯ ВЫЗЫВАЕТ САМА СЕБЯ


function factorial (n){
	return n !=0 ? n * factorial(n-1) : 1;
}

console.log(factorial(4));



//Локальные переменные функции могут использоваться только в самой функции
//Но глобальные переменные с функции используются
//Посмотреть дома св-ва return
var name = 'name'

function printName(){
	this.name = 'new name';
	console.log(this.name);

}

printName();


//use strict пишем в некоторых функциях не прописываем

// function имя_функции1(параметр) {
// 	var переменная;
// 		function имя_функции2(параметр2){
// 			//имеет доступ и в параметру1 и к переменной
// 		}
// }






function showName (){   //замыкание
	
	function u(){
		console.log('123');
	}

}


showName();