let arr = [2, 5, 6, 3, 2, 5, 3];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    console.log(arr[i]);
  }
  obj[arr[i]] = arr[i];
}
// with for loops

// let arr = [2, 5, 6, 3, 2, 5, 3];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log(arr[i]);
    }
  }
}
console.log(result);
