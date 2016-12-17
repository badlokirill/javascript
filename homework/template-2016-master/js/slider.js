(function (){
	'use strict'

	var h4 = document.createElement('h4'); // <h4></h4>
	var p = document.createElement('p')
	var li1 = document.createElement('li')
	li1.classList.add('slide-1')
	li1.classList.add('active')// создаем классы

	li1.appendChild(h4)// добавили h4 вниз тега li
	li1.appendChild(p)// 

	var h4text = document.createTextNode('Первый слайд')
	var pText = document.createTextNode('Текст')

	h4.appendChild(h4text)
	p.appendChild(pText)









	var h4 = document.createElement('h4'); // <h4></h4>
	var p = document.createElement('p')
	var li2 = document.createElement('li')
	li2.classList.add('slide-2')


	li2.appendChild(h4)// добавили h4 вниз тега li
	li2.appendChild(p)// 

	var h4text = document.createTextNode('Второй слайд')
	var pText = document.createTextNode('Текст')

	h4.appendChild(h4text)
	p.appendChild(pText)







	var h4 = document.createElement('h4'); // <h4></h4>
	var p = document.createElement('p')
	var li3 = document.createElement('li')
	li3.classList.add('slide-3')


	li3.appendChild(h4)// добавили h4 вниз тега li
	li3.appendChild(p)// 

	var h4text = document.createTextNode('Третий слайд')
	var pText = document.createTextNode('Текст')

	h4.appendChild(h4text)
	p.appendChild(pText)




	var ul = document.createElement('ul')

	var span1 = document.createElement('span')
	span1.classList.add('fa')
	span1.classList.add('fa-angle-left')
	span1.classList.add('arrow-prev')

	var span2 = document.createElement('span')
	span2.classList.add('fa')
	span2.classList.add('fa-angle-right')
	span2.classList.add('arrow-next')



	ul.appendChild(li1)
 	ul.appendChild(li2)
 	ul.appendChild(li3)



 	
 	var div = document.getElementById('slider')
 	div.classList.add('slider')



 	div.appendChild(ul)
 	div.appendChild(span1)
 	div.appendChild(span2)






	








}());