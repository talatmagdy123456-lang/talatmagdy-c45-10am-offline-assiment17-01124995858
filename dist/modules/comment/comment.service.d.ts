export declare const createCommentService: (data: any, userId: string, postId: string) => Promise<import("mongoose").Document<unknown, {}, import("./comment.model.js").IComment, {}, import("mongoose").DefaultSchemaOptions> & import("./comment.model.js").IComment & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const getCommentsService: (postId: string) => Promise<(import("mongoose").Document<unknown, {}, import("./comment.model.js").IComment, {}, import("mongoose").DefaultSchemaOptions> & import("./comment.model.js").IComment & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const updateCommentService: (id: string, userId: string, data: any) => Promise<import("mongoose").Document<unknown, {}, import("./comment.model.js").IComment, {}, import("mongoose").DefaultSchemaOptions> & import("./comment.model.js").IComment & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const deleteCommentService: (id: string, userId: string) => Promise<{
    message: string;
}>;
//# sourceMappingURL=comment.service.d.ts.map