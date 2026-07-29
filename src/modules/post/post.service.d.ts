export declare const createPostService: (data: any, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("./post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("./post.model.js").IPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const getAllPostsService: () => Promise<(import("mongoose").Document<unknown, {}, import("./post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("./post.model.js").IPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const getPostService: (id: string) => Promise<import("mongoose").Document<unknown, {}, import("./post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("./post.model.js").IPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const updatePostService: (id: string, data: any, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("./post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("./post.model.js").IPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const deletePostService: (id: string, userId: string) => Promise<{
    message: string;
}>;
export declare const reactPostService: (postId: string, userId: string, emoji: "like" | "love" | "haha" | "wow" | "sad" | "angry") => Promise<import("mongoose").Document<unknown, {}, import("./post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("./post.model.js").IPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
//# sourceMappingURL=post.service.d.ts.map