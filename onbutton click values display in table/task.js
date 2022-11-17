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
  const tableBody = document.querySelector("tbody");

  const obj = {
    make: makeField.value,
    model: modelField.value,
    year: yearDropdown.value,
  };
  arr.push(obj);

  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const row = document.createElement("tr");
  td1.innerHTML = obj.make;
  td2.innerHTML = obj.model;
  td3.innerHTML = obj.year;
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  tableBody.appendChild(row);
  this.reset();
}

// Json Data

function jsonData() {
  let jsonBody = document.getElementById("json_body");
  jsonBody.style.display = "block";
  jsonBody.innerHTML = JSON.stringify(arr);
}

// Clearing Data

function clearData() {
  const tableBody = document.querySelector("tbody");
  const new_tbody = document.createElement("tbody");
  let jsonBody = document.getElementById("json_body");
  tableBody.parentNode.replaceChild(new_tbody, tableBody);
  arr = [];
  jsonBody.innerHTML = "";
  document.getElementById("json_body").style.display = "none";
}
