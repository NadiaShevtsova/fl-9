const addButton = document.querySelector('.add-btn');
const list = document.querySelector('.list');
const addNewActionInput = document.querySelector('.add-new-action-input');
const maxSize = document.querySelector('.max-size-warning');

addButton.onclick = function() {
    addTask(addNewActionInput.value);
}

let counter = 0;
let maxCounter = 10;

const addTask = function (newTaskText) {
    const elemLi = document.createElement('li'),
        elemP = document.createElement('p'),
        checkbox = document.createElement('i'),
        checkboxBtn = document.createElement('button'),
        deleteElemLi = document.createElement('i'),
        deleteBtn = document.createElement('button');

    elemLi.setAttribute('class', 'list-item');
    elemP.appendChild(document.createTextNode(newTaskText));
    checkbox.setAttribute('class', 'material-icons');
    checkbox.appendChild(document.createTextNode('check_box_outline_blank'));
    checkboxBtn.setAttribute('class', 'checkbox-btn');
    deleteElemLi.setAttribute('class', 'material-icons');
    deleteElemLi.appendChild(document.createTextNode('delete'));
    deleteBtn.setAttribute('class', 'delete-btn');
    checkboxBtn.appendChild(checkbox);
    checkboxBtn.appendChild(elemP);
    deleteBtn.appendChild(deleteElemLi);
    elemLi.appendChild(checkboxBtn);
    elemLi.appendChild(deleteBtn);
    list.appendChild(elemLi);

    if (maxCounter <= ++counter ) {
        addNewActionInput.disabled = true;
        maxSize.style.display = 'block';
    }

    checkboxBtn.onclick = function() {
        checkbox.textContent = 'check_box';
    };

    deleteBtn.onclick = function() {
        elemLi.remove();

        addNewActionInput.disabled = false;
        counter--;
        maxSize.style.display = 'none';
    };

    addNewActionInput.value = '';
    addButton.disabled = true;
}

addNewActionInput.onchange = addNewActionInput.onkeyup = function(e) {
    const newTaskText = addNewActionInput.value;

    newTaskText ? addButton.disabled = false : addButton.disabled = true;

    if (e.key === 'Enter') {
        if (newTaskText) {
            addTask(newTaskText);
        }
    }
};