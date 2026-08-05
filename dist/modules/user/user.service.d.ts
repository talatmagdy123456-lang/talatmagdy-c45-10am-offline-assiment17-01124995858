export declare const registerService: (data: any) => Promise<import("mongoose").Document<unknown, {}, import("./user.model.js").IUser, {}, import("mongoose").DefaultSchemaOptions> & import("./user.model.js").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}>;
export declare const loginService: (data: any) => Promise<{
    message: string;
    accessToken: string;
    refreshToken: string;
}>;
export declare const confirmEmailService: (token: string) => Promise<{
    message: string;
}>;
export declare const forgetPasswordService: (email: string) => Promise<{
    message: string;
}>;
export declare const resetPasswordService: (token: string, password: string) => Promise<{
    message: string;
}>;
//# sourceMappingURL=user.service.d.ts.map