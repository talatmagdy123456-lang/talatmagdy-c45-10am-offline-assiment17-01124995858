import { Schema, model, Document, Types } from "mongoose";

export interface INotification extends Document {
  recipient: Types.ObjectId; // null if broadcast to all users
  title: string;
  body: string;
  isRead: boolean;
  createdByAdmin: boolean;
  createdAt: Date;
}

const notificationSchema = new Schema<INotification>(
  {
    recipient: { type: Schema.Types.ObjectId, ref: "User", default: null },
    title: { type: String, required: true },
    body: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    createdByAdmin: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const NotificationModel = model<INotification>("Notification", notificationSchema);
export default NotificationModel;