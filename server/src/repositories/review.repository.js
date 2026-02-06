import prisma from '../config/database.js';

class ReviewRepository {
  async create(data) {
    return await prisma.review.create({
      data,
    });
  }

  async findMany(where, include, orderBy) {
    return await prisma.review.findMany({
      where,
      include,
      orderBy,
    });
  }

  async findByWorkerId(workerId, include) {
    return await prisma.review.findMany({
      where: { workerId },
      include,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findAllRatingsByWorkerId(workerId) {
    return await prisma.review.findMany({
      where: { workerId },
      select: { rating: true },
    });
  }
}

export default new ReviewRepository();
