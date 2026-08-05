import { Schema, model } from "mongoose";
const messageSchema = new Schema({
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
}, { timestamps: true });
export const Message = model("Message", messageSchema);
//# sourceMappingURL=message.model.js.map