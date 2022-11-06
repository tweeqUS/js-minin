"use strict"
const solariseOfDevelopers = [400, 500, 600, 2000, 350];
console.log(solariseOfDevelopers);
console.log(solariseOfDevelopers.length);

//Добавление массива
const newSeniorDeveloperSolary = 5000;
solariseOfDevelopers.push(newSeniorDeveloperSolary, 5001, 5002); //Добавление массива в конец списка
solariseOfDevelopers.unshift(100, 101, 102); //Добавление элемента в начало списка


//Удаление элемента массива
const firstRemovedElement = solariseOfDevelopers.shift(); //Удаление элемента в начале массива

const lastRemovedElement = solariseOfDevelopers.pop(); //Удаляет элемент в конце массива

console.log(firstRemovedElement); //Показать удалённый элемент
console.log(lastRemovedElement); //Показать удалённый элемент
console.log(solariseOfDevelopers); //Возвращает итоговый массив

//Изменение элементов

solariseOfDevelopers[4] = 6000;
solariseOfDevelopers[6] = 10000;
console.log(solariseOfDevelopers); //Возвращает итоговый массив


//iterate

const developerName = ['maxim', 'roma', 'kirya', 'knyaz'];

// for (начальное значение; условие; шаг)

for (let i = 0; i < developerName.length; i++){
    console.log(i); //Покажет индексы
    console.log('pisulek',developerName[i]);
}

// for of

for(const name of developerName){
    console.log('pisulek', name);
}

//forEach

developerName.forEach((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);

});

//map -изменияет кажджый элемент мкассива, возвращает ноый массив , элементы измеененые с помощью функции callback,вернуть значение которое можем изменить
const solariseOfDevelopersOne = [400, 500, 600, 2000, 350];


const updateSolary = solariseOfDevelopers.map((salary, index, array) => { 
    return salary * 2;
});
console.log(updateSolary);

//filter
const filteredSolary = solariseOfDevelopersOne.filter((salary, index, array) => {
    return salary > 600; // return index % 2 === 0;(Вывести четные index)
});
console.log(filteredSolary);

//find 

const searchedSalary = solariseOfDevelopersOne.find((salary) => { //Поиск элемента массива, ввыводит первый подходящий элемент в массиве
    return salary === 500;
});
console.log(searchedSalary);

//findIndex
const searchedIndex = solariseOfDevelopersOne.findIndex((salary) => { //поиск индеска элемента массива
    return salary === 350;
});
    console.log(searchedIndex);

///some, every

const elementExists = solariseOfDevelopersOne.some((salary) => { //Вывожит true or false в зависимости от условия
    return salary > 400;
}); 
    console.log(elementExists);

    const allElementExists = solariseOfDevelopersOne.every((salary) => { //Вывожит true если все элементы массива удовлетворяют условию , иначе false
        return salary > 0;
    }); 
        console.log(allElementExists);



//reduce

const sum = solariseOfDevelopersOne.reduce((acc, item, index, arr) => {
    console.log(acc, item);
    return acc + item; //Сложить элемнты в массиве
},0);
    console.log(sum);


//sort
solariseOfDevelopersOne.sort((a, b) => {
    return a - b;
});
console.log(solariseOfDevelopersOne);

const developerNameOne = ['maxim', 'roma', 'kirya', 'knyaz'];
    developerNameOne.sort((a, b) => { //Сортировка строковых значений массива
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }

        return  0;
    });
        console.log(developerNameOne);


//splice (изменяет массив)

const cars = ['zaz', 'uaz', 'azlk'];
    const removeCars = cars.splice(0, 2, 'lada', 'gaz'); // Удаление первого и второго элемента и замена
    console.log(removeCars);

    console.log(cars);

//slice - вырезает из массива(не изменяет массив)

const ageOfDeveloper = [27, 28 , 77, 33];
    console.log(ageOfDeveloper.slice(0, 2));
const sliceAgeOfDeveloper = ageOfDeveloper.slice(0, 2);
console.log(ageOfDeveloper);
console.log(sliceAgeOfDeveloper);

//indexOf поиск индекса по элементу

const favoriteFood = ['ice cream', 'coffee', 'coke'];
const indexFavoriteFood = favoriteFood.indexOf('coke');
    console.log(indexFavoriteFood);

//includes ( true or false)

