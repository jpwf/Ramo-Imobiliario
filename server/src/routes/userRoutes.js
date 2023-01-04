import { Router } from 'express';
import userController from '../controllers/userController.js';
import authController from '../controllers/authController.js';

const router = Router();

router.post('/register', userController.store);
router.post('/login', authController.login);

export default router;

