export declare const createNotificationService: (data: any) => Promise<import("mongoose").Document<unknown, {}, import("./notification.model.js").INotification, {}, import("mongoose").DefaultSchemaOptions> & import("./notification.model.js").INotification & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const getNotificationsService: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, import("./notification.model.js").INotification, {}, import("mongoose").DefaultSchemaOptions> & import("./notification.model.js").INotification & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
})[]>;
export declare const markAsReadService: (id: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("./notification.model.js").INotification, {}, import("mongoose").DefaultSchemaOptions> & import("./notification.model.js").INotification & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}>;
export declare const deleteNotificationService: (id: string, userId: string) => Promise<{
    message: string;
}>;
//# sourceMappingURL=notification.service.d.ts.map