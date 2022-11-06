"use strict";

//Делегирование событий 

// const allNavButtons = document.querySelectorAll('.main-navigation__button-item');

// allNavButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         const targetButton = event.target;
//         allNavButtons.forEach((navBatton) => {
//             navBatton.classList.remove('main-navigation__button-item_selected');
//         });
//         targetButton.classList.add('main-navigation__button-item_selected');
//     });
// });


const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item');
const mainNavigation = document.querySelector('.main-navigation');

mainNavigation.addEventListener('click', (event) => {
    console.log(event.target);
    const isNavButton = event.target.closest('.main-navigation__button-item'); //closest = найти ближайший родительский класс
    console.log('Клик на коетейнер');

    if(isNavButton) {
    //Какое то действие 
    allNavigationButtons.forEach((navBatton) => {
    navBatton.classList.remove('main-navigation__button-item_selected');
    });
    event.target.classList.add('main-navigation__button-item_selected');
    }
});

const firstNavButton = document.querySelector('.main-navigation__button-item');
firstNavButton.addEventListener('click', (event) => {
    console.log('ПЕРВАЯ КНОПКА', event.target);
});

document.body.addEventListener('click', (event) => {
 console.log('Клик на BODY', event.target);
});