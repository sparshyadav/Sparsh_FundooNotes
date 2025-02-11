/* eslint-disable prettier/prettier */
import express from 'express';
import * as noteController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/', userAuth, noteController.createNote);
router.get('/getAll', userAuth, noteController.getAllNotes);
router.get('/get/:id', userAuth, noteController.getById);

export default router;