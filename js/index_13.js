"use strict";

// ООП

//function и class

function Animal(name) {
    this.name = name;

    this.getName = function() {
        return this.name;
    }
}

//new
const cat = new Animal('кот'); //Cоздание нового объекта (NEW)
console.log(cat);
console.log(cat.name);
console.log(cat.getName());



// Создание классов
class Animal1 { 
    constructor(name) { // Иницилизатор начальных значений(СРОБАБЫТВАЮТ В ПЕРВУЮ ОЧЕРЕДЬ)
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const cat1 = new Animal1('кот'); //Cоздание нового объекта (NEW)
console.log(cat1);
console.log(cat1.name);
console.log(cat1.getName());


//Наследование

class Plane { //РОДИТЕЛЬСКИЙ КЛАСС
    constructor(type, numberOfPassenger){
        this.type = type;
        this.numberOfPassenger = numberOfPassenger;
    }

    startFlight() {
        console.log('Полетели');
    }

    setNumberOfGuns() {

    }
}

const plane = new Plane ('Пассажирский', 100);
console.log(plane);
plane.startFlight();


class MilitaryPlane extends Plane { //ДОЧЕРНИЙ КЛАСС
    constructor(type) {
        super(type, 0);//Вызов конструктора родительского класса
        this.numberOfGuns = 0;
    }

    startFlight() {
        console.log('Полетели в атаку!');
    }

    setNumberOfGuns(numberOfGuns){
        this.numberOfGuns = numberOfGuns;
    }

    shoot(){
        console.log('Стреляем!');
    }
}


const militaryPlane =  new MilitaryPlane('Военный');
militaryPlane.startFlight(); //Вызвается сначало в своем класе(дочерним). Если данная функция отсутствует, ищет данную функцию в родительском классе
militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot();
console.log(militaryPlane);

// instanceof  = проверяет принадлежит ли обьект к какому либо классу
console.log(militaryPlane instanceof MilitaryPlane);


//ИНКАПСУЛЯЦИЯ - скрытие  классов

//ПУБЛИЧНЫЙ МЕТОД (public)
class Developer {
    #salary //инициализация 
    constructor(name, programmingLanguage) {
        this.name = name;
        this.programmingLanguage = programmingLanguage;
        this.#salary = 3000; //# - делает приватным для дочернего класса
    }

    //НЕ ФУНКЦИЯ , ВЫЗОВ НЕ НУЖЕН ()
    get devSalary() { //GET = позволяет получить приватную запись
        return this.#salary;
    }

    set setSalary(salary) {//SET = позволяет менять значения приватной записи
        this.#salary = salary;
    }

    startCoding() {
        console.log(this.#salary); //работает только внутри class Developer
        console.log(`${this.name} начинает писать код`);
        this.#printProgrammingLanguage();
    }

    #printProgrammingLanguage() {
        console.log(`Язык программирования ${this.programmingLanguage}`);
    }
}

class JuniorDeveloper extends Developer {
    constructor(name, programmingLanguage) {
        super(name, programmingLanguage);
    }
}

// const juniorDeveloper = new JuniorDeveloper('Роман Пирс', 'C++');
// juniorDeveloper.printProgrammingLanguage(); //не работает из за приватности

const developer = new Developer('Кирилл', 'JavaScript');
console.log(developer);
console.log(developer.devSalary); //получаем приватное свойство
developer.setSalary = 5000; //Присваиваем новое значение с помощью SET
console.log(developer.devSalary);
// console.log(developer.name);
// console.log(developer.programmingLanguage);
// developer.startCoding();
//console.log(developer.#salary); // КЛАСС НЕДОСТУПЕН
// console.log(developer.startCoding()); 
// developer.#printProgrammingLanguage(); //не работает из за приватности



//ПОЛИМОРФИЗМ - одно действие, несколько реализаций

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {} //пустая функция для будущего перераспределения её значений
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log('гав гав'); //реализация makeSound
    }
}

class Horse extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log(`Иго-го-го`);//реализация makeSound
    }
}

const dog = new Dog('Шарик');
console.log(dog);
dog.makeSound();


//АБСТРАКЦИИ

class Footballer {
    constructor(name, club){
        this.name = name;
        this.club = club;
    }

    shoot() {}
    celebrateGoal() {}
    pass() {}
}


