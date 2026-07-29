import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../modules/user/user.model.js";
import { generateAccessToken, generateRefreshToken, } from "../utils/token.service.js";
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/users/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({
            email: profile.emails?.[0]?.value || "",
        });
        if (!user) {
            user = await User.create({
                userName: profile.displayName,
                email: profile.emails?.[0]?.value || "",
                confirmEmail: true,
                provider: "google",
                role: "user",
            });
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
    }
    catch (error) {
        return done(error, false);
    }
}));
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
export default passport;
//# sourceMappingURL=passport.js.map