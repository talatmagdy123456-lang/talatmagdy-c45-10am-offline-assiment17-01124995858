import jwt from "jsonwebtoken";

interface Payload {
  _id: string;
  email: string;
}

export const generateAccessToken = (payload: Payload) => {
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET as string, {
    expiresIn: "15m",
  });
};

export const generateRefreshToken = (payload: Payload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string, {
    expiresIn: "7d",
  });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(
    token,
    process.env.JWT_ACCESS_SECRET as string
  ) as jwt.JwtPayload;
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(
    token,
    process.env.JWT_REFRESH_SECRET as string
  ) as jwt.JwtPayload;
};