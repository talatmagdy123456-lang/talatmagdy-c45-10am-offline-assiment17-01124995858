import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
import { NotificationModel } from "./notification.model.js";

// Admin Only: Create & Push Notification
export const createAdminNotification = async (req: AuthRequest, res: Response) => {
  try {
    const { title, body, recipientId } = req.body;
    const notification = await NotificationModel.create({
      title,
      body,
      recipient: recipientId || null,
      createdByAdmin: true
    });

    // FCM Send Integration placeholder
    // await firebaseAdmin.messaging().sendToDevice(...)

    return res.status(201).json({ success: true, notification });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Get User Notifications
export const getUserNotifications = async (req: AuthRequest, res: Response) => {
  try {
    const notifications = await NotificationModel.find({
      $or: [{ recipient: req.user._id }, { recipient: null }]
    }).sort({ createdAt: -1 });

    return res.status(200).json({ success: true, notifications });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Mark as Read
export const markAsRead = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const notification = await NotificationModel.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true }
    );
    return res.status(200).json({ success: true, notification });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// Delete Notification (Admin)
export const deleteNotification = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    await NotificationModel.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "Notification deleted" });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};