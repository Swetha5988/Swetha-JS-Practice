document.addEventListener("DOMContentLoaded", function () {});

function customButton(buttonText, className) {
  return `<button type="button" class="${className}">${buttonText}</button>`;
}

function allNum() {
  const arrc = Array.from(Array(10).keys()).concat([".", "="]);
  const buttons = document.getElementById("buttons");
  for (let i = 0; i < arrc.length; i++) {
    buttons.insertAdjacentHTML(
      "beforeend",
      customButton(arrc[i], "numButtonStyle")
    );
  }
}
function main() {
  allNum();
  symbols();
  const elements = document.querySelectorAll(".numButtonStyle");
  let btnsArr = Array.from(elements);
  btnsArr.forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(event.target.innerHTML);
    });
  });
}
function symbols() {
  const arr = ["+", "-", "*", "/"];
  const symbols = document.getElementById("symBtn");
  for (let i = 0; i < arr.length; i++) {
    symbols.insertAdjacentHTML(
      "beforeend",
      customButton(arr[i], "symButtonStyle")
    );
  }
}
// click event on multiple elements

// operations on elements

// function operations(a, b, operator) {
//   operator(a, b);
// }
// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function division(a, b) {
//   return a / b;
// }
// function multip(a, b) {
//   return a * b;
// }
