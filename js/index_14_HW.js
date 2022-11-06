"use strict";

// Задание #1
// Вам дан HTML код.
// Необходимо создать такую же структуру HTML-элемента через JavaScript и добавить итоговый элементы внутрь тега body.
// Решите задачу 2-мя способами: 
// 1. через innerHTML; 
// 2. через document.createElement.
// <form class="create-user-form"> <label>
// Имя
// <input type="text" name="userName" placeholder="Введите ваше имя">
// </label>
// <label>
// Пароль
// <input type="password" name="password" placeholder="Придумайте Пароль">
// </label>
// <button type="submit">
// Подтвердить </button> </form>


// const newElement = document.createElement('div');
// const navigation1 = document.querySelector('#tasks');

// //1 вариант
// newElement.innerHTML = `
// <form class="create-user-form"> 
// <label>
// Имя
// <input type="text" name="userName" placeholder="Введите ваше имя">
// </label>
// <label>
// Пароль
// <input type="password" name="password" placeholder="Придумайте Пароль">
// </label>
// <button type="submit">
// Подтвердить </button> </form>
// `;

// navigation1.insertAdjacentElement('afterend', newElement);

// //2 вариант
// const newElementForm = document.createElement('form');

// newElementForm.className = 'create-user-form';
// newElementForm.innerHTML = `
// <label>
// Имя
// <input type="text" name="userName" placeholder="Введите ваше имя">
// </label>
// <label>
// Пароль
// <input type="password" name="password" placeholder="Придумайте Пароль">
// </label>
// <button type="submit">
// Подтвердить </button>
// `;
// newElementForm.style.margin = "10px 0px 0px 0px";
// newElement.insertAdjacentElement('afterend', newElementForm);



// //Решение учителя  1 задание

// //1 способ 

// // 1-й способ
// // document.body.innerHTML = `
// //        <form class="create-user-form">
// //        <label>
// //            Имя
// //            <input type="text" name="userName" placeholder="Введите ваше имя" />
// //        </label>
// //        <label>
// //            Пароль
// //            <input type="password" name="password" placeholder="Придумайте Пароль" />
// //        </label>
// //        <button type="submit">
// //            Подтвердить
// //        </button>
// //    </form>
// // `;




// // 2-й способ
// const createInputWithLabel = (
//     label, inputType, inputName, placeholder,
// ) => {
//     const labelContainer = document.createElement('label');
//     labelContainer.innerText = label;

//     const inputElement = document.createElement('input');
//     inputElement.type = inputType;
//     inputElement.name = inputName;
//     inputElement.placeholder = placeholder;

//     labelContainer.append(inputElement);

//     return labelContainer;
// };

// const formContainer = document.createElement('form');
// formContainer.className = 'create-user-form';
// const userNameLabel = createInputWithLabel(
//     'Имя', 'text', 'userName', 'Введите ваше имя',
// );
// const passwordLabel = createInputWithLabel(
//     'Пароль', 'password', 'password', 'Придумайте Пароль',
// );
// const confirmButton = document.createElement('button');
// confirmButton.type = 'submit';
// confirmButton.innerText = 'Подтвердить';

// formContainer.append(userNameLabel, passwordLabel, confirmButton);
// document.body.prepend(formContainer);

//Задание 2


const tasks = [ 
    {
        id: '1138465078061', 
        completed: false, 
        text: 'Посмотреть новый урок по JavaScript', 
    },
    {
        id: '1138465078062', 
        completed: false,
        text: 'Выполнить тест после урока', },
    {
        id: '1138465078063', 
        completed: false, 
        text: 'Выполнить ДЗ после урока', 
    },
]

const taskList = document.querySelector('.tasks-list');


//1 РЕШЕНИЕ 

