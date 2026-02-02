import { Router } from 'express';
import { createBooking, getBookings, getBookingById } from '../controllers/booking.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';
import { createBookingSchema } from '../schemas/booking.schema.js';

const router = Router();

router.use(authenticate);

router.post('/', validate(createBookingSchema), createBooking);
router.get('/', getBookings);
router.get('/:id', getBookingById);

export default router;
