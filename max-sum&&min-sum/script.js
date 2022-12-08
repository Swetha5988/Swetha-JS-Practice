let arr = [17, 82, 3, 94, 5];
let sum = 0;
let add = 0;
arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length - 1; i++) {
  sum += arr[i];
}
for (let i = arr.length - 1; i > 0; i--) {
  add += arr[i];
}
console.log(sum);
console.log(add);
