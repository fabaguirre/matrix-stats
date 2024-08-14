import express from 'express';

const app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);

app.get('/status', (_req, res) => {
  res.status(200).json({ status: 'Service is running' });
});

export default app;
