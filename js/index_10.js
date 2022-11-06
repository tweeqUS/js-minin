"use strict";

const developer = {
    //key: value,
    name: 'Maxim',
    job: 'Front_End разработчик',
    experience: 24,
    jobAllinfo: {
        type: 'Front-End',
        framework: 'ReactJs',
    }
}
console.log('developer', developer);

//1 Получение значений по ключу
console.log('name', developer.name);
console.log('jobAllinfo', developer.jobAllinfo);

//2 Получение значений по ключу
const key = 'name';
console.log('name', developer[key]);

//3 Цепочки обращений к объектам
console.log(developer.jobAllinfo.type);
console.log(developer['jobAllinfo']['framework']);



// Добавление, удаление и изменение обьектов

const student = {
    id: 1,
    progammingLanguage: 'JavaScript',
    hasExperienceInReact: false,
}

//Добавление 
student.experience = 6;
console.log('student', student);

//Удаление
delete student.hasExperienceInReact;
console.log('student', student);

//Изменение 
student.experience = 12;
console.log(student)



//Ссылочный тип данных

//7 - примитивы (не ссылочный)
//1 - не примитив - обьект (ссылочный тип)


const setName = (entity, value) => {
    if (typeof entity === 'object') {
        entity.name = value;
    } else {
        entity = value;
    }
}

const developerOne = { //Объекты = ссылочный тип данных  
    name: 'Maxim',
};
let developerName = 'Maxim';

setName(developerOne, 'Max');
setName(developerName, 'Max');
console.log(developerOne);
console.log(developerName);


/////
const entityOne = {};
const entityCopy = entityOne;
console.log(entityOne === entityCopy);



// Перебор обьекта 

const goodInfo = {
    id: 1,
    price: 80,
    currency: '$',
    name: 'shoes',
}

console.log('goodInfo', goodInfo);

//for in 
for (const key in goodInfo) { //Перебор обьекта (key in value)
    console.log('key', key);
    const value = goodInfo[key]; //Вывод value по key
    console.log('value', goodInfo.price); 
}


//Object.keys (создание массива , в который выводит все ключи(keys) )
const keys = Object.keys(goodInfo);
console.log(keys);

//Object.values (создание массива , в который выводит все значения ключей(values) )
const valuesOne = Object.values(goodInfo);
console.log('values', valuesOne);


//Object.entries (создание массива , в который выводит все значения(keys and value))
const entries = Object.entries(goodInfo);
console.log('Ключ и значение', entries);
console.log(entries[0]);


//Ключи обьекта
// Ключ может иметь 2 значения (STRING или SYMBOL)

//Символ
const id = Symbol('id');
//СТРОКИ

const user = {
    [id]: 1,
    // [Symbol('id')] : 1, // Выводит символ 1
    // [Symbol('id')] : 2, // Выводит символ 2
    // [Symbol('id')] : 3, // Выводит символ 3
    name: 'Maxim',
    10: '1234',
    undefined: undefined,
    [false]: false,
}
console.log(user);
console.log(Object.keys(user));


console.log(user[id]); // Значение ключа символ


//in (Существует ли какой-либо ключ в обьекте)
console.log('name' in user);
console.log(id in user); //Существует ли символ в обьекте user



//Объединение нескольких объектов в один

const developerInfo = {
    name: 'Maxim',
    age: 25,
    experience: 3,
}

const developerExtraInfo = {
    name: 'Igor',
    height: 180,
    isJunior: false,
}

// ... spread ... 1 способ
const developerTwo = {
    ...developerInfo,
    ...developerExtraInfo,
    name: 'Slava',
};
console.log(developerTwo);


// Object.assign  2 cпособ             В               ИЗ 
const developer2 = Object.assign(developerInfo, developerExtraInfo);
console.log(developer2);




//Опциональная цепочка ?.

const developerFree = {
    //key: value,
    name: 'Maxim',
    job: 'Front_End разработчик',
    experience: 24,
    jobAllinfo: {
        type: 'Front-End',
        framework: {
            name: 'ReactJS'
        }
    }
}

//1
if(developerFree && developerFree.jobAllinfo && developer.jobAllinfo.framework) {
    console.log('Разработчик уже знает фреймворк');
} else {
    console.log('Разработчик ещё не знает фреймворк');
}

//2
if(developerFree?.jobAllinfo?.framework?.name) {
    console.log('Разработчик уже знает фреймворк');
} else {
    console.log('Разработчик ещё не знает фреймворк');
}



//Домашнее задание

// Задание #1
// Вам дан массив пользователей users. У каждого из них есть свойство status, которое
// может равняться или “online”, или “offline”.
// Вам необходимо создать новый массив onlineUsers, который будет содержать объекты
// только тех пользователей, у которых status равен “online”.
// После выведите через alert сообщение “Сейчас в онлайн следующие пользователи:
// usersOnlineNames”, где usersOnlineNames - строка, в которой имена пользователей
// отображаются через запятую.
// Для кода выше результат должен быть следующим: “Сейчас в онлайн следующие
// пользователи: David, Bob”.

const users1 = [ 
{
    username: 'David', 
    status: 'online', 
    lastActivity: 10 
},
{ 
    username: 'Lucy',
    status: 'offline', 
    lastActivity: 22
 },
 {
    username: 'Bob', 
    status: 'online', 
    lastActivity: 104
}
]

let onlineUsers = users1.filter((item) => {
    return item.status == 'online';
});

//Каждое имя выводит через запятую в одну строку
const usersOnlineNames = onlineUsers.map((person) => person.username).join(', ');
console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


