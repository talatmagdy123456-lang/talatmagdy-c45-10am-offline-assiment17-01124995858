import { Request, Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";

import {
  createCommentService,
  getCommentsService,
  updateCommentService,
  deleteCommentService,
} from "./comment.service.js";

// ================= Create =================

export const createComment = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const postId = req.params.postId as string;

    if (!postId) {
      return res.status(400).json({
        message: "Post id is required",
      });
    }

    const comment = await createCommentService(
      req.body,
      req.user._id.toString(),
      postId
    );

    return res.status(201).json(comment);
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= Get =================

export const getComments = async (
  req: Request,
  res: Response
) => {
  try {
    const postId = req.params.postId as string;

    if (!postId) {
      return res.status(400).json({
        message: "Post id is required",
      });
    }

    const comments = await getCommentsService(postId);

    return res.json(comments);
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= Update =================

export const updateComment = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    if (!id) {
      return res.status(400).json({
        message: "Comment id is required",
      });
    }

    const comment = await updateCommentService(
      id,
      req.user._id.toString(),
      req.body
    );

    return res.json(comment);
  } catch (error) {
    return res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

// ================= Delete =================

export const deleteComment = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    if (!id) {
      return res.status(400).json({
        message: "Comment id is required",
      });
    }

    const result = await deleteCommentService(
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