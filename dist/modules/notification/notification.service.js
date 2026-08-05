import { NotificationModel } from "./notification.model.js";
export const createAndSendNotification = async (data) => {
    const notification = await NotificationModel.create(data);
    return notification;
};
//# sourceMappingURL=notification.service.js.map