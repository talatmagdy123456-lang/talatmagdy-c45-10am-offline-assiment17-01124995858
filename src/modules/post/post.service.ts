import { PostModel, IPost } from "./post.model.js";
import { Types } from "mongoose";

export const createPostService = async (data: Partial<IPost>) => {
  return await PostModel.create(data);
};

export const toggleLikeService = async (postId: string, userId: string) => {
  const post = await PostModel.findById(postId);
  if (!post) throw new Error("Post not found");

  const userObjectId = new Types.ObjectId(userId);
  const isLiked = post.likes.some((id: any) => id.equals(userObjectId));

  if (isLiked) {
    post.likes = post.likes.filter((id: any) => !id.equals(userObjectId));
  } else {
    post.likes.push(userObjectId as any);
  }

  await post.save();
  return post;
};