const incrementbtn = document.getElementById("incrementbtn");
const decrementbtn = document.getElementById("decrementbtn");
const push = document.getElementById("push");
let counter = 0;
incrementbtn.addEventListener("click", function () {
  console.log("Button clicked");
  counter = counter + 1;
  push.textContent = counter;
});
decrementbtn.addEventListener("click", function () {
  if (counter > 0) {
    counter = counter - 1;
  }
  push.textContent = counter;
});
