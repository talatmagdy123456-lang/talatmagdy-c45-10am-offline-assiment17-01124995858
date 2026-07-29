import { Router } from "express";
import { reactPost, deleteReaction } from "./reaction.controller.js";
import auth from "../../middleware/auth.js";
const router = Router();
router.post("/", auth, reactPost);
router.delete("/:postId", auth, deleteReaction);
export default router;
//# sourceMappingURL=reaction.routes.js.map