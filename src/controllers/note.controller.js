/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service';

export const createNote = async (req, res) => {
    try {
        let data = await noteService.createNote(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'New Note Created'
        })
    }
    catch (error) {
        console.log(error);
    }
}

export const getAllNotes = async (req, res) => {
    try {
        let data = await noteService.getAllNotes(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All Notes Sent Successfully'
        })
    }
    catch (error) {
        console.log(error);
    }
}

