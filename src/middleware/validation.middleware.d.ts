import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";
declare const validation: (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default validation;
//# sourceMappingURL=validation.middleware.d.ts.map