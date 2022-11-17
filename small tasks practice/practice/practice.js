// let button = document.querySelector("#btn");
// // let count = 0;
// let buttonP = function (arr) {
//   button.addEventListener("click", function () {
//     let newDiv = document.createElement("div");

//     count++;
//     if (count == 1) {
//       for (let i = 0; i < arr.length; i++) {
//         let ar = arr[i];
//         let ele = document.createElement("div");
//         if (ar % 2 == 0) {
//           ele.innerHTML += ar;
//         }
//       }
//     } else if (count === 2) {
//       for (let i = 0; i < arr.length; i++) {
//         op.innerHTML += arr[i];
//       }
//       count = 0;
//     }
//   });
// };
// buttonP([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// ----------------------- printing even number--------------
// let op = document.querySelector("#leftbar");
// function num(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let x = document.createElement("div");
//     x.id = arr[i];
//     let y = document.createTextNode(arr[i]);
//     x.appendChild(y);
//     document.getElementById("leftbar").appendChild(x);
//     document.getElementById("btn").addEventListener("click", function () {
//       if (x.id == arr[i] && arr[i] % 2 === 0) {
//         x.style.background = "#ccc";
//       }
//     });
//   }
// }

// ----------------------- end printing even number--------------

// ----------------------- task2--------------

// let al = document.querySelector("#all");
// let ev = document.querySelector("#even");
// let toggle = true;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 22];
// function num(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let x = document.createElement("div");
//     x.id = arr[i];
//     let y = document.createTextNode(arr[i]);
//     x.appendChild(y);
//     document.getElementById("all").appendChild(x);
//   }
// }
// document.getElementById("btn").addEventListener("click", function () {
//   for (let i = 0; i < arr.length; i++) {
//     if (toggle == true) {
//       if (arr[i] % 2 == 0) {
//         document.getElementById(arr[i]).style.display = "block";
//       } else {
//         document.getElementById(arr[i]).style.display = "none";
//       }
//       toggle = false;
//     } else {
//       document.getElementById(arr[i]).style.display = "block";
//       toggle = true;
//     }
//   }
// });

// num(arr);

// ----------------------- end task2--------------

// function num(arr) {
//   let toggle = true;
//   for (let i = 0; i < arr.length; i++) {
//     // let z = document.getElementById("leftbar").appendChild(items);
//     document.getElementById("btn").addEventListener("click", function () {
//       let items = document.createElement("div");
//       let y = document.createTextNode(arr[i]);
//       items.appendChild(y);
//       let x = document.getElementById("#leftbar");
//       if (toggle == true) {
//         document.getElementById("leftbar").appendChild(items);
//         toggle = false;
//       } else if (arr[i] % 2 == 0) {
//         items.style.background = "red";
//         toggle = false;
//       } else {
//         items.innerHTML = arr[i];
//       }
//     });
//   }
// }
// num([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// ---------
// let x = document.querySelector("#leftbar");
// function num(arr) {
//   let toggle = true;
//   document.getElementById("btn").addEventListener("click", function () {
//     if (toggle == true) {
//       toggle = false;
//     } else {
//       toggle = true;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       let y = document.createElement("div");
//       let z = document.createTextNode(arr[i]);
//       y.appendChild(z);
//       document.getElementById("leftbar").appendChild(y);
//       if (toggle == true && arr[i] % 2 == 0) {
//         y.style.background = "red";
//       }
//     }
//   });
// }
// num([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// ------
// document.getElementById("leftbar").appendChild(y);

// PRINT ALL NUMBERS

// PRINT EVENN NUMBERS

// let arr = [1, 0, 1, 0, 1, 0];

// document.getElementById("btn").addEventListener("click", () => {
//   let arr = [4, 8, 2, 6, 3, 10];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         x = arr[i];
//         arr[i] = arr[j];
//         arr[j] = x;
//       }
//     }
//   }
//   document.getElementById("leftbar").innerHTML = arr;
// });

