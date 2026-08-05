import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware.js";
import {
  toggleMessageReactionService,
  sendMessageService,
} from "./message.service.js";

// Send Message (Text / Attachments / Mentions)
export const sendMessage = async (req: AuthRequest, res: Response) => {
  try {
    const { chatId, text, attachments, mentions } = req.body;
    const senderId = req.user._id.toString();

    const message = await sendMessageService(senderId, chatId, {
      text,
      attachments,
      mentions,
    });

    res.status(201).json({
      message: "Message Sent Successfully",
      data: message,
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error sending message",
    });
  }
};

// React to Message
export const reactToMessage = async (req: AuthRequest, res: Response) => {
  try {
    const { messageId } = req.params;
    const { emoji } = req.body;
    const userId = req.user._id.toString();

    const updatedMessage = await toggleMessageReactionService(
      messageId as string,
      userId,
      emoji
    );

    res.status(200).json({
      message: "Reaction updated successfully",
      data: updatedMessage,
    });
  } catch (error) {
    res.status(400).json({
      message: error instanceof Error ? error.message : "Error reacting to message",
    });
  }
};