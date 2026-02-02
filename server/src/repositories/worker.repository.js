import prisma from '../utils/db.js';

class WorkerRepository {
    async findAll({ service, search }) {
        const where = {
            isAvailable: true,
            verificationStatus: 'VERIFIED',
        };

        if (service) {
            where.skills = {
                has: service.toLowerCase(),
            };
        }

        if (search) {
            where.user = {
                fullName: {
                    contains: search,
                    mode: 'insensitive',
                },
            };
        }

        return await prisma.workerProfile.findMany({
            where,
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        profilePicture: true,
                        city: true,
                    },
                },
            },
            orderBy: {
                rating: 'desc',
            },
        });
    }

    async findById(id) {
        return await prisma.workerProfile.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                        phone: true,
                        profilePicture: true,
                        city: true,
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
                    orderBy: {
                        createdAt: 'desc',
                    },
                },
            },
        });
    }

    async findByUserId(userId) {
        return await prisma.workerProfile.findUnique({
            where: { userId },
        });
    }
}

export default new WorkerRepository();
