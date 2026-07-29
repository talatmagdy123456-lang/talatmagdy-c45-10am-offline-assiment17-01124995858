import { Schema, model, } from "mongoose";
const notificationSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
notificationSchema.pre(/^find/, function (next) {
    this.populate("user", "userName email");
    next();
});
const Notification = model("Notification", notificationSchema);
export default Notification;
//# sourceMappingURL=notification.model.js.map