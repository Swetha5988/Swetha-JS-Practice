let arr = [15, 31, 62, 53, 81, 71, 42, 42];
let freqArray = [];
for (let i = 0; i < 99; i++) {
  freqArray[i] = 0;
}
for (let i = 0; i < arr.length; i++) {
  freqArray[arr[i]]++;
}
console.log(freqArray);
