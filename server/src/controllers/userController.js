import UserModel from '../models/User.js';

export default class UserController {
    static async index(req, res) {
        const users = await UserModel.find();
        return res.json(users);
    }

    static async store(req, res) {
        const { nomeCompleto, email } = req.body;
        const user = await UserModel.create({ nomeCompleto, email });
        return res.json(user);
    }
};

