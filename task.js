// ! #1
// * Будет выведено 10 раз число 10 , по причине того , что цикл отработает быстрее чем выполниться setTimeOut .
// ! #2
function CurretDay() {
  let today = new Date();
  return `Today is :${today.toDateString("en-US", { weeday: "long" })}
  Current time :${today.toTimeString().split("")[0]}`;
}
// ! #3
function reverseNumber(number) {
  return +number.toString().split("").reverse().join("");
}
console.log(reverseNumber(12344));

// ! #4
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
console.log(factorial(5));

// ! #5

function Prompt() {
  let firsnNumber = prompt("Enter first number");
  let secondNumber = prompt("Enter second number");

  if (firsnNumber > secondNumber) {
    alert(firsnNumber);
  }
  alert(secondNumber);
}
// Prompt();
// ! #6
function MakeString(array) {
  let Plus = array.join("+");
  let Def = array.join(",");
  console.log(Plus, Def);
}

MakeString(["Red", "Green", "White", "Black"]);

// ! #7
function month_name(sting) {
  return sting.toLocaleString("en-US", { month: "long" });
}
console.log(month_name(new Date("10/11/2009")));

// ! #8
function Apper(string) {
  if (string[0] === string[0].toUpperCase()) {
    return true;
  }
  return false;
}

console.log(Apper("Hello"));

// ! #9
console.log(":)");

// ! #10
const div1 = document.querySelectorAll("#string-1");
const div2 = document.querySelectorAll("#string-2");
const div3 = document.querySelectorAll("#string-3");
const div4 = document.querySelectorAll("#string-4");
const div5 = document.querySelectorAll("#string-5");
const div6 = document.querySelectorAll("#string-6");
console.log(div3, div5, div2, div6, div4, div1);

// ! #10
let element = document.querySelectorAll(".element");
for (let i = 0; i < 3; i++) {
  element[i].style.color = "red";
}
for (let i = 3; i < element.length; i++) {
  element[i].style.color = "green";
}

// ! #11
let todo = document.querySelector("#todo-list");
const tasks = [
  "Buy lemonade",
  "Make toasts",
  "Repair car",
  "Play games",
  "Pet a cat",
];

tasks.forEach((tasks, index) => {
  let li = document.createElement("li");
  li.className = "task";
  li.textContent = `${tasks}`;
  todo.appendChild(li);
});

// ! #12

let p = document.querySelectorAll("p");
for (elem of p) {
  let hr = document.createElement("hr");
  elem.after(hr);
}

// ! #13
const cartItems = document.getElementById("cart-items");
const cola = cartItems.querySelector(".item:nth-child(2)");
cola.remove();
const chocolate = cartItems.querySelector(".item:nth-child(5)");
const cannedFish = document.createElement("div");
cannedFish.classList.add("item");
cannedFish.textContent = "Canned Fish";
cannedFish.appendChild(document.createElement("span"));
cannedFish.querySelector("span").textContent = "x 4";
cartItems.replaceChild(cannedFish, chocolate);

// ! #14
let ol = document.querySelector("ol");
function newAll() {
  let task = prompt("Введите таск");
  if (task) {
    let li = document.createElement("li");
    li.textContent = task;
    ol.appendChild(li);
  }
}
newAll();
