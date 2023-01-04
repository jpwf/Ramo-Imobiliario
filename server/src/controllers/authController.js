import { comparePassword, getUserWithAuthInfo } from '../services/user.js';
import jwtService from '../services/auth.js';

export default class AuthController {
    static async login(req, res) {
        try {
            const user = await getUserWithAuthInfo(req.body.email);
            if (!user)
                return AuthController.#wrongCredentials(res);

            const isPasswordValid = await comparePassword(req.body.password, user.password);
            if (!isPasswordValid)
                return AuthController.#wrongCredentials(res);

            const token = jwtService(user);
            return res.status(200).json({ name: user.name, email: user.email, token });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    static async #wrongCredentials(res) {
        return res.status(404).json({ error: 'User or password is incorrect' });
    }
}
