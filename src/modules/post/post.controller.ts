import { Request, Response } from "express";
import {
  createPostService,
  getAllPostsService,
  getPostService,
  updatePostService,
  deletePostService,
  reactPostService,
} from "./post.service.js";

import { AuthRequest } from "../../middleware/auth.middleware.js";

// ================= Create =================

export const createPost = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const post = await createPostService(
      req.body,
      req.user._id.toString()
    );

    return res.status(201).json({
      message: "Post Created Successfully",
      post,
    });
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= Get All =================

export const getAllPosts = async (
  req: Request,
  res: Response
) => {
  try {
    const posts = await getAllPostsService();

    return res.json(posts);
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= Get One =================

export const getPost = async (
  req: Request,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const post = await getPostService(id);

    return res.json(post);
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= Update =================

export const updatePost = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const post = await updatePostService(
      id,
      req.body,
      req.user._id.toString()
    );

    return res.json({
      message: "Post Updated Successfully",
      post,
    });
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= Delete =================

export const deletePost = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const result = await deletePostService(
      id,
      req.user._id.toString()
    );

    return res.json(result);
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= React =================

export const reactPost = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    const post = await reactPostService(
      id,
      req.user._id.toString(),
      req.body.emoji
    );

    return res.json({
      message: "Reaction Updated Successfully",
      post,
    });
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};