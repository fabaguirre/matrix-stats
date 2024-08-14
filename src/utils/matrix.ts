export const isDiagonal = (matrix: Matrix) =>
  matrix.every((row, i) => row.every((val, j) => (i === j ? true : val === 0)));
