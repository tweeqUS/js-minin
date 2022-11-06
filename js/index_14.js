"use strict";

// //ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ 

const tasksBlock = document.id = '1'; //Получение элемента по ID 
console.log(tasksBlock);

const allNavButtons = document.getElementsByClassName('main-navigation__button-item'); //Получение элемента по имени класса
console.log(allNavButtons);

const allButtons = document.getElementsByTagName('button');//Получение элемента по тегу
console.log(allButtons);


//querySelector

const tasksBlock2 = document.querySelector('#tasks'); //Получение элемента по querySelector //Для ID, добавляется "#"
console.log(tasksBlock2);

const mainNavigation = document.querySelector('.main-navigation');
console.log(mainNavigation);

const firstButton = document.querySelector('button');
console.log(firstButton);

const thirdNavigationButton = document.querySelector('[data-button-id="3"]');//Получить элемент по АТРИБУТУ "[]"
console.log(thirdNavigationButton);


//querySelectorAll
const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item') //Получить ВСЕ элементы
console.log(allNavigationButtons);

//Перебор элементов с помощью .forEach
allNavigationButtons.forEach((index, item) => {
    console.log(index, item);
})

const createTaksBlock = document.querySelector('.create-task-block');
const submitButton = createTaksBlock.querySelector('[type="submit"]');
console.log(submitButton);

//ЗАЧЕМ использовать submitButton , когда мы уже получили  createTaksBlock ?  (Для скорости доступа к элементу)


//СВОЙСТВА ЭЛЕМЕНТОВ
const tasksWrapper = document.querySelector('.tasks_wrapper');
console.log(tasksWrapper.className); //Показать className

tasksWrapper.className = 'tasks_wrapper_1' //Заменить значение className
console.log(tasksWrapper.className);

const taskBlock = document.querySelector('#tasks');
console.log(taskBlock.id); //Показать ID

taskBlock.id = 'new_tasks'; //ЗАМЕНИТЬ ID
console.log(taskBlock.id); //Показать ID


const submitButton1 = document.querySelector('.create-task-block__button');
console.log(submitButton1.innerText);
console.log(submitButton1.textContent);//Аналог innerText
submitButton1.textContent = 'Создать новую задачу';


//InnerHTML

console.log(taskBlock.innerHTML);
// taskBlock.innerHTML = '<b>taskBlock</b>';

//CHILDREN

const createTaksForm = document.querySelector('.create-task-block');
console.log(createTaksForm.children); //Показывает всех детей .сrate-task-block // ДОСТУПНЫ только для чтения


//data-атрибуты
const firstNavButton = document.querySelector('.main-navigation__button-item');
console.log(firstNavButton.dataset); //ПОЛУЧИТЬ АТРИБУТ
console.log(firstNavButton.dataset.buttonId); //ПОЛУЧИТЬ ЗНАЧЕНИЕ АТРИБУТА
firstNavButton.dataset.buttonId = "10" //ЗАМЕНИТЬ ЗНАЧЕНИЕ АТРИБУТА

//STYLE
console.log(firstButton.style)//Показать все стили
firstNavButton.style.fontWeight = '900';
firstNavButton.style.boxShadow = 'inset 0 0 0 3px #000';


//РАБОТА с элементами (создание новых элементов, работа с их методами, изменение)

//CreateElement
const newNavButton = document.createElement('a'); //Cоздаем тег
newNavButton.className = 'main-navigation__button-item'; //Cоздаем класс
newNavButton.href = "#tasks_expired"; //Cоздаем ссылку
newNavButton.dataset.buttonId = '4'; //Cоздаем дата атрибут
newNavButton.textContent = 'Просроченные задачи'; //Cоздаем текст 
console.log(newNavButton);

//append (добавляет в конец родителя) prepend(добавляет в начало родителя)
const mainNavigation1 = document.querySelector('.main-navigation');
mainNavigation1.append(newNavButton); 

//insertAdjacentElement ('куда вставляем' , какой элемент);
// <!-- beforebegin -->
// <p>
// <!-- afterbegin -->
// foo
// <!-- beforeend -->
// </p>
// <!-- afterend -->

// mainNavigation.insertAdjacentElement('afterbegin' , newNavButton);


//remove (удаление элементов)
//mainNavigation.remove(); 

//closest (находит ближайшего родителя и выводит всю верстку либо "тот" элемент перед точкой taskItemText)
const taskItemText = document.querySelector('.task-item__text');
console.log(taskItemText);

const taskItem = taskItemText.closest('.task-item');
console.log(taskItem);


//classList; add, remove, toogle

const firstNavigationButton = document.querySelector('.main-navigation__button-item');
firstNavigationButton.classList.add('main-navigation__button-item_selected');// Добавление КЛАССА 
firstNavigationButton.classList.remove('main-navigation__button-item_selected');// Удаленние КЛАССА
firstNavigationButton.classList.toggle('main-navigation__button-item_selected');// Удаляет класс если он есть. Добавляет класс, если его  нет


//РАБОТА С АТРИБУТАМИ
const createTaskInput = document.querySelector('.create-task-block__input');
console.log(createTaskInput.hasAttribute('type_1')); //Показывает есть ли данный атрибут (True или False)
console.log(createTaskInput.getAttribute('value')); //Показывает данные атрибута
createTaskInput.removeAttribute('placeholder'); //Удалить атрибут
createTaskInput.setAttribute('placeholder', 'Создать новую задачу') // Добавить атрибут и значение атрибута


