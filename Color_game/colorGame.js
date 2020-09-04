let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function(){
  easyBtn.classList.add('selected')
  hardBtn.classList.remove('selected')
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      
    }else {
      squares[i].style.display = 'none'
    }
    
  }
});

hardBtn.addEventListener('click', function(){
  hardBtn.classList.add('selected')
  easyBtn.classList.remove('selected')
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block'
  }
});

resetButton.addEventListener('click',function(){
  
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor=pickColor()
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = 'New colors';

})

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor
      resetButton.textContent = 'Play again?'
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again!";
    }
  });
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num){
//make array
let arr = [];
//add num random colors to array
for (let i = 0; i<num;i++){
  arr.push(randomColor())

}
//return array
return arr;
}

function randomColor(){
  //pick a red from 0 to 255
  let r = Math.floor(Math.random()*256);
  //pick a green from 0 to 255
  let g = Math.floor(Math.random()*256);
  //pick a blue from 0 to 255
  let b = Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`;
}