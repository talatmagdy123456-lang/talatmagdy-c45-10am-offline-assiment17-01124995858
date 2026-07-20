import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    userName: z
      .string()
      .min(3, "User Name Must Be At Least 3 Characters")
      .max(20),

    email: z.string().email(),

    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/, "Must Contain Capital Letter")
      .regex(/[a-z]/, "Must Contain Small Letter")
      .regex(/[0-9]/, "Must Contain Number"),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),

    password: z.string().min(8),
  }),
});

export const forgetPasswordSchema = z.object({
  body: z.object({
    email: z.string().email(),
  }),
});

export const resetPasswordSchema = z.object({
  body: z.object({
    password: z.string().min(8),
  }),
});