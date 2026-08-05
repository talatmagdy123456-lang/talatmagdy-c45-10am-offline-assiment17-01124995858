import { StoryModel } from "./story.model.js";
export const createStory = async (data) => {
    return await StoryModel.create(data);
};
export const getActiveStories = async () => {
    return await StoryModel.find().sort({ createdAt: -1 });
};
export const deleteStory = async (storyId) => {
    return await StoryModel.findOneAndDelete({ _id: storyId });
};
//# sourceMappingURL=story.service.js.map