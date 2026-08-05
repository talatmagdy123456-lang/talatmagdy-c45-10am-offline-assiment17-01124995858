import { PostModel } from "../post/post.model.js";
export const getNewsFeed = async () => {
    return await PostModel.find().sort({ createdAt: -1 });
};
export const getUserPosts = async (userId) => {
    return await PostModel.find({ author: userId });
};
export const getDashboardStats = async () => {
    const postsCount = await PostModel.countDocuments();
    const recentPosts = await PostModel.find().limit(5).sort({ createdAt: -1 });
    return { postsCount, recentPosts };
};
//# sourceMappingURL=dashboard.service.js.map