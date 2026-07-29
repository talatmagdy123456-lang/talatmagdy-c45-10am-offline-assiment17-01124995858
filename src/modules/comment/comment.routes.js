import { Router } from "express";
import { createComment, getComments, updateComment, deleteComment, } from "./comment.controller.js";
import { authentication } from "../../middleware/auth.middleware.js";
import validation from "../../middleware/validation.middleware.js";
import { createCommentSchema, updateCommentSchema, } from "./comment.validation.js";
const router = Router();
// Create Comment
router.post("/:postId", authentication, validation(createCommentSchema), createComment);
// Get Comments
router.get("/:postId", authentication, getComments);
// Update Comment
router.put("/:id", authentication, validation(updateCommentSchema), updateComment);
// Delete Comment
router.delete("/:id", authentication, deleteComment);
export default router;
//# sourceMappingURL=comment.routes.js.map