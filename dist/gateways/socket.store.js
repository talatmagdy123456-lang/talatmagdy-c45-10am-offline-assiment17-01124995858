// Map to handle user connections (UserId -> Set of SocketIDs)
export const onlineUsers = new Map();
export const addSocketUser = (userId, socketId) => {
    if (!onlineUsers.has(userId)) {
        onlineUsers.set(userId, new Set());
    }
    onlineUsers.get(userId)?.add(socketId);
};
export const removeSocketUser = (userId, socketId) => {
    if (onlineUsers.has(userId)) {
        const userSockets = onlineUsers.get(userId);
        userSockets?.delete(socketId);
        if (userSockets?.size === 0) {
            onlineUsers.delete(userId);
        }
    }
};
export const getUserSockets = (userId) => {
    return Array.from(onlineUsers.get(userId) || []);
};
//# sourceMappingURL=socket.store.js.map