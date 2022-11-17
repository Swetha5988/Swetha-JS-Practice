function customNumButton(number) {
  const list = document.getElementById("btn").classList;
  list.add("numButtonStyle");
  return `<button type="button" id="numButtonStyle">${number}</button>`;
}
function allNum(digit) {
  for (let i = 0; i < digit.length; i++) {
    return customNumButton(digit);
  }
}
