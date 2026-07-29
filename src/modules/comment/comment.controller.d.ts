import { Request, Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const createComment: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getComments: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateComment: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteComment: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=comment.controller.d.ts.map