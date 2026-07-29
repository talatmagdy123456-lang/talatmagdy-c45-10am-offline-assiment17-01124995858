import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const createNotification: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getNotifications: (req: AuthRequest, res: Response) => Promise<void>;
export declare const markAsRead: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteNotification: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=notification.controller.d.ts.map