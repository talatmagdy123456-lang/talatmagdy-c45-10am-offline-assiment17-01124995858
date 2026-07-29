import { Types } from "mongoose";
export interface IComment {
    content: string;
    createdBy: Types.ObjectId;
    postId: Types.ObjectId;
}
declare const Comment: import("mongoose").Model<IComment, {}, {}, {}, import("mongoose").Document<unknown, {}, IComment, {}, import("mongoose").DefaultSchemaOptions> & IComment & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IComment>;
export default Comment;
//# sourceMappingURL=comment.model.d.ts.map