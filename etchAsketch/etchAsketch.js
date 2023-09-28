const box = document.querySelector(".box");

let genCells = function (num) {
  for (let i = 0; i < num; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = "Cell";
    box.appendChild(cell);
  }
};

genCells(144);
