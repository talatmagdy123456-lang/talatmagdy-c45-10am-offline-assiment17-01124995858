import Story from "./story.model.js";
export const createStoryService = async (data, userId) => {
    return await Story.create({
        ...data,
        createdBy: userId,
    });
};
export const getStoriesService = async () => {
    return await Story.find().sort({
        createdAt: -1,
    });
};
export const deleteStoryService = async (id, userId) => {
    const story = await Story.findOneAndDelete({
        _id: id,
        createdBy: userId,
    });
    if (!story) {
        throw new Error("Story Not Found");
    }
    return {
        message: "Story Deleted Successfully",
    };
};
//# sourceMappingURL=story.service.js.map