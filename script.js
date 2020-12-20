document.write('---- Задание1 ----' + '<br>');
function f1(a, b, c) {
	document.write((a - b) / c);
}
f1(10, 2, 2);

document.write('<br>' + '---- Задание2 ----' + '<br>');
function f2(a) {
	return [Math.pow(a, 3), Math.pow(a, 2)];
}
var result = f2(5);
document.write(result);

document.write('<br>' + '---- Задание3 ----' + '<br>');
function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}
function max(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}
var a = +prompt('3 задание. Введите число а:'),
	 b = +prompt('3 задание. Введите число b:');
if (a == b) {
	document.write('Числа равны');
} else {
	document.write('Меньшее из чисел ' + min(a, b) + '\n' + 'Большее из чисел ' + max(a, b));
}

document.write('<br>' + '---- Задание4 ----' + '<br>');
function f4_1(a, b) {
	var arr = [];
	for (var i = a; i <= b; i++) {
		arr.push(i);
	}
	return arr;
}
a = +prompt('4 задание. Введите число начала массива');
b = +prompt('4 задание. Введите число конца массива');
function f4_2() {
	document.write(f4_1(a, b));
}
f4_2();

document.write('<br>' + '---- Задание5 ----' + '<br>');
function iseven(a) {
	if (a % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

a = +prompt('6 задание. Введите число:');
document.write(iseven(a));

document.write('<br>' + '---- Задание6 ----' + '<br>');
function f6(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (iseven(arr[i]) == false) {
			arr.splice(i, 1);
		}
	}
	return arr;
}
document.write(f6([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

document.write('<br>' + '---- Задание7 ----' + '<br>');
function f7(a) {
	if (arguments.length == 1 || arguments[1] == '' || arguments[1] == ' ') {
		for (var i = 1; i <= a; i++) {
			for (var j = 1; j <= i; j++) {
				document.write(i);
			}
			document.write('\n');
		} 
	} else {
			for (var i = 1; i <= a; i++) {
				for (var j = 1; j <= i; j++) {
					document.write(arguments[1]);
				}
				document.write('\n');
			}
		}
	}

f7(9, '');

document.write('<br>' + '---- Задание8 ----' + '<br>');
function f8(a) {
	for (var i = 0; i < a; i++) {
		for (var j = 0; j < a * 2 - 1; j++) {
			if (j >= a - i - 1 && j <= a + i - 1) {
				document.write('*');
			} else {
				document.write('&nbsp;&nbsp;');
			}
		}
		document.write('\n');
	}
}
function f8_2(a) {
	for (var i = a - 1; i >= 0; i--) {
		for (var j = 0; j < a * 2 - 1; j++) {
			if (j >= a - i - 1 && j <= a + i - 1) {
				document.write('*');
			} else {
				document.write('&nbsp;&nbsp;');
			}
		}
		document.write('\n');
	}
}
a = +prompt('8 задание. Введите высоту треугольника:');
f8(a);
document.write('\n');
f8_2(a);

document.write('<br>' + '---- Задание9 ----' + '<br>');
function f9() {
	arr = [];
	for (var i = 0; ; i++) {
		if (i == 0 || i == 1) {
			arr[0] = 0;
			arr[1] = 1;
		} else {
			arr[i] = arr[i - 1] + arr[i - 2];
		}
		if (arr[i] >= 987) break;
	}
	return arr;
}
document.write(f9());

document.write('<br>' + '---- Задание10 ----' + '<br>');
function f10(x) {
	var sum = 0;
	while (x > 0) {
		sum += x % 10;
		x = Math.floor(x / 10);
	}
	document.write('Сумма цифр ' + sum + '\n');
	x = sum;
	if (sum > 9) f10(x);
}
var x = +prompt('10 задание. Введите число:')
f10(x);

document.write('<br>' + '---- Задание11 ----' + '<br>');
function f11(array) {
	document.write(array[i] + ' ');
	i++;
	if (i < array.length) f11(array);
}
var i = 0,
	 array = [];
	 f11([2, 4, -8, 11, 23, 42, -3]);

document.write('<br>' + '---- Задание12 ----' + '<br>');
function f12(name, groupnamber) {
var str1 = 'Домашняя работа: Функции',
 	 str2 = 'Выполнил студент гр. ' + groupnamber,
 	 str3 = '' + name,
 	 l = 0,
 	 s = '****';
 	 if (str1.length > str2.length && str1.length > str3.length) {
 	 	for (var i = 0; i < str1.length; i++) {
 	 		s += '*';
 	 	}
 	 	l = str1.length;
 	 } else if (str2.length > str1.length && str2.length > str3.length) {
 	 	for (var i = 0; i < str2.length; i++) {
 	 		s += '*';
 	 	}
 	 	l = str2.length;
 	 } else {
 	 	for (var i = 0; i < str3.length; i++) {
 	 		s += '*';
 	 	}
 	 	l = str3.length;
 	 }
 	 var j1 = l - str1.length,
 	 	  j2 = l - str2.length,
 	 	  j3 = l - str3.length;
 	 for (var i = 0; i < j1; i++) {
 	 	str1 += ' ';
 	 }
 	 for (var i = 0; i < j2; i++) {
 	 	str2 += ' ';
 	 }
 	 for (var i = 0; i < j3; i++) {
 	 	str3 += ' ';
 	 }
 	 console.log(s);
 	 console.log('* ' + str1 + ' *');
 	 console.log('* ' + str2 + ' *');
 	 console.log('* ' + str3 + ' *');
 	 console.log(s);
 	}
 	 var name = prompt('12 задание. Введите ФИО:'),
 	 	  groupnamber = prompt('12 задание. Введите номер группы');
 	 f12(name, groupnamber);
















