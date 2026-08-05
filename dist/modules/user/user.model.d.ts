import { Schema, Document } from "mongoose";
export interface IUser extends Document {
    name: string;
    email: string;
    password?: string;
    isConfirmed?: boolean;
    friends: Schema.Types.ObjectId[];
    friendRequests: Schema.Types.ObjectId[];
}
export declare const UserModel: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export default UserModel;
//# sourceMappingURL=user.model.d.ts.map