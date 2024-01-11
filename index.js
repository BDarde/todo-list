"use strict";
const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-tasks');
let arrayTasks = [];
button?.addEventListener("click", function () {
    arrayTasks.push(input.value);
    alert(arrayTasks);
});
