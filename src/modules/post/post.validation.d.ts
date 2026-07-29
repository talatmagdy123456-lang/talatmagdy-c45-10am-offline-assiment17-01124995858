import { z } from "zod";
export declare const createPostSchema: z.ZodObject<{
    body: z.ZodObject<{
        content: z.ZodString;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const updatePostSchema: z.ZodObject<{
    body: z.ZodObject<{
        content: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const reactSchema: z.ZodObject<{
    body: z.ZodObject<{
        emoji: z.ZodEnum<{
            like: "like";
            love: "love";
            haha: "haha";
            wow: "wow";
            sad: "sad";
            angry: "angry";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=post.validation.d.ts.map