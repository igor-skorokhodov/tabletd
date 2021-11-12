let cells = document.querySelectorAll(".table");

window.addEventListener("mousedown", mouseDown);

//window.addEventListener("mouseup", mouseUp);

function mouseDown() {
  document.querySelector(".div-selected").classList.add("selected");
}

function mouseUp() {
  document.querySelector(".div-selected").classList.remove("selected");
}
