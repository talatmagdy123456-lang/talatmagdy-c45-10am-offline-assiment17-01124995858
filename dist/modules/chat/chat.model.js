import { Schema, model } from "mongoose";
const chatSchema = new Schema({
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
}, { timestamps: true });
export const ChatModel = model("Chat", chatSchema);
export default ChatModel;
//# sourceMappingURL=chat.model.js.map