/*function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}*/

function kebabToSnake(str) {
  let newStr = str.replace(/-/g, "_");
  return newStr;
}

function isEven(num) {
  return num % 2 === 0;
}
function factorial(num) {
  let factor = 1;
  for (let i = 2; i <= num; i++) {
    factor *= i;
  }
  return factor;
}
