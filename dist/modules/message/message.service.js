import { Types } from "mongoose";
import { Message } from "./message.model.js";
// إضافة أو تحديث أو حذف Reaction (Toggle System)
export const toggleMessageReactionService = async (messageId, userId, emoji) => {
    const message = await Message.findById(messageId);
    if (!message)
        throw new Error("Message not found");
    if (!message.reactions) {
        message.reactions = [];
    }
    const existingReactionIndex = message.reactions.findIndex((r) => r.userId.toString() === userId);
    if (existingReactionIndex > -1) {
        if (message.reactions[existingReactionIndex].emoji === emoji) {
            // نفس الإيموجي -> نحذفه (Toggle Off)
            message.reactions.splice(existingReactionIndex, 1);
        }
        else {
            // إيموجي مختلف -> نحدثه
            message.reactions[existingReactionIndex].emoji = emoji;
        }
    }
    else {
        // Reaction جديد
        message.reactions.push({
            userId: new Types.ObjectId(userId),
            emoji,
        });
    }
    await message.save();
    return message;
};
// إنشاء رسالة جديدة (بيدعم Text, Attachments, Mentions)
export const sendMessageService = async (senderId, chatId, data) => {
    const newMessage = await Message.create({
        sender: senderId,
        chatId,
        text: data.text,
        attachments: data.attachments,
        mentions: data.mentions,
    });
    return newMessage;
};
//# sourceMappingURL=message.service.js.map