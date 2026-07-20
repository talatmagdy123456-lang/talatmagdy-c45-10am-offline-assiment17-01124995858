import { Schema, model } from "mongoose";

export interface IUser {
  userName: string;
  email: string;
  password: string;
  confirmEmail: boolean;
}

const userSchema = new Schema<IUser>(
  {
    userName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    confirmEmail: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);

export default User;