'use strict'

// var i = 11;
// while (i == 0) {
// 	i = Math.floor(i%2);
// 	console.log('число', i);
	
// } 



var a = [4,7,8,2,4,7];
var	i, j, k, n=a.length;
	console.log('Исходный массив' +a);
	console.log(n);
for (j = 0; j<n;j++){
	for(i = 0; i<n-1; i++){
	if (a[i] > a[i + 1]){
		//меняем местами
		k = a[i];
		a [i] = a[i + 1];
		a[i + 1] = k;
	}

}

console.log('Новый массив' + a);
}
