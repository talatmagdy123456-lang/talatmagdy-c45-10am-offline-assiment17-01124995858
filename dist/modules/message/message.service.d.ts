import { Types } from "mongoose";
export declare const toggleMessageReactionService: (messageId: string, userId: string, emoji: string) => Promise<import("mongoose").Document<unknown, {}, import("./message.model.js").IMessage, {}, import("mongoose").DefaultSchemaOptions> & import("./message.model.js").IMessage & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const sendMessageService: (senderId: string, chatId: string, data: {
    text?: string;
    attachments?: any[];
    mentions?: string[];
}) => Promise<import("mongoose").Document<unknown, {}, import("./message.model.js").IMessage, {}, import("mongoose").DefaultSchemaOptions> & import("./message.model.js").IMessage & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=message.service.d.ts.map