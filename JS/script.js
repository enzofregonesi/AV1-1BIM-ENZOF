const tarefas = [];

const form = document.querySelector("#form-tarefa");
const input = document.querySelector("#input-tarefa");
const lista = document.querySelector("#lista-tarefas");
const mensagem = document.querySelector("#mensagem");

function validarTarefa(texto) {
    if (texto.trim() === "") {
        mensagem.textContent = "A tarefa não pode estar vazia.";
        return false;
    }

    mensagem.textContent = "";
    return true;
}

function renderTarefas() {
    lista.innerHTML = "";

    tarefas.forEach(function(tarefa, index) {
        const li = document.createElement("li");
        
        const span = document.createElement("span");
        span.textContent = tarefa;
        
        const editBtn = document.createElement("button");
        editBtn.textContent = "Editar";
        editBtn.addEventListener("click", () => editTask(index));
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.addEventListener("click", () => deleteTask(index));
        
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        lista.appendChild(li);
    });
}

function editTask(index) {
    const li = lista.children[index];
    const span = li.querySelector("span");
    const input = document.createElement("input");
    input.value = span.textContent;
    li.replaceChild(input, span);
    
    const editBtn = li.querySelector("button");
    editBtn.textContent = "Salvar";
    editBtn.onclick = () => saveTask(index, input.value);
}

function saveTask(index, newText) {
    if (!validarTarefa(newText)) {
        return;
    }
    tarefas[index] = newText.trim();
    renderTarefas();
}

function deleteTask(index) {
    tarefas.splice(index, 1);
    renderTarefas();
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const texto = input.value;

    if (!validarTarefa(texto)) {
        return;
    }

    tarefas.push(texto.trim());

    renderTarefas();

    input.value = "";
});
