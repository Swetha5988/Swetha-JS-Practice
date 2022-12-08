let arr = [17, 82, 3, 94, 85];
let max = null;
let sMax = null;
for (let i = 0; i < arr.length; i++) {
  if (max == null) {
    max = arr[0];
    // console.log(max);
  }
  if (arr[i] > max) {
    sMax = max;
    // console.log(sMax);
    max = arr[i];
  }
  if (arr[i] < max && arr[i] > sMax) {
    sMax = arr[i];
  }
}

console.log(sMax);
