import Notification from "./notification.model.js";

export const createNotificationService = async (
  data: any
) => {
  return await Notification.create(data);
};

export const getNotificationsService = async (
  userId: string
) => {
  return await Notification.find({
    user: userId,
  }).sort({
    createdAt: -1,
  });
};

export const markAsReadService = async (
  id: string,
  userId: string
) => {
  const notification =
    await Notification.findOneAndUpdate(
      {
        _id: id,
        user: userId,
      },
      {
        isRead: true,
      },
      {
        new: true,
      }
    );

  if (!notification) {
    throw new Error("Notification Not Found");
  }

  return notification;
};

export const deleteNotificationService = async (
  id: string,
  userId: string
) => {
  const notification =
    await Notification.findOneAndDelete({
      _id: id,
      user: userId,
    });

  if (!notification) {
    throw new Error("Notification Not Found");
  }

  return {
    message: "Notification Deleted Successfully",
  };
};