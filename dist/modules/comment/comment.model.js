import { Schema, model, } from "mongoose";
const commentSchema = new Schema({
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
}, {
    timestamps: true,
});
// استخدام Regex عشان يغطي find و findOne مع بعض ومن غير مشاكل في الـ Types
commentSchema.pre(/^find/, function (next) {
    this.populate("createdBy", "userName email");
    next();
});
const Comment = model("Comment", commentSchema);
export default Comment;
//# sourceMappingURL=comment.model.js.map