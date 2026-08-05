import { Schema, model, Document, Types } from "mongoose";

export interface IMessage {
  sender: Types.ObjectId;
  content: string;
  createdAt: Date;
}

export interface IChat extends Document {
  isGroup: boolean;
  name?: string;
  participants: Types.ObjectId[];
  messages: IMessage[];
  admin?: Types.ObjectId;
}

const chatSchema = new Schema<IChat>(
  {
    isGroup: { type: Boolean, default: false },
    name: { type: String },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    admin: { type: Schema.Types.ObjectId, ref: "User" },
    messages: [
      {
        sender: { type: Schema.Types.ObjectId, ref: "User" },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

export const ChatModel = model<IChat>("Chat", chatSchema);
export default ChatModel;