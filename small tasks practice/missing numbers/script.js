let inputArr = [10, 13, 15, 16, 17, 21, 34];
let newIndex = 0;
for (let i = inputArr[0]; i < inputArr[inputArr.length - 1]; i++) {
  if (inputArr.indexOf(i) == -1) {
    //If i doesn't exist in the array
    inputArr.splice(newIndex, 0, i);
  }
  newIndex++;
}

console.log(inputArr);

// another method to get missing numbers

let array = [10, 13, 15, 16, 17, 21, 34];
let result = [];
for (
  let i = Math.min.apply(null, array);
  i < Math.max.apply(null, array);
  i++
) {
  if (array.indexOf(i) == -1) {
    result.push(i);
  }
}
console.log(result);
