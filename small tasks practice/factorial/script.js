let result = 1;
function factorial(num) {
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}
console.log(factorial(0));
