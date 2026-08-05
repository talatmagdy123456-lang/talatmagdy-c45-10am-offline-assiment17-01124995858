const onlineUsers = new Map();
export const setupSocketGateway = (io) => {
    io.on("connection", (socket) => {
        const userId = socket.userId;
        if (userId) {
            if (!onlineUsers.has(userId)) {
                onlineUsers.set(userId, new Set());
            }
            onlineUsers.get(userId)?.add(socket.id);
        }
        socket.on("disconnect", () => {
            if (userId) {
                onlineUsers.get(userId)?.delete(socket.id);
                if (onlineUsers.get(userId)?.size === 0) {
                    onlineUsers.delete(userId);
                }
            }
        });
    });
};
//# sourceMappingURL=socket.gateway.js.map