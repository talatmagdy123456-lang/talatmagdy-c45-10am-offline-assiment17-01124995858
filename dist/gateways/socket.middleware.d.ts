import { Socket } from "socket.io";
export interface AuthenticatedSocket extends Socket {
    user?: any;
}
export declare const socketAuthMiddleware: (socket: AuthenticatedSocket, next: (err?: Error) => void) => void;
//# sourceMappingURL=socket.middleware.d.ts.map