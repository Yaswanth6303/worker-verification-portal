import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth.middleware.js';
import { getWorkerStats, getCustomerStats } from '../controllers/dashboard.controller.js';

const router = Router();

// Worker Dashboard Stats
router.get('/worker/stats', authenticate, authorize(['WORKER']), getWorkerStats);

// Customer Dashboard Stats (Optional, but useful)
router.get('/customer/stats', authenticate, authorize(['CUSTOMER']), getCustomerStats);

export default router;
