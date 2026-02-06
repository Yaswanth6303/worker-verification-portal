import prisma from '../config/database.js';

class BookingRepository {
  async create(data) {
    return await prisma.booking.create({
      data,
      include: {
        worker: {
          include: {
            user: {
              select: {
                fullName: true,
                phone: true,
                email: true,
              },
            },
          },
        },
        customer: {
          select: {
            fullName: true,
            phone: true,
            email: true,
          },
        },
      },
    });
  }

  async findById(id, include) {
    return await prisma.booking.findUnique({
      where: { id },
      include,
    });
  }

  async findMany(where, include, orderBy) {
    return await prisma.booking.findMany({
      where,
      include,
      orderBy,
    });
  }

  async update(id, data) {
    return await prisma.booking.update({
      where: { id },
      data,
      include: {
        worker: {
          include: {
            user: {
              select: {
                fullName: true,
              },
            },
          },
        },
        customer: {
          select: {
            fullName: true,
          },
        },
      },
    });
  }
}

export default new BookingRepository();
