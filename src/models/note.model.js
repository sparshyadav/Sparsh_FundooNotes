/* eslint-disable prettier/prettier */
import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Note', noteSchema);
