(function (global)) {
	'use strict'

	var slider = {
		init: function (id) {
			this.elem = document.getElementById(id);
			this.elem.classList.add('slider')
			this.slides = [],
		},

		add: function (imagePath, text) {
			//var image = // сздание эелемента img
			//добавление элементу атрибута src = ''
			// добавление эелементу атрибута alt
			// добавление стиля
			//<img src alt>
			this.elem.appendChild(image)

			this.Slides.push(image);
		},

		runSliderShow: function(){


			setInterval(nextSlide, 1500); //метод переключающий картинки ,1.5 секунды
		}

		nextSlide: function() {

		}
	}


	slider.init('slider');

	slider.add('img/pic1/jpg', 'altText');
	slider.add('img/pic2/jpg', 'altText');
	slider.add('img/pic3/jpg', 'altText');


	slider.runSliderShow()


}(window)); 


//если слайд номе 3 то прерываем и начинаем заного

// в css создать .img display block