import bookingRepository from '../repositories/booking.repository.js';
import workerRepository from '../repositories/worker.repository.js';
import { parseDateString } from '../utils/date.utils.js';

/**
 * Create a new booking
 */
export const createBooking = async (customerId, bookingData) => {
  const { workerId, service, description, scheduledDate, scheduledTime, address } = bookingData;

  // Verify worker exists and is available
  const worker = await workerRepository.findById(workerId, { user: true });

  if (!worker) {
    const error = new Error('Worker not found');
    error.status = 404;
    throw error;
  }

  if (!worker.isAvailable) {
    const error = new Error('Worker is not available for booking');
    error.status = 400;
    throw error;
  }

  // Calculate estimated amount based on hourly rate
  const amount = worker.hourlyRate || 0;

  // Validate and parse the scheduled date
  const parsedDate = parseDateString(scheduledDate);

  // Create the booking
  const booking = await bookingRepository.create({
    customerId,
    workerId,
    service,
    description,
    scheduledDate: parsedDate,
    scheduledTime,
    address,
    amount,
    status: 'PENDING',
    paymentStatus: 'PENDING',
  });

  // Update worker's total bookings count
  await workerRepository.update(workerId, {
    totalBookings: { increment: 1 },
  });

  return {
    id: booking.id,
    service: booking.service,
    description: booking.description,
    scheduledDate: booking.scheduledDate,
    scheduledTime: booking.scheduledTime,
    address: booking.address,
    amount: booking.amount,
    status: booking.status,
    paymentStatus: booking.paymentStatus,
    worker: {
      id: booking.worker.id,
      name: booking.worker.user.fullName,
      phone: booking.worker.user.phone,
      email: booking.worker.user.email,
    },
    customer: {
      name: booking.customer.fullName,
      phone: booking.customer.phone,
      email: booking.customer.email,
    },
    createdAt: booking.createdAt,
  };
};

/**
 * Get customer's bookings
 */
export const getCustomerBookings = async (customerId) => {
  const bookings = await bookingRepository.findMany(
    { customerId },
    {
      worker: {
        include: {
          user: {
            select: {
              fullName: true,
              phone: true,
              profilePicture: true,
            },
          },
        },
      },
      review: {
        select: {
          id: true,
          rating: true,
        },
      },
    },
    { createdAt: 'desc' },
  );

  return bookings.map((booking) => ({
    id: booking.id,
    service: booking.service,
    description: booking.description,
    scheduledDate: booking.scheduledDate,
    scheduledTime: booking.scheduledTime,
    address: booking.address,
    amount: booking.amount,
    status: booking.status,
    paymentStatus: booking.paymentStatus,
    worker: {
      id: booking.worker.id,
      name: booking.worker.user.fullName,
      phone: booking.worker.user.phone,
      profilePicture: booking.worker.user.profilePicture,
      rating: booking.worker.rating,
    },
    hasReview: !!booking.review,
    review: booking.review,
    createdAt: booking.createdAt,
  }));
};

/**
 * Get worker's bookings
 */
export const getWorkerBookings = async (workerId) => {
  const bookings = await bookingRepository.findMany(
    { workerId },
    {
      customer: {
        select: {
          fullName: true,
          phone: true,
          email: true,
          profilePicture: true,
          address: true,
        },
      },
    },
    { createdAt: 'desc' },
  );

  return bookings.map((booking) => ({
    id: booking.id,
    service: booking.service,
    description: booking.description,
    scheduledDate: booking.scheduledDate,
    scheduledTime: booking.scheduledTime,
    address: booking.address,
    amount: booking.amount,
    status: booking.status,
    paymentStatus: booking.paymentStatus,
    customer: {
      name: booking.customer.fullName,
      phone: booking.customer.phone,
      email: booking.customer.email,
      profilePicture: booking.customer.profilePicture,
    },
    createdAt: booking.createdAt,
  }));
};

/**
 * Update booking status
 */
export const updateBookingStatus = async (bookingId, status, userId) => {
  const booking = await bookingRepository.findById(bookingId, { worker: true });

  if (!booking) {
    const error = new Error('Booking not found');
    error.status = 404;
    throw error;
  }

  const isWorker = booking.worker.userId === userId;
  const isCustomer = booking.customerId === userId;

  // Customers can only cancel their own bookings
  if (isCustomer && status !== 'CANCELLED') {
    const error = new Error('Customers can only cancel bookings');
    error.status = 403;
    throw error;
  }

  // Only the worker or customer can update the booking status
  if (!isWorker && !isCustomer) {
    const error = new Error('Unauthorized to update this booking');
    error.status = 403;
    throw error;
  }

  const updatedBooking = await bookingRepository.update(bookingId, { status });

  return updatedBooking;
};

export default {
  createBooking,
  getCustomerBookings,
  getWorkerBookings,
  updateBookingStatus,
};
