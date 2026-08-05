import { Document, Types } from "mongoose";
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
export declare const Message: import("mongoose").Model<IMessage, {}, {}, {}, Document<unknown, {}, IMessage, {}, import("mongoose").DefaultSchemaOptions> & IMessage & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IMessage>;
//# sourceMappingURL=message.model.d.ts.map