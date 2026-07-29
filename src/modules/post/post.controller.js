import { createPostService, getAllPostsService, getPostService, updatePostService, deletePostService, reactPostService, } from "./post.service.js";
// ================= Create =================
export const createPost = async (req, res) => {
    try {
        const post = await createPostService(req.body, req.user._id.toString());
        return res.status(201).json({
            message: "Post Created Successfully",
            post,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error ? error.message : "Error",
        });
    }
};
// ================= Get All =================
export const getAllPosts = async (req, res) => {
    try {
        const posts = await getAllPostsService();
        return res.json(posts);
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error ? error.message : "Error",
        });
    }
};
// ================= Get One =================
export const getPost = async (req, res) => {
    try {
        const post = await getPostService(req.params.id);
        return res.json(post);
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error ? error.message : "Error",
        });
    }
};
// ================= Update =================
export const updatePost = async (req, res) => {
    try {
        const post = await updatePostService(req.params.id, req.body, req.user._id.toString());
        return res.json({
            message: "Post Updated Successfully",
            post,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error ? error.message : "Error",
        });
    }
};
// ================= Delete =================
export const deletePost = async (req, res) => {
    try {
        const result = await deletePostService(req.params.id, req.user._id.toString());
        return res.json(result);
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error ? error.message : "Error",
        });
    }
};
// ================= React =================
export const reactPost = async (req, res) => {
    try {
        const post = await reactPostService(req.params.id, req.user._id.toString(), req.body.emoji);
        return res.json({
            message: "Reaction Updated Successfully",
            post,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error ? error.message : "Error",
        });
    }
};
//# sourceMappingURL=post.controller.js.map