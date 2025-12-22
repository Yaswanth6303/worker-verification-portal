import { Router } from 'express';
import {
  register,
  login,
  getProfile,
  updateProfile,
  checkEmail,
  checkPhone,
} from '../controllers/auth.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';
import { validate } from '../middleware/validate.middleware.js';
import {
  registerSchema,
  loginSchema,
  checkEmailSchema,
  checkPhoneSchema,
  updateProfileSchema,
} from '../schemas/auth.schema.js';

const router = Router();

// Public routes
router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.post('/check-email', validate(checkEmailSchema), checkEmail);
router.post('/check-phone', validate(checkPhoneSchema), checkPhone);

// Protected routes
router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, validate(updateProfileSchema), updateProfile);

export default router;
