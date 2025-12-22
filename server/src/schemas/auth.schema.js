import { z } from 'zod';

export const registerSchema = z.object({
  fullName: z
    .string({ required_error: 'Full name is required' })
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),

  email: z
    .string({ required_error: 'Email is required' })
    .email('Please provide a valid email')
    .toLowerCase()
    .trim(),

  phone: z
    .string({ required_error: 'Phone number is required' })
    .regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),

  password: z
    .string({ required_error: 'Password is required' })
    .min(8, 'Password must be at least 8 characters'),

  role: z.enum(['customer', 'worker'], {
    required_error: 'Role is required',
    invalid_type_error: 'Role must be either customer or worker',
  }),

  address: z.string().trim().optional(),
  city: z.string().trim().optional(),
  pincode: z
    .string()
    .regex(/^[0-9]{6}$/, 'PIN code must be 6 digits')
    .optional()
    .or(z.literal('')),
  profilePicture: z.string().optional(),

  skills: z.array(z.string()).optional(),
  experience: z.string().optional(),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Please provide a valid email')
    .toLowerCase()
    .trim(),

  password: z.string({ required_error: 'Password is required' }).min(1, 'Password is required'),

  role: z.enum(['customer', 'worker', 'admin'], {
    required_error: 'Role is required',
    invalid_type_error: 'Invalid role',
  }),
});

export const checkEmailSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Please provide a valid email')
    .toLowerCase()
    .trim(),
});

export const checkPhoneSchema = z.object({
  phone: z
    .string({ required_error: 'Phone number is required' })
    .regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
});

export const updateProfileSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim()
    .optional(),

  address: z.string().trim().optional(),

  city: z.string().trim().optional(),

  pincode: z
    .string()
    .regex(/^[0-9]{6}$/, 'PIN code must be 6 digits')
    .optional()
    .or(z.literal('')),

  profilePicture: z
    .string()
    .url('Profile picture must be a valid URL')
    .optional()
    .or(z.literal('')),

  // Worker profile fields
  skills: z.array(z.string()).optional(),

  experience: z.string().optional(),

  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
});
