import Post from "../post/post.model.js";

// Add or Update Reaction
export const addReaction = async (
  postId: string,
  userId: string,
  type: string
) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error("Post not found");
  }

  const existingReaction = (post.reactions as any[]).find(
    (reaction) => reaction.user.toString() === userId
  );

  if (existingReaction) {
    existingReaction.type = type;
  } else {
    (post.reactions as any[]).push({
      user: userId,
      type,
    });
  }

  await post.save();

  return post;
};

// Remove Reaction
export const removeReaction = async (
  postId: string,
  userId: string
) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error("Post not found");
  }

  post.reactions = (post.reactions as any[]).filter(
    (reaction) => reaction.user.toString() !== userId
  );

  await post.save();

  return post;
};