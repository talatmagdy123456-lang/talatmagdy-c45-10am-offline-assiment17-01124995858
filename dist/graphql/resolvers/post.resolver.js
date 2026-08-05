import { PostModel } from "../../modules/post/post.model.js";
export const postResolvers = {
    Query: {
        getPosts: async () => {
            return await PostModel.find();
        },
    },
};
//# sourceMappingURL=post.resolver.js.map