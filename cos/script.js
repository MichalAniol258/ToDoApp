let inputTask = document.querySelector("#inputTask");
let listaZadan = document.querySelector("#listaZadan");

function zapiszZadaniaDoLocalStorage() {
    let tasks = [];
    listaZadan.childNodes.forEach((task) => {
        let taskText = task.querySelector('span').innerText;
        let isCompleted = task.querySelector('span').classList.contains('completed');
        tasks.push({ text: taskText, completed: isCompleted });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Funkcja do wczytywania listy zadań z localStorage
function wczytajZadaniaZLocalStorage() {
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
        tasks = JSON.parse(tasks);
        tasks.forEach((task) => {
            let li = document.createElement('li');
            li.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button onclick="oznaczJakoWykonane(this)">Wykonane</button>
                <button class="delete" onclick="usunZadanie(this)">Usuń</button>
            `;
            listaZadan.appendChild(li);
        });
    }
}

// Wywołaj funkcję wczytującą zadania po załadowaniu strony
window.onload = wczytajZadaniaZLocalStorage;

function dodajZadanie() {
    let inputText = inputTask.value.trim();

    if (inputText !== '') {
        let li = document.createElement('li');
        li.innerHTML = `
                    <span>${inputText}</span>
                    <button onclick="oznaczJakoWykonane(this)">Wykonane</button>
                    <button class="delete" onclick="usunZadanie(this)">Usuń</button>
                `;
        listaZadan.appendChild(li);

        // Zapisz zadania do localStorage po dodaniu nowego zadania
        zapiszZadaniaDoLocalStorage();
    }
}

function oznaczJakoWykonane(button) {
    let taskSpan = button.parentElement.querySelector('span');
    taskSpan.classList.toggle('completed');

    // Zapisz zadania do localStorage po oznaczeniu jako wykonane
    zapiszZadaniaDoLocalStorage();
}

function usunZadanie(button) {
    let taskLi = button.parentElement;
    taskLi.remove();

    // Zapisz zadania do localStorage po usunięciu zadania
    zapiszZadaniaDoLocalStorage();
}