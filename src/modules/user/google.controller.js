import passport from "passport";
export const googleLogin = passport.authenticate("google", {
    scope: ["profile", "email"],
});
export const googleCallback = (req, res, next) => {
    passport.authenticate("google", { session: false }, (err, user) => {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            message: "Login Successfully",
            accessToken: user.accessToken,
            refreshToken: user.refreshToken,
        });
    })(req, res, next);
};
//# sourceMappingURL=google.controller.js.map