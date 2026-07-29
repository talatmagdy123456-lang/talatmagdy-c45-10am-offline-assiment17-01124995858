import { Request, Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const createPost: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllPosts: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getPost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updatePost: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deletePost: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const reactPost: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=post.controller.d.ts.map