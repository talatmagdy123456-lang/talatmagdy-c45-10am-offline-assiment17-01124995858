import { Document, Types } from "mongoose";
export interface IComment extends Document {
    postId: Types.ObjectId;
    userId: Types.ObjectId;
    text: string;
    parentCommentId?: Types.ObjectId;
    likes: Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const Comment: import("mongoose").Model<IComment, {}, {}, {}, Document<unknown, {}, IComment, {}, import("mongoose").DefaultSchemaOptions> & IComment & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IComment>;
//# sourceMappingURL=comment.model.d.ts.map