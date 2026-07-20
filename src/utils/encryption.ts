import CryptoJS from "crypto-js";

export const encrypt = (text: string) => {
  return CryptoJS.AES.encrypt(
    text,
    process.env.JWT_SECRET as string
  ).toString();
};

export const decrypt = (text: string) => {
  return CryptoJS.AES.decrypt(
    text,
    process.env.JWT_SECRET as string
  ).toString(CryptoJS.enc.Utf8);
};