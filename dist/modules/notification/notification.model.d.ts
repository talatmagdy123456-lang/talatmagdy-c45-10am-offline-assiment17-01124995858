import { Document, Types } from "mongoose";
export interface INotification extends Document {
    recipient: Types.ObjectId;
    title: string;
    body: string;
    isRead: boolean;
    createdByAdmin: boolean;
    createdAt: Date;
}
export declare const NotificationModel: import("mongoose").Model<INotification, {}, {}, {}, Document<unknown, {}, INotification, {}, import("mongoose").DefaultSchemaOptions> & INotification & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, INotification>;
export default NotificationModel;
//# sourceMappingURL=notification.model.d.ts.map