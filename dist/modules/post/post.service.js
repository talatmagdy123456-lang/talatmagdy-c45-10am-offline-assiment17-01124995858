import { PostModel } from "./post.model.js";
import { Types } from "mongoose";
export const createPostService = async (data) => {
    return await PostModel.create(data);
};
export const toggleLikeService = async (postId, userId) => {
    const post = await PostModel.findById(postId);
    if (!post)
        throw new Error("Post not found");
    const userObjectId = new Types.ObjectId(userId);
    const isLiked = post.likes.some((id) => id.equals(userObjectId));
    if (isLiked) {
        post.likes = post.likes.filter((id) => !id.equals(userObjectId));
    }
    else {
        post.likes.push(userObjectId);
    }
    await post.save();
    return post;
};
//# sourceMappingURL=post.service.js.map