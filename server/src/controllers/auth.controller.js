import authService from '../services/auth.service.js';

export const register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: result,
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

export const login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);

    res.json({
      success: true,
      message: 'Login successful',
      data: result,
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

export const checkEmail = async (req, res, next) => {
  try {
    const result = await authService.checkEmail(req.body.email);

    res.json({
      success: true,
      ...result,
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

export const checkPhone = async (req, res, next) => {
  try {
    const result = await authService.checkPhone(req.body.phone);

    res.json({
      success: true,
      ...result,
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

export const getProfile = async (req, res, next) => {
  try {
    const user = await authService.getProfile(req.user.id);

    res.json({
      success: true,
      data: user,
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

export const updateProfile = async (req, res, next) => {
  try {
    const user = await authService.updateProfile(req.user.id, req.body);

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: user,
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
