import { z } from "zod";
export declare const createNotificationSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        body: z.ZodString;
        user: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=notification.validation.d.ts.map