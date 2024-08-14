import express from 'express';

import matrixRoutes from '@/routes/matrix';

const app = express();
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.get('/status', (_req, res) => {
  res.status(200).json({ status: 'Service is running' });
});

app.use('/api/matrix', matrixRoutes);

export default app;
