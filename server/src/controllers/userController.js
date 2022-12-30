import UserModel from '../models/User.js';

export default class UserController {
    static async store(req, res) {
        try {
            const { email, password, name, phone, cpf } = req.body;
            const user = await UserModel.create({ email, password, name, phone, cpf });
            return res.status(201).json(user);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }
}
