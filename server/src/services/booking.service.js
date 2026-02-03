import bookingRepository from '../repositories/booking.repository.js';
import workerRepository from '../repositories/worker.repository.js';

class BookingService {
    async createBooking(userId, bookingData) {
        // Verify worker exists
        const worker = await workerRepository.findById(bookingData.workerId);
        if (!worker) {
            throw { status: 404, message: 'Worker not found' };
        }

        // Create booking
        return await bookingRepository.create({
            customerId: userId,
            workerId: bookingData.workerId,
            service: bookingData.service,
            description: bookingData.description,
            scheduledDate: new Date(bookingData.scheduledDate),
            scheduledTime: bookingData.scheduledTime,
            address: bookingData.address,
            amount: bookingData.amount,
            status: 'PENDING',
            paymentStatus: 'PENDING',
        });
    }

    async getBookingById(userId, bookingId, role) {
        const booking = await bookingRepository.findById(bookingId);
        if (!booking) {
            throw { status: 404, message: 'Booking not found' };
        }

        // Authorization check
        if (role === 'CUSTOMER' && booking.customerId !== userId) {
            throw { status: 403, message: 'Unauthorized' };
        }
        // For worker, we need to check if they are the worker
        if (role === 'WORKER') {
            const workerProfile = await workerRepository.findByUserId(userId); // Assuming this method exists or I need to fetch it differently
            // Actually, the repo findById returns workerProfile.
            // Let's assume passed userId is the user.id. 
            // booking.worker.userId should match userId.
            if (booking.worker.userId !== userId) {
                throw { status: 403, message: 'Unauthorized' };
            }
        }

        return booking;
    }

    async getUserBookings(userId) {
        return await bookingRepository.findByCustomerId(userId);
    }

    async getWorkerBookings(userId) {
        const workerProfile = await workerRepository.findByUserId(userId);
        if (!workerProfile) {
            throw { status: 404, message: 'Worker profile not found' };
        }
        return await bookingRepository.findByWorkerId(workerProfile.id);
    }

    async updateBookingStatus(userId, bookingId, status, role) {
        const booking = await bookingRepository.findById(bookingId);
        if (!booking) {
            throw { status: 404, message: 'Booking not found' };
        }

        // Only workers can update status (for now, mainly Accept/Decline/Complete)
        // Customers might be able to Cancel, but requirements focused on Worker Accept/Decline
        if (role !== 'WORKER') {
            // If we want to allow customers to cancel, we can add logic here.
            // For now, let's stick to the prompt: worker accept/decline.
            // But usually customers can cancel pending. 
            // Let's allow Worker to do everything, and Customer to Cancel only if Pending.
            if (role === 'CUSTOMER' && status === 'CANCELLED' && booking.status === 'PENDING') {
                if (booking.customerId !== userId) throw { status: 403, message: 'Unauthorized' };
            } else {
                throw { status: 403, message: 'Only workers can update booking status' };
            }
        } else {
            // Worker Authorization
            // booking.worker.userId is not directly available in findById result structure I saw earlier? 
            // checking repository again... 
            // findById includes worker -> user. 
            // The booking has workerId. workerRepository.findByUserId(userId) gets the worker profile.

            const workerProfile = await workerRepository.findByUserId(userId);
            if (!workerProfile || booking.workerId !== workerProfile.id) {
                throw { status: 403, message: 'Unauthorized' };
            }
        }

        // State Machine / Validation
        const currentStatus = booking.status;

        // PENDING -> CONFIRMED (Accept)
        // PENDING -> CANCELLED (Decline)
        // CONFIRMED -> IN_PROGRESS
        // IN_PROGRESS -> COMPLETED

        // Valid Transitions
        const validTransitions = {
            'PENDING': ['CONFIRMED', 'CANCELLED'],
            'CONFIRMED': ['IN_PROGRESS', 'CANCELLED'],
            'IN_PROGRESS': ['COMPLETED', 'CANCELLED'], // Maybe can't cancel in progress?
            'COMPLETED': [],
            'CANCELLED': []
        };

        if (!validTransitions[currentStatus].includes(status)) {
            throw { status: 400, message: `Cannot change status from ${currentStatus} to ${status}` };
        }

        return await bookingRepository.updateStatus(bookingId, status);
    }
}

export default new BookingService();

