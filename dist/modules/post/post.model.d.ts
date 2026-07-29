import { Types } from "mongoose";
export interface IReaction {
    user: Types.ObjectId;
    emoji: "like" | "love" | "haha" | "wow" | "sad" | "angry";
}
export interface IPost {
    content: string;
    image?: string;
    createdBy: Types.ObjectId;
    reactions: IReaction[];
}
declare const Post: import("mongoose").Model<IPost, {}, {}, {}, import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IPost>;
export default Post;
//# sourceMappingURL=post.model.d.ts.map