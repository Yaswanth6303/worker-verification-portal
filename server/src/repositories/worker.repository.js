import prisma from '../utils/db.js';

class WorkerRepository {
    async findAll({ service, search }) {
        const where = {
            isAvailable: true,
            // verificationStatus: 'VERIFIED', // Commented out for testing/demo purposes
        };

        const services = Array.isArray(service) ? service : [service];
        // Search for both capitalized and lowercase versions to be robust
        const terms = services.flatMap(s => [
            s.toLowerCase(),
            s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
        ]);

        where.skills = {
            hasSome: terms
        };

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
