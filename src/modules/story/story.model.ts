import { Schema, model, Document, Types } from "mongoose";

export interface IStory extends Document {
  user: Types.ObjectId;
  mediaUrl: string;
  mediaType: "image" | "video";
  viewers: Types.ObjectId[];
  createdAt: Date;
}

const storySchema = new Schema<IStory>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    mediaUrl: { type: String, required: true },
    mediaType: { type: String, enum: ["image", "video"], default: "image" },
    viewers: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

// TTL Index: حذف الستوري تلقائياً بعد 24 ساعة من إنشائها
storySchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

export const StoryModel = model<IStory>("Story", storySchema);
export default StoryModel;