const toDoList = [];

renderTodoList();
function renderTodoList() {
  let toDoListHTML = "";
  toDoList.forEach((toDoObject, index) => {
    const { name, dueDate } = toDoObject;
    const html = `<div>${name}</div> <div>${dueDate}</div>
    <button class="delete-button js-delete-button"> Delete
    </button>
    `;
    toDoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = toDoListHTML;
  document
    .querySelectorAll(".js-delete-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        toDoList.splice(index, 1);
        renderTodoList();
      });
    });
}
document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addToDoList();
});

function addToDoList() {
  const todoName = document.querySelector(".js-todo");
  const name = todoName.value;
  const todoDate = document.querySelector(".js-due-date-input");
  const dueDate = todoDate.value;
  toDoList.push({
    name,
    dueDate,
  });
  todoName.value = "";
  todoDate.value = "";
  renderTodoList();
}
