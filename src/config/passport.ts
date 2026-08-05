import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../modules/user/user.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/token.service.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: "http://localhost:3000/users/google/callback",
    },
    async (
      accessToken,
      refreshToken,
      profile,
      done
    ) => {
      try {
        let user = await User.findOne({
          email: profile.emails?.[0]?.value || "",
        });

        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: profile.emails?.[0]?.value || "",
            isConfirmed: true,
            provider: "google",
            role: "user",
          } as any);
        }

        const access = generateAccessToken({
          _id: user._id.toString(),
          email: user.email,
        });

        const refresh = generateRefreshToken({
          _id: user._id.toString(),
          email: user.email,
        });

        return done(null, {
          accessToken: access,
          refreshToken: refresh,
          user,
        });
      } catch (error) {
        return done(error as Error, false);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

export default passport;