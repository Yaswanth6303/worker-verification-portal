import bookingRepository from '../repositories/booking.repository.js';
import workerRepository from '../repositories/worker.repository.js';

export const getWorkerStats = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const workerProfile = await workerRepository.findByUserId(userId);

        if (!workerProfile) {
            return res.status(404).json({
                success: false,
                message: 'Worker profile not found'
            });
        }

        // Fetch all bookings for this worker
        const bookings = await bookingRepository.findByWorkerId(workerProfile.id);

        // Calculate stats
        const completedBookings = bookings.filter(b => b.status === 'COMPLETED');
        const totalEarnings = completedBookings.reduce((sum, b) => sum + (b.amount || 0), 0);
        const totalJobs = completedBookings.length;
        const pendingJobs = bookings.filter(b => b.status === 'PENDING' || b.status === 'CONFIRMED').length;

        // Update worker profile stats (optional, but good for consistency)
        // await workerRepository.updateStats(workerProfile.id, { totalBookings: totalJobs });

        res.json({
            success: true,
            data: {
                totalEarnings,
                totalJobs,
                pendingJobs,
                rating: workerProfile.rating || 0,
                totalReviews: workerProfile.totalReviews || 0
            }
        });
    } catch (error) {
        next(error);
    }
};

export const getCustomerStats = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const bookings = await bookingRepository.findByCustomerId(userId);

        const totalBookings = bookings.length;
        const activeBookings = bookings.filter(b => ['PENDING', 'CONFIRMED', 'IN_PROGRESS'].includes(b.status)).length;
        const completedBookings = bookings.filter(b => b.status === 'COMPLETED').length;

        res.json({
            success: true,
            data: {
                totalBookings,
                activeBookings,
                completedBookings
            }
        });
    } catch (error) {
        next(error);
    }
};
