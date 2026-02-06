import workerService from '../services/worker.service.js';

/**
 * Get all workers with optional filters
 */
export const getWorkers = async (req, res, next) => {
  try {
    const { skill, minRating, available } = req.query;
    const workers = await workerService.getWorkers({ skill, minRating, available });

    res.json({
      success: true,
      count: workers.length,
      data: workers,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    next(error);
  }
};

/**
 * Get a single worker by ID
 */
export const getWorkerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const worker = await workerService.getWorkerById(id);

    res.json({
      success: true,
      data: worker,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    next(error);
  }
};

/**
 * Get workers by skill
 */
export const getWorkersBySkill = async (req, res, next) => {
  try {
    const { skill } = req.params;
    const workers = await workerService.getWorkersBySkill(skill);

    res.json({
      success: true,
      count: workers.length,
      data: workers,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    next(error);
  }
};
