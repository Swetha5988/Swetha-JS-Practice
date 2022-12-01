document.addEventListener("DOMContentLoaded", function () {});

function customButton(buttonText, className) {
  return `<button type="button" class="${className}">${buttonText}</button>`;
}
class CalculatorStore {
  addSub = [];
  mulDiv = [];
  //Reference to the array that was last updated.
  lastUpdated = null;

  evaluateFunction(op1, op2, operator) {
    let intOp1 = parseFloat(op1);
    let intOp2 = parseFloat(op2);
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
  }

  addSubFunction(operatorInput, operandInput) {
    if (this.lastUpdated == null) {
      // last updated is if any values has beed generated in an array
      this.addSub.push(operandInput);
      this.addSub.push(operatorInput);
    } else if (this.lastUpdated == this.mulDiv) {
      // last updated is muldiv; evaluate expression using muldiv and add the result to addSub

      let result = this.evaluateFunction(
        this.lastUpdated[0],
        operandInput,
        this.lastUpdated[1]
      );

      if (this.addSub.length > 0) {
        this.addSub[0] = this.evaluateFunction(
          this.addSub[0],
          result,
          this.addSub[1]
        );
      } else {
        this.addSub[0] = result;
      }
      this.mulDiv.length = 0;
      this.addSub[1] = operatorInput;
    } else {
      // last updated is add sub; evaluate the expression using addSub and add the result to addSub
      this.addSub[0] = this.evaluateFunction(
        this.lastUpdated[0],
        operandInput,
        this.lastUpdated[1]
      );
      this.addSub[1] = operatorInput;
    }
    this.lastUpdated = this.addSub;

    console.log(this.addSub);
  }

  mulDivFunction(operatorInput, operandInput) {
    if (this.mulDiv.length == 0) {
      this.mulDiv.push(operandInput);
      this.mulDiv.push(operatorInput);
    } else {
      this.mulDiv[0] = this.evaluateFunction(
        this.mulDiv[0],
        operandInput,
        this.mulDiv[1]
      );
      this.mulDiv[1] = operatorInput;
    }
    this.lastUpdated = this.mulDiv;
    console.log(this.mulDiv);
  }
  getResult() {
    return this.addSub[0];
  }
  reset() {
    this.addSub.length = 0;
    this.mulDiv.length = 0;
    this.lastUpdated = null;
  }
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
let op = new CalculatorStore();
function main() {
  let isOperatorClicked = true;
  let sign = false;
  let operandClicked = false;
  allNum();
  symbols();
  const elements = document.querySelectorAll(".numButtonStyle");
  const symb = document.querySelectorAll(".symButtonStyle");
  let btnsArr = Array.from(elements);
  let sArr = Array.from(symb);

  btnsArr.forEach((element) => {
    element.addEventListener("click", (event) => {
      operandClicked = true;
      if (isOperatorClicked) {
        document.getElementById("display-text").innerHTML =
          event.target.innerHTML;
        isOperatorClicked = false;
      } else {
        document.getElementById("display-text").innerHTML +=
          event.target.innerHTML;
      }
    });
  });

  sArr.forEach((symbs) => {
    symbs.addEventListener("click", (e) => {
      let operator = e.target.innerHTML;
      if (operator == "-" && !operandClicked && isOperatorClicked) {
        sign = true;
        isOperatorClicked = false;
      }

      let valueOfDisplay = document.getElementById("display-text").innerHTML;

      if (sign) {
        if (operandClicked) {
          document.getElementById("display-text").innerHTML =
            "-" + valueOfDisplay;
          sign = false;
          isOperatorClicked = true;
          operandClicked = false;
        }
      } else {
        isOperatorClicked = true;
      }

      if (isOperatorClicked) {
        valueOfDisplay = document.getElementById("display-text").innerHTML;
        if (operator == "=" || operator == "+" || operator == "-") {
          op.addSubFunction(operator, valueOfDisplay);
          document.getElementById("display-text").innerHTML = op.getResult();
        } else {
          op.mulDivFunction(operator, valueOfDisplay);
        }
      }
    });
  });
}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearAll);
function clearAll() {
  document.getElementById("display-text").innerHTML = "";
  op.reset();
}

//Event handler for multiply/divide buttons

// 4*2+6/2*3=
// 4*2+3*3=
// 8+9 = 17
// op.mulDivFunction("-", "4");
// op.addSubFunction("+", "2");
// op.mulDivFunction("/", "6");
// op.mulDivFunction("*", "2");
// op.addSubFunction("+", "3");
