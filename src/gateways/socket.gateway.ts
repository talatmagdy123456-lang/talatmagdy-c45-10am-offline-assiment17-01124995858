import { Server, Socket } from "socket.io";

export interface AuthenticatedSocket extends Socket {
  userId?: string;
}

const onlineUsers = new Map<string, Set<string>>();

export const setupSocketGateway = (io: Server) => {
  io.on("connection", (socket: AuthenticatedSocket) => {
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