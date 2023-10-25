let input = document.querySelector("#todo");
let bisness = document.querySelector("#bisness");
let personal = document.querySelector("#personal");
let add = document.querySelector(".add");
let list = document.querySelector(".list");

console.log(bisness);
let newTask = {
  task: "",
  type: false,
  done: false,
};

GetTodoList();
function GetTodoList() {
  if (!localStorage.getItem("neobis-todo")) {
    localStorage.setItem("neobis-todo", "[]");
  }
  let data = JSON.parse(localStorage.getItem("neobis-todo"));
  list.innerHTML = "";
  data.forEach((elem, index) => {
    list.innerHTML += `
    <li class = "${elem.done ? "completed" : ""}">
    <label ">
    <span  class="${elem.type ? "bisness_check" : "personal_check"}" ></span>
    <input  type="checkbox" ${
      elem.done ? "checked" : ""
    } onclick="DoneTask(${index})" class="checked" />
    </label>
  
    <input type="text" value="${
      elem.task
    }" onblur="SaveEdit(${index}, this.value)" index="${index}" readonly  />
    </label>
    <button class="edit" onclick="EditTask(${index})">Edit</button>
      <button class="add" onclick="Delete(${index})" > Delete</button>
    </li> `;
  });
}

add.addEventListener("click", () => {
  if (!input.value) {
    alert("Заполните поле");
  } else {
    newTask.task = input.value;
    AddTask(newTask);
    console.log(newTask);
  }
});

bisness.addEventListener("click", () => {
  newTask.type = true;
  personal.checked = false;
});
personal.addEventListener("click", () => {
  newTask.type = false;
  bisness.checked = false;
});

function DoneTask(index) {
  let data = JSON.parse(localStorage.getItem("neobis-todo"));
  data[index].done = !data[index].done;
  console.log(data[index]);
  localStorage.setItem("neobis-todo", JSON.stringify(data));
  GetTodoList();
}

function AddTask(task) {
  let data = JSON.parse(localStorage.getItem("neobis-todo"));
  data.push(task);
  localStorage.setItem("neobis-todo", JSON.stringify(data));
  input.value = "";
  GetTodoList();
}

function Delete(index) {
  let data = JSON.parse(localStorage.getItem("neobis-todo"));
  data.splice(index, 1);
  localStorage.setItem("neobis-todo", JSON.stringify(data));
  GetTodoList();
}

function EditTask(index) {
  const taskInput = document.querySelector(`input[index="${index}"]`);
  taskInput.removeAttribute("readonly");
  taskInput.removeAttribute("active");
}

function SaveEdit(index, editedText) {
  let data = JSON.parse(localStorage.getItem("neobis-todo"));
  data[index].task = editedText;
  localStorage.setItem("neobis-todo", JSON.stringify(data));
  GetTodoList();
}
