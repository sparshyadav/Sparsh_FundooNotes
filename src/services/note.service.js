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
        let data = await Note.find({ userId, isTrashed: false });
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getById = async (noteId) => {
    try {
        let data = await Note.findOne({ _id: noteId, isTrashed: false });

        if (!data) {
            throw new Error('Note not found or it has been trashed');
        }

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const updateNote = async (_id, body) => {
    try {
        let data = await Note.findByIdAndUpdate(_id, body, { new: true });
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteNote = async (_id) => {
    try {
        let note = await Note.findById(_id);
        if (note.isTrashed) {
            let data = await Note.findByIdAndUpdate(
                _id,
                { isTrashed: false },
                { new: true }
            );

            return data;
        }
        else {
            let data = await Note.findByIdAndUpdate(
                _id,
                { isTrashed: true },
                { new: true }
            );

            return data;
        }
    }
    catch (error) {
        console.log(error);
    }
}
