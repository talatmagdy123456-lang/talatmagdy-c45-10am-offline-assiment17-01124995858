import { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  user?: any;
}

export const authentication = (req: AuthRequest, res: Response, next: NextFunction) => {
  // كود التوثيق الخاص بك (JWT verification logic)
  next();
};

export default authentication;