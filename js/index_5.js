"use strict";

//УРОК



//Задание 1 

// Задание #1
// В JavaScript есть 2 основных способа конкатенации (объединения) строк. Первый реализуется с помощью оператора +, второй - с помощью следующей конструкции `${}`.
// Примеры:
// const name = 'Максим'; const job = 'Front-End разработчик'; const result1 = name + ' ' + job; const result2 = `${name} ${job}`;
// Из этих 2-х способов рекомендуется использовать 2-й, потому что он более удобен и благодаря ему код становится более сжатым.
// Сейчас вам требуется создать 5 переменных с помощью const:
// 1. myName - ваше имя 2. programmingLanguage - язык програмирования 3. courseCreatorName - создатель данного курса 4. reasonText - причина, почему вы хотите стать веб-разработчиком 5. numberOfMonth - количество месяцев, которое вы уделили изучению JavaScript до начала курса
// Подставьте их с помощь 2-го способа конкатенации строк в данный текст.

const myName = 'Kirya',
      programmingLanguage = 'javaScript',
      courseCreatorName = 'vladilen',
      reasonText = 'money, relocate',
      numberOfMonth = '2';

let result = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!`;
console.log(result);

// Задание #2
// В прошлом задании вы написали текст и подставили в него ваши данные. Сейчас вы
// продолжите работу с этим текстом, поэтому сохраните его в переменную с let под
// названием “myInfoText”.
// Вам требуется выполнить следующие шаги по порядку:
// 1. C помощью метода replaceAll и toUpperCase вам необходимо изменить в
// переменной myInfoText все слова “JavaScript” на те же слова, только с прописными
// буквами (“JAVASCRIPT”). Присвойте переменной myInfoText новое значение с
// измененными словами “JavaScript”.
// 2. Выведите итоговую строку myInfoText в консоль.
// 3. Выведите в консоль длину строки myInfoText.
// 4. Выведите в консоль первый и последний символы строки myInfoText. Чтобы
// получить индекс последнего символа, требуется от длины строки вычесть единицу

    let myInfoText = result;
     newInfoText = myInfoText.replaceAll(programmingLanguage , programmingLanguage.toUpperCase());
     console.log(newInfoText);
     console.log('Символов:', myInfoText.length);
     console.log(myInfoText.slice(0, 1) + myInfoText.slice(259));
    //  console.log('1-й', myInfoText[0]);
    //  console.log('последний', myInfoText[myInfoText.length - 1]); // Вывести на экран первый и последний символ текста
    




// Задание #3
// В предыдущем задании вы научились форматировать строку, которая уже заранее
// определена. Но в современных веб-приложениях большинство данных вводит сам
// пользователь в текстовые поля. И часто пользователи могут напечатать строку
// неправильного формата. Веб-разработчики должны брать это в учет и поэтому сейчас мы
// с вами поработаем с такими случаями.
// Мы будем использовать функцию prompt. До этого мы уже работали с ней. Prompt
// показывает модальное окно с сообщением и текстовым полем. Данные, введенные
// пользователем в текстовое поле, мы можем сохранять в переменную.
// Пример:
// const userAnswer = prompt('Введите ваш ответ');
// Сейчас ваша задача состоит в том, чтобы с помощью prompt запросить у пользователя
// его имя. Передайте в prompt строку “Как вас зовут?” и введенный пользователем
// результат сохраните в переменную userName. Какое бы значение пользователь не ввел,
// вам требуется отформатировать строку userName по следующим условиям:
// 1. Все буквы должны быть строчными.
// 2. В начале и в конце строки не должно быть лишних пробелов.
// После выведите в модальное окно с помощью alert строку “Вас зовут userName”
// (замените userName на отформатированный текст, введенный пользователем).

const userName = prompt('Как вас зовут?');
alert(userName.trim().toLowerCase());

// let userName = prompt('Как вас зовут?');
// userName = userName.toUpperCase().trim();

// alert(`Вас зовут ${userName}`);


// Задание #4
// Действительно, текст, который вводит пользователь, иногда может быть совсем
// непредсказуемым. И вы научились с этим работать. Поздравляю!
// Но в современных веб-приложениях обычно есть не одно текстовое поле. Вспомните
// любую форму регистрации. Там минимум 2 текстовых поля (например, логин и пароль) и
// для каждого из них нужно форматировать строку по особенному.GФаф
// Сейчас в коде из задания 3 вам необходимо создать еще одно модальное окно, в
// котором будет запрашиваться возраст пользователя. Передайте в prompt строку “Сколько
// вам лет?” и введенный пользователем результат сохраните в переменную userAge.
// Конечный результат должен удовлетворять следующим условиям:
// 1. Значение должно быть преобразовано к типу данных number.
// 2. В начале и в конце строки не должно быть лишних пробелов.
// После выведите в модальное окно с помощью alert строку “Вас зовут userName и вам
// userAge лет” (замените userName и userAge на отформатированный текст, введенный
// пользователем).


const userAge = +prompt('Сколько вам лет?').trim();
alert(`Вас зовут ${userName} и вам ${userAge} лет`);


// Задание #5
// Вам необходимо создать программу, которая по введенным пользователем числам и
// строке будет обрезать эту строку.
// Через prompt требуется запросить следующие данные:
// 1. Строка, которую нужно обрезать. Сохраните ее в переменную userString. Также
// учтите, что в строке не должно быть лишних пробелов в начале и в конце
// (используйте trim). В prompt передавайте сообщение “Введите текст для обрезки”.
// 2. Число, которое будет обозначать индекс, с которого начнется обрезка строки. В
// prompt передавайте сообщение “Введите индекс, с которого нужно начать обрезку
// строки”. Сохраните это значение в переменную startSliceIndex.
// 3. Число, которое будет обозначать индекс, с которого закончится обрезка строки. В
// prompt передавайте сообщение “Введите индекс, которым нужно закончить обрезку
// строки”. Сохраните это значение в переменную endSliceIndex.
// После выведите через alert сообщение “Результат: string”, где string - итоговая
// обрезанная строка.
// Примечание: учтите, что prompt всегда возвращает тип данных string.


const userString = prompt('Строка, которую нужно обрезать').trim(),
      startSliceIndex = prompt('Введите индекс, с которой нужно начать обрезку строки'),
      endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');
      alert(userString.slice(startSliceIndex, endSliceIndex));
      console.log(userString.trim());

// const userString = prompt('Введите текст для обрезки');
// let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
// let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');
// startSliceIndex = Number(startSliceIndex);
// endSliceIndex = Number(endSliceIndex);

// const resultString = userString.trim().slice(startSliceIndex, endSliceIndex);
// alert(`Результат: ${resultString}`)

// Задание #6
// Вам необходимо реализовать программу, которая будет обрезать текст до определённого
// слова.
// Необходимо запросить у пользователя 2 значения через prompt:
// 1. Любой текст. В prompt передавайте сообщение “Введите текст”. Сохраните это
// значение в переменную userText.
// 2. Слово, которое нужно найти в тексте userText. В prompt передавайте сообщение
// “Введите слово из текста”. Сохраните значение, которое напишет пользователь, в
// переменную wordFromText.
// Также учтите, что в строках не должно быть лишних пробелов в начале и в конце
// (используйте trim).
// Вам требуется найти индекс слова wordFromText в строке userText и сохранить этот
// индекс в переменную indexOfWord. После обрежьте строку userText начиная с нулевого
// индекса и заканчивая индексом, хранящимся в переменной indexOfWord.
// С помощью alert отобразите сообщение “Результат: string”, где string - итоговая
// обрезанная строка.


const userText = prompt('Введите текст').trim(),
      wordFromText = prompt('Введите слово из текста').trim(),
      indexOfWord = userText.indexOf(wordFromText);
      result = userText.slice(0, indexOfWord);
      alert(result);

// let userText = prompt('Введите текст');
// userText = userText.trim();
// let wordFromText = prompt('Введите слово из текста');
// wordFromText = wordFromText.trim();

// const indexOfWord = userText.indexOf(wordFromText);
// const resultString = userText.slice(0, indexOfWord);
// alert(`Результат: ${resultString}`)


