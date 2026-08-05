import { Socket } from "socket.io";
import jwt from "jsonwebtoken";

export interface AuthenticatedSocket extends Socket {
  user?: any;
}

export const socketAuthMiddleware = (socket: AuthenticatedSocket, next: (err?: Error) => void) => {
  try {
    const token = socket.handshake.auth?.token || socket.handshake.headers?.token;
    if (!token) {
      return next(new Error("Authentication error: Token missing"));
    }

    const decoded = jwt.verify(token as string, process.env.JWT_SECRET || "default_secret");
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error("Authentication error: Invalid token"));
  }
};