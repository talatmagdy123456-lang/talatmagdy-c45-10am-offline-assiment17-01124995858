import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import session from "express-session";
import passport from "passport";
import userRouter from "./modules/user/user.routes.js";
import postRouter from "./modules/post/post.routes.js";
import commentRouter from "./modules/comment/comment.routes.js";
import dashboardRoutes from "./modules/dashboard/dashboard.routes.js";
import reactionRoutes from "./modules/reaction/reaction.routes.js";
import notificationRoutes from "./modules/notification/notification.routes.js";
import storyRoutes from "./modules/story/story.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));
app.use(session({
    secret: process.env.JWT_SECRET || "secret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// Routes
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/dashboard", dashboardRoutes);
app.use("/reaction", reactionRoutes);
app.use("/notification", notificationRoutes);
app.use("/story", storyRoutes);
// Error
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map