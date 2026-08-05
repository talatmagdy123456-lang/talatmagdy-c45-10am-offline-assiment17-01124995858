export declare const createStory: (data: any) => Promise<import("mongoose").Document<unknown, {}, import("./story.model.js").IStory, {}, import("mongoose").DefaultSchemaOptions> & import("./story.model.js").IStory & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const getActiveStories: () => Promise<(import("mongoose").Document<unknown, {}, import("./story.model.js").IStory, {}, import("mongoose").DefaultSchemaOptions> & import("./story.model.js").IStory & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const deleteStory: (storyId: string) => Promise<(import("mongoose").Document<unknown, {}, import("./story.model.js").IStory, {}, import("mongoose").DefaultSchemaOptions> & import("./story.model.js").IStory & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | null>;
//# sourceMappingURL=story.service.d.ts.map