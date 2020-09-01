var h1 = document.querySelector("h1");
var button = document.querySelector("button");
var body = document.querySelector("body");
let isPurple = false;

button.addEventListener("click", function () {
  document.body.classList.toggle("purple");
});

/*
button.addEventListener("click", function () {
  console.log("clicked");
  if (isPurple) {
    body.style.background = "white";
  } else {
    body.style.background = "purple";
  }
  isPurple = !isPurple;
});
*/
