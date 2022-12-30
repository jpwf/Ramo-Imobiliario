import { Router } from 'express';
import userController from '../controllers/userController.js';
import authController from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/register', userController.store);
router.post('/login', authController.login);
router.get('/test', authMiddleware, (req, res) => {
    res.send({ id: req.userInfo.id });
});

export default router;

