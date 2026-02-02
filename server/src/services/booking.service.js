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
}

export default new BookingService();

