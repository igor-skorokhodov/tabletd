let cells = document.querySelectorAll('.table');

cells.forEach((cell) => {
  cell.addEventListener('mousedown', mouseDown);
})

function mouseDown (e) {
      e.target.classList.toggle('selected');
}