const technologies = ['javascript', 'htnl', 'css'];
const includecTechnologies = technologies.includes('css');
    console.log(includecTechnologies);


//split and join (split строку в массив) (join массив в строку)

const listOfOdrders = 'башмаки, труханы, кросы, носок';
    const listOfOdrdersArray = listOfOdrders.split(', '); //split(', ') в скобках пишем разделитель через запятую и пробел после запятой обязателен
    console.log(listOfOdrdersArray);

const orderString = listOfOdrdersArray.join(', ');
console.log(orderString);

//reverse разварачивает массив в обратном проядке. Изменяет массив
technologies.reverse();
console.log(technologies);

//concat объединение массивов
//1 способ
const currentDeveloper = ['roma', 'kirya'];
const newDeveloper = ['max', 'julia', 'knyaz'];
const allDevelopers = currentDeveloper.concat(newDeveloper);
console.log(allDevelopers);

//2 способ(spread ...)
const currentDeveloperOne = ['alex', 'paul'];
const newDeveloperOne = ['mike', 'tirese'];
const allDevelopersOne = [
    ...currentDeveloperOne,
    ...newDeveloperOne,
];
    console.log(allDevelopersOne);


    


// Задание #1
// Представьте, что мы разрабатываем систему очередей для какого-либо заведения.
// Например, для почты. Для этого мы создали массив peopleWaiting, который отображает
// текущий статус очереди.
// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария',
// 'Светлана', 'Артем', 'Глеб'];
// По логике, следующую посылку по почте получит Кристина, после нее уже 1-м в очереди
// будет Олег.
// СКАЧАНО С WWW.SW.HELP - ПРИСОЕДИНЯЙСЯ!
// Сейчас вам необходимо реализовать следующую логику в коде шаг за шагом:
// 1. Кристина и Олег получили посылки и ушли из очереди. Вам необходимо удалить их
// из массива.
// 2. Теперь подошла очередь к Кириллу. И неожиданно сотрудница почты говорит, что
// скоро у них обеденный перерыв и она успеет обслужить только Кирилла. Поэтому
// все остальные люди, стоящие за Кириллом, решили не ждать, когда закончится
// обед и просто ушли из отделения почты. Вам необходимо сначала удалить
// Кирилла из массива peopleWaiting, а затем удалить людей, которые не успели
// получить посылки.
// Когда какой-либо человек получает посылку, необходимо вывести в модальном окне
// сообщение “name получил(а) посылку. В очереди осталось length человек.” (Замените
// name на имя человека, получившего посылку, а length - на количество человек, которые
// остались в очереди).
// Если же человек не получил посылку и ушел из очереди, то выведите в модальном окне
// через alert сообщение “name не получил(а) посылку и ушел(ла) из очереди”.
// Рекомендуется создать 2 функции: giveParcel - для выдачи посылки и удаления клиента
// из начала массива, leaveQueueWithoutParcel - для удаления клиента, который не
// получил посылку из конца списка.


// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
// let delPeople = peopleWaiting;

// const giveParcel = () => {
//     let delPeople = peopleWaiting.splice(0, 1);
//     alert(`${delPeople} получил посылку. В очереди осталось ${peopleWaiting.length} человек`);
// };

// giveParcel();
// giveParcel();
// giveParcel();
// console.log(delPeople);

// let delPeopleEnd = delPeople;

// const leaveQueueWithoutParcel = () => {
//     let delPeopleEnd = delPeople.splice(0 , 1);
//     alert(`${delPeopleEnd} не получил посылку и ушел из очереди. В очереди осталось ${delPeople.length} человек`);
// };

// leaveQueueWithoutParcel();
// leaveQueueWithoutParcel();
// leaveQueueWithoutParcel();
// leaveQueueWithoutParcel();
// console.log(delPeopleEnd);



// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

// const giveParcel = () => {
//     const clientName = peopleWaiting.shift();
//     alert(`${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
// }

// const leaveQueueWithoutParcel = () => {
//     const clientName = peopleWaiting.pop();
//     alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`);
// }

// giveParcel();
// giveParcel();
// giveParcel();

// for (let i = peopleWaiting.length; i > 0; i -= 1) {
//     leaveQueueWithoutParcel();
// }


