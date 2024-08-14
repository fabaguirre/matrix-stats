import type { NextFunction, Request, Response } from 'express';

import { calculateMatrixStats } from '@/service/matrix';
import { STATUS_CODES, success } from '@/service/response';
import { validateSquareMatrix } from '@/validators/matrix';

export const getMatrixStats = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const matrix = validateSquareMatrix(req.body.matrix);

    const stats = calculateMatrixStats(matrix);
    res.status(STATUS_CODES.OK).send(success({ data: stats }));
  } catch (error) {
    next(error);
  }
};
