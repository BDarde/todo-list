

const button = document.querySelector("button");
const input = document.querySelector(".input-task");
const taskList = document.querySelector(".list-tasks")
const newCss = "newClass"
let tasks = [];

button.addEventListener("click", addNewTask);

function addNewTask() {


    tasks.push({
        tarefa: input.value,
        concluida: false
    });

    input.value = "";

    showNewTask();

}

function showNewTask() {

    let newTask = "";

    tasks.forEach((item, index) => {
        newTask +=
            ` <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="chek-na-tarefa" onclick="completedTask(${index})">
            <p>${item.tarefa}</p>
             <img src="./img/trash.png" alt="excluir-tarefa" onclick="deleteTask(${index})">
         </li>`


    })

    taskList.innerHTML = newTask;
    localStorage.setItem('list', JSON.stringify(tasks));

}

function completedTask(index) {
    tasks[index].concluida = !tasks[index].concluida;

    showNewTask();
}

function deleteTask(index) {

    tasks.splice(index, 1);

    showNewTask();

}

function reloadTasks(){
    const tasksLocalStorage = localStorage.getItem('list')

    tasks = JSON.parse(tasksLocalStorage);
    showNewTask();
}


reloadTasks();








