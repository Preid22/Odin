export default function gameBoard() {
  const grid = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const newGrid = () => {
    grid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };
  const drop = (token, x, y) => {
    if (grid[x][y] !== "") {
      grid[x][y] = token;
    }
  };

  return { grid, newGrid, drop };
}
