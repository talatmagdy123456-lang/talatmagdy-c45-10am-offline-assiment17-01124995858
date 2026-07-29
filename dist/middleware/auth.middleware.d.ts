import { NextFunction, Request, Response } from "express";
export interface AuthRequest extends Request {
    user?: any;
}
export declare const authentication: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=auth.middleware.d.ts.map