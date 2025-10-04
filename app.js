const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, idx) => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    if (todo.done) li.style.textDecoration = 'line-through';
    li.onclick = () => {
      todos[idx].done = !todos[idx].done;
      saveTodos();
    };
    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.onclick = (e) => {
      e.stopPropagation();
      todos.splice(idx, 1);
      saveTodos();
    };
    li.appendChild(del);
    list.appendChild(li);
  });
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

form.onsubmit = (e) => {
  e.preventDefault();
  todos.push({ text: input.value, done: false });
  input.value = '';
  saveTodos();
};

renderTodos();ap