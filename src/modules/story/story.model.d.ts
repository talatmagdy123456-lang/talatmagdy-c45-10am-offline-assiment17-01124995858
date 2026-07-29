import { Types } from "mongoose";
export interface IStory {
    image: string;
    caption?: string;
    createdBy: Types.ObjectId;
    expiresAt: Date;
}
declare const Story: import("mongoose").Model<IStory, {}, {}, {}, import("mongoose").Document<unknown, {}, IStory, {}, import("mongoose").DefaultSchemaOptions> & IStory & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IStory>;
export default Story;
//# sourceMappingURL=story.model.d.ts.map