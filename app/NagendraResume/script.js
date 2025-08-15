"use strict";
document.getElementById("hide").style.display = "none";
document.querySelector("button").addEventListener("click", function () {
  const hideElement = document.getElementById("hide");
  if (hideElement.style.display === "none") {
    hideElement.style.display = "block";
  } else {
    hideElement.style.display = "none";
  }
});
