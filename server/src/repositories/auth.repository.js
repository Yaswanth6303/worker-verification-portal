import prisma from '../config/database.js';

class AuthRepository {
  async findUserByEmail(email, includeWorkerProfile = false) {
    return await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
      include: {
        workerProfile: includeWorkerProfile,
      },
    });
  }

  async findUserByPhone(phone) {
    return await prisma.user.findUnique({
      where: { phone },
    });
  }

  async findUserById(id, includeWorkerProfile = false) {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        workerProfile: includeWorkerProfile,
      },
    });
  }

  async createUser(userData) {
    return await prisma.user.create({
      data: userData,
    });
  }

  async createWorkerProfile(workerData) {
    return await prisma.workerProfile.create({
      data: workerData,
    });
  }

  async updateUser(id, updateData) {
    return await prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        workerProfile: true,
      },
    });
  }

  async updateWorkerProfile(userId, updateData) {
    return await prisma.workerProfile.update({
      where: { userId },
      data: updateData,
    });
  }

  async emailExists(email) {
    const user = await this.findUserByEmail(email);
    return !!user;
  }

  async phoneExists(phone) {
    const user = await this.findUserByPhone(phone);
    return !!user;
  }
}

export default new AuthRepository();
