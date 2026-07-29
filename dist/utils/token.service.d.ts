import jwt from "jsonwebtoken";
interface Payload {
    _id: string;
    email: string;
}
export declare const generateAccessToken: (payload: Payload) => string;
export declare const generateRefreshToken: (payload: Payload) => string;
export declare const verifyAccessToken: (token: string) => jwt.JwtPayload;
export declare const verifyRefreshToken: (token: string) => jwt.JwtPayload;
export {};
//# sourceMappingURL=token.service.d.ts.map