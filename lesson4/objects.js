

(function () {
	'use strict';
	console.log('Объекты');

	var obj = {}; // пустой объект
	console.log(obj);


	var user = {}
	user.id = 2; //св-во объекта 
	user.login = 'qwerty'; // имя свойства является строкой
	user.email = 'qwerty@bla.bla';

	//объект.имя_свойства - способ обращения к св-ву объекта

	console.log (user.login);

	delete user.email; // удаляет св-во объекта;
	console.log(user.email); //удаленное св-во - underfined

	console.log(user);

	var loginKey = 'login'; // обратились к свойсву
	console.log(user[loginKey]);

	if ('tyr' in user) {
		console.log('tyr')
	}else console.log('no'); // проверит есть ли такое св-во в user

	//литеральный способ записи объекта
	user = {
		id: 3, // user.id = 3
		login: 'qwerty'
	}


	var name = {
		user1:'Vasya',

		userGender:  {
			male: 'male',
			female: 'female',
		},
		
	}
	console.log(name);
	console.log(name.userGender);
	console.log(name.userGender.male);



	var horseSize = 'big';
	var ponySize = horseSize;

	 ponySize = 'small';



	var horse = {
		size: 'big'
	};
	var pony = horse; //ссылки на один объект
	pony.size = 'small';
	console.log('horseSize = ' + horse.size + ';'
		+ 'ponySize = ' + pony.size)


	for (var key in name){
		console.log('user1' + key)
	}// метод перебирания объекта



	user = {
		id: 3,
		login: 'fefefe',
		psw: [2, 7, 8],
		obj: {
			str3: 'string',
			num4: 56,
		}
	};
	for (var key in user){
		console.log(key + '= ' + user[key])
	}// перебрали объект

	//user[key] получить значение 




	user = {
		id: 3,
		login: 'fefefe',
		changeLogin: function (newLogin){
			this.login = newLogin;
		},
	};
	user.changeLogin('Fill')
	console.log(user.login);




	var admin = {
		
		addUserRating: function(rating){
			user.rating = rating;
		}
	}
	admin.addUserRating(5)
	console.log(user.rating)















}()) //самовызываюшаяся функция

//Шаблон корректирования - модуль - в нем мы будем писать весь наш код
