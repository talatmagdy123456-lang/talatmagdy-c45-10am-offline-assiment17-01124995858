import { Router } from "express";

import {
  reactPost,
  deleteReaction,
} from "./reaction.controller.js";

import { authentication } from "../../middleware/auth.middleware.js";

const router = Router();

router.post(
  "/",
  authentication,
  reactPost
);

router.delete(
  "/:postId",
  authentication,
  deleteReaction
);

export default router;
