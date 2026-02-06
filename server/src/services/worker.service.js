import workerRepository from '../repositories/worker.repository.js';

/**
 * Get all verified and available workers
 */
export const getWorkers = async (filters = {}) => {
  const { skill, minRating, available } = filters;

  const where = {
    user: {
      role: 'WORKER',
      isActive: true,
    },
    // Note: Remove verificationStatus filter for development
    // verificationStatus: 'VERIFIED',
  };

  // Filter by skill if provided
  if (skill) {
    where.skills = {
      has: skill.toLowerCase(),
    };
  }

  // Filter by minimum rating if provided
  if (minRating) {
    where.rating = {
      gte: parseFloat(minRating),
    };
  }

  // Filter by availability if provided
  if (available !== undefined) {
    where.isAvailable = available === 'true' || available === true;
  }

  const workers = await workerRepository.findAll({
    where,
    include: {
      user: {
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          profilePicture: true,
          city: true,
          createdAt: true,
        },
      },
    },
    orderBy: [{ rating: 'desc' }, { totalBookings: 'desc' }],
  });

  return workers.map((worker) => ({
    id: worker.id,
    userId: worker.userId,
    fullName: worker.user.fullName,
    email: worker.user.email,
    phone: worker.user.phone,
    profilePicture: worker.user.profilePicture,
    city: worker.user.city,
    skills: worker.skills,
    experience: worker.experience,
    bio: worker.bio,
    hourlyRate: worker.hourlyRate,
    rating: worker.rating,
    totalReviews: worker.totalReviews,
    totalBookings: worker.totalBookings,
    isAvailable: worker.isAvailable,
    memberSince: worker.user.createdAt,
  }));
};

/**
 * Get a single worker by ID
 */
export const getWorkerById = async (workerId) => {
  const worker = await workerRepository.findById(workerId, {
    user: {
      select: {
        id: true,
        fullName: true,
        email: true,
        phone: true,
        profilePicture: true,
        city: true,
        address: true,
        createdAt: true,
      },
    },
    reviews: {
      include: {
        customer: {
          select: {
            fullName: true,
            profilePicture: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    },
  });

  if (!worker) {
    const error = new Error('Worker not found');
    error.status = 404;
    throw error;
  }

  return {
    id: worker.id,
    userId: worker.userId,
    fullName: worker.user.fullName,
    email: worker.user.email,
    phone: worker.user.phone,
    profilePicture: worker.user.profilePicture,
    city: worker.user.city,
    address: worker.user.address,
    skills: worker.skills,
    experience: worker.experience,
    bio: worker.bio,
    hourlyRate: worker.hourlyRate,
    rating: worker.rating,
    totalReviews: worker.totalReviews,
    totalBookings: worker.totalBookings,
    isAvailable: worker.isAvailable,
    verificationStatus: worker.verificationStatus,
    memberSince: worker.user.createdAt,
    reviews: worker.reviews.map((review) => ({
      id: review.id,
      rating: review.rating,
      comment: review.comment,
      customerName: review.customer.fullName,
      customerPicture: review.customer.profilePicture,
      createdAt: review.createdAt,
    })),
  };
};

/**
 * Get workers by skill category
 */
export const getWorkersBySkill = async (skill) => {
  return getWorkers({ skill });
};

export default {
  getWorkers,
  getWorkerById,
  getWorkersBySkill,
};
