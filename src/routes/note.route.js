/* eslint-disable prettier/prettier */
import express from 'express';
import * as noteController from '../controllers/note.controller';
// import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// router.post('/', newUserValidator, noteController.createUser);
// router.get('/', userAuth, noteController.getAllUsers);
// router.post('/login', noteController.loginUser);

router.post('/', userAuth, noteController.createNote);

export default router;