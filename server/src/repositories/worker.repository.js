import prisma from '../config/database.js';

class WorkerRepository {
  async findAll({ where, include, orderBy }) {
    return await prisma.workerProfile.findMany({
      where,
      include,
      orderBy,
    });
  }

  async findById(id, include) {
    return await prisma.workerProfile.findUnique({
      where: { id },
      include,
    });
  }

  async findByUserId(userId, include) {
    return await prisma.workerProfile.findUnique({
      where: { userId },
      include,
    });
  }

  async update(id, data) {
    return await prisma.workerProfile.update({
      where: { id },
      data,
    });
  }
}

export default new WorkerRepository();
