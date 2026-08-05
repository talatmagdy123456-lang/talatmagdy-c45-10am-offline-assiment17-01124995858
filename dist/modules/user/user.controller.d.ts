import { Request, Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const register: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const confirmEmail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const forgetPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const resetPassword: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const sendFriendRequest: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const acceptFriendRequest: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getUserProfile: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=user.controller.d.ts.map