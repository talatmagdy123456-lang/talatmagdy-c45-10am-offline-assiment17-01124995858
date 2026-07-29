import { NextFunction, Request, Response } from "express";
import User from "../modules/user/user.model.js";
import { verifyAccessToken } from "../utils/token.service.js";

export interface AuthRequest extends Request {
  user?: any;
}

export const authentication = async (
 req: Request,
 res: Response,
 next: NextFunction
) => {

 const token = req.headers.authorization?.split(" ")[1];

 if(!token){
   return res.status(401).json({
     message:"Token required"
   });
 }

 const decoded:any = verifyAccessToken(token);

 req.user = decoded;

 next();
};