import { Router } from "express";
import { createPost, toggleLikePost } from "./post.controller.js";
import { authentication } from "../../middleware/auth.middleware.js";
const router = Router();
// إنشاء بوست جديد
router.post("/", authentication, createPost);
// Like / Unlike لبوست
router.patch("/:postId/like", authentication, toggleLikePost);
export default router;
//# sourceMappingURL=post.routes.js.map