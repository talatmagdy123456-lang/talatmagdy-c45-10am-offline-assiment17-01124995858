import { Schema, model } from "mongoose";
const notificationSchema = new Schema({
    recipient: { type: Schema.Types.ObjectId, ref: "User", default: null },
    title: { type: String, required: true },
    body: { type: String, required: true },
    isRead: { type: Boolean, default: false },
    createdByAdmin: { type: Boolean, default: true }
}, { timestamps: true });
export const NotificationModel = model("Notification", notificationSchema);
export default NotificationModel;
//# sourceMappingURL=notification.model.js.map