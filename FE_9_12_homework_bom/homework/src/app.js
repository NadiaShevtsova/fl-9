const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

const mainClass = document.createAttribute('class'),
    mainDiv = document.createElement('div'),
    elementHeader = document.createElement('h1'),
    inputAddTask = document.createElement('input'),
    btnDiv = document.createElement('div'),
    btnSaveChanges = document.createElement('button'),
    btnCancel = document.createElement('button');

mainDiv.setAttributeNode(mainClass);
elementHeader.setAttribute('class', 'header');
inputAddTask.setAttribute('type', 'text');
inputAddTask.setAttribute('class', 'add-task');
btnDiv.setAttribute('class', 'btn-div-cancel-change');
btnSaveChanges.setAttribute('class', 'btn-save-changes');
btnCancel.setAttribute('class', 'btn-cancel');

mainClass.value = 'main-div';
elementHeader.textContent = 'Add task';
btnSaveChanges.disabled = true;
btnSaveChanges.textContent = 'Save Changes';
btnCancel.textContent = 'Cancel';

btnDiv.appendChild(btnCancel);
btnDiv.appendChild(btnSaveChanges);
mainDiv.appendChild(elementHeader);
mainDiv.appendChild(inputAddTask);
mainDiv.appendChild(btnDiv);
rootNode.appendChild(mainDiv);

const addTask = function(newTask) {
    const listDiv = document.createElement('div');
    const textP = document.createElement('p');
    const image = document.createElement('img');
    const checkBtn = document.createElement('button');
    const deleteImg = document.createElement('img');
    const deleteBtn = document.createElement('button');

    listDiv.setAttribute('class', 'list-item');

    image.setAttribute('src', './assets/img/todo-s.png');
    checkBtn.setAttribute('class', 'check-btn');
    deleteImg.setAttribute('src', './assets/img/remove-s.jpg');
    deleteBtn.setAttribute('class', 'delete-btn');

    textP.appendChild(document.createTextNode(newTask));
    checkBtn.appendChild(image);
    deleteBtn.appendChild(deleteImg);
    listDiv.appendChild(checkBtn);
    listDiv.appendChild(textP);
    listDiv.appendChild(deleteBtn);
    finalList.appendChild(listDiv);

    checkBtn.onclick = function() {
        image.src = './assets/img/done-s.png';
        listDiv.style.setProperty('background-color', 'grey');
    }

    deleteBtn.onclick = function() {
        listDiv.remove();
    }

    inputAddTask.value = '';
    btnSaveChanges.disabled = true;
}

inputAddTask.onchange = inputAddTask.onkeyup = function (e) {
    const newTask = inputAddTask.value;

    newTask ? btnSaveChanges.disabled = false : btnSaveChanges.disabled = true;

    if (e.key === 'Enter') {
        if (newTask) {
            addTask(newTask);
        }
    }
};

const finalList = document.createElement('div');
finalList.setAttribute('class', 'todo-list');
rootNode.appendChild(finalList);

btnSaveChanges.onclick = function() {
    addTask(inputAddTask.value);
}
