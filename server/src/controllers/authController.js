import UserModel from '../models/User.js';

export default class AuthController {
    static async login(req, res) {
        const users = await UserModel.find();
        return res.json(users);
    }
}
