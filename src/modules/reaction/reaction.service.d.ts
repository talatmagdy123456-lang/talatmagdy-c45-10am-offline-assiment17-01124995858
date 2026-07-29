export declare const addReaction: (postId: string, userId: string, type: string) => Promise<import("mongoose").Document<unknown, {}, import("../post/post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("../post/post.model.js").IPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const removeReaction: (postId: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("../post/post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("../post/post.model.js").IPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=reaction.service.d.ts.map