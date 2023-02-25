const taskList = document.querySelector('.todo-list');
const newTaskForm = document.querySelector('.todo-form');
const newTaskInput = document.querySelector('#newTaskInput');

let tasks = [];

function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) {
        li.classList.add('completed');
    }
    li.addEventListener('click', () => {
        task.completed = !task.completed;
        li.classList.toggle('completed');
    });
    return li;
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });
}

function addTask(event) {
    event.preventDefault();
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        let newTask = {
            text: taskText,
            completed: false
        };
        tasks.push(newTask);
        renderTasks();
        newTaskInput.value = '';
    }
}

newTaskForm.addEventListener('submit', addTask);