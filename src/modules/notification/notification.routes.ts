import { Router } from "express";
import {
  createAdminNotification,
  getUserNotifications,
  markAsRead,
  deleteNotification,
} from "./notification.controller.js";
import { authentication } from "../../middleware/auth.middleware.js";

const router = Router();
router.use(authentication);

router.get("/", getUserNotifications);
router.patch("/:id/read", markAsRead);

// Admin-Only Routes
router.post("/admin", createAdminNotification);
router.delete("/admin/:id", deleteNotification);

export default router;