class Forward extends Footballer {
    constructor(name, club) {
        super(name, club);
    }

    shoot() {
        console.log('Очень сильный удар');
    }
    celebrateGoal() {
        console.log('Дааа! Я забил гол!');
    }
    pass() {
        console.log('Средний пас');
    }
}


//СТАТИЧЕСКИЕ МЕТОДЫ - создает параметры по умолчанию , в котрых отсутствуют свои параметры.

class Car {
    static isCar(car){ //Используется когда не нужно использовать this
        return car instanceof Car; //Относится ли 
    }

    static #initialParams = { //используется только в данном классе (даже без приватности #)
        name: 'Audi',
        maxSpeed: 150,
    }

    constructor(name, maxSpeed) {
        this.name = name || Car.#initialParams.name;
        this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
    }

    drive() {
        console.log(`Машина ${this.name} сейчас в пути.`);
    }
}

const car = new Car('BMW', 200);
console.log(car);
const isCar = Car.isCar(car); //car относится к классу Car 
console.log(isCar);

const car1 = new Car();
console.log(car1);

//Car.#initialParams //Приватное, нельзя использовать



// Задание #1
// Вам дана функция-конструктор, с помощью которой можно создавать экземпляры объектов.
// Ваша задача состоит в том, чтобы переписать данную функцию на класс (class).

// function Student(name, age) { 
//     this.name = name; 
//     this.age = age; 
//     this.technologies = []; 
//     this.status = 'Junior'; 
//     this.setTechnologies = function(technologies) { 
//         this.technologies = [ 
//             ...this.technologies, 
//             ...technologies, ];
// }
// this.setNewStatus = function(newStatus) {
// this.status = newStatus; }
// }
// const student = new Student ('Maxim', 20); 
// student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]); 
// student.setNewStatus('Middle'); console.log(student);

class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.technologies = [];
        this.status = 'Junior';
    }

    setTechnologies(technologies) {
        this.technologies = [
            ...this.technologies,
            ...technologies,
        ];
    }

    setNewStatus(newStatus) {
        this.status = newStatus;
    }
}

const student = new Student ('Maxim', 20); 
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]); 
student.setNewStatus('Middle'); 
console.log(student);


// Задание #2
// Вам необходимо создать класс Person, 
// от него мы сможем создавать экземпляры людей. Конструктор класса будет принимать 2 параметра:
//  1. name - имя человека 
//  2. age - количество полных лет Также вам необходимо реализовать метод compareAge в классе Person. 
//  Он принимает в себя экземпляр класса Person и сравнивает значения полных лет.
// Данный метод должен возвращать результат в следующем 
// формате: 

//Если у одного Person количество лет больше либо равно, чем у другого, 
// то выводите сообщение через alert “name1 старше, чем name2”. Иначе же “name1 младше, чем name2”.

// Запускайте данный код для теста работы вашего класса Person
// const person1 = new Person('Максим', 24); 
// const person2 = new Person('Светлана', 36); 
// const person3 = new Person('Ирина', 23);
// person1.compareAge(person2); // Максим младше, чем Светлана
// person2.compareAge(person3); // Светлана старше, чем Ирина person3.compareAge(person1); // Ирина младше, чем Максим

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    compareAge(person) {
        if(this.age > person.age) {
            console.log(`${this.name} старше, чем${person.name}`);
        } else {
            console.log(`${this.name} младше, чем ${person.name}`);
        }
    }
}


const person1 = new Person('Максим', 24); 
console.log(person1);

const person2 = new Person('Светлана', 36); 
console.log(person2);

const person3 = new Person('Ирина', 23);
console.log(person3);


person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина 
person3.compareAge(person1); // Ирина младше, чем Максим





