import { z } from "zod";

export const createPostSchema = z.object({
  body: z.object({
    content: z.string().min(1, "Content is required"),
    image: z.string().optional(),
  }),
});

export const updatePostSchema = z.object({
  body: z.object({
    content: z.string().min(1).optional(),
    image: z.string().optional(),
  }),
});

export const reactSchema = z.object({
  body: z.object({
    emoji: z.enum([
      "like",
      "love",
      "haha",
      "wow",
      "sad",
      "angry",
    ]),
  }),
});