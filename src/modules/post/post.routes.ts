import { Router } from "express";

import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  reactPost,
} from "./post.controller.js";

import { authentication } from "../../middleware/auth.middleware.js";
import validation from "../../middleware/validation.middleware.js";

import {
  createPostSchema,
  updatePostSchema,
  reactSchema,
} from "./post.validation.js";

const router = Router();

// Create Post
router.post(
  "/",
  authentication,
  validation(createPostSchema),
  createPost
);

// Get All Posts
router.get(
  "/",
  authentication,
  getAllPosts
);

// Get Single Post
router.get(
  "/:id",
  authentication,
  getPost
);

// Update Post
router.put(
  "/:id",
  authentication,
  validation(updatePostSchema),
  updatePost
);

// Delete Post
router.delete(
  "/:id",
  authentication,
  deletePost
);

// React
router.patch(
  "/:id/react",
  authentication,
  validation(reactSchema),
  reactPost
);

export default router;