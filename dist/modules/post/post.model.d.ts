import { Document, Types } from "mongoose";
export declare enum ReactionType {
    LIKE = "LIKE",
    LOVE = "LOVE",
    HAHA = "HAHA",
    WOW = "WOW",
    SAD = "SAD",
    ANGRY = "ANGRY"
}
export interface IReaction {
    user: Types.ObjectId;
    type: ReactionType;
}
export interface ICommentItem {
    user: Types.ObjectId;
    content: string;
    createdAt?: Date;
}
export interface IPost extends Document {
    content?: string;
    image?: string;
    author: Types.ObjectId;
    likes: Types.ObjectId[];
    reactions: IReaction[];
    comments: ICommentItem[];
    commentsCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PostModel: import("mongoose").Model<IPost, {}, {}, {}, Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IPost>;
export default PostModel;
//# sourceMappingURL=post.model.d.ts.map