let arr = [1, 1, 2, 3, 1, 1, 2];
let count = 0;
let op = [];
for (let i = 0; i < arr.length - 1; i++) {
  if (op) {
    op.push(arr[i]);
  }
  if (arr[i] == op[i]) {
    count++;
  }
}
console.log(count);
