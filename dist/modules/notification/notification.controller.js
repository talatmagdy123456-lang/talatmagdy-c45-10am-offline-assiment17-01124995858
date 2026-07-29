import { createNotificationService, getNotificationsService, markAsReadService, deleteNotificationService, } from "./notification.service.js";
export const createNotification = async (req, res) => {
    try {
        const notification = await createNotificationService(req.body);
        res.status(201).json(notification);
    }
    catch (error) {
        res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Error",
        });
    }
};
export const getNotifications = async (req, res) => {
    try {
        const notifications = await getNotificationsService(req.user._id.toString());
        res.json(notifications);
    }
    catch (error) {
        res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Error",
        });
    }
};
export const markAsRead = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                message: "Notification ID is required",
            });
        }
        const notification = await markAsReadService(id, req.user._id.toString());
        res.json(notification);
    }
    catch (error) {
        res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Error",
        });
    }
};
export const deleteNotification = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                message: "Notification ID is required",
            });
        }
        const result = await deleteNotificationService(id, req.user._id.toString());
        res.json(result);
    }
    catch (error) {
        res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Error",
        });
    }
};
//# sourceMappingURL=notification.controller.js.map