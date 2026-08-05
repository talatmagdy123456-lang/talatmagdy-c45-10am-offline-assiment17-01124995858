import { NotificationModel, INotification } from "./notification.model.js";

export const createAndSendNotification = async (data: Partial<INotification>) => {
  const notification = await NotificationModel.create(data);
  return notification;
};