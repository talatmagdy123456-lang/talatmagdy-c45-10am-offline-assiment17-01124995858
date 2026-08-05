import { Schema, model } from "mongoose";
export var ReactionType;
(function (ReactionType) {
    ReactionType["LIKE"] = "LIKE";
    ReactionType["LOVE"] = "LOVE";
    ReactionType["HAHA"] = "HAHA";
    ReactionType["WOW"] = "WOW";
    ReactionType["SAD"] = "SAD";
    ReactionType["ANGRY"] = "ANGRY";
})(ReactionType || (ReactionType = {}));
const postSchema = new Schema({
    content: { type: String, required: false },
    image: { type: String, required: false },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    reactions: [
        {
            user: { type: Schema.Types.ObjectId, ref: "User", required: true },
            type: { type: String, enum: Object.values(ReactionType), required: true }
        }
    ],
    comments: [
        {
            user: { type: Schema.Types.ObjectId, ref: "User", required: true },
            content: { type: String, required: true },
            createdAt: { type: Date, default: Date.now }
        }
    ],
    commentsCount: { type: Number, default: 0 }
}, { timestamps: true });
export const PostModel = model("Post", postSchema);
export default PostModel;
//# sourceMappingURL=post.model.js.map