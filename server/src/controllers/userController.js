import UserModel from '../models/User.js';

export default class UserController {
    static async index(req, res) {
        const users = await UserModel.find();
        return res.json(users);
    }

    static async store(req, res) {
        const { email, password, name, phone, cpf } = req.body;
        const user = await UserModel.create({ email, password, name, phone, cpf });
        return res.json(user);
    }
}
