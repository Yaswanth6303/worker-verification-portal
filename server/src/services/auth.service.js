import bcrypt from 'bcryptjs';
import authRepository from '../repositories/auth.repository.js';
import { generateToken } from '../utils/jwt.utils.js';

class AuthService {
  async register(userData) {
    const {
      fullName,
      email,
      phone,
      password,
      role,
      address,
      city,
      pincode,
      profilePicture,
      skills,
      experience,
      bio,
    } = userData;

    // Check if email already exists
    const existingEmail = await authRepository.findUserByEmail(email);
    if (existingEmail) {
      throw {
        status: 400,
        message: 'Email already registered',
      };
    }

    // Check if phone already exists
    const existingPhone = await authRepository.findUserByPhone(phone);
    if (existingPhone) {
      throw {
        status: 400,
        message: 'Phone number already registered',
      };
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await authRepository.createUser({
      fullName,
      email: email.toLowerCase(),
      phone,
      password: hashedPassword,
      role: role.toUpperCase(),
      address,
      city,
      pincode,
      profilePicture,
    });

    // Create worker profile if role is worker
    if (role.toLowerCase() === 'worker' && skills) {
      await authRepository.createWorkerProfile({
        userId: user.id,
        skills: skills,
        experience: experience || '0-1',
        bio: bio || '',
      });
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      token,
    };
  }

  async login(credentials) {
    const { email, password, role } = credentials;

    // Find user by email
    const user = await authRepository.findUserByEmail(email, true);

    if (!user) {
      throw {
        status: 401,
        message: 'Invalid email or password',
      };
    }

    // Check if role matches
    if (user.role !== role.toUpperCase()) {
      throw {
        status: 401,
        message: `No ${role} account found with this email`,
      };
    }

    // Check if account is active
    if (!user.isActive) {
      throw {
        status: 401,
        message: 'Your account has been deactivated. Please contact support.',
      };
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw {
        status: 401,
        message: 'Invalid email or password',
      };
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      token,
    };
  }

  async checkEmail(email) {
    const exists = await authRepository.emailExists(email);

    return {
      exists,
      message: exists ? 'Email already registered' : 'Email is available',
    };
  }

  async checkPhone(phone) {
    const exists = await authRepository.phoneExists(phone);

    return {
      exists,
      message: exists ? 'Phone number already registered' : 'Phone number is available',
    };
  }

  /**
   * Get user profile
   */
  async getProfile(userId) {
    const user = await authRepository.findUserById(userId, true);

    if (!user) {
      throw {
        status: 404,
        message: 'User not found',
      };
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  async updateProfile(userId, updateData) {
    const { fullName, address, city, pincode, profilePicture, skills, experience, bio } =
      updateData;

    // Prepare update data for user
    const userUpdateData = {};
    if (fullName !== undefined) userUpdateData.fullName = fullName;
    if (address !== undefined) userUpdateData.address = address;
    if (city !== undefined) userUpdateData.city = city;
    if (pincode !== undefined) userUpdateData.pincode = pincode;
    if (profilePicture !== undefined) userUpdateData.profilePicture = profilePicture;

    // Update user
    const user = await authRepository.updateUser(userId, userUpdateData);

    // Update worker profile if provided and user is a worker
    if (
      user.role === 'WORKER' &&
      (skills !== undefined || experience !== undefined || bio !== undefined)
    ) {
      const workerUpdateData = {};
      if (skills !== undefined) workerUpdateData.skills = skills;
      if (experience !== undefined) workerUpdateData.experience = experience;
      if (bio !== undefined) workerUpdateData.bio = bio;

      await authRepository.updateWorkerProfile(userId, workerUpdateData);

      // Fetch updated user with worker profile
      const updatedUser = await authRepository.findUserById(userId, true);
      const { password: _, ...userWithoutPassword } = updatedUser;
      return userWithoutPassword;
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }
}

export default new AuthService();
