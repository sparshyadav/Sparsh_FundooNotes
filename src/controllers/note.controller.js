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

export const createUser = async (req, res) => {
    try {
        let data = await UserService.newUser(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'New User Created Successfully'
        });
    } catch (error) {
        console.log(error);
    }
};

export const getAllUsers = async (req, res) => {
    try {
        let data = await UserService.getAllUsers();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All Users Sent'
        });
    } catch (error) {
        console.log(error);
    }
};

export const loginUser = async (req, res) => {
    try {
        let data = await UserService.loginUser(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            token: data.token,
            message: 'User Loged In Successfully'
        });
    } catch (error) {
        console.log(error);
    }
};