const inputTask = document.querySelector('.input-task');
const btnAddTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function deleteTask(item){
    item.innerText += ' ';

    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'Delete'
    btnDelete.setAttribute('class', 'delete')
    btnDelete.setAttribute('title', 'delete this task')
    item.appendChild(btnDelete)
};

function returnToInput(){
    inputTask.value = '';
    inputTask.focus();
};

function createTask(text) {
    const item = document.createElement('li');

    item.innerText = text;
    tasks.appendChild(item);

    returnToInput();
    deleteTask(item);

};

btnAddTask.addEventListener('click', (event) => {
    if (!inputTask.value) return;
    createTask(inputTask.value);

});

inputTask.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value)

    };
});

document.addEventListener('click', (event) => {
    const element = event.target

    if(element.classList.contains('delete')){
        element.parentElement.remove();
    };

})

