import Joi from "joi";

export const createPostSchema = Joi.object({
  content: Joi.string().min(1).max(2000).required(),
  media: Joi.array().items(
    Joi.object({
      url: Joi.string().uri().required(),
      mediaType: Joi.string().valid("image", "video").required(),
    })
  ),
});

export const postIdParamSchema = Joi.object({
  postId: Joi.string().hex().length(24).required(),
});