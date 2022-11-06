// Задание #1
// Сейчас ваша задача состоит в том, чтобы создать 8 переменных с помощью let, которые
// будут представлять 8 разных типов данных. Каждую из этих переменных требуется явно
// преобразовать к 3-м типам: к number, boolean и string. Конечные значения выведите в
// консоль.
// Пример:
// let age = 18;
// console.log(Number(age), Boolean(age), String(age));
// Обязательно после каждого console.log посмотрите, что у вас выводится в консоль и
// подумайте, почему получилось именно такое значение, которое было выведено.


'use strict';

let one = 5;
console.log(Number(one), Boolean(one), String(one));

let two = '5';
console.log(Number(two), Boolean(two), String(two));

let free = true;
console.log(Number(free), Boolean(free), String(free));

let four = null;
console.log(Number(four), Boolean(four), String(four));

let five = undefined;
let six = {
    key: 'один',
    name: 'The Best IT Company',
    numberOfDevelopers: 500,
    isProductCompany: true
};
console.log(Number(six), Boolean(six), String(six));

let seven = 100n;
console.log(Number(seven), Boolean(seven), String(seven));

let eight = Sumbol('id');
console.log(Number(eight), Boolean(eight), String(eight)); //Symbol не преобразуется



//ЗАДАНИЕ 2
// Ваша задача состоит в следующем. Ниже вам даны 10 примеров явного и неявного
// преобразования типов. Необходимо определить, какое преобразование явное, а какое
// неявное.
// Если преобразование является явным, то напишите напротив примера комментарий
// “явное”, если неявным, то исправьте его на явное по шаблону ниже.
// Шаблон ответа на пример console.log(+'1'):
// console.log(+'1'); //неявное
// console.log(Number('1'));
// Также для каждого значения выведете его typeof.
// Пример:
// console.log(Number('10'), typeof Number('10')); // явное

//1
console.log(+'50'); //Неявное
//2
console.log(Number('100')); //Явное
//3
console.log('' + 1); //Неявное
//4
console.log(String(1)); //Явное
//5
console.log(Boolean(0)); //Явное
//6
console.log(+'001'); //Неявное
//7
console.log(1 + '');//Неявное
//8
console.log(Boolean(1)); //Явное
//9
console.log(String(001));//Явное
//10
console.log(Number('Hello World'));//Явное 


// Задание #3

// Сейчас ваша задача состоит в том, чтобы преобразовать явно к string, number и boolean
// следующие сущности, посмотреть на результат и проанализировать его:
// 1. console.log
// 2. { name: 'Maxim' }
// 3. Symbol('key')
// 4. Number
// 5. ''
// 6. 0
// 7. -10
// 8. '-105'


console.log(String(console.log), Number(console.log), Boolean(console.log));

console.log(String({ name: 'Maxim' }), Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }));

console.log(String(Symbol('key')), Number(Symbol('key')), Boolean(Symbol('key'))); //SYMBOL нельзя приводить

console.log(String(''), Number(''), Boolean(''));

console.log(String(0), Number(0), Boolean(0));

console.log(String(-10), Number(-10), Boolean(-10));

console.log(String(-105), Number(-105), Boolean(-105));


// Задание #4
// Вам даны 10 примеров явного преобразования типов.
// Ваша задача понять, что будет выведено в консоль в каждом примере. Сначала
// запишите свои ответы в заметки, а только потом уже запускайте код и сверьтесь с
// ответами.


// 1
console.log(Number(' 1 2 3 4 5')); //Nan
// 2
console.log(Number('1234 5')); //Nan
// 3
console.log(Number('12345')); //12345
// 4
console.log(String(false)); //false
// 5
console.log(Boolean(0000000)); //false
// 6
console.log(Boolean(0.0000001)); //true
// 7
console.log(String(undefined)); //undefined
// 8
console.log(Number('100f')); //Nan
// 9
console.log(Number('100')); //100
// 10
console.log(Number('000001')); //1






