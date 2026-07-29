import { verifyAccessToken } from "../utils/token.service.js";
export const authentication = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            message: "Token required"
        });
    }
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
};
//# sourceMappingURL=auth.middleware.js.map