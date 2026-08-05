import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
import { StoryModel } from "./story.model.js";

// إنشاء ستوري
export const createStory = async (req: AuthRequest, res: Response) => {
  try {
    const { mediaUrl, mediaType } = req.body;
    const story = await StoryModel.create({
      user: req.user._id,
      mediaUrl,
      mediaType
    });
    return res.status(201).json({ success: true, story });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// جلب الستوريز النشطة (MongoDB TTL بيتولى حذف القديم من 24h)
export const getActiveStories = async (req: AuthRequest, res: Response) => {
  try {
    const stories = await StoryModel.find()
      .populate("user", "name avatar")
      .sort({ createdAt: -1 });
    return res.status(200).json({ success: true, stories });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// مشاهدة ستوري
export const viewStory = async (req: AuthRequest, res: Response) => {
  try {
    const { storyId } = req.params;
    const userId = req.user._id;

    const story = await StoryModel.findByIdAndUpdate(
      storyId,
      { $addToSet: { viewers: userId } },
      { new: true }
    );
    return res.status(200).json({ success: true, story });
  } catch (err: any) {
    return res.status(500).json({ success: false, message: err.message });
  }
};