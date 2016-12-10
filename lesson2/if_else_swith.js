'use strict'

console.log('if_else_swithc');

//логические операторы || или
//						&& и
//						! не

// 0, '',NaN, null, underfined -> false

var year = 1999;

var answer = (year >= 2000 && year <= 2008) ? 'оба условия true' : 
								'хотя бы одно-false';
 console.log(answer);

 answer = (year < 2000 || year > 2008) ? 'одно true' :
 										'ни одно не true' 
								
console.log(answer);

var boo = null;
console.log(!boo); // при

//!! приодит к логическому значению


//тернарный оператор

 var date = new Date();
 var month = date.getMonth();// от 0 до 11, где явнварь- 0;

 var yearTimes = (month == 11 || month <= 1) ? 'winter' :
 				(month => 2 || month <= 4) ? 'spring':
 				(month => 5 || month <= 7) ? 'summer':


console.log(yearTimes);

// if (условие) {
// 	код, которые выполнится, если условие true
// } else if{
// код. который выполнится если словие false
// } else {
// {}
// 


if (month == 11 || month <= 1) {
	yearTimes = 'winter'
	console.log('Зимний фон');
}else if (month >= 2 ||month <= 4) {
	yearTimes = 'spring'
	console.log('Осенний фон');
} else if  (month >= 5 || month <= 7){
	yearTimes = 'summer'
	console.log('Летний фон');
} else {
	yearTimes = 'autumn'
	console.log('Осенний фон');
}

//оператор выбора switch -- в JS лучше не использовать
// swithc (переменная) {


switch(yearTimes) {
	case 'spring':
	console.log('spring');
	break;

	case 'winter':
	console.log('winter');
	break;

	case 'summer':
	console.log('summer');
	break;
}