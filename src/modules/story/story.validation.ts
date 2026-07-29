import { z } from "zod";

export const createStorySchema = z.object({
  body: z.object({
    image: z.string().min(1, "Image is required"),
    caption: z.string().optional(),
  }),
});