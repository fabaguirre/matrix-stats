import type { NextFunction, Request, Response } from 'express';

import { validateMatrix } from '@/validators/matrix';

export const getMatrixStats = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const matrix = validateMatrix(req.body.matrix);
    res.status(200).send({ matrix });
  } catch (error) {
    next(error);
  }
};
