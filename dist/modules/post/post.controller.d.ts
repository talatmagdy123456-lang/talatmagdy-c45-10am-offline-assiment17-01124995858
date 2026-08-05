import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const createPost: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const reactToPost: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getNewsFeed: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const toggleLikePost: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=post.controller.d.ts.map