const grid = document.querySelector(".grid");
const clearButton = document.querySelector(".clear");
const slider = document.querySelector(".inputSlider");
const sliderVal = document.querySelector(".inputSlider").value;

function genCells(num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.className = "row";
    grid.appendChild(row);
    console.log(grid.childNodes);
    for (let j = 0; j < num; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
      });
    }
  }
}

slider.addEventListener("click", () => genCells(slider.value));

/*
Try creating 16 row divs with sixteen cell divs [DONE]

Get cells to resize within fixed container [DONE] : set ROW and CELL elements
 to 'flex: 1', the 'flex' property dictates the amount of available space that each
 element will take up in its parent, it combines flex-grow, flex-shrink, and flex basis

*/
