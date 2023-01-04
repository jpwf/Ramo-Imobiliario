import { Router } from 'express';
import Joi from 'joi';
import authMiddleware from '../middlewares/authMiddleware.js';
import apartmentController from '../controllers/apartmentController.js';

const router = Router();

router.post('/publish', authMiddleware, apartmentController.create);
router.get('/search', (req, res, next) => {
    const schema = Joi.object({
        numberOfBedrooms: Joi.number().min(1).max(5).default(1),
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
