import UserModel from '../models/User.js';
import bcrypt from 'bcrypt';

export const getUserWithAuthInfo = async (email) => {
    return await UserModel.findOne({ email }).select('+password');
};

export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}
