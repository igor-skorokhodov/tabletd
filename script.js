let cells = document.querySelectorAll(".table");

document
  .querySelector(".div-selected")
  .addEventListener("mousedown", mouseDown);

document.querySelector(".div-selected").addEventListener("mouseup", mouseUp);

let beginX;
let beginY;
let endX;
let endY;

function mouseDown(e) {
  beginX = e.pageX;
  beginY = e.pageY;
}

function mouseUp(e) {
  document.querySelector(".div-selected").classList.remove("selected");
  endX = e.pageX;
  endY = e.pageY;
  var x = document.createElement("div");
  let width = endX - beginX;
  let height = endY - beginY;
  x.style.top = beginY + "px"; 
  x.style.left = beginX + "px";
  x.style.position = 'absolute';
  x.style.width = width + "px";
  x.style.height = height + "px";
  x.style.border = "1px solid black";
  document.body.appendChild(x);
}
