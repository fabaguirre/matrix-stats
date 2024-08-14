export const isDiagonal = (matrix: Matrix) =>
  matrix.every((row, i) => row.every((val, j) => (i === j ? true : val === 0)));

export const isMatrix = (matrix: Matrix) => {
  if (matrix.length === 0) return false;

  const rowLength = matrix[0].length;
  return rowLength > 0 && matrix.every(row => row.length === rowLength);
};
