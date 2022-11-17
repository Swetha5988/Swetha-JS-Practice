document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("myform");
  myForm.addEventListener("submit", registerForm);
});

class DataBase {
  data = [];
  editIndex = null;

  //Add an item into the array if the editIndex is not set; if editIndex is available, replace the contents with "obj"
  //Automatically reset the value of editIndex after save completes.
  save = function (obj) {
    if (!this.editIndex) {
      this.data.push(obj);
    } else {
      this.data[this.editIndex] = obj;
    }
    this.editIndex = null;
  };

  //Returns the data if editIndex is set, if not returns an empty object
  getData = function () {
    if (!this.editIndex) {
      return {};
    } else {
      return this.data[this.editIndex];
    }
  };

  setEditIndex = function (index) {
    this.editIndex = index;
  };

  getEditIndex = function () {
    return this.editIndex;
  };

  deleteData = function (index) {
    // delete index indicates delte the index item
    this.data.splice(index, 1);
  };
  getRowId = function () {
    return this.data.length - 1;
  };
}

let dataBase = new DataBase();
//Event handlers
function registerForm(e) {
  e.preventDefault();
  let obj = {
    fName: form1.firstName.value,
    lName: form1.lastName.value,
    age: form1.Age.value,
  };
  let editIndex = dataBase.getEditIndex();

  if (!editIndex) {
    dataBase.save(obj);
    updateTable(obj);
  } else {
    dataBase.save(obj);
    updateTable(obj, editIndex);
  }
  this.reset();
}

function editItem(index) {
  dataBase.setEditIndex(index);
  obj = dataBase.getData();
  form1.firstName.value = obj.fName;
  form1.lastName.value = obj.lName;
  form1.Age.value = obj.age;
}

function deleteItem(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("tableId").deleteRow(row.rowIndex);
    form1.firstName.value = "";
    form1.lastName.value = "";
    form1.Age.value = "";
  }
}
//UI Manipulation
function updateTable(obj, rowId) {
  let tableBody = document.querySelector("tbody");

  let row = document.createElement("tr");

  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");

  row.id = dataBase.getRowId();

  td1.innerHTML = obj.fName;
  td2.innerHTML = obj.lName;
  td3.innerHTML = obj.age;
  td4.innerHTML = `<button type="button" onclick="editItem(${row.id})">Edit</button>
                      <button type ="button" onclick = "deleteItem(this)">Delete</button>`;
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
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);

  if (!rowId) {
    tableBody.appendChild(row);
  } else {
    let trs = tableBody.querySelectorAll("tr");
    trToReplace = trs[rowId];
    trToReplace.replaceWith(row);
  }
}
