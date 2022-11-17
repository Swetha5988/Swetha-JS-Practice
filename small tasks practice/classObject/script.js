

class DataBase {
  data = [];
  editIndex = -1;

  //Add an item into the array if the editIndex is not set; if editIndex is available, replace the contents with "obj"
  //Automatically reset the value of editIndex after save completes.
  saveObj = function (obj) {
    if (!editIndex) {
      this.data.push(obj);
    } else {
      this.data[editIndex] = obj;
    }
    this.editIndex = -1;
  };

  //Returns the data if editIndex is set, if not returns an empty object
  getData = function () {
    if (!editIndex) {
      return {};
    } else {
      return this.data[this.editIndex];
    }
  };
  setEditIndex = function (index) {
    this.editIndex = index;
  };

  deleteData = function (index) {
    // delete index indicates delte the index item
    this.data.splice(index, 1);
  };
}
let dataBase = new DataBase();
