import { Server } from "socket.io";
import { AuthenticatedSocket } from "../../gateways/socket.middleware.js";
import { addSocketUser, removeSocketUser, getUserSockets } from "../../gateways/socket.store.js";
import { ChatModel } from "./chat.model.js";

export const registerChatGateway = (io: Server) => {
  const chatNamespace = io.of("/chat");

  chatNamespace.on("connection", (socket: AuthenticatedSocket) => {
    const userId = socket.user?.id || socket.user?._id;
    if (userId) {
      addSocketUser(userId.toString(), socket.id);
      socket.join(`user_${userId}`);
    }

    socket.on("send_message_ovo", async (data: { receiverId: string; content: string }, ack?: Function) => {
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
        chat.messages.push(newMessage as any);
        await chat.save();

        const receiverSockets = getUserSockets(receiverId);
        receiverSockets.forEach((sId: string) => {
          chatNamespace.to(sId).emit("receive_message", {
            chatId: chat._id,
            message: newMessage
          });
        });

        if (ack) ack({ status: "OK", message: newMessage });
      } catch (err: any) {
        socket.emit("socket_error", { message: err.message });
      }
    });

    socket.on("join_room", (roomId: string) => {
      socket.join(`room_${roomId}`);
    });

    socket.on("send_group_message", async (data: { groupId: string; content: string }, ack?: Function) => {
      try {
        const { groupId, content } = data;
        const chat = await ChatModel.findById(groupId);
        if (!chat || !chat.isGroup) {
          return socket.emit("socket_error", { message: "Group chat not found" });
        }

        const newMessage = { sender: userId, content, createdAt: new Date() };
        chat.messages.push(newMessage as any);
        await chat.save();

        socket.to(`room_${groupId}`).emit("receive_group_message", {
          groupId,
          message: newMessage
        });

        if (ack) ack({ status: "OK", message: newMessage });
      } catch (err: any) {
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