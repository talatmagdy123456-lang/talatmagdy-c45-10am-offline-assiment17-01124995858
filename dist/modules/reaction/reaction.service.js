import { PostModel } from "../post/post.model.js";
export const addReaction = async (postId, userId, type) => {
    const post = await PostModel.findById(postId);
    if (!post)
        throw new Error("Post not found");
    // logic for reaction
    await post.save();
    return post;
};
export const removeReaction = async (postId, userId) => {
    const post = await PostModel.findById(postId);
    if (!post)
        throw new Error("Post not found");
    return post;
};
//# sourceMappingURL=reaction.service.js.map