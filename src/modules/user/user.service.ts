import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "./user.model.js";
import sendEmail from "../../utils/sendEmail.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/token.service.js";

// ================= Register =================

export const registerService = async (data: any) => {
  const isExist = await User.findOne({
    email: data.email,
  });

  if (isExist) {
    throw new Error("Email Already Exists");
  }

  const hashPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    ...data,
    password: hashPassword,
    provider: "system",
    confirmEmail: false,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1d",
    }
  );

  await sendEmail(
    user.email,
    "Confirm Email",
    `<a href="http://localhost:3000/users/confirm/${token}">
      Confirm Email
    </a>`
  );

  return user;
};

// ================= Login =================

export const loginService = async (data: any) => {
  const user = await User.findOne({
    email: data.email,
  });

  if (!user) {
    throw new Error("Invalid Email");
  }

  const match = await bcrypt.compare(
    data.password,
    user.password as string
  );

  if (!match) {
    throw new Error("Invalid Password");
  }

  if (!user.confirmEmail) {
    throw new Error("Please Confirm Your Email");
  }

  const accessToken = generateAccessToken({
    _id: user._id.toString(),
    email: user.email,
  });

  const refreshToken = generateRefreshToken({
    _id: user._id.toString(),
    email: user.email,
  });

  return {
    message: "Login Successfully",
    accessToken,
    refreshToken,
  };
};

// ================= Confirm Email =================

export const confirmEmailService = async (token: string) => {
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as jwt.JwtPayload;

  await User.findByIdAndUpdate(decoded.id, {
    confirmEmail: true,
  });

  return {
    message: "Email Confirmed Successfully",
  };
};

// ================= Forget Password =================

export const forgetPasswordService = async (email: string) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User Not Found");
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "15m",
    }
  );

  await sendEmail(
    user.email,
    "Reset Password",
    `<a href="http://localhost:3000/users/reset-password/${token}">
      Reset Password
    </a>`
  );

  return {
    message: "Reset Password Email Sent",
  };
};

// ================= Reset Password =================

export const resetPasswordService = async (
  token: string,
  password: string
) => {
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as jwt.JwtPayload;

  const hashPassword = await bcrypt.hash(password, 10);

  await User.findByIdAndUpdate(decoded.id, {
    password: hashPassword,
    changeCredentialTime: new Date(),
  });

  return {
    message: "Password Reset Successfully",
  };
};