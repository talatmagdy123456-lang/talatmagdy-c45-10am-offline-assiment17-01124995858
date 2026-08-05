export declare const createCommentService: (postId: string, userId: string, content: string) => Promise<import("mongoose").Document<unknown, {}, import("../post/post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("../post/post.model.js").IPost & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const createReplyService: (postId: string, commentId: string, userId: string, content: string) => Promise<import("mongoose").Document<unknown, {}, import("../post/post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("../post/post.model.js").IPost & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=comment.service.d.ts.map