const button = document.querySelector('.button-add-task');
const input: any = document.querySelector('.input-tasks');
let arrayTasks:any[] = [];




button?.addEventListener("click", function (event) {

   arrayTasks.push(input.value) 

   alert(arrayTasks)

})