const createTaskItem = (taskId, taskText) => {
   
//Функция для формирования input и label
const createInputWithLabel = (
    inputClass, inputType,
    ) => {
        const inputElement = document.createElement('input');
        inputElement.className = inputClass;
        inputElement.type = inputType;
        inputElement.id = `task-${taskId}`;
        
        return inputElement;
    };

    //DIV
const divOne = document.createElement('div');
divOne.className = 'task-item';
divOne.dataset.taskId = taskId;

const divTwo = document.createElement('div');
divTwo.className = 'task-item__main-container';

const divThree = document.createElement('div');
divThree.className = 'task-item__main-content';   


//Формирование INPUT и Label
const newInputOfLabel = createInputWithLabel (
'checkbox-form__checkbox', "checkbox",
)

//Форма      
const form = document.createElement('form');
form.className = 'checkbox-form';

//label
const labelContainer = document.createElement('label');
labelContainer.htmlFor = `task-${taskId}`;

//SPAN
const newSpan = document.createElement('span');
newSpan.className = 'task-item__text';
newSpan.innerText = taskText;


//Button
const newBaton = document.createElement('button');
newBaton.className = 'task-item__delete-button';
newBaton.dataset.deleteTaskId = `task-${taskId}`;
newBaton.innerText = 'Удалить';


form.append(newInputOfLabel, labelContainer);
taskList.insertAdjacentElement('afterbegin', divOne);
divOne.insertAdjacentElement('afterbegin', divTwo);
divTwo.insertAdjacentElement('afterbegin', divThree);
divThree.insertAdjacentElement('afterbegin', form);
form.insertAdjacentElement('afterend', newSpan);
divThree.insertAdjacentElement('afterend', newBaton);

return divOne;
};





        
 // 2 РЕШЕНИЕ    
// taskList.innerHTML = "";

// tasks.forEach((item) => {
//     taskList.innerHTML += `
//     <div class="task-item" data-task-id="${item.id}"> 
//     <div class="task-item__main-container">
//         <div class="task-item__main-content">
//             <form class="checkbox-form"> 
//             <input class="checkbox-form__checkbox" type="checkbox" id="${item.id}">
//             <label for="${item.id}"></label>
//             </form>
//             <span class="task-item__text">${item.text}</span>
//         </div>
//         <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">Удалить</button>
//     </div> 
// </div>
//     `;
// });


//Решение учителя

// const createTaskItem = (taskId, taskText) => {
//     const taskItem = document.createElement('div');
//     taskItem.className = 'task-item';
//     taskItem.dataset.taskId = taskId;

//     const taskItemMainContainer = document.createElement('div');
//     taskItemMainContainer.className = 'task-item__main-container';

//     const taskItemMainContent = document.createElement('div');
//     taskItemMainContent.className = 'task-item__main-content';

//     taskItem.append(taskItemMainContainer);
//     taskItemMainContainer.append(taskItemMainContent);

//     const checkboxForm = document.createElement('form');
//     checkboxForm.className = 'checkbox-form';

//     const inputCheckbox = document.createElement('input');
//     inputCheckbox.type = 'checkbox';
//     inputCheckbox.className = 'checkbox-form__checkbox';
//     const inputId = `task-${taskId}`;
//     inputCheckbox.id = inputId;

//     const labelCheckbox = document.createElement('label');
//     labelCheckbox.htmlFor = inputId;

//     const taskItemText = document.createElement('span');
//     taskItemText.className = 'task-item__text';
//     taskItemText.innerText = taskText;

//     const deleteButton = document.createElement('button');
//     deleteButton.className = 'task-item__delete-button default-button delete-button';
//     deleteButton.innerText = 'Удалить';

//     taskItemMainContent.append(checkboxForm, taskItemText);
//     checkboxForm.append(inputCheckbox, labelCheckbox);
//     taskItemMainContainer.append(deleteButton);

//     return taskItem;
// }

// const tasksListContainer = document.querySelector('.tasks-list');
// tasks.forEach((task) => {
//     const taskItem = createTaskItem(task.id, task.text);
//     tasksListContainer.append(taskItem);
// });

//Создание for у тега label
// const form = getInput.querySelector('label').htmlFor;
// console.log(form);


//3 задание

