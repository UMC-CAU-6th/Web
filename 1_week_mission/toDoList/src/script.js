document
  .getElementById("todoInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      addToDo();
    }
  });

function addToDo() {
  var input = document.getElementById("todoInput");
  var todoText = input.value.trim();
  if (todoText !== "") {
    var listItem = createToDoItem(todoText);
    var todoList = document.getElementById("todoList");
    todoList.appendChild(listItem);
    input.value = "";
  }
}

function createToDoItem(todoText) {
  var listItem = document.createElement("li");
  listItem.className = "todo-item";
  var textNode = document.createTextNode(todoText);
  listItem.appendChild(textNode);

  var completeButton = document.createElement("button");
  completeButton.innerHTML = "Complete";
  completeButton.onclick = function () {
    moveToAccomplished(this.parentNode);
  };
  listItem.appendChild(completeButton);

  return listItem;
}

function moveToAccomplished(item) {
  var todoList = document.getElementById("todoList");
  var accomplishedList = document.getElementById("accomplishedList");
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = function () {
    deleteToDoItem(this.parentNode);
  };
  item.removeChild(item.querySelector("button"));
  accomplishedList.appendChild(item);
  item.appendChild(deleteButton);
}

function deleteToDoItem(item) {
  item.parentNode.removeChild(item);
}
