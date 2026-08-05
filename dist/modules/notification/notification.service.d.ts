import { INotification } from "./notification.model.js";
export declare const createAndSendNotification: (data: Partial<INotification>) => Promise<import("mongoose").Document<unknown, {}, INotification, {}, import("mongoose").DefaultSchemaOptions> & INotification & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=notification.service.d.ts.map