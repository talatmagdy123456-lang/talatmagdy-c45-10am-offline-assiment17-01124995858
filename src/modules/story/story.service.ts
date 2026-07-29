import Story from "./story.model.js";

export const createStoryService = async (
  data: any,
  userId: string
) => {
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

export const deleteStoryService = async (
  id: string,
  userId: string
) => {
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