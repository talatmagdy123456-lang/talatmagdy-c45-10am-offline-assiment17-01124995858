import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
import { PostModel } from "../post/post.model.js";

export const addComment = async (req: AuthRequest, res: Response) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;

    const post = await PostModel.findById(postId);
    if (!post) return res.status(404).json({ success: false, message: "Post not found" });

    post.comments.push({
      user: req.user._id,
      content,
      createdAt: new Date()
    });
    post.commentsCount = post.comments.length;

    await post.save();
    return res.status(201).json({ success: true, comments: post.comments });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const addReply = async (req: AuthRequest, res: Response) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;

    const post = await PostModel.findById(postId);
    if (!post) return res.status(404).json({ success: false, message: "Post not found" });

    post.comments.push({
      user: req.user._id,
      content,
      createdAt: new Date()
    });

    await post.save();
    return res.status(201).json({ success: true, comments: post.comments });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteComment = async (req: AuthRequest, res: Response) => {
  try {
    const { postId, commentId } = req.params;

    const post = await PostModel.findById(postId);
    if (!post) return res.status(404).json({ success: false, message: "Post not found" });

    post.comments = post.comments.filter((c: any) => c._id.toString() !== commentId);
    post.commentsCount = post.comments.length;

    await post.save();
    return res.status(200).json({ success: true, message: "Comment deleted", comments: post.comments });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};