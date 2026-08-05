import { PostModel, IPost } from "../../modules/post/post.model.js";

export const postResolvers = {
  Query: {
    getPosts: async () => {
      return await PostModel.find();
    },
  },
};