// Задание #2
// Вам необходимо создать функцию getSumOfSequence, которая будет создавать массив
// из чисел и высчитывать сумму первого и последнего элементов массива.
// Функция принимает в себя один параметр number. Используя этот параметр, нужно
// создать массив из чисел от 1 до number. Для заполнения массива элементами
// используйте цикл for. (Например, если был передан number равный 5, то массив должен
// выглядеть следующим образом: [1, 2, 3, 4, 5])
// Функция getSumOfSequence должна возвращать сумму первого и последнего элементов
// итогового массива.

let arr = []; 
const getSumOfSequence = (number) => {
    for (let i = 1; i <= number; i++) {
    arr.push(i);
}
let arrNew = arr;
console.log(arrNew);
let sum = 0;
sum = arrNew[0] + arrNew[arrNew.length -1];
console.log(sum);
    
};
getSumOfSequence(5);

// 1
// 1 2
// 1 2 3 
// 1 2 3 4
// 1 2 3 4 5


// Задание #3
// Представьте, что у вас есть друг Алексей, который является владельцем кофейни. Он
// хочет сделать сайт для этой кофейни, чтобы люди могли заказывать доставку кофе на
// дом. Самая главная функция, которую хочет видеть Алексей, это поиск кофе по названию.
// Ваш друг просит вас помочь ему с разработкой сайта.
// Изначально у вас есть массив coffees, в котором хранятся все виды кофе, которые есть в
// кофейне у Алексея. Напитки распределены в порядке популярности среди клиентов. Т.е.
// кофе “Latte” - самый популярный.
// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// С помощью функции prompt вам необходимо запрашивать название кофе. Передайте в
// prompt сообщение “Поиск кофе по названию:”. Сохраните значение, которое ввел
// пользователь в переменную coffeeName.
// Если введенное пользователем название кофе существует, то отобразите сообщение с
// помощью alert “Держите ваш любимый кофе coffee. Он number-й по популярности в
// нашей кофейне.”, где coffee - название найденного кофе, number - номер найденного кофе
// в массиве coffees. Если же кофе не был найден, то отобразите сообщение “К сожалению,
// такого вида кофе нет в наличии”.
// Условия:
// 1. Название кофе должно быть регистронезависимым. Т.е. если пользователь
// напечатает “lATte”, то должен показаться результат с кофе “Latte”
// 2. Необходимо использовать findIndex.


let coffees = ['Latte', 'Cappuccino', 'Americano'];
let coffeeName = prompt('Поиск кофе по названию', '').trim();
    coffeeName = coffeeName[0].toUpperCase() + coffeeName.slice(1).toLowerCase();
console.log(coffeeName);

const searchedCoffees = coffees.find((item) => { 
    return item == coffeeName; 
});

const searchIndex = coffees.findIndex((item ) => {
    return item == coffeeName;
});

