/* eslint-disable prettier/prettier */
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phoneNumber: {
      type: Number
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
