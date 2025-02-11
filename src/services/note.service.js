/* eslint-disable prettier/prettier */
import Note from '../models/note.model';

export const createNote = async (body) => {
    try {
        let note = await Note.create(body);
        return note;
    }
    catch (error) {
        console.log(error);
    }
}

export const getAllNotes = async (body) => {
    try {
        const { userId } = body;
        let data = await Note.find({ userId });
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

