"use strict";

const allElement = document.querySelectorAll('*'); //   * - получить доступ ко всем элементам

// allElement.forEach((elem) => {
//     //Фаза Всплытие
//     // elem.addEventListener("click", () => {
//     //     alert(`Всплытие: ${elem.tagName}`);
//     // });

//     //Фаза Погружение
//     elem.addEventListener("click", () => {
//         alert(`Погружение: ${elem.tagName}`);
//     }, true);
// });


allElement.forEach((elem) => {
    elem.addEventListener("click", (event) => {
        if (event.currentTarget.tagName === "FORM") {
            event.stopPropagation(); //Остановить всплытие
        }
        alert(`Всплытие: ${elem.tagName}`);
    });
});