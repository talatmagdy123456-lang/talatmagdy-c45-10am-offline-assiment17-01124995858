import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const addComment: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const addReply: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteComment: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=comment.controller.d.ts.map