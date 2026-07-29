export declare const getDashboardStats: () => Promise<{
    usersCount: number;
    postsCount: number;
    commentsCount: number;
    recentUsers: (import("mongoose").Document<unknown, {}, import("../user/user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("../user/user.model.js").IUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[];
    recentPosts: (import("mongoose").Document<unknown, {}, import("../post/post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("../post/post.model.js").IPost & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[];
}>;
export declare const getNewsFeed: () => Promise<(import("mongoose").Document<unknown, {}, import("../post/post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("../post/post.model.js").IPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const getUserPosts: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, import("../post/post.model.js").IPost, {}, import("mongoose").DefaultSchemaOptions> & import("../post/post.model.js").IPost & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
//# sourceMappingURL=dashboard.service.d.ts.map