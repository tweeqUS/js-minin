"use strict"


// this - object
// для всех браузеров window , для node.js - global
const user = {
    name: 'max',
    dateOfBirth: 2001,
    getName(){
        //return user.name - не правильно 
        return this.name; //возвращение ключа name в данном обьекте
    },
    calculateAge(){
        const curretAge = new Date().getFullYear();
        return curretAge - this.dateOfBirth;
    },
    getAllInfo: function(){
        const age = this.calculateAge();
        console.log(` Имя: ${this.name}, Возраст: ${age}`);
    }
}
console.log(user.getName());
console.log(user.calculateAge());
user.getAllInfo();

//bind, call, apply

//Метод Call
const user2 = {
    name: 'Vito',
};
//          //функция getName /call - метод / user2 - обьект к которому будем применять функцию getName
const user2Name = user.getName.call(user2); //.call(user2) обращение к объекту user2 , теперь user2 вместо this
console.log(user2Name);

//Метод Apply
const mainHero = {
    fullName: 'spider man',
    health: 65,
    strength: 5,
};

const badHero = {
    fullName: 'joker',
    health: 55,
    strength: 10,
}

function printHeroInfo(extraInfo = ''){
    console.log(`Имя: ${this.fullName} Здоровье: ${this.health} Сила: ${this.strength} ${extraInfo}`);
}


printHeroInfo.call(badHero, 'Роль: Злодей'); // В call параметры передаются через запятую
printHeroInfo.apply(badHero, ['Роль: Злодей']); //В Apply параметры передаются через массив
printHeroInfo.bind(badHero, 'Роль: Злодей'); // bind не вызывает, создаёт новую функцию с новым контекстом
const heroEp = printHeroInfo.bind(mainHero, 'Роль: Добро'); 
heroEp();

// Потеря контекста
const userPeople = {
    name: 'Jack',
    programmingLanguage: 'JavaScript',
    getName() {
        return this.name;
    },
    getProgrammingLanguage() {
        return this.programmingLanguage;
    },
    // getProgrammingLanguage: function() { // Исполозовать можно
    //     return this.programmingLanguage;
    // },
    // getProgrammingLanguage: () => { //незлья использовать стрелочнуб функцию, у неё нет this
    //     return this.programmingLanguage;
    // },
}

console.log(userPeople.getName());
// ПРАВИЛО this объект перед точками
const newGetName = userPeople.getName;
console.log(newGetName()); //window.    Потерян контекст , выводит название функции 
console.log(newGetName.call(userPeople)); //Правлиьный вывод функции юез потери контекста



// Задание #1
// Представьте, что вас как веб-разработчика попросили разработать веб-платформу, которая будет отслеживать прогресс студентов в обучении веб-разработке.
// Для начала вам необходимо создать объект student, в котором будут 3 свойства: 
// 1. stack. Массив из строк, где каждая строка - это технология. Изначально, массив stack должен быть равен [‘HTML’]. 
// 2. level. Тип данных number. level отвечает за текущий уровень студента и изначально равен 1. 
// 3. improveLevel. Функция, которая сначала увеличивает значение свойства level у студента на единицу. Если level равен 2-м,
//  то вам необходимо добавить в конец массива stack значение ‘CSS’, если 3-м - добавляете в конец stack значение ‘JavaScript’, 
//  4-м - ‘React’, 5-ти - ‘NodeJS’. Если значение level стало больше 5-ти, то вам необходимо вывести в модальном окне через alert сообщение “Студент выучил все технологии!”.
//   Также функция improveLevel должна возвращать в самом конце обновленный объект student.
// В итоге значение свойства stack после выполнения кода ниже должно быть равно ["HTML", "CSS", "JavaScript", "React", "NodeJS"].
// student .improveLevel()
// .improveLevel() .improveLevel() .improveLevel() .improveLevel()
// Примечание: цепочка из подряд идущих функций impoveLevel работает так,
//  потому что improveLevel возвращает объект student, а у объекта student есть метод impoveLevel.

const student1 = {
    stack: ['C++'],
    level: 1,
}

const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
       this.level++;
        if (this.level == 2) {
            this.stack.push('CSS');
            console.log(this);
        } else if (this.level == 3) {
            this.stack.push('JavaScript');
            console.log(this);
        } else if (this.level == 4) {
            this.stack.push('React');
            console.log(this);
        } else if (this.level == 5) {
            this.stack.push('NodeJs');
            console.log(this);
        } else if (this.level > 5) {
            console.log('Студент выучил все технологии!');
            console.log(this);
        }
        return this
    }
}
student.improveLevel();
student.improveLevel();

// Вызов функции второго объекта
let lvl2= student.improveLevel.call(student1); //.call(user2) обращение к объекту user2 , теперь user2 вместо this
lvl2= student.improveLevel.call(student1);
lvl2= student.improveLevel.call(student1); 




