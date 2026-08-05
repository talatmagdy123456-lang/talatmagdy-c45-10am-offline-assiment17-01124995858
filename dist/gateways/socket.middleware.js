import jwt from "jsonwebtoken";
export const socketAuthMiddleware = (socket, next) => {
    try {
        const token = socket.handshake.auth?.token || socket.handshake.headers?.token;
        if (!token) {
            return next(new Error("Authentication error: Token missing"));
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
        socket.user = decoded;
        next();
    }
    catch (err) {
        next(new Error("Authentication error: Invalid token"));
    }
};
//# sourceMappingURL=socket.middleware.js.map