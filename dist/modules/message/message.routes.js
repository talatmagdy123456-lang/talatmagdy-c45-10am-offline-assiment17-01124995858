import { Router } from "express";
import { sendMessage, reactToMessage } from "./message.controller.js";
import { authentication } from "../../middleware/auth.middleware.js";
const router = Router();
// إرسال رسالة
router.post("/", authentication, sendMessage);
// تفاعل على رسالة (Reaction)
router.patch("/:messageId/react", authentication, reactToMessage);
export default router;
//# sourceMappingURL=message.routes.js.map