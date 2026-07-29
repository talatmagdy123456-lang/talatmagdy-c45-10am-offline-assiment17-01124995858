export interface IUser {
    userName: string;
    email: string;
    password?: string;
    confirmEmail: boolean;
    provider: "system" | "google";
    role: "user" | "admin";
    changeCredentialTime?: Date | null;
}
declare const User: import("mongoose").Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser, {}, import("mongoose").DefaultSchemaOptions> & IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IUser>;
export default User;
//# sourceMappingURL=user.model.d.ts.map