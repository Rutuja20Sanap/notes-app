const tasks = [];

function loadFromLocalStorage() {
  const allTasks = JSON.parse(localStorage.getItem("allTasks"));

  if (allTasks) {
    tasks.push(...allTasks);
  }
}