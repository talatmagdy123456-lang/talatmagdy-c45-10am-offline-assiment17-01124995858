import { addReaction, removeReaction, } from "./reaction.service.js";
// Add Reaction
export const reactPost = async (req, res) => {
    try {
        const { postId, type } = req.body;
        const userId = req.user._id;
        const post = await addReaction(postId, userId, type);
        return res.status(200).json({
            message: "Reaction Added",
            data: post,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error,
        });
    }
};
// Delete Reaction
export const deleteReaction = async (req, res) => {
    try {
        const postId = req.params.postId;
        if (!postId) {
            return res.status(400).json({
                message: "Post ID is required",
            });
        }
        const userId = req.user._id;
        const post = await removeReaction(postId, userId);
        return res.status(200).json({
            message: "Reaction Removed",
            data: post,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error,
        });
    }
};
//# sourceMappingURL=reaction.controller.js.map