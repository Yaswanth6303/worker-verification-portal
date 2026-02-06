import reviewService from '../services/review.service.js';

/**
 * Create a new review
 */
export const createReview = async (req, res, next) => {
  try {
    const customerId = req.user.id;
    const review = await reviewService.createReview(customerId, req.body);

    res.status(201).json({
      success: true,
      message: 'Review submitted successfully',
      data: review,
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
 * Get reviews for a worker
 */
export const getWorkerReviews = async (req, res, next) => {
  try {
    const { workerId } = req.params;
    const reviews = await reviewService.getWorkerReviews(workerId);

    res.json({
      success: true,
      count: reviews.length,
      data: reviews,
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
