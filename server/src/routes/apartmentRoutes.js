import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import apartmentController from '../controllers/apartmentController.js';

const router = Router();

router.post('/publish', authMiddleware, apartmentController.create);
router.get('/search', (req, res) => {
    // TODO: validate query parameters with Joi
    const { numberOfBedrooms, district } = req.body;

    if (!(numberOfBedrooms || district)) {
        return res.status(400).json({ message: 'Bad request: missing parameters' });
    }

    if (['price', 'created_at'].includes(sortBy))
        req.sortBy = 'created_at';
}, apartmentController.getSome);
router.get('/:id', apartmentController.show);

export default router;
