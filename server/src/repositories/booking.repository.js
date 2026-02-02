import prisma from '../utils/db.js';

class BookingRepository {
    async create(bookingData) {
        return await prisma.booking.create({
            data: bookingData,
            include: {
                worker: {
                    include: {
                        user: {
                            select: {
                                fullName: true,
                                phone: true,
                            },
                        },
                    },
                },
                customer: {
                    select: {
                        fullName: true,
                        phone: true,
                        address: true,
                    },
                },
            },
        });
    }

    async findById(id) {
        return await prisma.booking.findUnique({
            where: { id },
            include: {
                worker: {
                    include: {
                        user: {
                            select: {
                                fullName: true,
                                profilePicture: true,
                                phone: true,
                            },
                        },
                    },
                },
                customer: {
                    select: {
                        fullName: true,
                        profilePicture: true,
                        phone: true,
                        address: true,
                    },
                },
            },
        });
    }

    async findByCustomerId(customerId) {
        return await prisma.booking.findMany({
            where: { customerId },
            include: {
                worker: {
                    include: {
                        user: {
                            select: {
                                fullName: true,
                                profilePicture: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    async findByWorkerId(workerId) {
        return await prisma.booking.findMany({
            where: { workerId },
            include: {
                customer: {
                    select: {
                        fullName: true,
                        profilePicture: true,
                        address: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }

    async updateStatus(id, status) {
        return await prisma.booking.update({
            where: { id },
            data: { status },
        });
    }
}

export default new BookingRepository();
