import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
export declare const createAdminNotification: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getUserNotifications: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const markAsRead: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteNotification: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=notification.controller.d.ts.map