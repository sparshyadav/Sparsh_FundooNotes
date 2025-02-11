import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
// import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// User Registration
router.post('/', newUserValidator, userController.createUser);
router.get('/', userController.getAllUsers);
router.post('/login', userController.loginUser);

export default router;
