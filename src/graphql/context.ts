import { Request } from "express";
import jwt from "jsonwebtoken";

export interface GraphQLContext {
  user?: any;
}

export const buildGraphQLContext = async ({ req }: { req: Request }): Promise<GraphQLContext> => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return {};
  }

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "secret");
    return { user: decoded };
  } catch (error) {
    return {};
  }
};