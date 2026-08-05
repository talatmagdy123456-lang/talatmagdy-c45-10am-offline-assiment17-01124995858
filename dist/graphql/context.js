import jwt from "jsonwebtoken";
export const buildGraphQLContext = async ({ req }) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return {};
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
        return { user: decoded };
    }
    catch (error) {
        return {};
    }
};
//# sourceMappingURL=context.js.map