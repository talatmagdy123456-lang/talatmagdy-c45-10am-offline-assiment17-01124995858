import { NextFunction, Request, Response } from "express";

const globalError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  return res.status(500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });

};

export default globalError;