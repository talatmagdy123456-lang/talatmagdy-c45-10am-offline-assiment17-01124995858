import { PostModel } from "../post/post.model.js";

export const addReaction = async (postId: string, userId: string, type: string) => {
  const post = await PostModel.findById(postId);
  if (!post) throw new Error("Post not found");
  
  // logic for reaction
  await post.save();
  return post;
};

export const removeReaction = async (postId: string, userId: string) => {
  const post = await PostModel.findById(postId);
  if (!post) throw new Error("Post not found");
  return post;
};