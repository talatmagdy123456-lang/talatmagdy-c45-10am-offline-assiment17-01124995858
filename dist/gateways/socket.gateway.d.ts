import { Server, Socket } from "socket.io";
export interface AuthenticatedSocket extends Socket {
    userId?: string;
}
export declare const setupSocketGateway: (io: Server) => void;
//# sourceMappingURL=socket.gateway.d.ts.map