import { Request, Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";

import {
  createStoryService,
  getStoriesService,
  deleteStoryService,
} from "./story.service.js";

export const createStory = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const story = await createStoryService(
      req.body,
      req.user._id.toString()
    );

    res.status(201).json({
      message: "Story Created Successfully",
      story,
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

export const getStories = async (
  req: Request,
  res: Response
) => {
  try {
    const stories = await getStoriesService();

    res.json(stories);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};

export const deleteStory = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const id = req.params.id as string;

    if (!id) {
      return res.status(400).json({
        message: "Story ID is required",
      });
    }

    const result = await deleteStoryService(
      id,
      req.user._id.toString()
    );

    res.json(result);
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error",
    });
  }
};