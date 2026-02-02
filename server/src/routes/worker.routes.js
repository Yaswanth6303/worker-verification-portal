import { Router } from 'express';
import { getWorkers, getWorkerById } from '../controllers/worker.controller.js';

const router = Router();

// /api/workers
router.get('/', getWorkers);
router.get('/:id', getWorkerById);

export default router;
