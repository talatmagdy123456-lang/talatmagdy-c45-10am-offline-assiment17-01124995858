import { PostModel } from "../post/post.model.js";
export const createCommentService = async (postId, userId, content) => {
    const post = await PostModel.findById(postId);
    if (!post)
        throw new Error("Post not found");
    post.comments.push({ user: userId, content, createdAt: new Date() });
    await post.save();
    return post;
};
export const createReplyService = async (postId, commentId, userId, content) => {
    const post = await PostModel.findById(postId);
    if (!post)
        throw new Error("Post not found");
    post.comments.push({ user: userId, content, createdAt: new Date() });
    await post.save();
    return post;
};
//# sourceMappingURL=comment.service.js.map