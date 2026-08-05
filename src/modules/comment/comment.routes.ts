import { Router } from "express";
import { addComment, addReply } from "./comment.controller.js";
import { authentication } from "../../middleware/auth.middleware.js";

const router = Router();

// إضافة تعليق رئيسي
router.post("/", authentication, addComment);

// الرد على تعليق معُين
router.post("/:commentId/reply", authentication, addReply);

export default router;