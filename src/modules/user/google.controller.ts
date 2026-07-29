import { Request, Response, NextFunction } from "express";
import passport from "passport";

export const googleLogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const googleCallback = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate(
    "google",
    { session: false },
    (err: any, user: any) => {
      if (err) {
        return next(err);
      }

      res.status(200).json({
        message: "Login Successfully",
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
      });
    }
  )(req, res, next);
};