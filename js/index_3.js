'use strict';
//1 задание
const one = "Строка";
console.log(one, 'имеет тип данных:', typeof(one));

const two = 5;
console.log(two , 'иммет тип данных', typeof(two));

const free = true;
console.log(free , 'иммет тип данных', typeof(free));

const four = null;
console.log(four , 'иммет тип данных', typeof(four)); //!!!!

const five = undefined;
console.log(five , 'иммет тип данных', typeof(five));

const six = {
    key: 1,
    key1: 2,
}
console.log(typeof(six));

const seven = 100n;
console.log(seven , 'иммет тип данных', typeof(seven));

const vosem = Symbol('id');
console.log(vosem , 'иммет тип данных', typeof(vosem));


//2 задание

let number = 44,
    string = "Привет",
    boolean = true;

    number = "Теперь это строка";
    string = 25;
    boolean = null;

    alert(number);
    alert(string);
    alert(boolean);



//3 задание 

let ageOfPerson1 = 18;
let ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2 , typeof(ageOfPerson2));


let nameOfAnimal1 = null;
let nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2 , typeof(nameOfAnimal2));

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log('Переменную нельзя переопределить', bestProgrammingLanguage1, bestProgrammingLanguage2);

let initialValue1;
let initialValue2 = initialValue1;
console.log(initialValue1 , typeof(initialValue1));
