// let arr = [1, 2, 3, 4, 3, 2, 1];
//let arr = [10, 20, 40, 30, 30, 20, 10];
let arr = [2, 4, 4,];
let result = null;
for (let j = 0; j < arr.length - 1; j++) {
  if (arr.indexOf(arr[j]) == arr.lastIndexOf(arr[j])) {
    result = arr[j];
  }
}
console.log(result);
