import { Request, Response, NextFunction } from "express";
export interface AuthRequest extends Request {
    user?: any;
}
export declare const authentication: (req: AuthRequest, res: Response, next: NextFunction) => void;
export default authentication;
//# sourceMappingURL=auth.middleware.d.ts.map