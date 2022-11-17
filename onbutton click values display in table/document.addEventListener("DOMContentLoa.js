document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("myform");
  const makeField = document.getElementById("make");
  const modelField = document.getElementById("model");
  const yearDropdown = document.getElementById("year");
  const json = document.getElementById("json_body");
  let arr = [];
  /* adding event to the form */

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const tableBody = document.querySelector("tbody");

    // getting values to obj

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

    form.reset();
  });
  document.getElementById("json").addEventListener("click", function () {
    json.style.display = "block";
    json.innerHTML = JSON.stringify(arr);
  });
  /* clear the table body by clicking clear button */
  document.getElementById("clear").addEventListener("click", function () {
    const tableBody = document.querySelector("tbody");
    const new_tbody = document.createElement("tbody");
    tableBody.parentNode.replaceChild(new_tbody, tableBody);
    arr = [];
    json.style.display = "none";
  });
});
