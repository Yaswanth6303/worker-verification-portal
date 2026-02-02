import { z } from 'zod';

export const createBookingSchema = z.object({
    workerId: z.string({ required_error: 'Worker ID is required' }),
    service: z.string({ required_error: 'Service is required' }),
    description: z.string().optional(),
    scheduledDate: z.string({ required_error: 'Scheduled date is required' }),
    scheduledTime: z.string({ required_error: 'Scheduled time is required' }),
    address: z.string({ required_error: 'Address is required' }),
});

export const updateBookingStatusSchema = z.object({
    status: z.enum(['PENDING', 'CONFIRMED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'], {
        required_error: 'Status is required',
        invalid_type_error: 'Invalid status',
    }),
});
