import type { NextFunction, Request, Response } from 'express';

import { calculateMatrixStats } from '@/service/matrix';
import { validateMatrix } from '@/validators/matrix';

export const getMatrixStats = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const matrix = validateMatrix(req.body.matrix);

    const stats = calculateMatrixStats(matrix);
    res.status(200).send(stats);
  } catch (error) {
    next(error);
  }
};
