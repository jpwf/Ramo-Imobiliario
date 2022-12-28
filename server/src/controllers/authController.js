import UserModal from '../models/userModel.js';

export default class AuthController {
    static async login(req, res) {
        const { email, password } = req.body;
        console.log(email, password);
        return res.status(200).json({ message: 'ok' });
    }
}