//События addEventListener
// const firstNavButton1 = document.querySelector('.main-navigation__button-item');
// firstNavButton.addEventListener('click', (event) => {
//     // console.log('click mothefacker');
//     console.log(event.target); //target = выводит весь элемент по которому мы кликаем
//     // const target = event.target; //1 способ
//     const { target } = event; //2 способ (современный)
//     target.classList.add('main-navigation__button-item_selected_1');// Добавляем свойство из CSS
// });

//Делаем обработчик событий на все кнопки
const allNavButtons1 = document.querySelectorAll('.main-navigation__button-item');

allNavButtons1.forEach((button) => {
    button.addEventListener('mouseover', (event) => {
        allNavButtons1.forEach((button) => { //1 = удаляем СSS свойство везде
            button.classList.remove('main-navigation__button-item_selected_1');
        });

        const { target } = event;
        target.classList.add('main-navigation__button-item_selected_1'); //Добавляем СSS свойство
    });
})


//submit (события на формы (form))

const createTaksForm1 = document.querySelector('.create-task-block');
createTaksForm1.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault(); //значение по умолчанию

    const { target } = event;
    const taskNameInput = target.taskName;
    const inputValue = taskNameInput.value;
    if(inputValue) {
        alert(`Вы создали задачу ${inputValue}`);
    } else {
        alert(`Введите правильные данный!`);
    }
    console.log(taskNameInput);
});



// keydown , keyup

// document.addEventListener('keydown', (event) => {  //Cрабатывает при нажатии кнопки клавиатуры
//     const { key} = event;
//     console.log(key);
//     const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`);
//     if (taskItemToDelete) {
//         const deleteConfirm = confirm('Вы действительно хотите удалить данную задачу?');
//         if (deleteConfirm) {
//             taskItemToDelete.remove();
//         }
//     }
// });


document.addEventListener('keyup', (event) => { //Cрабатывает при отжатии кнопки клавиатуры
    const { key} = event;
    console.log(key);
    const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`);
    if (taskItemToDelete) {
        const deleteConfirm = confirm('Вы действительно хотите удалить данную задачу?');
        if (deleteConfirm) {
            taskItemToDelete.remove();
        }
    }
});


// mouseover 

const createTooltip = (text) => {
    const tooltip = document.createElement('span');
    tooltip.textContent = text;
    tooltip.className = 'tooltip';

    return tooltip;
};


document.addEventListener('mouseover', (event) => {  
    const { target } = event; 
    // console.log(target);
    const isOverDeleteButton = target.className.includes('task-item__delete-button'); // Если наш класснейм будет включать какой-то класс, тогда наша мышка находится над КНОПКОЙ "Удалить"
    if (isOverDeleteButton) { //Если курсор мыши находится над "Удалить"
        const taskItemHTML = target.closest('.task-item'); //Находит класс у родителя кнопки
        const taskId = taskItemHTML?.dataset.taskId;// Находит ID
        if (taskId) { // Если курсор мышки наведен на задачу под номером
            const tooltipHTML = createTooltip(`Удалить задачу под номером ${taskId} ?`);//
            target.prepend(tooltipHTML); //Помещаем target вниз
        }
    }
});


document.addEventListener ('mouseout', (event) => {
    const { target } = event;//Тот элемент с которого мы увели мышку
    const isOutFromDeleteButton = target.className.includes('task-item__delete-button');
    if (isOutFromDeleteButton) {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) { //Если tooltip был найден , то => 
            tooltip.remove();
        }
    }
});

//mousemove = когда происходит движение курсора мышки

// document.addEventListener('mousemove', (event) => {
//     console.log(event);
// });


//contextmenu = нажатие правой кнопки мыши

document.addEventListener('contextmenu', (event) => {
    console.log(event);
    event.preventDefault(); //Отключени контекстного меню
});


// change , input

//валидация
const checkTaskNameInputOnValidation = (value) => {
    if (!value || value.includes('@')) { //Если значений нет и значение "@"
        return false; 
    }

    return true;
};

const createTaskBlock = document.querySelector('.create-task-block');
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input');

taskNameInput.addEventListener('input', (event) => {  //можно использовать change
    const { target } = event; // Присвоили target = event(событие)
    const { value } = target; //Присвоили value значение target
    const isValid = checkTaskNameInputOnValidation(value); //Проверяем валидность 
    const messageBlockFromDOM = document.querySelector('.error-message-block');
    if(!isValid) {
        const newMessageBlock = document.createElement('span'); //Cоздаем тег span
        newMessageBlock.className = 'error-message-block'; //Создаем ClassName
        newMessageBlock.textContent = 'Ошибка! Текст пустой или содержит "@"'; //Пишем текст ошибки
        createTaskBlock.append(newMessageBlock); //Помещаем reateTaskBlock в конец newMessageBlock(текс ошибки))
    } else if (isValid && messageBlockFromDOM) { //Если в блоке что-то написано и не написан символ "@"
        messageBlockFromDOM.remove();//тогда мы удаляем форму с экрана
    }

});


