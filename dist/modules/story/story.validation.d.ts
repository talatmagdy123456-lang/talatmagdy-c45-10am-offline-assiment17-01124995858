import { z } from "zod";
export declare const createStorySchema: z.ZodObject<{
    body: z.ZodObject<{
        image: z.ZodString;
        caption: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=story.validation.d.ts.map