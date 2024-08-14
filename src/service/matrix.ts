import { isDiagonal } from '@/utils/matrix';

export const calculateMatrixStats = (matrix: Matrix) => {
  const flattenMatrix = matrix.flat();
  const max = Math.max(...flattenMatrix);
  const min = Math.min(...flattenMatrix);
  const sum = flattenMatrix.reduce((acc, val) => acc + val, 0);
  const avg = sum / flattenMatrix.length;

  return {
    max,
    min,
    average: avg,
    totalSum: sum,
    isDiagonal: isDiagonal(matrix),
  };
};
