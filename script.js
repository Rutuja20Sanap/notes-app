const tasks = [];

function loadFromLocalStorage() {
  const allTasks = JSON.parse(localStorage.getItem("allTasks"));

  if (allTasks) {
    tasks.push(...allTasks);
  }
  loadTasks();
}
function loadTasks() {
    localStorage.setItem("allTasks", JSON.stringify(tasks));

    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";

    for (const task of tasks) {
      tasksContainer.innerHTML += `
        <div class="todo-item">
          <span>${task}</span>
          <button class="btn-del" type="button" onclick="deleteTask('${task}')">Remove</button>
        </div>
      `;
    }
  }