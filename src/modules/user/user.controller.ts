import { Request, Response } from "express";
import {
  registerService,
  loginService,
  confirmEmailService,
  forgetPasswordService,
  resetPasswordService,
} from "./user.service.js";

// ================= Register =================

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

// ================= Login =================

export const login = async (req: Request, res: Response) => {
  try {
    const result = await loginService(req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= Confirm Email =================

export const confirmEmail = async (
  req: Request,
  res: Response
) => {
  try {
    const token = req.params.token as string;

    if (!token) {
      return res.status(400).json({
        message: "Token is required",
      });
    }

    const result = await confirmEmailService(token);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= Forget Password =================

export const forgetPassword = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await forgetPasswordService(req.body.email);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= Reset Password =================

export const resetPassword = async (
  req: Request,
  res: Response
) => {
  try {
    const token = req.params.token as string;

    if (!token) {
      return res.status(400).json({
        message: "Token is required",
      });
    }

    const result = await resetPasswordService(
      token,
      req.body.password
    );

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};