'use strict'

console.log('МАССИВЫ')

var arr = []; // объявление массива
console.log(arr)


// arr = new Array(1); //	такой способ используют редко


// console.log(arr);

var pictures = ['forest', 'rain', 'sky', 'ocean'];
var userId = [3, 6, 8, 10];
var diArr = ['str', 56, null, false, false]

console.log(pictures);
console.log(userId);
console.log(diArr);

// элементы массива нумеруются, начиная с 0

console.log(userId[3]); // 10
console.log(pictures[2]); //sky

pictures[2] = 47; // меняет элемент в массиве
console.log(pictures);

console.log(pictures.length); //длина массива

//свойства массивов

console.log(pictures.length = 3); // сократим кол-во э-ов до 3
console.log(pictures);

// pop удаляет последний жлемент массива и возвращает его

console.log(pictures.pop());
console.log(pictures);

//метод push() добавляет элемент в конец массива

console.log(pictures.push('new el'));
console.log(pictures);

//метод shift () удаляет элт с начала массива и возвращает его

console.log(pictures.shift());
console.log(pictures);

//unshift добалявет в начало массива
console.log(pictures.unshift('blabla'));
console.log(pictures);


//методы pop и push работают быстрее шифтов

//метод splice(ind [delCount, element1,element1... elementN ])

//ind-номер элемента,[ кол элементов]

diArr = ['str', 56, null, false, false];
diArr.splice(3); // удаляет до третьего эл-ма с конца
console.log(diArr);

userId = [3, 6, 2, 8, 8, 8];
userId.splice(2, 2); //удалит 2 эл-а начиная со второго
console.log(userId);

userId = [3, 6, 2, 8, 8, 8];
userId.splice(2, 2, '#4' , 90);// удалит и заменит
console.log(userId);


var str = 'forest, rain, sky, ocean';

var strArr = str.split(', '); // сделали из строки массив
console.log(strArr);

strArr = strArr.join('..');
console.log(strArr)


for (var i = 0;i < pictures.length; i++) {
	console.log('Элемент массива №', i, pictures[i])

}


//пузырьковая сортировка
//userid.sort();
//

//pars. int 

//переводим любое число в двоичную и обратно
//остаток от деления  и Math.floor(x)-делит без остатка.