// task 0

console.log("Task 0: Printing Name and Group");
console.log("Name: [Your Name], Group: [Your Group]");

alert("Hello, JavaScript World!");

// task 1

console.log("\nTask 1: Variables & Operators");


let studentName = "Mia";
let examScore = 95;
const isPassing = true;


let finalScore = examScore + 5;
let remainder = 11 % 3;

console.log("Number Variable (examScore):", examScore, typeof examScore);
console.log("Arithmetic: Score + 5 =", finalScore);
console.log("Arithmetic: 11 % 3 =", remainder);

// Concatenate 
let summary = "The student " + studentName + " achieved a score of " + finalScore + ". Is this passing? " + isPassing;
console.log("Concatenated String:", summary);



//  Changing Content ---
const paragraph = document.getElementById('content-paragraph');
const changeTextBtn = document.getElementById('change-text-btn');

changeTextBtn.addEventListener('click', () => {
    paragraph.textContent = "Task 2 Complete: Text updated!";
});

// --- Task 3. Changing Styles ---
const styleContainer = document.getElementById('style-container');
const changeBgBtn = document.getElementById('change-bg-btn');
const changeFontBtn = document.getElementById('change-font-btn');

changeBgBtn.addEventListener('click', () => {
    const currentColor = styleContainer.style.backgroundColor;
    styleContainer.style.backgroundColor = currentColor === 'yellow' ? 'white' : 'yellow';
});

changeFontBtn.addEventListener('click', () => {

    const currentSize = styleContainer.style.fontSize;
    styleContainer.style.fontSize = currentSize === '20px' ? '14px' : '20px';
});

// --- Task 4. Creating & Removing Elements ---
const listForItems = document.getElementById('list-for-items');
const addItemBtn = document.getElementById('add-item-btn');
const removeItemBtn = document.getElementById('remove-item-btn');
let itemCounter = 3;

// Add Item functionality
addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `New Item ${itemCounter}`;
    listForItems.appendChild(newItem);
    itemCounter++;
});

removeItemBtn.addEventListener('click', () => {
    if (listForItems.lastElementChild) {
        listForItems.removeChild(listForItems.lastElementChild);
    }
});



// --- Task 5. Mouse Events ---
const colorBox = document.getElementById('colorBox');
const originalColor = 'lightgray';
const hoverColor = 'red';


colorBox.addEventListener('mouseover', () => {
    colorBox.style.backgroundColor = hoverColor;
    colorBox.textContent = "Hovering!";
});

colorBox.addEventListener('mouseout', () => {
    colorBox.style.backgroundColor = originalColor;
    colorBox.textContent = "Mouse Over Me";
});

// --- Task 6. Keyboard Events ---
const keyInput = document.getElementById('key-input');
const outputValue = document.getElementById('output-value');

keyInput.addEventListener('keyup', (event) => {
    outputValue.textContent = event.target.value;
});

// --- Task 7. Form Validation (Optional) ---
const validationForm = document.getElementById('validation-form');
const errorMessage = document.getElementById('error-message');

validationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = document.getElementById('name').value.trim();
    const emailField = document.getElementById('email').value.trim();
    const passwordField = document.getElementById('password').value.trim();

    errorMessage.textContent = "";
    errorMessage.style.color = 'black';

    // Validation logic
    if (nameField === "" || emailField === "" || passwordField === "") {
        errorMessage.textContent = "Error: All fields must be filled out.";
        errorMessage.style.color = 'red';
    } else {
        errorMessage.textContent = "Form validation passed.";
        errorMessage.style.color = 'green';
    }
});




// --- Task 8. Build a To-Do App ---
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = task.text;
        taskTextSpan.style.cursor = 'pointer';
        if (task.completed) {
            taskTextSpan.style.textDecoration = 'line-through';
        }


        taskTextSpan.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        // Delete functionality
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        listItem.appendChild(taskTextSpan);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
    });
}

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({
            text: taskText,
            completed: false
        });
        taskInput.value = '';
        renderTasks();
    }
});

renderTasks();