/* eslint-disable prettier/prettier */
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//create new user
export const newUser = async (body) => {
  try {
    let { name, phoneNumber, email, password } = body;

    let user = await User.findOne({ email });
    if (user) {
      return 'The User Alread Exists, Recheck Your Email';
    }

    let hashedPassword = await bcrypt.hash(password, 10);
    const data = await User.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get All Users
export const getAllUsers = async () => {
  try {
    let data = await User.find();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Login User
export const loginUser = async (body) => {
  try {
    let { email, password } = body;

    let user = await User.findOne({ email }).lean();
    if (!user) {
      return 'User Does Not Exists';
    }

    let isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return 'Password Does Not Match, Check it Again';
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET
    );

    return { user, token };
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line no-unused-vars
let recentOTP;
export const forgetPassword = async (body) => {
  try {
    let { email } = body;

    let user = User.findById(email);
    if (!user) {
      return 'User Does Not Exists';
    }

    let otp = Math.floor(100000 + Math.random() * 900000);
    recentOTP = otp;
    console.log('RecentOTPInsideReset: ', recentOTP);
    return otp;
  } catch (error) {
    console.log(error);
  }
}

export const resetPassword = async (body) => {
  try {
    let { email, otp, newPassword } = body;

    let user = await User.findOne({ email });
    if (!user) {
      return 'User Does Not Exist';
    }
    console.log('Recent OTP: ', recentOTP);
    console.log('OTP: ', otp);
    if (parseInt(otp) !== recentOTP) {
      return 'OTP Does Not Match';
    }

    let hashedPassword = await bcrypt.hash(newPassword, 10);

    let updatedUser = await User.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true }
    );

    return updatedUser;
  } catch (error) {
    console.log(error);
  }
};
