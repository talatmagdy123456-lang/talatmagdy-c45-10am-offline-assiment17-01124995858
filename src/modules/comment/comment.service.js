import Comment from "./comment.model.js";
export const createCommentService = async (data, userId, postId) => {
    return await Comment.create({
        content: data.content,
        createdBy: userId,
        postId,
    });
};
export const getCommentsService = async (postId) => {
    return await Comment.find({ postId }).sort({
        createdAt: -1,
    });
};
export const updateCommentService = async (id, userId, data) => {
    const comment = await Comment.findOneAndUpdate({
        _id: id,
        createdBy: userId,
    }, data, {
        new: true,
    });
    if (!comment) {
        throw new Error("Comment Not Found");
    }
    return comment;
};
export const deleteCommentService = async (id, userId) => {
    const comment = await Comment.findOneAndDelete({
        _id: id,
        createdBy: userId,
    });
    if (!comment) {
        throw new Error("Comment Not Found");
    }
    return {
        message: "Comment Deleted Successfully",
    };
};
//# sourceMappingURL=comment.service.js.map