// let arr = [4, 8, 2, 6, 3, 10];
// let arr = [1, 0, 1, 0, 1, 0];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       x = arr[i];
//       arr[i] = arr[j];
//       arr[j] = x;
//     }
//   }
// }
// console.log(arr);

// let arr = [4, 7, 3, 9, 2, 23];
// let arr = [1, 0, 1, 0, 1, 0];
// let res = arr.reduce(function sort(a, b) {
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   return arr;
// });
// console.log(res);
// let array = [4, 7, 3, 9, 2, 23];
// let res = array.reduce((sorted, el) => {
//   let index = 0;
//   while (sorted.length < el) index++;
//   sorted.splice(index, 0, el);
//   return sorted;
// }, []);
// console.log(res);

// let arr = [15, 28, 35, 46, 76, 85, 93];
// let res = arr.reduce((acc, ele) => {
//   return acc + ele;
// }, 0);
// console.log(res);

// setTimeout(function () {
//   myFunction("Js");
// }, 3000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

// setTimeout(function () {
//   console.log("Hello world");
// }, 2000);

// let arr = [4, 8, 32, 46, 75, 100];
// let arr = [3, 7, 9, 2, 5, 10, 14];
// for (let index = 0; index < arr.length - 1; index++) {
//   compareAndSwicth(arr, index);
// }

// function compareAndSwicth(arr, index) {
//   for (let j = index + 1; j < arr.length; j++) {
//     if (arr[j] > arr[index]) {
//       temp = arr[index];
//       arr[index] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }

// console.log(arr);

// let p = new Promise(function (success, error) {
//   let datacame = true;
//   if (datacame) {
//     success("Success Alert");
//   } else {
//     error("Reject Alert");
//   }
// });
// console.log(p);
// p.then(function (data) {
//   console.log(data);
// });
// p.catch(function (error) {
//   console.log(error);
// });

// function Slice(x, y, z) {
//   let arr = [];
//   for (let i = y; i < z; i++) {
//     arr.push(x[i]);
//   }
//   return arr;
// }
// document.write(Slice(["Banana", "Orange", "Lemon", "Apple", "Mango"], 1, 3));

// function Slice(x, y, z) {
//   let arr = [];
//   for (let i = y; i < z; i++) {
//     arr.push(x[i]);
//   }
//   return arr;
// }
// document.write(Slice(["Banana", "Orange", "Lemon", "Apple", "Mango"], 1, 3));

// ----------------------------------------------------

// var arr = [[1,2,3], [4,5,6]];
// var newArr = [];

// arr.forEach(function(item) {
//   item = item.reduce(function(a, b) {
//     return a + b;
//   });
//   newArr.push([item]);
// });
// console.log(newArr);

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("myform");
  form.addEventListener("submit", formData);
  const jsonOutput = document.getElementById("jsonButton");
  jsonOutput.addEventListener("click", jsonData);
  document.getElementById("clear").addEventListener("click", clearData);
});

//  Form Data

let arr = [];
function formData(event) {
  const makeField = document.getElementById("make");
  const modelField = document.getElementById("model");
  const yearDropdown = document.getElementById("year");
  event.preventDefault();
  const parentBody = document.querySelector("#parent-body");

  const obj = {
    make: makeField.value,
    model: modelField.value,
    year: yearDropdown.value,
  };
  arr.push(obj);

  const td1 = document.createElement("div");
  const td2 = document.createElement("div");
  const td3 = document.createElement("div");
  const row = document.createElement("div");
  td1.innerHTML = obj.make;
  td2.innerHTML = obj.model;
  td3.innerHTML = obj.year;
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);

  parentBody.appendChild(row);
  parentBody.style.display = "block";
  parentBody.style.border = "1px solid #ccc";
  this.reset();
}

// Json Data

function jsonData() {
  let jsonBody = document.getElementById("json_body");
  jsonBody.style.display = "block";
  jsonBody.innerHTML = JSON.stringify(arr);
}

// Clearing Data

function clearData(e) {
  const parentBody = document.querySelector("#parent-body");
  parentBody.textContent = "";
  arr = [];
  document.getElementById("json_body").style.display = "none";
}
