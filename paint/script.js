(function(){
	'use strict'

// 1. Доделать дз, кто еще не сделал;
// 2. Создать папку paint, в ней html, css и js,
// в js динамически создать следующие элементы:
// 1) кисть,
// 2) цвет кисти,
// 3) размер кисти,
// 4) ластик.
// Для создания инструментов использовать тег input
// 5) холст (canvas) для рисования, использовать тег canvas

	//Создание кисти

	var  brush = document.createElement('input'); // создание кнопки
	brush.setAttribute('type', 'button'); // присвоение атрибута и его значения
	brush.setAttribute('value', 'brush');
	brush.classList.add('brush-btn');// добавление класса

	//Цвет кисти 

	var brush_col = document.createElement('input');
	brush_col.setAttribute('type', 'color');
	brush_col.setAttribute('value', '#333');
	brush_col.classList.add('color-btn');

	// Развмер кисти

	var brush_size = document.createElement('input');
	brush_size.setAttribute('type', 'range');
	brush_size.setAttribute('min', '1');
	brush_size.setAttribute('max', '201')
	brush_size.setAttribute('value', '101');;
	brush_size.classList.add('size_btn');

	// Ластик

	var eraser = document.createElement('input');
	eraser.setAttribute('type', 'button');
	eraser.setAttribute('value', 'eraser');
	eraser.classList.add('eraser_btn'); 

	//Холст 

	var canvas = document.createElement('canvas');
	
	var paint = document.getElementById('paint');



	paint.appendChild(brush);
	paint.appendChild(brush_col);
	paint.appendChild(brush_size);
	paint.appendChild(eraser);
	paint.appendChild(canvas);
	






}())