import { Schema, model, Document, Types } from "mongoose";

export interface IMessage extends Document {
  sender: Types.ObjectId;
  chatId: Types.ObjectId;
  text?: string;
  attachments?: {
    url: string;
    fileType: "image" | "video" | "audio" | "file";
    publicId?: string;
  }[];
  mentions?: Types.ObjectId[];
  reactions?: {
    userId: Types.ObjectId;
    emoji: string;
  }[];
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    chatId: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
    text: { type: String, trim: true },
    attachments: [
      {
        url: { type: String, required: true },
        fileType: {
          type: String,
          enum: ["image", "video", "audio", "file"],
          required: true,
        },
        publicId: { type: String },
      },
    ],
    mentions: [{ type: Schema.Types.ObjectId, ref: "User" }],
    reactions: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        emoji: { type: String, required: true },
      },
    ],
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Message = model<IMessage>("Message", messageSchema);