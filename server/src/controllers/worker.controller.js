import workerService from '../services/worker.service.js';

export const getWorkers = async (req, res, next) => {
    try {
        const workers = await workerService.getWorkers(req.query);
        res.status(200).json({
            success: true,
            data: workers,
        });
    } catch (error) {
        next(error);
    }
};

export const getWorkerById = async (req, res, next) => {
    try {
        const worker = await workerService.getWorkerById(req.params.id);
        if (!worker) {
            return res.status(404).json({
                success: false,
                message: 'Worker not found',
            });
        }
        res.status(200).json({
            success: true,
            data: worker,
        });
    } catch (error) {
        next(error);
    }
};
