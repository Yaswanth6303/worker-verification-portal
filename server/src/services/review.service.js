import reviewRepository from '../repositories/review.repository.js';
import bookingRepository from '../repositories/booking.repository.js';
import workerRepository from '../repositories/worker.repository.js';

/**
 * Create a new review for a completed booking
 */
export const createReview = async (customerId, reviewData) => {
  const { bookingId, rating, comment } = reviewData;

  // Validate rating is between 1-5
  if (!rating || rating < 1 || rating > 5) {
    const error = new Error('Rating must be between 1 and 5');
    error.status = 400;
    throw error;
  }

  // Get the booking and verify it exists and is completed
  const booking = await bookingRepository.findById(bookingId, {
    review: true,
    worker: true,
  });

  if (!booking) {
    const error = new Error('Booking not found');
    error.status = 404;
    throw error;
  }

  // Verify the customer owns this booking
  if (booking.customerId !== customerId) {
    const error = new Error('You can only review your own bookings');
    error.status = 403;
    throw error;
  }

  // Verify booking is completed
  if (booking.status !== 'COMPLETED') {
    const error = new Error('You can only review completed bookings');
    error.status = 400;
    throw error;
  }

  // Check if already reviewed
  if (booking.review) {
    const error = new Error('You have already reviewed this booking');
    error.status = 400;
    throw error;
  }

  // Create the review
  const review = await reviewRepository.create({
    bookingId,
    customerId,
    workerId: booking.workerId,
    rating: parseInt(rating),
    comment: comment || null,
  });

  // Calculate the new average rating for the worker
  const allReviews = await reviewRepository.findAllRatingsByWorkerId(booking.workerId);

  const totalReviews = allReviews.length;
  const averageRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;

  // Update worker's rating and total reviews
  await workerRepository.update(booking.workerId, {
    rating: parseFloat(averageRating.toFixed(2)),
    totalReviews,
  });

  return {
    id: review.id,
    rating: review.rating,
    comment: review.comment,
    createdAt: review.createdAt,
  };
};

/**
 * Get reviews for a worker
 */
export const getWorkerReviews = async (workerId) => {
  const reviews = await reviewRepository.findByWorkerId(workerId, {
    customer: {
      select: {
        fullName: true,
        profilePicture: true,
      },
    },
    booking: {
      select: {
        service: true,
      },
    },
  });

  return reviews.map((review) => ({
    id: review.id,
    rating: review.rating,
    comment: review.comment,
    customerName: review.customer.fullName,
    customerPicture: review.customer.profilePicture,
    service: review.booking.service,
    createdAt: review.createdAt,
  }));
};

export default {
  createReview,
  getWorkerReviews,
};
