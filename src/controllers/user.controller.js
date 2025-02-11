import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

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
    console.log('Inside Controller');
    let data = await UserService.loginUser(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User Loged In Successfully'
    });
  } catch (error) {
    console.log(error);
  }
};
