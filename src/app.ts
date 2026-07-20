import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import userRouter from "./modules/user/user.routes.js";
import globalError from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.use("/users", userRouter);

app.use(globalError);

export default app;