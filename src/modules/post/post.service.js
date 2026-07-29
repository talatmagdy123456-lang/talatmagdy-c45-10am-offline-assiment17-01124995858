import Post from "./post.model.js";
// ================= Create Post =================
export const createPostService = async (data, userId) => {
    const post = await Post.create({
        ...data,
        createdBy: userId,
    });
    return post;
};
// ================= Get All Posts =================
export const getAllPostsService = async () => {
    return await Post.find().sort({
        createdAt: -1,
    });
};
// ================= Get Single Post =================
export const getPostService = async (id) => {
    const post = await Post.findById(id);
    if (!post) {
        throw new Error("Post Not Found");
    }
    return post;
};
// ================= Update Post =================
export const updatePostService = async (id, data, userId) => {
    const post = await Post.findOneAndUpdate({
        _id: id,
        createdBy: userId,
    }, data, {
        new: true,
    });
    if (!post) {
        throw new Error("Post Not Found");
    }
    return post;
};
// ================= Delete Post =================
export const deletePostService = async (id, userId) => {
    const post = await Post.findOneAndDelete({
        _id: id,
        createdBy: userId,
    });
    if (!post) {
        throw new Error("Post Not Found");
    }
    return {
        message: "Post Deleted Successfully",
    };
};
// ================= React Post =================
export const reactPostService = async (postId, userId, emoji) => {
    const post = await Post.findById(postId);
    if (!post) {
        throw new Error("Post Not Found");
    }
    const reactionIndex = post.reactions.findIndex((reaction) => reaction.user.toString() === userId);
    if (reactionIndex === -1) {
        post.reactions.push({
            user: userId,
            emoji,
        });
    }
    else {
        post.reactions[reactionIndex].emoji = emoji;
    }
    await post.save();
    return post;
};
//# sourceMappingURL=post.service.js.map