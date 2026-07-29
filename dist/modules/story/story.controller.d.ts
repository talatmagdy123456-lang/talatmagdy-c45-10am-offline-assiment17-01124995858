import { Request, Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const createStory: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getStories: (req: Request, res: Response) => Promise<void>;
export declare const deleteStory: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=story.controller.d.ts.map