document.addEventListener("DOMContentLoaded", function () {});

function customButton(buttonText, className) {
  return `<button type="button" class="${className}">${buttonText}</button>`;
}
let numbers = [];
function allNum() {
  let arrc = Array.from(Array(10).keys()).concat([".", "="]);
  const buttons = document.getElementById("buttons");
  for (let i = 0; i < arrc.length; i++) {
    buttons.insertAdjacentHTML(
      "beforeend",
      customButton(
        arrc[i],
        arrc[i] === "=" ? "symButtonStyle" : "numButtonStyle"
      )
    );
  }
}

function symbols() {
  const arr = ["+", "-", "*", "/"];
  const symbols = document.getElementById("symBtn");
  for (let i = 0; i < arr.length; i++) {
    symbols.insertAdjacentHTML(
      "beforeend",
      customButton(arr[i], "symButtonStyle")
    );
    // if (arr[i] === "+") {
    //   console.log(numbers);
    //   // console.log(operatorSym(numbers[0], numbers[1]));
    // }
  }

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === "+") {
  //     console.log(operatorSym(arr[i], numbers[0], numbers[1]));
  //   }
  // }
}

function main() {
  allNum();
  symbols();
  const elements = document.querySelectorAll(".numButtonStyle");
  const symb = document.querySelectorAll(".symButtonStyle");
  let btnsArr = Array.from(elements);
  let sArr = Array.from(symb);

  btnsArr.forEach((element) => {
    element.addEventListener("click", (event) => {
      document.getElementById("display-text").innerHTML +=
        event.target.innerHTML;
      if (event.target.innerHTML !== "=" && event.target.innerHTML !== ".") {
        numbers.push(parseInt(event.target.innerHTML));
        // console.log(numbers);
      }
    });
  });

  sArr.forEach((symbs) => {
    symbs.addEventListener("click", (e) => {
      if (e.target.innerHTML !== "=") {
        return (document.getElementById("display-text").innerHTML +=
          e.target.innerHTML);
      } else {
        let expression = document.getElementById("display-text").innerHTML;
        document.getElementById("display-text").innerHTML = eval(expression);
      }
    });
  });
}

// function operatorSym(operator, a, b) {
//   /*if (operator === "+") {
//     return a + b;
//   } else if (operator === "-") {
//     return a - b;
//   } else if (operator === "*") {
//     return a * b;
//   } else if (operator === "/")
//     return a / b;
//   } else {
//     alert("please enter a valid number");
//   }*/
// }

// function result(e) {
//   e.target.addEventListener("click", function () {
//     let results = document.getElementById("display-text");
//     results.innerHTML = eval(operatorSym("+", 2, 3));
//     // console.log(eval(eval(operatorSym("+", 2, 3))));
//   });
// }

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearAll);
function clearAll() {
  document.getElementById("display-text").innerHTML = "";
}
