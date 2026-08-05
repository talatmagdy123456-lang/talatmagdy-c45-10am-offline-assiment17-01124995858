import { Schema, model, Document, Types } from "mongoose";

export enum ReactionType {
  LIKE = "LIKE",
  LOVE = "LOVE",
  HAHA = "HAHA",
  WOW = "WOW",
  SAD = "SAD",
  ANGRY = "ANGRY"
}

export interface IReaction {
  user: Types.ObjectId;
  type: ReactionType;
}

export interface ICommentItem {
  user: Types.ObjectId;
  content: string;
  createdAt?: Date;
}

export interface IPost extends Document {
  content?: string;
  image?: string;
  author: Types.ObjectId;
  likes: Types.ObjectId[];
  reactions: IReaction[];
  comments: ICommentItem[];
  commentsCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>(
  {
    content: { type: String, required: false },
    image: { type: String, required: false },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    reactions: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        type: { type: String, enum: Object.values(ReactionType), required: true }
      }
    ],
    comments: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
      }
    ],
    commentsCount: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const PostModel = model<IPost>("Post", postSchema);
export default PostModel;