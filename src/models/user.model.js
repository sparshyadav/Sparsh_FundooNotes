import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    email, phonenumber, password
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
