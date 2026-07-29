import {
  Schema,
  model,
  Types,
  type CallbackWithoutResultAndOptionalError,
} from "mongoose";

export interface INotification {
  title: string;
  body: string;
  user: Types.ObjectId;
  isRead: boolean;
}

const notificationSchema = new Schema<INotification>(
  {
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
  },
  {
    timestamps: true,
  }
);

notificationSchema.pre(
  /^find/,
  function (this: any, next: CallbackWithoutResultAndOptionalError) {
    this.populate("user", "userName email");
    next();
  }
);

const Notification = model<INotification>(
  "Notification",
  notificationSchema
);

export default Notification;