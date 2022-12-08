// document.addEventListener("DOMContentLoaded", function () {
//   let myForm = document.getElementById("myform");
//   myForm.addEventListener("submit", registerForm);
// });

// let arr = [];
// function registerForm(e) {
//   e.preventDefault();
//   let obj = {
//     fName: form1.firstName.value,
//     lName: form1.lastName.value,
//     age: form1.Age.value,
//   };
//   let editIndex = arr.length - 1;

//   if (!editIndex) {
//     arr.push(obj);
//     updateTable(obj);
//   } else {
//     arr[editIndex] = obj;
//     updateTable(obj, editIndex);
//   }
//   this.reset();
// }

// function editItem(index) {
//   form1.firstName.value = arr[index].fName;
//   form1.lastName.value = arr[index].lName;
//   form1.Age.value = arr[index].age;
// }

// function deleteItem(td) {
//   if (confirm("Are you sure to delete this record ?")) {
//     row = td.parentElement.parentElement;
//     document.getElementById("tableId").deleteRow(row.rowIndex);
//     form1.firstName.value = "";
//     form1.lastName.value = "";
//     form1.Age.value = "";
//   }
// }
// //UI Manipulation
// function updateTable(obj, rowId) {
//   let tableBody = document.querySelector("tbody");

//   let row = document.createElement("tr");

//   let td1 = document.createElement("td");
//   let td2 = document.createElement("td");
//   let td3 = document.createElement("td");
//   let td4 = document.createElement("td");

//   row.id = arr.length - 1;

//   td1.innerHTML = obj.fName;
//   td2.innerHTML = obj.lName;
//   td3.innerHTML = obj.age;
//   td4.innerHTML = `<button type="button" onclick="editItem(${row.id})">Edit</button>
//                       <button type ="button" onclick = "deleteItem(this)">Delete</button>`;
//   if (!obj.fName.match(/^[a-z]+$/i)) {
//     alert("please enter firstName in text");
//     return false;
//   }
//   if (!obj.lName.match(/^[a-z]+$/i)) {
//     alert("please enter lasttName in text");
//     return false;
//   }
//   if (!obj.age.match(/^\d+/) || obj.age <= 0) {
//     alert("please enter age should greter zero");
//     return false;
//   }
//   row.appendChild(td1);
//   row.appendChild(td2);
//   row.appendChild(td3);
//   row.appendChild(td4);

//   if (!rowId) {
//     tableBody.appendChild(row);
//   } else {
//     let trs = tableBody.querySelectorAll("tr");
//     trToReplace = trs[rowId];
//     trToReplace.replaceWith(row);
//   }
// }

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// let arr = [17, 82, 3, 94, 5];
// let sum = 0;
// let add = 0;
// arr.sort((a, b) => a - b);

// for (let i = 0; i < arr.length - 1; i++) {
//   sum += arr[i];
// }
// for (let i = arr.length - 1; i > 0; i--) {
//   add += arr[i];
// }
// console.log(sum);
// console.log(add);
