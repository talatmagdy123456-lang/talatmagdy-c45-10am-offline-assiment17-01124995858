import { Schema, model } from "mongoose";
const storySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    mediaUrl: { type: String, required: true },
    mediaType: { type: String, enum: ["image", "video"], default: "image" },
    viewers: [{ type: Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });
// TTL Index: حذف الستوري تلقائياً بعد 24 ساعة من إنشائها
storySchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });
export const StoryModel = model("Story", storySchema);
export default StoryModel;
//# sourceMappingURL=story.model.js.map