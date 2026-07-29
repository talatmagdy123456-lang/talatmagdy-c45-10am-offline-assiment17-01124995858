import Post from "../post/post.model.js";
// Add or Update Reaction
export const addReaction = async (postId, userId, type) => {
    const post = await Post.findById(postId);
    if (!post) {
        throw new Error("Post not found");
    }
    const existingReaction = post.reactions.find((reaction) => reaction.user.toString() === userId);
    if (existingReaction) {
        existingReaction.type = type;
    }
    else {
        post.reactions.push({
            user: userId,
            type,
        });
    }
    await post.save();
    return post;
};
// Remove Reaction
export const removeReaction = async (postId, userId) => {
    const post = await Post.findById(postId);
    if (!post) {
        throw new Error("Post not found");
    }
    post.reactions = post.reactions.filter((reaction) => reaction.user.toString() !== userId);
    await post.save();
    return post;
};
//# sourceMappingURL=reaction.service.js.map