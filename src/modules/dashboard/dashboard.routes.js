import { Router } from "express";
import { dashboardStats, newsFeed, profilePosts } from "./dashboard.controller.js";
import { dashboardValidation } from "./dashboard.validation.js";
import validation from "../../middleware/validation.middleware.js";
import { auth } from "../../middleware/auth.middleware.js";
const router = Router();
// Admin Dashboard
router.get("/stats", auth, isAdmin, validation(dashboardValidation.stats), dashboardStats);
// News Feed
router.get("/feed", auth, newsFeed);
// User Profile Posts
router.get("/profile/:userId/posts", auth, profilePosts);
export default router;
//# sourceMappingURL=dashboard.routes.js.map