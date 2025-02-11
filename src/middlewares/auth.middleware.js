/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import jwt from 'jsonwebtoken';

export const userAuth = async (req, res, next) => {
  try {
    let authHeader = req.header('Authorization');
    if (!authHeader) {
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    }

    let token = authHeader.split(' ')[1];

    let user = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = user.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};
