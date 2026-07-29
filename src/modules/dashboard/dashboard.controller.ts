import { Request, Response } from "express";

import {
  getDashboardStats,
  getNewsFeed,
  getUserPosts,
} from "./dashboard.service.js";

// Stats
export const dashboardStats = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await getDashboardStats();

    return res.status(200).json({
      message: "Dashboard Stats",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

// News Feed
export const newsFeed = async (
  req: Request,
  res: Response
) => {
  try {
    const posts = await getNewsFeed();

    return res.status(200).json({
      message: "News Feed",
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

// Profile Posts
export const profilePosts = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.userId as string;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const posts = await getUserPosts(userId);

    return res.status(200).json({
      message: "Profile Posts",
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};