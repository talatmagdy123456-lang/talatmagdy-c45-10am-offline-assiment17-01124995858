export declare const getNewsFeed: () => Promise<(import("mongoose").Document<unknown, {}, import("../post/post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("../post/post.model.js").IPost & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const getUserPosts: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, import("../post/post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("../post/post.model.js").IPost & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const getDashboardStats: () => Promise<{
    postsCount: number;
    recentPosts: (import("mongoose").Document<unknown, {}, import("../post/post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("../post/post.model.js").IPost & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[];
}>;
//# sourceMappingURL=dashboard.service.d.ts.map