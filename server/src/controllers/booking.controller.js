import bookingService from '../services/booking.service.js';
import prisma from '../config/database.js';

/**
 * Create a new booking
 */
export const createBooking = async (req, res, next) => {
  try {
    const customerId = req.user.id;
    const booking = await bookingService.createBooking(customerId, req.body);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: booking,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    next(error);
  }
};

/**
 * Get customer's bookings
 */
export const getCustomerBookings = async (req, res, next) => {
  try {
    const customerId = req.user.id;
    const bookings = await bookingService.getCustomerBookings(customerId);

    res.json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    next(error);
  }
};

/**
 * Get worker's bookings
 */
export const getWorkerBookings = async (req, res, next) => {
  try {
    // Get the worker profile ID from the logged-in user
    const userId = req.user.id;

    // Find the worker profile for this user using the shared prisma instance
    const workerProfile = await prisma.workerProfile.findUnique({
      where: { userId },
    });

    if (!workerProfile) {
      return res.status(404).json({
        success: false,
        message: 'Worker profile not found',
      });
    }

    const bookings = await bookingService.getWorkerBookings(workerProfile.id);

    res.json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    next(error);
  }
};

/**
 * Update booking status
 */
export const updateBookingStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const userId = req.user.id;

    const booking = await bookingService.updateBookingStatus(id, status, userId);

    res.json({
      success: true,
      message: 'Booking status updated',
      data: booking,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    next(error);
  }
};
