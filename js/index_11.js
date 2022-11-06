"use strict";

//Date

const date = new Date();
console.log(date);

//new Date(year, month, date, hours, munutes, seconsd, ms);

// Месяц = 0 (январь) до 11(декабрь)


const newDate = new Date(2000, 1, 10, 11, 55, 5, 656);
console.log(newDate);

console.log(newDate.getFullYear()); // Получить год
console.log(newDate.getMonth()); // Получить месяц
console.log(newDate.getDate()); // Получить день
console.log(newDate.getHours()); //Получить часы
console.log(newDate.getMinutes()); //Получить минуты
console.log(newDate.getSeconds()) // Получить секунды 
console.log(newDate.getMilliseconds()) //Получить миллисекунды


//День недели
// 0 (воскресенье) - 6 (суббота)
console.log(newDate.getDay()); // выводит день недели
if (newDate.getDay() === 4){
    console.log('Сегодня четверг');
}


//Поменять дату
newDate.setFullYear(2001);  // Поменять год
newDate.setMonth(2); // Поменять месяц
newDate.setDate(11); // Поменять день
newDate.setHours(12); //Поменять часы
newDate.setMinutes(56); //Поменять минуты
newDate.setSeconds(6); // Поменять секунды 
newDate.setMilliseconds(500); //Поменять миллисекунды
//результат
console.log(newDate);



//getTime 

const date1 = new Date(2005, 4, 20);
const date2 = new Date(2006, 4, 10);

//количество милисекунд с 1 января 1970
console.log(date1.getTime());
console.log(date2.getTime());

// Вычесление разности между двумя датами 
const diff = date2.getTime() - date1.getTime(); //Вычитаем меньшую дату из большей
console.log(diff / 1000 / 60) //Получаем минуты


// Функция подсчета времени выполнения операции

const startTime = Date.now();

for(let i = 0; i < 1000000; i++) {
    //do something
}

const endTime = Date.now();  //Аналог getTime()
console.log('Стартовое время',startTime);
console.log('Конечное время',endTime);

const difference = endTime - startTime; //Вычисление разницы
console.log('Разница равна', difference);

// Задание #1
// Часто мы записываем даты в следующем формате “день.месяц.год”.
//  Сейчас вам необходимо создать функцию getDateFormat, которая будет приводить дату к этому формату.
//   Она принимает 2 параметра: 
//   1. date - объект даты, который нужно перевести в данный текстовый формат “день.месяц.год” 
//   2. separator - разделитель дня, месяца и года. 
//   По умолчанию он должен быть равен точке “.” Если в качестве разделителя будет передано тире “-”,
//    то формат уже должен быть таким “день-месяц-год” Также, учтите, что номер месяца в JavaScript считается с 0 до 11. 
//    Кроме этого, если день либо месяц возвращают однозначное число, то вам к нему необходимо добавить 0. 
//    То есть результат должен быть не таким “5.5.2001”, а “05.05.2001”.

const getDateFormat = (date, separator = '.' ) => {
    let newDate1 = new Date(date);
    let days = newDate1.getDate();
    if (days < 10) {
        days = '0' + days;
    } 
    let month = newDate1.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let year = newDate1.getFullYear();

    let result = days + separator + month + separator + year;
    console.log(result);
    }
   
getDateFormat("2022-10-10", '-');


//Учителя
// const addZero = (numberStr) => String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr);

// const getDateFormat = (date, separator = '.') => {
//     const dateItem = date.getDate();
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     const dateArray = [dateItem, month + 1, year].map((item) => addZero(item));
//     console.log('dateArray', dateArray)

//     return dateArray.join(separator);
// }

// console.log(getDateFormat(new Date()));


// Задание #2
// День рождения - это знаменательный праздник для каждого человека.
//  А когда день рождения у вас? Уверен, что вы помните эту дату. 
//  А сколько дней осталось до вашего дня рождения? А вот это уже посложнее.
// Сейчас ваша задача состоит в том, чтобы создать функцию getDaysBeforeBirthday,
// которая будет возвращать количество дней до следующего дня рождения. 
// Данная функция должна принимать 1 параметр nextBirthdayDate, который является объектом даты и указывает на дату вашего ближайшего дня рождения.
//  Год стоит указывать ближайший к текущей дате, а не год вашего рождения.
// Также рекомендуется создать вспомогательную функцию convertMsToDays, которая переводит миллисекунды в дни. 
// Для округления итогового числа используйте Math.round


// Памятка перевода миллисекунд
// function getTimeRemaining(endtime) {
//     const t = Date.parse(endtime) - Date.parse(new Date()),
//     days = Math.floor(t / (1000 * 60 * 60 * 24)),
//     hours = Math.floor((t / (1000 * 60 * 60) % 24)),
//     minutes = Math.floor((t / 1000 / 60 ) % 60),
//     seconds = Math.floor((t / 1000) % 60);


const getDaysBeforeBirthday = (nextBirthdayDate) => {

let dataToBirthday = new Date();

let dataBirtthday = new Date(nextBirthdayDate);

let diff = dataBirtthday.getTime() - dataToBirthday.getTime();

let daysToBirt = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(`До твоего дня рождения осталось ${daysToBirt}`);

};
getDaysBeforeBirthday('2022-12-01');



//Решение учителя
// const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

// const getDaysBeforeBirthday = (birthdayDate) => {
//     const currentDateMs = Date.now();
//     const birthdayDateMs = birthdayDate.getTime();
//     return convertMsToDays(birthdayDateMs - currentDateMs);
// }

// console.log(getDaysBeforeBirthday(new Date(2021, 11, 10)))



// Задание #3
// В JavaScript объект даты может принимать в себя timestamp, т.е. 
// количество миллисекунд с 1 января 1970 года 00:00:00 по UTC. По данному количеству миллисекунд генерируется объект даты.
// Благодаря этому, чтобы добавить определенное число миллисекунд, можно использовать следующую запись: new Date(Date.now() + 5000),
//  где 5000 - это миллисекунды. В итоге мы получим дату, которая на 5000 миллисекунд больше текущей.
// Используя эти знания, вам необходимо создать функцию addDays, которая будет добавлять переданное количество дней к переданной дате. 
// Она принимает в себя 2 параметра: 1. date - объект даты 2. days - количество дней, тип данных number, 
// по умолчания данный параметр должен быть равен единице Вам необходимо к параметру date прибавить определенное количество дней, которое передается в параметр days. 
// Функция addDays должна возвращать обновленную дату.
// Подсказка: не забывайте, что timestamp, который передается в date, должен измеряться в миллисекундах.

const addDays = (date, days = '1') => {
    let data = new Date(date);
    let day = data.setDate(data.getDate() + days );
    let result = new Date(day);
    console.log(result.toString());
}

addDays('2022-03-25', 50);

//Решение учителя 

// const convertDaysToMs = (days) => days * 24 * 3600 * 1000  // Перевод дней в миллисекунды  / 3600 это секунд в часе / 24 часа в дне / 1000 = миллисекунды

// console.log(convertDaysToMs(1));

// const addDays = (date, days = 1) => {
//     return new Date(date.getTime() + convertDaysToMs(days));
// }

// const date = new Date();
// console.log('before', date);
// const newDate = addDays(date, 5);
// console.log('after', newDate);
