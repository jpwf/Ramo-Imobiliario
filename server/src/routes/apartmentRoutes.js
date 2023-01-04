import { Router } from 'express';
import Joi from 'joi';
import authMiddleware from '../middlewares/authMiddleware.js';
import apartmentController from '../controllers/apartmentController.js';

const router = Router();

router.post('/publish', authMiddleware, (req, res, next) => {
    const schema = Joi.object({
        numberOfBedrooms: Joi.number().min(1).max(20).required(),
        address: Joi.object({
            street: Joi.string().min(3).max(128).required(),
            number: Joi.string().min(1).max(10).required(),
            district: Joi.string().min(3).max(20).required(),
            complement: Joi.string().max(100).default(''),
        }),
        image: Joi.string().uri().default(''),
        price: Joi.number().min(1).max(300000000).required(),
        description: Joi.string().min(3).max(1000).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    return next();
}, apartmentController.create);
router.get('/search', (req, res, next) => {
    const schema = Joi.object({
        numberOfBedrooms: Joi.number().min(1).max(20),
        district: Joi.string().min(3).max(20).required(),
        sortBy: Joi.string().valid('price', 'created_at').default('created_at'),
        page: Joi.number().min(1).default(1),
        limit: Joi.number().min(1).max(100).default(20)
    });

    const { error } = schema.validate(req.query);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    return next();
}, apartmentController.getSome);
router.get('/:id', apartmentController.show);

export default router;
