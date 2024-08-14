import express, { Request, Response } from 'express';

const app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!!!');
});

export default app;
