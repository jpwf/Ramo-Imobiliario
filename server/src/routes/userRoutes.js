import { Router } from 'express';
import Joi from 'joi';
import CPF from 'gerador-validador-cpf';
import userController from '../controllers/userController.js';
import authController from '../controllers/authController.js';

const router = Router();

router.post('/register', (req, res, next) => {
    const nameRegExp = /^[a-zA-ZÀ-ú ]+$/;
    const schema = Joi.object({
        email: Joi.string().email().min(3).max(128),
        password: Joi.string().min(6).max(128),
        name: Joi.string().min(3).max(128).regex(nameRegExp),
        phone: Joi.string().min(10).max(11).regex(/^[0-9]+$/),
        cpf: Joi.string().length(11).custom((value, helpers) => {
            if (!CPF.validate(value))
                return helpers.error('any.invalid');
            return value;
        }, 'CPF validation')
    }).options({ presence: 'required' });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    return next();
}, userController.store);

router.post('/login', (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string(),
        password: Joi.string()
    }).options({ presence: 'required' });
    
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    return next();
}, authController.login);


router.get('/:id', userController.show);

export default router;

