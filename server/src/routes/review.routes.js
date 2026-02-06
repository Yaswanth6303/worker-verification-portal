import { Router } from 'express';
import { createReview, getWorkerReviews } from '../controllers/review.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

// Create a review (requires authentication)
router.post('/', authenticate, createReview);

// Get reviews for a worker (public)
router.get('/worker/:workerId', getWorkerReviews);

export default router;
