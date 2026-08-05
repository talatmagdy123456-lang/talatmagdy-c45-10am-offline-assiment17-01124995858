import { addSocketUser, removeSocketUser, getUserSockets } from "../../gateways/socket.store.js";
import { ChatModel } from "./chat.model.js";
export const registerChatGateway = (io) => {
    const chatNamespace = io.of("/chat");
    chatNamespace.on("connection", (socket) => {
        const userId = socket.user?.id || socket.user?._id;
        if (userId) {
            addSocketUser(userId.toString(), socket.id);
            socket.join(`user_${userId}`);
        }
        socket.on("send_message_ovo", async (data, ack) => {
            try {
                const { receiverId, content } = data;
                let chat = await ChatModel.findOne({
                    isGroup: false,
                    participants: { $all: [userId, receiverId] }
                });
                if (!chat) {
                    chat = await ChatModel.create({
                        isGroup: false,
                        participants: [userId, receiverId],
                        messages: []
                    });
                }
                const newMessage = { sender: userId, content, createdAt: new Date() };
                chat.messages.push(newMessage);
                await chat.save();
                const receiverSockets = getUserSockets(receiverId);
                receiverSockets.forEach((sId) => {
                    chatNamespace.to(sId).emit("receive_message", {
                        chatId: chat._id,
                        message: newMessage
                    });
                });
                if (ack)
                    ack({ status: "OK", message: newMessage });
            }
            catch (err) {
                socket.emit("socket_error", { message: err.message });
            }
        });
        socket.on("join_room", (roomId) => {
            socket.join(`room_${roomId}`);
        });
        socket.on("send_group_message", async (data, ack) => {
            try {
                const { groupId, content } = data;
                const chat = await ChatModel.findById(groupId);
                if (!chat || !chat.isGroup) {
                    return socket.emit("socket_error", { message: "Group chat not found" });
                }
                const newMessage = { sender: userId, content, createdAt: new Date() };
                chat.messages.push(newMessage);
                await chat.save();
                socket.to(`room_${groupId}`).emit("receive_group_message", {
                    groupId,
                    message: newMessage
                });
                if (ack)
                    ack({ status: "OK", message: newMessage });
            }
            catch (err) {
                socket.emit("socket_error", { message: err.message });
            }
        });
        socket.on("disconnect", () => {
            if (userId) {
                removeSocketUser(userId.toString(), socket.id);
            }
        });
    });
};
//# sourceMappingURL=chat.gateway.js.map