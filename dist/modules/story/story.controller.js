import { createStoryService, getStoriesService, deleteStoryService, } from "./story.service.js";
export const createStory = async (req, res) => {
    try {
        const story = await createStoryService(req.body, req.user._id.toString());
        res.status(201).json({
            message: "Story Created Successfully",
            story,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error instanceof Error ? error.message : "Error",
        });
    }
};
export const getStories = async (req, res) => {
    try {
        const stories = await getStoriesService();
        res.json(stories);
    }
    catch (error) {
        res.status(400).json({
            message: error instanceof Error ? error.message : "Error",
        });
    }
};
export const deleteStory = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                message: "Story ID is required",
            });
        }
        const result = await deleteStoryService(id, req.user._id.toString());
        res.json(result);
    }
    catch (error) {
        res.status(400).json({
            message: error instanceof Error ? error.message : "Error",
        });
    }
};
//# sourceMappingURL=story.controller.js.map