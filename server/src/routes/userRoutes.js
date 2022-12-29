import express from 'express';
import userController from '../controllers/userController.js';
import authController from '../controllers/authController.js';

const router = express.Router();

router.get('/', userController.index);
router.post('/', userController.store);
router.post('/', authController.login);

export default router;