// Задание #3
// Вам поручили задачу на проекте. Необходимо разработать словарь, в который можно добавлять слова с их описанием, удалять слова и получать их.
// Для начала создайте класс Dictionary. 
// Его конструктор принимает 1 параметр name.
// Инициализируйте данное значение при помощи this. 
// Также в конструкторе должно объявляться поле words, которое по умолчанию должно быть пустым объектом.
// Вам необходимо в класс Dictionary добавить 4 метода: 
// 1. add. Данный метод добавляет новое слово в словарь. Он принимает в себя 2 параметра: word - слово (тип данных строка) description - описание слова (тип данных строка)
// Присвойте объекту words по ключу word (этот параметр передали в метод add) значение объекта, в котором будут храниться данные о слове и его описание.
// Пример объекта words после добавления слова "js":
// // words
// {
// js: { 
//     word: 'js', 
//     description: 'язык программирования', 
// }
// }
// 2. Если слово уже существует в объекте words, то не нужно перезаписывать слово, которое уже было сохранено ранее. remove.
//  Данный метод удаляет слово из словаря. Он принимает в себя ключ по которому нужно удалить объект слова из объекта words 
//  3. get. Данный метод получает слово из словаря. Он принимает в себя ключ из объекта words. Из метода необходимо возвратить найденный объект слова по переданному параметру ключа 
//  4. showAllWords. Данный метод не принимает в себя никаких параметров. 
//  Его задача состоит в том, чтобы вывести все слова, которые есть в объекте words, в консоль в формате “word - description” (word - само слово, description - описание слова)
// Для тестирования написанного класса используйте данный код:
// const dictionary = new Dictionary('Толковый словарь'); 
// dictionary.add('JavaScript', 'популярный язык программирования'); 
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'); 
// dictionary.remove('JavaScript'); 
// dictionary.showAllWords();
// // Веб-разработчик - Человек, который создает новые // сервисы и сайты или поддерживает и дополняет существующие

// class Dictionary {
//     constructor(name) {
//         this.name = name;
//         this.words = {};
//     }

//     add(word, description) {
//         this.words.word = word;
//         this.words.description = description;
//     }
    
//     remove(word) {
//         if(this.words.word === word) {
//             delete this.words.word;
//             delete this.words.description; 
//         }
//     }

//     get(word) {
//       if(this.words.word == word) {
//         return this.words;
//       }
//     } 

//     showAllWords(){
//         console.log(`${this.words.word} - ${this.words.description}`);
//     }
// }

// const dictionary = new Dictionary('Толковый словарь'); 
// dictionary.add('JavaScript', 'популярный язык программирования'); 
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'); 
// dictionary.remove('JavaScript'); 
// dictionary.showAllWords();



// class Dictionary {
//     constructor(name) {
//         this.name = name;
//         this.words = {};
//     }

//     add(word, description) {
//         if (!this.words[word]) {
//             this.words[word] = {
//                 word,
//                 description,
//             }
//         }
//     }

//     remove(word) {
//         delete this.words[word];
//     }

//     get(word) {
//         return this.words[word];
//     }

//     showAllWords() {
//         Object.values(this.words).forEach((wordItem) => {
//             console.log(`${wordItem.word} - ${wordItem.description}`);
//         });
//     }
// }

// const dictionary = new Dictionary('Толковый словарь');
// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// dictionary.add('PHP', 'sss');
// dictionary.add('JAVA', 'casdasd');
// console.log(dictionary);

// dictionary.remove('JavaScript');
// dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие



// Задание #4
// В прошлом задании вы создали словарь. Заказчик доволен проделанной работой и команда разработки тоже. 
// Так как вы уже хорошо разобрались с технологией словаря, то вас попросили реализовать еще один словарь.
//  Заказчик хочет создать новую категорию слов “Сложные слова”.
// Используйте код, написанный в прошлом задании. Вам необходимо создать дочерний
// класс HardWordsDictionary от класса Dictionary. Конструктор у HardWordsDictionary
// принимает в себя также параметр name и вызывает конструктор родительского класса.
// Все методы, которые есть в Dictionary, должны остаться без изменений в HardWordsDictionary,
//  кроме одного. Вам необходимо переопределить метод add, который должен работать по той же логике, что и add у Dictionary,
//   только объект слова должен выглядеть следующим образом:
// {
// word: 'word', 
// description: 'description', 
// isDifficult: true, 
// }
// Для теста класса HardWordsDictionary используйте данный код:
// const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
// hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
// hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
// hardWordsDictionary.remove('неологизм'); 
// hardWordsDictionary.showAllWords();
// // дилетант - Тот, кто занимается наукой или искусством // без специальной подготовки, обладая только поверхностными знаниями. 
// // квант - Неделимая часть какой-либо величины в физике.


