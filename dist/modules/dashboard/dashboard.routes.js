import { Router } from "express";
import { dashboardStats, newsFeed, profilePosts, } from "./dashboard.controller.js";
import { dashboardValidation } from "./dashboard.validation.js";
import validation from "../../middleware/validation.middleware.js";
import { authentication } from "../../middleware/auth.middleware.js";
const router = Router();
// Dashboard Stats
router.get("/stats", authentication, validation(dashboardValidation.stats), dashboardStats);
// News Feed
router.get("/feed", authentication, newsFeed);
// User Profile Posts
router.get("/profile/:userId/posts", authentication, profilePosts);
export default router;
//# sourceMappingURL=dashboard.routes.js.map