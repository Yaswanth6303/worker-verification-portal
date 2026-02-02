import workerRepository from '../repositories/worker.repository.js';

class WorkerService {
    async getWorkers(query) {
        const { service, search } = query;
        const workers = await workerRepository.findAll({ service, search });

        // Format for frontend
        return workers.map((worker) => ({
            id: worker.id,
            name: worker.user.fullName,
            service: worker.skills[0], // Primary skill
            skills: worker.skills,
            rating: worker.rating,
            totalReviews: worker.totalReviews,
            hourlyRate: worker.hourlyRate,
            city: worker.user.city,
            profilePicture: worker.user.profilePicture,
            experience: worker.experience,
            verified: worker.verificationStatus === 'VERIFIED',
        }));
    }

    async getWorkerById(id) {
        const worker = await workerRepository.findById(id);
        if (!worker) return null;

        return {
            ...worker,
            name: worker.user.fullName,
            email: worker.user.email,
            phone: worker.user.phone,
            city: worker.user.city,
            profilePicture: worker.user.profilePicture,
        };
    }
}

export default new WorkerService();
