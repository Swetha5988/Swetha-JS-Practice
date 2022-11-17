document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("myform");
  myForm.addEventListener("submit", registerForm);
});
let arr = [];

function registerForm(e) {
  e.preventDefault();
  let fNameField = document.getElementById("firstName");
  let lNameField = document.getElementById("lastName");
  let ageField = document.getElementById("Age");
  let tableBody = document.querySelector("tbody");
  let obj = {
    fName: fNameField.value,
    lName: lNameField.value,
    age: ageField.value,
  };
  let hiddenIndex = document.getElementById("hidden-index").value;
  if (hiddenIndex === "") {
    arr.push(obj);
  } else {
    arr[parseInt(hiddenIndex, 10)] = obj;
  }
  let row = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");

  td1.innerHTML = obj.fName;
  td2.innerHTML = obj.lName;
  td3.innerHTML = obj.age;

  if (!obj.fName.match(/^[a-z]+$/i)) {
    alert("please enter firstName in text");
    return false;
  }
  if (!obj.lName.match(/^[a-z]+$/i)) {
    alert("please enter lasttName in text");
    return false;
  }
  if (!obj.age.match(/^\d+/) || obj.age <= 0) {
    alert("please enter age should greter zero");
    return false;
  }
  td4.innerHTML = ` <i id="edit" onclick ="editItem(${arr.length})" class="fa fa-edit"></i>
                    <i id="delete" onclick ="deleteItem(this)" class="fa fa-trash"></i>`;
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);

  if (hiddenIndex === "") {
    tableBody.appendChild(row);
  } else {
    let trs = tableBody.querySelectorAll("tr");
    let trToReplace = trs[hiddenIndex];
    trToReplace.replaceWith(row);
  }

  this.reset();
}

function editItem(index) {
  let indexValue = index - 1;
  let fNameField = document.getElementById("firstName");
  let lNameField = document.getElementById("lastName");
  let ageField = document.getElementById("Age");
  fNameField.value = arr[indexValue].fName;
  lNameField.value = arr[indexValue].lName;
  ageField.value = arr[indexValue].age;
  document.getElementById("hidden-index").value = indexValue;
  
}
function deleteItem(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("myTable").deleteRow(row.rowIndex);
  }
}
