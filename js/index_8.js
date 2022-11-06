"use strict";

// Как мы уже с вами разобрались, существует 3 вида функций: function expression, function
// declaration и стрелочная функция.
// Первым делом потренируемся их создавать. Вам необходимо создать 3 функции трех
// разных видов. Они должны принимать в себя параметр name и возвращать строку,
// СКАЧАНО С WWW.SW.HELP - ПРИСОЕДИНЯЙСЯ!
// подставляя туда этот параметр. Название у них должны быть следующими: getName1,
// getName2, getName3.
// Функции необходимо удовлетворять следующим условиям:
// 1. В каждую из этих функций должен быть передан 1 параметр name.
// 2. Из каждой функции с помощью return должно быть возвращено значение “Имя
// равно name”, где name - значение переданного в функцию параметра name.
// После вам необходимо вызвать каждую функцию и вывести возвращаемое из нее
// значение в консоль.

    // //function expression(вызывется в любом месте кода)
    // function getName1(name){
    //     return name;
    // }
    // let result = console.log(getName1('ROmka'));

    // //function declaration(вызывается после функции)
    // const getName2 = function(name){
    //     return name;
    // }
    // let result1 = console.log(getName2('Pisulek'));

    // //Стрелочная функция
    // const getName3 = (name) => {
    //     return name;
    // }
    // let result2 = console.log(getName3('pistron'));

// Задание #2
// Необходимо создать функцию getSumOfNumbers. Она будет считать сумму от 0 до
// переданного числа. Выберите любой из 3 типов при создании функции.
// getSumOfNumbers принимает в себя 2 параметра: number и type.
// Параметр number - это число, до которого будет считаться сумма. То есть, если было
// передано число 10, то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10).
// Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть 3-мя
// значениями: “odd”, “even” и “”. Если type равняется “odd”, то в сумму должны входить
// только нечетные числа, “even” - четные числа, пустая строка “” - все числа. По умолчанию
// параметр type должен быть равен odd.
// Функция getSumOfNumbers должна возвращать итоговую сумму с помощью return.


// const getSumOfNumbers = (number, type = 'odd') => {
//     let sum = 0;
//     for (let i = 0; i <= number; i += 1) {
//         const isEven = i % 2 === 0;
//         const isOdd = !isEven;
//         if (!type) {
//             sum += i;
//         } else if (isEven && type === 'even') {
//             sum += i;
//         } else if (isOdd && type === 'odd') {
//             sum += i;
//         }
//     }

//     return sum;
// }

// const result = getSumOfNumbers(5, 'even');
// console.log('result', result);

const getSumOfNumbers = (number, type = "odd") => {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        const isEven = i % 2 == 0;
        const isOdd = i % 2 != 0;
        if (type == "") {
            sum = sum + i;
        } else if (isEven && type == "even") {
            sum = sum + i;
        } else if (isOdd && type == "odd") {
            sum = sum + i;
        }
    }
    console.log(sum);
}

getSumOfNumbers(5, "");

//   Задание #3
//   Вам необходимо создать функцию getDivisorsCount, которая будет высчитывать
//   количество делителей для переданного числа. Она принимает в себя единственный
//   параметр number. По умолчанию он должен быть равен 1.
//   Если number меньше нуля либо является не целым (можно проверить при помощи
//   функции Number.isInteger(number)), то выводите в модальное окно при помощи alert
//   сообщение “number должен быть целым числом и больше нуля!”.

//    
const getDivisorsCount = (number = 1) => {
    if(!Number.isInteger(number)) {
        console.log(`${number} должен быть целым числом и больше нуля!`);
    } else {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            let del = number % i == 0;
            if(del) {
                 console.log(`Делители этого числа: ${i}`);
                 sum++;
                }
            }
            console.log(`количество делетилей: ${sum++}`);  
    }
};

getDivisorsCount(6);




