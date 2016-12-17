'use strict'

console.log ('циклы')

//цикл с предусловие while

//    while (условие) {
// 	    тело цикла, код, который выполняется пока условие true
// 		}

var pictures = 5 
while(pictures) {
	console.log(pictures);
	pictures--;
	if (pictures == 3 ) break;
}

//итерация - повторение цикла

// цикл с постусловием doo..while 

// do {
	//  тело цикла, код, который выполняется пока условие true
	// } while (условие)
var pictures = 5;

do {
	console.log(pictures);
	pictures--;
	}while (pictures);

//

var tarelki = 70;
var fairy = 40;

//средство расходуетс из расчета 0.5 на 1 тарелку
// в цискле выводить сколько средства расходуется

while (tarelki > 0 && fairy > 0) {
	tarelki--;
	fairy -= 0.5;
	console.log('осталось fairy =' , fairy)

} 
console.log('осталось fairy = ' , fairy,
	'осталось тарелок =' , tarelki);


// for (начало; условие; шаг){
//	 тело цикла
//}

for (var i = 0; i < 7; i++){
	console.log(i);
}
