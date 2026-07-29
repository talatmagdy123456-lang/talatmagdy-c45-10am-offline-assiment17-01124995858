import { Schema, model } from "mongoose";
const storySchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        default: "",
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
        expires: 0,
    },
}, {
    timestamps: true,
});
storySchema.pre("find", function (next) {
    this.populate("createdBy", "userName email");
    next();
});
const Story = model("Story", storySchema);
export default Story;
//# sourceMappingURL=story.model.js.map