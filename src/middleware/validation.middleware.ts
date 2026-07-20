import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";

const validation = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      return res.status(400).json({
        message: result.error.issues,
      });
    }

    next();
  };
};

export default validation;