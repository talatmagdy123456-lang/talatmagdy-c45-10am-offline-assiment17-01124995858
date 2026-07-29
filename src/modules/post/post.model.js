import { Schema, model } from "mongoose";
const postSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        default: "",
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    reactions: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            emoji: {
                type: String,
                enum: [
                    "like",
                    "love",
                    "haha",
                    "wow",
                    "sad",
                    "angry",
                ],
                default: "like",
            },
        },
    ],
}, {
    timestamps: true,
});
// ================= Document Middleware =================
postSchema.pre("validate", function () {
    console.log("Before Validate Post");
});
postSchema.post("validate", function () {
    console.log("After Validate Post");
});
postSchema.pre("save", function () {
    console.log("Before Save Post");
});
postSchema.post("save", function () {
    console.log("After Save Post");
});
// ================= Query Middleware =================
postSchema.pre("find", function () {
    this.populate("createdBy", "userName email");
});
postSchema.pre("findOne", function () {
    this.populate("createdBy", "userName email");
});
postSchema.pre("findOneAndUpdate", function () {
    console.log("Before Update Post");
});
postSchema.post("findOneAndUpdate", function () {
    console.log("After Update Post");
});
postSchema.pre("findOneAndDelete", function () {
    console.log("Before Delete Post");
});
postSchema.post("findOneAndDelete", function () {
    console.log("After Delete Post");
});
// ================= Model Middleware =================
postSchema.pre("insertMany", function () {
    console.log("Before Insert Many");
});
postSchema.post("insertMany", function () {
    console.log("After Insert Many");
});
const Post = model("Post", postSchema);
export default Post;
//# sourceMappingURL=post.model.js.map