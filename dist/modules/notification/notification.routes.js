import { Router } from "express";
import { createNotification, getNotifications, markAsRead, deleteNotification, } from "./notification.controller.js";
import { authentication } from "../../middleware/auth.middleware.js";
import validation from "../../middleware/validation.middleware.js";
import { createNotificationSchema, } from "./notification.validation.js";
const router = Router();
router.post("/", authentication, validation(createNotificationSchema), createNotification);
router.get("/", authentication, getNotifications);
router.patch("/:id/read", authentication, markAsRead);
router.delete("/:id", authentication, deleteNotification);
export default router;
//# sourceMappingURL=notification.routes.js.map