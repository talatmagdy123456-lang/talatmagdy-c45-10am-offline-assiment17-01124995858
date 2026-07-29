import Comment from "./comment.model.js";

export const createCommentService = async (
  data: any,
  userId: string,
  postId: string
) => {
  return await Comment.create({
    content: data.content,
    createdBy: userId,
    postId,
  });
};

export const getCommentsService = async (
  postId: string
) => {
  return await Comment.find({ postId }).sort({
    createdAt: -1,
  });
};

export const updateCommentService = async (
  id: string,
  userId: string,
  data: any
) => {
  const comment = await Comment.findOneAndUpdate(
    {
      _id: id,
      createdBy: userId,
    },
    data,
    {
      new: true,
    }
  );

  if (!comment) {
    throw new Error("Comment Not Found");
  }

  return comment;
};

export const deleteCommentService = async (
  id: string,
  userId: string
) => {
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