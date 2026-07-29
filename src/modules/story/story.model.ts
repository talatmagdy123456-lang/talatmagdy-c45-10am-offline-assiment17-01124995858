import {
  Schema,
  model,
  Types,
  type CallbackWithoutResultAndOptionalError,
} from "mongoose";

export interface IStory {
  image: string;
  caption?: string;
  createdBy: Types.ObjectId;
  expiresAt: Date;
}

const storySchema = new Schema<IStory>(
  {
    image: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: "",
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
      expires: 0,
    },
  },
  {
    timestamps: true,
  }
);

storySchema.pre(
  /^find/,
  function (this: any, next: CallbackWithoutResultAndOptionalError) {
    this.populate("createdBy", "userName email");
    next();
  }
);

const Story = model<IStory>("Story", storySchema);

export default Story;