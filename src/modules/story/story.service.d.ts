export declare const createStoryService: (data: any, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("./story.model.js").IStory, {}, import("mongoose").DefaultSchemaOptions> & import("./story.model.js").IStory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const getStoriesService: () => Promise<(import("mongoose").Document<unknown, {}, import("./story.model.js").IStory, {}, import("mongoose").DefaultSchemaOptions> & import("./story.model.js").IStory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const deleteStoryService: (id: string, userId: string) => Promise<{
    message: string;
}>;
//# sourceMappingURL=story.service.d.ts.map