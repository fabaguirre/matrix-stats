export const isDiagonal = (matrix: Matrix) =>
  matrix.every((row, i) => row.every((val, j) => (i === j ? true : val === 0)));

export const isSquare = (matrix: Matrix) => {
  const size = matrix.length;
  return matrix.every(row => row.length === size);
};
