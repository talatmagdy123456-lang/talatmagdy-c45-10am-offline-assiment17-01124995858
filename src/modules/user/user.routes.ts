import { Router } from "express";

import {
  register,
  login,
  confirmEmail,
  forgetPassword,
  resetPassword,
} from "./user.controller.js";

import validation from "../../middleware/validation.middleware.js";

import {
  registerSchema,
  loginSchema,
  forgetPasswordSchema,
  resetPasswordSchema,
} from "./user.validation.js";

const router = Router();

router.post(
  "/register",
  validation(registerSchema),
  register
);

router.post(
  "/login",
  validation(loginSchema),
  login
);

router.get("/confirm/:token", confirmEmail);

router.post(
  "/forget-password",
  validation(forgetPasswordSchema),
  forgetPassword
);

router.patch(
  "/reset-password/:token",
  validation(resetPasswordSchema),
  resetPassword
);

export default router;