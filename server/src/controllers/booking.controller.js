import bookingService from '../services/booking.service.js';

export const createBooking = async (req, res, next) => {
    try {
        const booking = await bookingService.createBooking(req.user.id, req.body);
        res.status(201).json({
            success: true,
            message: 'Booking created successfully',
            data: booking,
        });
    } catch (error) {
        next(error);
    }
};

export const getBookings = async (req, res, next) => {
    try {
        let bookings;
        if (req.user.role === 'WORKER') {
            bookings = await bookingService.getWorkerBookings(req.user.id);
        } else {
            bookings = await bookingService.getUserBookings(req.user.id);
        }

        res.json({
            success: true,
            data: bookings,
        });
    } catch (error) {
        next(error);
    }
};

export const getBookingById = async (req, res, next) => {
    try {
        const booking = await bookingService.getBookingById(req.user.id, req.params.id, req.user.role);
        res.json({
            success: true,
            data: booking,
        });
    } catch (error) {
        next(error);
    }
};
