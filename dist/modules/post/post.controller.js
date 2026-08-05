import { PostModel } from "./post.model.js";
// إنشاء بوست
export const createPost = async (req, res) => {
    try {
        const { content, image } = req.body;
        const post = await PostModel.create({
            content,
            image,
            author: req.user._id
        });
        return res.status(201).json({ success: true, post });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
// إضافة أو تحديث أو حذف Emoji Reaction
export const reactToPost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { type } = req.body;
        const userId = req.user._id;
        const post = await PostModel.findById(postId);
        if (!post)
            return res.status(404).json({ success: false, message: "Post not found" });
        const existingIndex = post.reactions.findIndex((r) => r.user.toString() === userId.toString());
        if (existingIndex > -1) {
            if (post.reactions[existingIndex].type === type) {
                // لو ضغط على نفس الريأكشن يشيله
                post.reactions.splice(existingIndex, 1);
            }
            else {
                // لو اختار ريأكشن تاني يتغير
                post.reactions[existingIndex].type = type;
            }
        }
        else {
            // إضافته لأول مرة
            post.reactions.push({ user: userId, type });
        }
        await post.save();
        return res.status(200).json({ success: true, reactions: post.reactions });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
// NewsFeed + Profile Posts
export const getNewsFeed = async (req, res) => {
    try {
        const posts = await PostModel.find()
            .populate("author", "name avatar")
            .sort({ createdAt: -1 })
            .limit(20);
        return res.status(200).json({ success: true, posts });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
// أضف هذه الدالة داخل src/modules/post/post.controller.ts
export const toggleLikePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const userId = req.user._id;
        const post = await PostModel.findById(postId);
        if (!post)
            return res.status(404).json({ success: false, message: "Post not found" });
        const isLiked = post.likes.some((id) => id.toString() === userId.toString());
        if (isLiked) {
            post.likes = post.likes.filter((id) => id.toString() !== userId.toString());
        }
        else {
            post.likes.push(userId);
        }
        await post.save();
        return res.status(200).json({ success: true, likes: post.likes });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
//# sourceMappingURL=post.controller.js.map