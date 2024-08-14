import type { Request, Response } from 'express';

import { validateMatrix } from '@/validators/matrix';

export const getMatrixStats = (req: Request, res: Response) => {
  try {
    const matrix = validateMatrix(req.body.matrix);
    res.status(201).send({ matrix });
  } catch (error) {
    res.status(400).send({ error: 'Invalid matrix.' });
  }
};
