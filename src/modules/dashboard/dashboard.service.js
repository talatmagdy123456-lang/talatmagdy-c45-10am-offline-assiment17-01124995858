import User from "../user/user.model.js";
import Post from "../post/post.model.js";
import Comment from "../comment/comment.model.js";
// Dashboard Statistics
export const getDashboardStats = async () => {
    const usersCount = await User.countDocuments();
    const postsCount = await Post.countDocuments();
    const commentsCount = await Comment.countDocuments();
    const recentUsers = await User.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("userName email createdAt");
    const recentPosts = await Post.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .populate("user", "userName profileImage");
    return {
        usersCount,
        postsCount,
        commentsCount,
        recentUsers,
        recentPosts
    };
};
// News Feed
export const getNewsFeed = async () => {
    const posts = await Post.find()
        .sort({
        createdAt: -1
    })
        .populate("user", "userName profileImage")
        .populate({
        path: "comments",
        populate: {
            path: "user",
            select: "userName profileImage"
        }
    })
        .limit(20);
    return posts;
};
// Profile Posts
export const getUserPosts = async (userId) => {
    const posts = await Post.find({
        user: userId
    })
        .sort({
        createdAt: -1
    })
        .populate("user", "userName profileImage")
        .populate({
        path: "comments",
        populate: {
            path: "user",
            select: "userName profileImage"
        }
    });
    return posts;
};
//# sourceMappingURL=dashboard.service.js.map