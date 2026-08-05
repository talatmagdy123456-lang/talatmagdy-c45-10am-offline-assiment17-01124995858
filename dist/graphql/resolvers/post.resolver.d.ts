import { IPost } from "../../modules/post/post.model.js";
export declare const postResolvers: {
    Query: {
        getPosts: () => Promise<(import("mongoose").Document<unknown, {}, IPost, {}, import("mongoose").DefaultSchemaOptions> & IPost & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        } & {
            id: string;
        })[]>;
    };
};
//# sourceMappingURL=post.resolver.d.ts.map