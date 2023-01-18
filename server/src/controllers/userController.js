import UserModel from '../models/User.js';

export default class UserController {
    static async store(req, res) {
        try {
            const { email, password, name, phone, cpf } = req.body;
            const user = await UserModel.create({ email, password, name, phone, cpf });
            return res.status(201).json(user);
        } catch (err) {
            if (err.code === 11000)
                return res.status(409).json({ error: keyError(err.keyValue) });
            return res.status(500).json({ error: err.message });
        }

        function keyError(key) {
            if (key.email) return 'Email already registered';
            if (key.cpf) return 'CPF already registered';
            return 'Please check your request body or contact the administrator';
        }
    }

    static async show(req, res) {
        try {
            const user = await UserModel.findById(req.params.id);
            res.status(200).json(user.name);
        } catch (error) {
            res.status(404).json({ message: 'User not found'});
        }
    }
}