// Каждое имя выводит на новую строку
// for (const key in onlineUsers) { //Перебор обьекта (key in value)
//     let value = onlineUsers[key]; //Вывод value по key
//     console.log(`Сейчас онлайн ${value.username}.`);
// }



// for (const key in users) { //Перебор обьекта (key in value)
//     // console.log('key', key);
//     const value = users[key]; //Вывод value по key
//     // console.log('value', value);
// }



// Задание #2
// Представьте, что вы разрабатываете программу выдачи талончиков для местной
// больницы. До этого талончики выписывались вручную и вам необходимо оптимизировать
// данную задачу.
// Вам требуется создать функцию giveTalonsInOrder, которая сортирует очередь из
// пациентов. Она принимает в себя 2 параметра:
// 1. patients - массив объектов. Каждый объект хранит информацию об имени пациента
// и его уникальном номере - id.
// 2. orders - массив уникальных номеров id, который указывает порядок, в котором
// должны стоять в очереди пациенты.
// Функция должна возвращать новый массив, в котором объекты из массива patients будут
// отсортированы по id из массива orders.
// Посмотрите на возможный результат функции giveTalonsInOrder:



const ordersArr = [4, 2, 1, 3]; 

const people = [ 
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
 ];

 let newArr = [];
const giveTalonsInOrder = (patients, orders) => {
    orders.forEach((item) =>{
        newArr.push(patients.find((i) => {
            return i.id === item ;
        }));
    });
    console.log(newArr);
}

giveTalonsInOrder(people,ordersArr);



//Рeшение учителя
// const ordersArr = [4, 2, 1, 3];
// const people = [
//     { id: 1, name: 'Максим' },
//     { id: 2, name: "Николай" },
//     { id: 3, name: "Ангелина" },
//     { id: 4, name: "Виталий" },
// ];

// const giveTalonsInOrder = (patients, orders) => {
//     const objectWithIndexes = patients.reduce((acc, curPerson) => {
//         acc[curPerson.id] = curPerson;
//         return acc;
//     }, {});
//     return orders.map((order) => objectWithIndexes[order]);
// }

// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);
// /* Возвращает массив
// [
//     { id: 4, name: 'Виталий' },
//     { id: 2, name: 'Николай' },
//     { id: 1, name: 'Максим' },
//     { id: 3, name: 'Ангелина' }
// ]
// */


// Задание #3
// Вам необходимо создать функцию, которая будет работать с объектами. Назовите ее handleObject.
// handleObject принимает в себя 3 параметра:
// 1. obj. Объект, с которым будет работать функция 
// 2. key. ключ объекта 
// 3. action. Действие, которое мы будем совершать над объектом
// Параметр action может быть 4-мя значениями:
// 1. ‘get’. Если action равен ‘get’, то функция handleObject должна вернуть значение ключа key в объекте obj. 
// 2. ‘add’. Если action равен ‘add’, то функция handleObject должна добавить новый ключ key в объект object и присвоить значение пустой строки “”. Также из функции необходимо возвратить обновленный объект obj. 
// 3. ‘delete’. Если action равен ‘delete’, то функция handleObject должна удалить свойство key из объекта obj и возвратить обновленный объект.
// Если action равен любому другому значению, то функция handleObject должна
// возвратить объект obj.
// Протестируйте функцию на этом коде:
// const student = { name: 'Maxim', programmingLanguage: 'JavaScript', }
// const result = handleObjects(student, 'programmingLanguage', 'delete'); console.log('result', result);


// const student = { 
// name: 'Maxim', 
// programmingLanguage: 'JavaScript', 
// }

// const handleObject = (obj, key, action) => {
//     if(action == 'get') {
//         console.log(obj[key]);
//     } else if (action == 'add') {
//         obj.key = "";
//         console.log(obj);
//     } else if (action == 'delete') {
//         delete obj[key];
//         console.log(obj);
//     } else {
//         console.log(obj);
//     }
// }

// handleObject(student, 'programmingLanguage', 'asdfgsdfadfgs');



// Задание #4
// Вам необходимо создать функцию giveJobToStudent, которая будет добавлять новое свойство в объект и выводить информацию в модальном окне. Она принимает в себя 
// 2 параметра:
// 1. student - объект, содержащий информацию о студенте 2. 
// jobName - название новой работы студента
// Функция giveJobToStudent выводит в модальное окно сообщение “Поздравляем! У студента fullName появилась новая работа! Теперь он jobName”, 
// где fullName - это имя студента, а jobName - название новой работы студента.
// Функция giveJobToStudent должна возвращать новый объект студента, в котором будут все ключи из объекта student и также появится новый ключ job со значением параметра
// jobName.
// Для теста функции giveJobToStudent используйте следующий код:
// const student = { fullName: 'Максим', experienceInMonths: 12, stack: ['HTML', 'CSS', 'JavaScript', 'React'], }
// const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

const student = { 
    fullName: 'Максим', 
    experienceInMonths: 12, 
    stack: ['HTML', 'CSS', 'JavaScript', 'React'], 
};

const giveJobToStudent = (obj, jobName) => {
    obj.job = jobName;
    
    //1 способ
    // const newArr1 = Object.values(obj);
    // console.log(`Поздравляем! У студента ${newArr1[0]} появилась новая работа! Теперь он ${newArr1[3]}`);
    
    //2 способ
    console.log(`Поздравляем! У студента ${obj.fullName} появилась новая работа! Теперь он ${obj.job} !`);
    console.log(student);
};

giveJobToStudent(student, "веб-разработчик");




// РЕШЕНИЕ УЧИТЕЛЯ
// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// }

// function giveJobToStudent(student, jobName) {
//     alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
//     return {
//         ...student,
//         job: jobName,
//     }
// }

// const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
// console.log('updatedStudent', updatedStudent);

