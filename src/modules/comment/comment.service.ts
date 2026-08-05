import { PostModel } from "../post/post.model.js";

export const createCommentService = async (postId: string, userId: string, content: string) => {
  const post = await PostModel.findById(postId);
  if (!post) throw new Error("Post not found");

  post.comments.push({ user: userId as any, content, createdAt: new Date() });
  await post.save();
  return post;
};

export const createReplyService = async (postId: string, commentId: string, userId: string, content: string) => {
  const post = await PostModel.findById(postId);
  if (!post) throw new Error("Post not found");

  post.comments.push({ user: userId as any, content, createdAt: new Date() });
  await post.save();
  return post;
};