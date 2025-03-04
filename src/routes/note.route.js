/* eslint-disable prettier/prettier */
import express from 'express';
import * as noteController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/create', userAuth, noteController.createNote);
router.get('/getAll', userAuth, noteController.getAllNotes);
router.get('/get/:id', userAuth, noteController.getById);
router.put('/update/:id', userAuth, noteController.updateNote);
router.delete('/delete/:id', userAuth, noteController.deleteNote);

export default router;