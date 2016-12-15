'use strict'



console.log('_________Задание 1.1 _______')

// 1.1 Написать программу, которая найдет все вхождения строки blaStr в строку strWithBla


var strWithBla = 'String with "bla-bla-bla"';
var blaStr = 'bla';

var pos = 0;    
while (true){
	var foundPos = strWithBla.indexOf(blaStr, pos);
	if (foundPos == -1)break;
	console.log( foundPos);
	pos = foundPos +1;
}


console.log('_________Задание 1.1 _______')
// 1.2 Написать функцию, которая на вход принимает строку и подстроку и ищет
// все вхождения подстроки в строку


function String (strWithBla, blaStr){
var pos = 0;    
while (true){
	var foundPos = strWithBla.indexOf(blaStr, pos); //Начинаем посик с нулевого индекса
	if (foundPos == -1)break; //если ничего не найдено - перваем цикл
	console.log( foundPos); // выводим найденный индекс
	pos = foundPos +1;// к найденном циклу добавляем индекс и идем дальше пока цикл не прервется
	}
}
String('String with "bla-bla-bla"', 'bla')


// Задача 2.





console.log('_________Задание 2.1_______')
// 2.1 Создать разными способами 2 объекта sity1 и sity2 со следующими свойствами:
//     1. name,  
//     2. population, 
//     3. mayor



var city1 = {
  name: 'Gondor',
  population:3059,
  mayor: 'Aragorn',

}

var city2 = {};

city2.name = 'Mordor';
city2.population = 36000;
city2.mayor = 'Sauron';

console.log(city1)
console.log(city2)

console.log('_________Задание 2.2_______')
// 2.2 В city1 добавить метод, который на вход принимает число - количество людей
//   , вычитает это количество из population city2 и прибавляет к своему. 


 city1.newpop = function(population){
  		city1.popul = (city2.population - population) + population;
 }

city1.newpop(400)
console.log(city1.popul)



console.log('_________Задание 2.3_______')
// 2.3 Написать функцию (отдельно от объектов), которая принимает на вход город 
// и выводит в консоль всю информацию о нем


function infoCity(city) {
  return console.log(city)
}

infoCity(city2);


console.log('_________Задание 2.4_______')
// 2.4 Создать объект president c методом changeMayor(), который меняет мэра города


var president = {
	changeMayor: function (newMayor) {
			 	
			city1.mayor = newMayor

			},

};

president.changeMayor(city2.mayor)
console.log(city1.mayor)




console.log('_________Задание 3_______')

// функция validateData(data, flag)
//принимает 2 аргумента data и flag
//flag может быть равен либо 'number', либо 'operator'
//если flag == 'number', значит функция должна 
//проверить аргумент data на число, 
//если это не число, функция возвращает false и прекращает работать,
//ecли это число, возвращает data


//P.s.: data - это то, что функция getDataFromUser(), получит от пользователя, а соответственно,
// в любом случае будет строкой (например, '67');
//если flag == 'operator', значит функция должна 
//проверить аргумент data на соответствие символам "+", "-", "*" либо "/",
//если соответствие установлено, возвращает data,
//если нет, возвращает false


function validateData(data, flag){
	flag == 'number' || 'operator';
	if(typeof data == 'number'){
		 data == +data;
		 console.log(data)
	}else{
		return false;
	}

	if(typeof flag == 'operator'){
		data 
	}else if(data == '+'){
		data
	}else if(data == '*'){
		data 
	}else if(data == '/'){
		data
	}else{
		return false
	}

console.log(validateData)
}


validateData('', 45)


