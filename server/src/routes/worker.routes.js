import { Router } from 'express';
import { getWorkers, getWorkerById, getWorkersBySkill } from '../controllers/worker.controller.js';

const router = Router();

// Public routes - no authentication required
router.get('/', getWorkers);
router.get('/skill/:skill', getWorkersBySkill);
router.get('/:id', getWorkerById);

export default router;
