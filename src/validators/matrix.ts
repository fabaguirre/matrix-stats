import { array, custom, number, parse } from 'valibot';

import { isMatrix } from '@/utils/matrix';

const MatrixSchema = custom<Matrix>(
  data => isMatrix(parse(array(array(number())), data)),
  'Invalid type. Expected a matrix.',
);

export const validateMatrix = (data: unknown) => parse(MatrixSchema, data);
