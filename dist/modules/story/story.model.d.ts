import { Document, Types } from "mongoose";
export interface IStory extends Document {
    user: Types.ObjectId;
    mediaUrl: string;
    mediaType: "image" | "video";
    viewers: Types.ObjectId[];
    createdAt: Date;
}
export declare const StoryModel: import("mongoose").Model<IStory, {}, {}, {}, Document<unknown, {}, IStory, {}, import("mongoose").DefaultSchemaOptions> & IStory & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IStory>;
export default StoryModel;
//# sourceMappingURL=story.model.d.ts.map