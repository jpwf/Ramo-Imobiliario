import UserModel from '../models/userModel';

export const getUserWithAuthInfo = async (email) => {
    return await UserModel.findOne({ email }).select('+password');
};
