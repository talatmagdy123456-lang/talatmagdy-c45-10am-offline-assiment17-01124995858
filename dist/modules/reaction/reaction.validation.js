import Joi from "joi";
export const reactionValidation = {
    add: Joi.object({
        postId: Joi.string()
            .required(),
        type: Joi.string()
            .valid("like", "love", "haha", "sad", "angry")
            .required()
    })
};
//# sourceMappingURL=reaction.validation.js.map