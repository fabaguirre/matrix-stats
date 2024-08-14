import type { NextFunction, Request, Response } from 'express';
import { ValiError } from 'valibot';

import { STATUS_CODES, error } from '@/service/response';

function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  let status: number = STATUS_CODES.INTERNAL_SERVER_ERROR;
  let message = 'Something went wrong';

  if (err instanceof ValiError) {
    status = STATUS_CODES.BAD_REQUEST;
    message = err.message;
  }

  res.status(status).send(
    error({
      message,
      status,
    }),
  );
}

export default errorHandler;
