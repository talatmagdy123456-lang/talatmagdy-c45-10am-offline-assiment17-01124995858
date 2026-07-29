import { Types } from "mongoose";
export interface INotification {
    title: string;
    body: string;
    user: Types.ObjectId;
    isRead: boolean;
}
declare const Notification: import("mongoose").Model<INotification, {}, {}, {}, import("mongoose").Document<unknown, {}, INotification, {}, import("mongoose").DefaultSchemaOptions> & INotification & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, INotification>;
export default Notification;
//# sourceMappingURL=notification.model.d.ts.map