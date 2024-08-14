import type { NextFunction, Request, Response } from 'express';
import { ValiError } from 'valibot';

function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) {
  let status: number = 500; // Internal Server Error
  let message = 'Something went wrong';

  if (err instanceof ValiError) {
    status = 400; // Bad Request
    message = err.message;
  }

  res.status(status).send({ errors: [{ message }] });
}

export default errorHandler;