if (coffeeName == searchedCoffees) {
    alert(`Держите ваш любимый кофе ${coffeeName}. Он ${searchIndex + 1} по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии.');
}


let favoriteCoffeeName = prompt('Поиск кофе по названию:');
favoriteCoffeeName = favoriteCoffeeName.trim().toLocaleLowerCase();

const favoriteCoffeeIndex = coffees.findIndex((coffee) => coffee.toLocaleLowerCase() === favoriteCoffeeName);
const favoriteCoffee = coffees[favoriteCoffeeIndex];
if (favoriteCoffee) {
    alert(`Держите ваш любимый кофе ${favoriteCoffee}. Он ${favoriteCoffeeIndex + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}


// Задание #4
// Вы разработали главную функциональность, которую хотел видеть Алексей на своем сайте. Он говорит вам большое спасибо, потому что благодаря сайту 
// в кофейне увеличилось количество продаж. Теперь Алексей захотел поднять цену на кофе, чтобы прибыли было еще больше.
// У вас изначально есть 2 массива: coffees (хранит названия кофе) и prices (хранит цены на кофе). Индексы для названий кофе и цен взаимосвязаны. 
// Т.е. “Latte” стоит 1.5 евро, “Cappuccino” - 1 евро, и т.д.
// const coffees = ['Latte', 'Cappuccino', 'Americano']; const prices = [1.5, 1, 2];
// Вам необходимо создать новый массив updatedPrices, который будет содержать те же
// числа из массива prices, но только увеличенные на 0.5.
// После подъема цен вам необходимо уведомить об этом клиентов кофейни, поэтому выведите для каждого типа кофе сообщение через alert “Кофе name сейчас стоит price евро”, 
// где name - название кофе, а price - обновленная цена на кофе.
// Условия:
// 1. Необходимо использовать методы массивов map и forEach

const prices = [1.5, 1, 2];

let updatedPrices = prices.map((item) => {
    return item + 0.5;
});

coffees.forEach((item, index) => {
    alert(`Кофе ${item} сейчас стоит ${updatedPrices[index]} евро.`);
});



// Задание #5
// Последнее, что хочет видеть Алексей на своем сайте - это система оценок работы кофейни. 
// Владельцу необходимо знать мнение клиентов, чтобы исправлять недочеты в своей работе.
// Для начала вам необходимо создать пустой массив clientsEstimations, в котором будут хранится оценки клиентов кофейни. 
// Также создайте функцию askClientToGiveEstimation, которая должна выводить сообщение “Как вы оцениваете нашу кофейню от 1 до 10?” через prompt. 
// Конечный результат, который введет пользователь, должен быть типом данных number. Если было введено число от 1 до 10, то добавьте эту оценку в массив clientsEstimations, 
// иначе же никаких действий не совершайте.
// Для добавления оценок вызовите функцию askClientToGiveEstimation 5 раз.
// Рекомендуется это сделать через цикл for.
// После того, как оценки будут добавлены, вам необходимо посчитать положительные и отрицательных оценки. 
// Положительной оценкой является число больше 5, отрицательной - число, меньшее за 5 либо равное 5. 
// Выведите через alert сообщение “Всего положительных оценок: goodEstimations; Всего отрицательных оценок: notGoodEstimations”,
//  где goodEstimations - количество положительных оценок, а notGoodEstimations - количество отрицательных оценок.
// Условия:
// 1. В решение должен быть использован метод массивов filter.


let clientsEstimations = [];

const askClientToGiveEstimation = () => {
    let rating = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?', '');
    if (rating <= 10 || rating >= 1) {
        clientsEstimations.push(rating);
    }
};

for(let i = 1;i <= 5; i++) {
    askClientToGiveEstimation();
};

console.log(clientsEstimations);
const noGoodEstimations = clientsEstimations.filter((item) => {
    return item <= 5;
});
console.log('Отрицательные оценки', noGoodEstimations);

const goodEstimations = clientsEstimations.filter((item) => {
    return item > 5 && item <= 10;
});
console.log('Положительные оценки', goodEstimations);

alert(`Всешго положительных оценок ${goodEstimations.length}. Отрицательных ${noGoodEstimations.length}`);



// Задание #6
// Вам дан массив чисел.
// const numbers = [10, 4, 100, -5, 54, 2];
// Необходимо посчитать сумму кубов всех чисел в массиве. 
// Например, для массива [1, 5, 9] должен быть следующий результат: 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// Решите данную задачу 4-мя способами: 
// 1. Через цикл for 
// 2. Через цикл for of 
// 3. Через метод forEach 
// 4.  Через метод reduce Для данного массива numbers сумма кубов должна равняться 1158411.

let numbers = [10, 4, 100, -5, 54, 2];
let arr1 = []

// FOR OF
const s = () => {
for (const i of numbers) {
let squared = (i ** 3);
 arr1.push(squared);
}
console.log(arr1);

let sum = 0;
for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
console.log(sum);
};
s();


//reduce
const squaredOfSum1 = numbers.reduce((acc, item) => {
    console.log(acc, item);
    return acc + (item ** 3); //Сложить элемнты в массиве
},0);
console.log(squaredOfSum1);


//forEach


const sqrt = numbers.forEach((item, index) => {
    let sqrt1 = item ** 3;
    arr1.push(sqrt1);
    console.log(arr1);
});

let sum3 = 0;
for (i = 0; i < arr1.length; i++) {
    sum3 += arr1[i];
}
console.log(sum3);


//Решение  учителя
// let sum1 = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum1 += numbers[i] ** 3;
// }
// console.log('sum1', sum1);

// // 2. for of

// let sum2 = 0;
// for (const number of numbers) {
//     sum2 += number ** 3;
// }
// console.log('sum2', sum2);

// // 3. forEach

// let sum3 = 0;
// numbers.forEach((number) => {
//     sum3 += number ** 3;
// });
// console.log('sum3', sum3);

// // 4. reduce

// const sum4 = numbers.reduce((acc, number) => {
//     return acc + number ** 3;
// }, 0);
// console.log('sum4', sum4);