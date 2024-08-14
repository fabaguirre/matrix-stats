import { array, custom, number, parse } from 'valibot';

import { isSquare } from '@/utils/matrix';

const MatrixSchema = array(array(number()));
const SquareMatrixSchema = custom<Matrix>(
  data => isSquare(validateMatrix(data)),
  'Invalid type. Expected a square matrix.',
);

const validateMatrix = (data: unknown) => parse(MatrixSchema, data);
export const validateSquareMatrix = (data: unknown) =>
  parse(SquareMatrixSchema, data);
