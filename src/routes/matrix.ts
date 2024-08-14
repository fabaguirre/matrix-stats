import { Router } from 'express';

import { getMatrixStats } from '@/controllers/matrix';

const router = Router();

router.post('/stats', getMatrixStats);

export default router;
