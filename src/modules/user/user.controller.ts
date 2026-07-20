import { Request, Response } from "express";
import {
  registerService,
  loginService,
  confirmEmailService,
  forgetPasswordService,
  resetPasswordService,
} from "./user.service.js";

// Register
export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerService(req.body);

    res.status(201).json({
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// Login
export const login = async (req: Request, res: Response) => {
  try {
    const token = await loginService(req.body);

    res.json({
      message: "Login Success",
      token,
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// Confirm Email
export const confirmEmail = async (
  req: Request,
  res: Response
) => {
  try {
await confirmEmailService(req.params.token as string);
    res.json({
      message: "Email Confirmed Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// Forget Password
export const forgetPassword = async (
  req: Request,
  res: Response
) => {
  try {
    await forgetPasswordService(req.body.email);

    res.json({
      message: "Reset Link Sent Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// Reset Password
export const resetPassword = async (
  req: Request,
  res: Response
) => {
  try {
    await resetPasswordService(
  req.params.token as string,
  req.body.password
);

    res.json({
      message: "Password Updated Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};