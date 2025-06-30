let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = ` ${todo.task}
     <span class="badge bg-primary rounded-pill">
        <i class="fa fa-check" aria-hidden="true"></i>
        <i class="fa fa-trash" aria-hidden="true"></i>
      </span>`;
    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }

    list.appendChild(li);
    let checkIcon = li.querySelector(".fa-check");
    let trashIcon = li.querySelector(".fa-trash");
    checkIcon.addEventListener("click", () => {
      todo.completed = !todo.completed;
      li.style.textDecoration = todo.completed ? "line-through" : "none";
    });
    trashIcon.addEventListener("click", () => {
      li.remove();
      todos = todos.filter((item) => item.task !== todo.task);
    });
  });
}

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
  const taskInput = document.getElementById("todo-input");
  const task = taskInput.value.trim();
  if (task) {
    todos.push({
      task: task,
      completed: false,
    });

    taskInput.value = "";
    populateTodoList(todos);
  }
}
document.getElementById("todo-form").addEventListener("submit", addNewTodo);

/*const removeAllCompleted = document.getElementById("remove-all-completed");
removeAllCompleted.addEventListener("click", () => {
  const allListItems = document.querySelectorAll("#todo-list li");
  allListItems.forEach((li) => {
    if (li.style.textDecoration === "line-through") {
      li.remove();
    }
  });
});*/

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  const allItems = document.querySelectorAll("#todo-list li");
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