// Вы отлично справились с поставленной задачей и теперь все элементы отрисовываются правильно. 
// Теперь вам хотят предоставить дело посложнее.
//  Вам необходимо реализовать логику создания новых задач при помощи формы с классом “create-task-block”.
// Используйте предыдущий код и повесьте обработчик событий submit на форму с классом “create-task-block”. 
// При отправке формы создавайте новую задачу в массиве tasks и в DOM-дереве (внутри тега с классом “tasks-list”). 
// id должен быть для каждой задачи уникальным. Текст для задачи берется
// из текстового поля с классом “create-task-block__input”.
// Подсказка: для получения уникального id можно воспользоваться Date.now()
// У вас имеются начальные файлы. Используйте их для разработки логики приложения.


//Создаем событие на форму
// const createTaksForm = document.querySelector('.create-task-block');
// createTaksForm.addEventListener('submit', (event) => {
//     console.log(event);
//     event.preventDefault(); //значение по умолчанию

//     const { target } = event;
//     const taskNameInput = target.taskName;
//     const inputValue = taskNameInput.value;
//     if(inputValue) {
//         const newTask = {
//             id: Date.now().toString(),
//             completed: false,
//             text: inputValue,
//         }
//         tasks.push(newTask);
//         const taskItem = createTaskItem(newTask.id, newTask.text);
//         console.log(taskItem);
//         taskList.append(taskItem);
//     }
// });


// Задание #4 
// Вы молодец! Вы справились с задачей и отдали ее на код-ревью старшему разработчику.
// Но старший разработчик обнаружил, что не нужно отправлять форму, 
// если значение пустое либо задача с таким же названием уже существует. 
// Поэтому вас просят добавить валидацию в ваш код.
// Для блока с ошибкой создавайте тег span с классом “error-message-block”. Внутрь
// данного тега будет помещаться текст с ошибкой.
// Если форма была отправлена с пустым полем, то отобразите ошибку “Название задачи не должно быть пустым”,
//  добавив блок с ошибкой в форму с классом “create-task-block”.
// Если же задача с введенным в поле названием уже существует, 
// то отображайте ошибку “Задача с таким названием уже существует.”

const createErrorBlock = (errorMessage) => {
    const errorBlock = document.createElement('span');
    errorBlock.innerText = errorMessage;
    errorBlock.className = 'error-message-block';
    return errorBlock;
}




const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
    // console.log(event);
    event.preventDefault(); //значение по умолчанию

    const newTaskText = (event.target.taskName.value || '').trim(); //Cмотрим введеный текст или пустую строку
    const isTaskExists = tasks.some((task) => task.text === newTaskText);
    const errorMessageBlockFromDOM = createTaskForm.querySelector('.error-message-block');

    
    if(!newTaskText) {
        const errorBlock = createErrorBlock('Название задачи не должно быть пустым');
        createTaskForm.append(errorBlock);
    } else if (isTaskExists) {
        const errorBlock = createErrorBlock('Задача с таким названием уже существует.');
        createTaskForm.append(errorBlock); 
    } else if (newTaskText && !isTaskExists) {
        const newTask = {
            id: Date.now().toString(),
            text: newTaskText,
        };
        tasks.push(newTask);

        const taskItem = createTaskItem(newTask.id, newTask.text);

       
        taskList.append(taskItem);
    }
    if (errorMessageBlockFromDOM) {
        errorMessageBlockFromDOM.remove();
    }

});





tasks.forEach((item) => {
    const taskItem = createTaskItem(item.id, item.text);
        
        return taskItem;
    // taskList.append(taskItem);
    });


//Задание 5 
// Шаблон модального окна:
// <div class="modal-overlay modal-overlay_hidden"> 
//     <div class="delete-modal"> 
//         <h3 class="delete-modal__question">Вы действительно хотите удалить эту задачу? </h3>
//         <div class="delete-modal__buttons"> 
//             <button class="delete-modal__button delete-modal__cancel-button">Отмена </button>
//             <button class="delete-modal__button delete-modal__confirm-button">Удалить </button>
//         </div>
//     </div> 
// </div>


