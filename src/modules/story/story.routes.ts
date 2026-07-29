import { Router } from "express";

import {
  createStory,
  getStories,
  deleteStory,
} from "./story.controller.js";

import { authentication } from "../../middleware/auth.middleware.js";
import validation from "../../middleware/validation.middleware.js";

import {
  createStorySchema,
} from "./story.validation.js";

const router = Router();

router.post(
  "/",
  authentication,
  validation(createStorySchema),
  createStory
);

router.get(
  "/",
  authentication,
  getStories
);

router.delete(
  "/:id",
  authentication,
  deleteStory
);

export default router;