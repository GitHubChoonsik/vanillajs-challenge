/*
  Todo list
*/
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const toDoImg = document.querySelector("#todo-box img");

const TODOS_KEY = "todos";

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
  const li = event.target.parentElement.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
};

const paintToDo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  const img = document.createElement("img");
  img.src = "./src/img/choonsik-face.png";
  button.appendChild(img);
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleToDoSubmit = (event) => {
  event.preventDefault();
  if (toDos.length >= 7) {
    alert("할 일이 너무 많습니다!\n다른 할 일을 먼저 끝낸 후에 추가해주세요!");
    return;
  }
  const newTodo = toDoInput.value;
  if (newTodo === "") {
    alert("할 일을 입력해주세요!");
    return;
  }
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
};

toDoImg.addEventListener("mouseover", () => {
  toDoImg.src = "./src/img/choonsik-sing.png";
});
toDoImg.addEventListener("mouseout", () => {
  toDoImg.src = "./src/img/choonsik-bellyfat.png";
});
toDoImg.addEventListener("click", handleToDoSubmit);
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
