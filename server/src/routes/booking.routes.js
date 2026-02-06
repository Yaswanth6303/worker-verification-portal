import { Router } from 'express';
import {
  createBooking,
  getCustomerBookings,
  getWorkerBookings,
  updateBookingStatus,
} from '../controllers/booking.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

// All booking routes require authentication
router.use(authenticate);

// Customer routes
router.post('/', createBooking);
router.get('/customer', getCustomerBookings);

// Worker routes
router.get('/worker', getWorkerBookings);
router.patch('/:id/status', updateBookingStatus);

export default router;