// Задание #2
// У вас есть 2 объекта dog и bird, в которых содержится их описание.

// Вам необходимо создать функцию makeDomestic, которая будет работать с ключевым словом this (пример использования ниже). 
// Она должна выводить в консоль всю информацию о животном с помощью сообщения: “type по имени name говорит sound”, где name - имя животного, 
// type - его тип и sound - результат вызова функции makeSound.
// Также функция makeDomestic должна возвращать новый объект животного, в котором будут все прошлые параметры (name, type, makeSound), 
// а также будет добавлен новый параметр isDomestic. Он является типом данных boolean и показывает, домашнее ли
// животное или нет. Значение для свойства isDomestic (true либо false) вам необходимо передать как параметр в функцию makeDomestic.
// Кроме этого для обращения к свойствам животного функция makeDomestic должна использовать только this. Т.е. вам разрешено обращаться к свойствам только через
// this.name либо this.makeSound, но никак не bird.name либо bird.makeSound.
// Вам необходимо решить эту задачу 3-мя способами: через bind, call и apply. Вызовите функцию makeDomestic 3 раза используя данные методы. При использовании bind, 
// функция makeDomestic должна работать с объектом dog, при apply и call - с объектом bird. Не забывайте передавать параметр isDomestic в функцию при ее вызове.
// Примеры использования:
// function makeDomestic(isDomestic) {
// // Ваша реализация
// }
// /*
// Сообщение в консоли: "Собака по имени Чарли говорит Гав-Гав"
// domesticDog = { name: 'Чарли', type: 'Собака', isDomestic: true, makeSound() { return 'Гав-Гав' }
// }
// */

const dog = { 
    name: 'Чарли', 
    type: 'Собака', 
    makeSound() { 
        return 'Гав-Гав'; 
    }
}
const bird = { 
    name: 'Петя', 
    type: 'Воробей', 
    makeSound() { 
        return 'Чик-чирик'; 
    }
}

const makeDomestic = function (isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);

    //1 способ решения
    if (isDomestic == true) {
        this.isDomestic = true;
        console.log(this);
    } else { 
        this.isDomestic = false;
        console.log(this);
    }

    //2 способ решения (SPREAD оператор (...))
    // const result = {
    //     ...this,
    //     isDomestic,
    // }
    // console.log(result);
}


makeDomestic.call(dog, true);
makeDomestic.apply(bird, [false]);
makeDomestic.bind(dog , true)(); // 1 способ вызова функции  BIND

const newBind = makeDomestic.bind(dog , true); //2 способ вызова функции BIND
newBind();


//Задание 3
// Дан объект footballer, в котором есть некоторая информация о футболисте и действия, которые он может выполнять.
// К сожалению, данный код работает неверно. В некоторых случаях он выводит
// undefined, а в других - вообще ошибку.
// Вам необходимо исправить данный код используя bind, call и apply. 
// ● Функцию attack необходимо исправить при помощи bind + нужно вспомнить особенность стрелочных функций (нет своего this) 
// ● Функцию score - при помощи call 
//● Функцию substitute - при помощи apply

//ДО ИСПРАВЛЕНИЯ
// const footballer = { 
//     fullName: 'Cristiano Ronaldo', 
//     attack: () => { console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
// },
// scoreGoal(sound) { 
//     console.log(`${this.fullName} забил гол! Вот это да!`); 
//     this.celebrate(sound);
// },
// celebrate(sound) { 
//     console.log(sound);
// },
// goToSubstitution: function(newPlayer) {
// console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
// }
// };
// const attack = footballer.attack;
//  const score = footballer.scoreGoal; 
//  const substitute = footballer.goToSubstitution; 
//  attack(); 
//  score('Сиииии'); 
//  substitute('Paulo Dibala');



//ПОСЛЕ ИСПРАВЛЕНИЯ
const footballer = { 
    fullName: 'Cristiano Ronaldo', 
    attack(){ 
        console.log(`${this.fullName} сейчас с мячом и начинаетатаку!`);
},
scoreGoal(sound) { 
    console.log(`${this.fullName} забил гол! Вот это да!`); 
    this.celebrate(sound); 
},
celebrate: function(sound) { 
    console.log(sound); 
},
goToSubstitution: function(newPlayer) {
console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
}
};

const attack = footballer.attack.bind(footballer);
attack();

const score = footballer.scoreGoal.call(footballer, 'Сииии');
const substitute = footballer.goToSubstitution.apply(footballer, ['Paulo Dibala']);


//ОТВЕТ УЧИТЕЛЯ
// const attack = footballer.attack;
// const score = footballer.scoreGoal;
// const substitute = footballer.goToSubstitution;

// attack.bind(footballer)();
// score.call(footballer, 'Сиииии');
// substitute.apply(footballer, ['Paulo Dibala']);
