import { Schema, model } from "mongoose";
const commentSchema = new Schema({
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    text: { type: String, required: true, trim: true },
    parentCommentId: { type: Schema.Types.ObjectId, ref: "Comment", default: null },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
// Virtual Populate لجلب الـ Replies للتعليق الحالي
commentSchema.virtual("replies", {
    ref: "Comment",
    localField: "_id",
    foreignField: "parentCommentId",
});
export const Comment = model("Comment", commentSchema);
//# sourceMappingURL=comment.model.js.map