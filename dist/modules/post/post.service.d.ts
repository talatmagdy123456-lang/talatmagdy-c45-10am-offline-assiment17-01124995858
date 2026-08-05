import { IPost } from "./post.model.js";
import { Types } from "mongoose";
export declare const createPostService: (data: Partial<IPost>) => Promise<import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const toggleLikeService: (postId: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=post.service.d.ts.map