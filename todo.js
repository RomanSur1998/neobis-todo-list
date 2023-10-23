let input = document.querySelector("#todo");
let bisness = document.querySelector("#bisness");
let personal = document.querySelector("#personal");
let add = document.querySelector(".add");
let list = document.querySelector(".list");

console.log(bisness);

GetTodoList();
function GetTodoList() {
  if (!localStorage.getItem("neobis-todo")) {
    localStorage.setItem("neobis-todo", "[]");
  }
  let data = JSON.parse(localStorage.getItem("neobis-todo"));
  list.innerHTML = "";
  data.forEach((elem, index) => {
    list.innerHTML += `
    <li>
    <input type="checkbox"  />
      ${elem.task}
      <button class="add"> Edit </button>
      <button class="add" onclick="Delete(${index})" > Delete</button>
    </li> `;
  });
}

add.addEventListener("click", () => {
  if (!input.value) {
    alert("Заполните поле");
  } else {
    let newTask = {
      task: input.value,
      type: false,
      done: false,
    };
    AddTask(newTask);
    console.log(newTask);
  }
});

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
