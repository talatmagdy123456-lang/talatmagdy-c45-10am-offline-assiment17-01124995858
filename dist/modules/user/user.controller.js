import { UserModel } from "./user.model.js";
// Auth Controllers
export const register = async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        return res.status(201).json({ success: true, user });
    }
    catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
};
export const login = async (req, res) => {
    try {
        return res.status(200).json({ success: true, token: "jwt_token_here" });
    }
    catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
};
export const confirmEmail = async (req, res) => {
    return res.status(200).json({ success: true, message: "Email confirmed" });
};
export const forgetPassword = async (req, res) => {
    return res.status(200).json({ success: true, message: "Reset code sent" });
};
export const resetPassword = async (req, res) => {
    return res.status(200).json({ success: true, message: "Password updated" });
};
// Profile & Friend Requests Controllers
export const sendFriendRequest = async (req, res) => {
    try {
        const { targetUserId } = req.body;
        const userId = req.user._id;
        if (targetUserId === userId.toString()) {
            return res.status(400).json({ success: false, message: "Cannot send request to yourself" });
        }
        await UserModel.findByIdAndUpdate(targetUserId, {
            $addToSet: { friendRequests: userId }
        });
        return res.status(200).json({ success: true, message: "Friend request sent" });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
export const acceptFriendRequest = async (req, res) => {
    try {
        const { friendId } = req.body;
        const userId = req.user._id;
        await UserModel.findByIdAndUpdate(userId, {
            $addToSet: { friends: friendId },
            $pull: { friendRequests: friendId }
        });
        await UserModel.findByIdAndUpdate(friendId, {
            $addToSet: { friends: userId }
        });
        return res.status(200).json({ success: true, message: "Friend request accepted" });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
export const getUserProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await UserModel.findById(userId).select("-password");
        if (!user)
            return res.status(404).json({ success: false, message: "User not found" });
        return res.status(200).json({ success: true, user });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};
//# sourceMappingURL=user.controller.js.map