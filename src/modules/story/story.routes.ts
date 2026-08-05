import { Router } from "express";
import { createStory, getActiveStories, viewStory } from "./story.controller.js";
import { authentication } from "../../middleware/auth.middleware.js";

const router = Router();
router.use(authentication);

router.post("/", createStory);
router.get("/feed", getActiveStories);
router.post("/:storyId/view", viewStory);

export default router;