const createDeleteModal = (text) => {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay modal-overlay_hidden';

    const deleteModal = document.createElement('div');
    deleteModal.className = 'delete-modal';

    modalOverlay.append(deleteModal);

    const modalTitle = document.createElement('h3');
    modalTitle.className = 'delete-modal__question';
    modalTitle.innerText = text;
    const modalButtons = document.createElement('div');
    modalButtons.className = 'delete-modal__buttons';
    
    const cancelButton = document.createElement('button');
    cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
    cancelButton.innerText = 'Отмена'
    const confirmButton = document.createElement('button');
    confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
    confirmButton.innerText = 'Удалить';

    deleteModal.append(modalTitle, modalButtons); 
    modalButtons.append(cancelButton, confirmButton);

    return {
        deleteModal,
        cancelButton,
        confirmButton,
        modalOverlay,
    };
}

//Открытие формы
let targetTaskIdToDelete = 0;

const tasksList = document.querySelector('.tasks-list');
tasksList.addEventListener('click', (event) => {
    const { target } = event;
    const closestTarget = target.closest('.task-item__delete-button');
    if (closestTarget) {
        const closestTask = closestTarget.closest('.task-item');
        if (closestTask) {
            const taskId = closestTask.dataset.taskId;
            targetTaskIdToDelete = taskId;
            modalOverlay.classList.remove('modal-overlay_hidden');
        }
    }
});

//Закрытие формы
const {
    deleteModal, cancelButton, confirmButton, modalOverlay,
} = createDeleteModal('Вы действительно хотите удалить эту задачу?');
document.body.prepend(modalOverlay);
cancelButton.addEventListener('click', () => {
    modalOverlay.classList.add('modal-overlay_hidden');
});


//Удаление формы
confirmButton.addEventListener('click', () => {
    const deleteIndex = tasks.findIndex((task) => task.id == targetTaskIdToDelete);
    console.log(deleteIndex);
    if (deleteIndex >= 0) {
        tasks.splice(deleteIndex, 1);
        const taskItemHTML = document.querySelector(`[data-task-id="${targetTaskIdToDelete}"]`);
        console.log(taskItemHTML);
        taskItemHTML.remove();
        modalOverlay.classList.add('modal-overlay_hidden');
    }
});






// Смена background у body при нажатии на TAB
const bodyType = document.querySelector('body');
document.addEventListener('keydown', (event) => {
    console.log(event);
    let colors;
    if (event.code === 'Tab'){ //При нажатии кнопки TAB

        if (bodyType.style.background === '' ||  bodyType.style.background == 'initial') {
            event.preventDefault();
            colors = bodyType.style.background = 'rgb(36, 41, 46)';


            //Для замены цвета в item 
            document.querySelectorAll('.task-item').forEach((taskItem) => {
                taskItem.style.color = '#fff';
           });

           //Для добавления border 1px solid
           document.querySelectorAll('button').forEach((button) => {
            button.style.border = '1px solid #ffffff';
        });

        } else {
            //Убрать темную тему у body
            event.preventDefault();
            colors = bodyType.style.background = 'initial';
            
            //Убрать белый цвет у Item
            document.querySelectorAll('.task-item').forEach((taskItem) => {
                taskItem.style.color = 'initial';
           });

           //убрать border
           document.querySelectorAll('button').forEach((button) => {
            button.style.border = 'none';
        });

        }

    }
});



// let isDark = false;

// const changeTheme = ({
//     bodyBackground,
//     taskItemTextColor,
//     buttonBorder,
// }) => {
//     document.body.style.background = bodyBackground;
//     document.querySelectorAll('.task-item').forEach((taskItem) => {
//         taskItem.style.color = taskItemTextColor;
//     });
//     document.querySelectorAll('button').forEach((button) => {
//         button.style.border = buttonBorder;
//     });
// }

// window.addEventListener('keydown', (event) => {
//     const { code } = event;
//     if (code === 'Tab') {
//         event.preventDefault();
//         isDark = !isDark;
//         if (isDark) {
//             changeTheme({
//                 bodyBackground: '#24292E',
//                 taskItemTextColor: '#ffffff',
//                 buttonBorder: '1px solid #ffffff',
//             });
//         } else {
//             changeTheme({
//                 bodyBackground: 'initial',
//                 taskItemTextColor: 'initial',
//                 buttonBorder: 'none',
//             });
//         }
//     }
// });