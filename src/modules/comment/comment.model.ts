import {
  Schema,
  model,
  Types,
  type CallbackWithoutResultAndOptionalError,
} from "mongoose";

export interface IComment {
  content: string;
  createdBy: Types.ObjectId;
  postId: Types.ObjectId;
}

const commentSchema = new Schema<IComment>(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// استخدام Regex عشان يغطي find و findOne مع بعض ومن غير مشاكل في الـ Types
commentSchema.pre(
  /^find/,
  function (this: any, next: CallbackWithoutResultAndOptionalError) {
    this.populate("createdBy", "userName email");
    next();
  }
);

const Comment = model<IComment>("Comment", commentSchema);

export default Comment;