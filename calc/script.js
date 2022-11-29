document.addEventListener("DOMContentLoaded", function () {});

function customButton(buttonText, className) {
  return `<button type="button" class="${className}">${buttonText}</button>`;
}
// function allNum() {
//   let arrc = Array.from(Array(10).keys()).concat([".", "="]);
//   const buttons = document.getElementById("buttons");
//   for (let i = 0; i < arrc.length; i++) {
//     buttons.insertAdjacentHTML(
//       "beforeend",
//       customButton(
//         arrc[i],
//         arrc[i] === "=" ? "symButtonStyle" : "numButtonStyle"
//       )
//     );
//   }
// }

// function symbols() {
//   const arr = ["+", "-", "*", "/"];
//   const symbols = document.getElementById("symBtn");
//   for (let i = 0; i < arr.length; i++) {
//     symbols.insertAdjacentHTML(
//       "beforeend",
//       customButton(arr[i], "symButtonStyle")
//     );
//   }
// }
// function main() {
//   allNum();
//   symbols();
//   const elements = document.querySelectorAll(".numButtonStyle");
//   const symb = document.querySelectorAll(".symButtonStyle");
//   let btnsArr = Array.from(elements);
//   let sArr = Array.from(symb);

//   btnsArr.forEach((element) => {
//     element.addEventListener("click", (event) => {
//       document.getElementById("display-text").innerHTML +=
//         event.target.innerHTML;
//     });
//   });

//   sArr.forEach((symbs) => {
//     symbs.addEventListener("click", (e) => {
//       // let operator = e.target.innerHTML;
//       if (e.target.innerHTML !== "=") {
//         return (document.getElementById("display-text").innerHTML +=
//           e.target.innerHTML);
//       } else {
//         let expression = document.getElementById("display-text").innerHTML;
//         document.getElementById("display-text").innerHTML = eval(expression);
//       }
//     });
//   });
// }

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearAll);
function clearAll() {
  document.getElementById("display-text").innerHTML = "";
}

//Event handler for multiply/divide buttons

class CalculatorStore {
  allNum = () => {
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
  };
  symbols = () => {
    const arr = ["+", "-", "*", "/"];
    const symbols = document.getElementById("symBtn");
    for (let i = 0; i < arr.length; i++) {
      symbols.insertAdjacentHTML(
        "beforeend",
        customButton(arr[i], "symButtonStyle")
      );
    }
  };
  main = () => {
    this.allNum();
    this.symbols();
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
        let operator = e.target.innerHTML;
        if (e.target.innerHTML !== "=") {
          return (document.getElementById("display-text").innerHTML +=
            e.target.innerHTML);
        } else {
          // let expression = document.getElementById("display-text").innerHTML;
          document.getElementById("display-text").innerHTML =
            this.evaluateFunction(op1, op2, operator);
        }
      });
    });
  };
  addSub = [];
  mulDiv = [];
  //Reference to the array that was last updated.
  lastUpdated = null;

  evaluateFunction(op1, op2, operator) {
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
  }

  addSubFunction(operatorInput, operandInput) {
    if (this.lastUpdated == null) {
      this.addSub.push(operandInput);
      this.addSub.push(operatorInput);
    } else {
      let result = this.evaluateFunction(
        this.lastUpdated[0],
        operandInput,
        this.lastUpdated[1]
      ); //Evaluate only lastUpdated

      if (this.lastUpdated == this.mulDiv) {
        //if mulDiv array
        this.lastUpdated.shift();
        this.lastUpdated.shift();
        if (this.addSub.length > 0) {
          this.addSub[0] = this.evaluateFunction(
            this.addSub[0],
            result,
            this.addSub[1]
          );
          this.addSub[1] = operatorInput;
        } else {
          this.addSub[0] = result;
          this.addSub[1] = operatorInput;
        }
      }
      // else {
      //   this.addSub[0] = result;
      //   this.addSub[1] = operatorInput;
      // }
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
}
let op = new CalculatorStore();
// 15/5+6-8*4=
//--- 3+6-32= -23
// 8*4/2+6-1
// 21
// 4 + (6 / 2) * 3;
// 4+ 9=13
// op.mulDivFunction("*", "8");
// op.mulDivFunction("/", "4");
op.addSubFunction("+", "4");
op.mulDivFunction("/", "6");
op.mulDivFunction("*", "2");
op.addSubFunction("+", "3");
