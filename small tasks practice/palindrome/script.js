// function palind(str) {
//   let reverseArr = [];
//   let splitStr = str.split("");
//   for (let i = splitStr.length - 1; i >= 0; i--) {
//     reverseArr.push(splitStr[i]);
//   }
//   if (str === reverseArr.join("")) {
//     return "Its palindrome";
//   } else {
//     return "Its not palindrome";
//   }
// }
// console.log(palind("mom"));

//---- 2nd method for palindrome

function palind(str) {
  let len = str.length - 1;

  for (let i = 0; i < len; i++) {
    if (str.charAt(i) === str.charAt(len)) {
      console.log(str.charAt(i), str.charAt(len));
      len--;
    } else {
      return false;
    }
  }
  return true;
}
console.log(palind("daccad"));
// console.log(palind("swetha"));
