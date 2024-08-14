import { array, number, parse } from 'valibot';

const MatrixSchema = array(array(number()));

export const validateMatrix = (data: unknown) => parse(MatrixSchema, data);
