import { Document, Types } from "mongoose";
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
export declare const ChatModel: import("mongoose").Model<IChat, {}, {}, {}, Document<unknown, {}, IChat, {}, import("mongoose").DefaultSchemaOptions> & IChat & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IChat>;
export default ChatModel;
//# sourceMappingURL=chat.model.d.ts.map