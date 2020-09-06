let numSquares = 6;
let colors = [];
let pickedColor;
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let squares = document.querySelectorAll(".square");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //modeButton eventlisteners
  setupModeButtons();
  setupSquares();
  reset();
}
function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}
function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function () {
      //grab color of clicked square
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again!";
      }
    });
  }
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick new random color from array
  pickedColor = pickColor();
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New colors";
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  //change colorDisplay to match picked color
  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  //make array
  let arr = [];
  //add num random colors to array
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor() {
  //pick a red from 0 to 255
  let r = Math.floor(Math.random() * 256);
  //pick a green from 0 to 255
  let g = Math.floor(Math.random() * 256);
  //pick a blue from 0 to 255
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
