document.addEventListener("DOMContentLoaded", function () {});

function customButton(buttonText, className) {
  return `<button type="button" class="${className}">${buttonText}</button>`;
}
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
  }
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

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearAll);
function clearAll() {
  document.getElementById("display-text").innerHTML = "";
}

//Event handler for multiply/divide buttons

class CalculatorStore {
  addSub = [];
  mulDiv = [];
  //Reference to the array that was last updated.
  lastUpdated = null;

  evaluate = function (op1, op2, operator) {
    let intOp1 = parseInt(op1);
    let intOp2 = parseInt(op2);
    switch (operator) {
      case "+":
        return intOp1 + intOp2;
      case "-":
        return intOp1 - intOp2;
      case "*":
        return intOp1 * intOp2;
      case "/":
        return intOp1 / intOp2;
    }
  };

  addSub = function (operatorInput, operandInput) {
    if (lastUpdated == null) {
      addSub.push(operandInput);
      addSub.push(operatorInput);
    } else {
      let result = evaluate(lastUpdated[0], operandInput, lastUpdated[1]); //Evaluate only lastUpdated

      if (lastUpdated == mulDiv) {
        //if mulDiv array
        lastUpdated.shift();
        lastUpdated.shift();
        if (addSub.length > 0) {
          addSub[1] = operatorInput;
          addSub[0] = evaluate(addSub[0], result, addSub[1]);
        } else {
          console.log(addSub[0]);
          console.log(addSub[1]);
          addSub[0] = result;
          addSub[1] = operatorInput;
        }
      } else {
        addSub[0] = result;
      }
    }

    lastUpdated = addSub;
  };

  mulDiv = function (operatorInput, operandInput) {
    if (mulDiv.length == 0) {
      mulDiv.push(operandInput);
      mulDiv.push(operatorInput);
    } else {
      mulDiv[0] = evaluate(mulDiv[0], operandInput, mulDiv[1]);
      mulDiv[1] = operatorInput;
    }
    lastUpdated = mulDiv;
  };
}