class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }

    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {
                word,
                description,
            }
        }
    }

    remove(word) {
        delete this.words[word];
    }

    get(word) {
        return this.words[word];
    }

    showAllWords() {
        Object.values(this.words).forEach((wordItem) => {
            console.log(`${wordItem.word} - ${wordItem.description}`);
        });
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.add('PHP', 'sss');
dictionary.add('JAVA', 'casdasd');
console.log(dictionary);

dictionary.remove('JavaScript');
dictionary.showAllWords();

class HardWordsDictionary  extends Dictionary {
    constructor(name) {
        super(name);
    }

    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {
                word,
                description,
                isDifficult: true, 
            }
        }
    }
}


const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
hardWordsDictionary.remove('неологизм'); 
hardWordsDictionary.showAllWords();

// Задание #5
// Ваша компания создает внутренний продукт для облегчения контроля за ростом своих разработчиков. 
// Вам поручили задачу реализовать такой продукт.
// Для начала вам необходимо создать класс Developer, конструктор которого будет принимать 3 параметра:
//  1. fullName - имя разработчика
// 2. age - возраст разработчика 
// 3. position - текущая позиция разработчика в компании (например, Junior, Middle, Senior)
// Инициализируйте все параметры при помощи this. Также создайте внутри конструктора поле technologies, которое по умолчанию будет равно пустому массиву.
// Кроме этого в классе Developer вам необходимо создать 2 метода: 
// 1. code - метод, у которого тело изначально пустое (в фигурных скобках ничего нет) 
// 2. learnNewTechnology - данный метод принимает в себя 1 параметр technology, который должен добавляться в конец массива technologies
// После проделанных действий у вас должен получиться шаблон Developer, благодаря которому вы будете создавать дочерние классы.
// Вам сейчас необходимо создать 3 дочерних класса от класса Developer: 
// 1. JuniorDeveloper. Конструктор данного класса принимает 
// 2 параметра: fullName и age. Вызовите конструктор родительского класса и передайте туда эти 2 параметра.
//  В качестве 3-го у нас выступает position. Вам необходимо его указать по умолчанию. Напишите значение “Junior” в качестве 3-го параметра вызова родительского конструктора. 
//  Кроме этого переопределить метод code, чтобы он выводил в консоль строку “Junior разработчик пишет код...”. 
//  Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript' 
//  2. MiddleDeveloper. Проделайте ту же самую работу в конструкторе, что и JuniorDeveloper.
// Только на место position передавайте значение “Middle”. Метод code у класса MiddleDeveloper должен выводить в консоль строку “Middle разработчик пишет код...”.
// Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’ 3. SeniorDeveloper. Проделайте ту же самую работу в конструкторе, что и JuniorDeveloper. 
// Только на место position передавайте значение “Senior”. Метод code у класса SeniorDeveloper должен выводить в консоль строку “Senior разработчик пишет код...”. 
// Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’, ‘NodeJS’ Примечание: когда вы переопределите метод code в дочерних классах,
//  то вы используете принцип Полиморфизм.
// Тестируйте написанные классы с помощью этого кода:
// const juniorDeveloper = new JuniorDeveloper('Анастасия', 20) 
// const middleDeveloper = new MiddleDeveloper('Игорь', 25) 
// const seniorDeveloper = new SeniorDeveloper('Максим', 30)
// juniorDeveloper.code();
 // Junior разработчик пишет код... middleDeveloper.code(); 
 // Middle разработчик пишет код… seniorDeveloper.code(); 
 // Senior разработчик пишет код...
// console.log(juniorDeveloper.fullName, juniorDeveloper.age,
// juniorDeveloper.position); 
// 'Анастасия', 20, 'Junior'
// console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position); 
// 'Игорь', 25, 'Middle' console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position); 
// 'Максим', 30, 'Senior'


class Developer {
    constructor (fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }

    code() {
        console.log(`${this.position} пишет код`);
    }

    learnNewTechnology(technology) {
        this.technologies.push(technology);
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age);
        this.position = 'Junior';
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }
}


class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age);
        this.position = 'Middle';
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age);
        this.position = 'Senior';
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20) 
const middleDeveloper = new MiddleDeveloper('Игорь', 25) 
const seniorDeveloper = new SeniorDeveloper('Максим', 30)

juniorDeveloper.code();
middleDeveloper.code();
seniorDeveloper.code();


console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); // 'Анастасия', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies); // 'Игорь', 25, 'Middle' 
console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); // 'Максим', 30, 'Senior'

