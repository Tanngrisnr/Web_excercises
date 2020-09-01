var r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var uni = [1, 1, 1, 1, 1, 1, 1];
var sum = [100, 40, 50];

//**********/
function printReverse(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
  /*var rev = arr.reverse();
  rev.forEach(function (item) {
    console.log(item);
  });*/
}
//**********/
function isUniform(arr) {
  let first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false;
    }
  }
  return true;
  //return arr.every((val, arr) => val === arr[0]);
}
//*********/
function sumArray(arr) {
  let total = 0;
  arr.forEach((element) => {
    total += element;
  });
  return total;
  /*return arr.reduce(function (total, num) {
    return total + num;
  });*/
}
//*********/
function maximum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
  //return Math.max(...arr);
}
