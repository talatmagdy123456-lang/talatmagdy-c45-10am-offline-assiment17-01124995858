import { z } from "zod";
export declare const createCommentSchema: z.ZodObject<{
    body: z.ZodObject<{
        content: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const updateCommentSchema: z.ZodObject<{
    body: z.ZodObject<{
        content: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=comment.validation.d.ts.map