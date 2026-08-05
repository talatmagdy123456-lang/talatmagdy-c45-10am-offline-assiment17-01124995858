import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const createStory: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getActiveStories: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const viewStory: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=story.controller.d.ts.map