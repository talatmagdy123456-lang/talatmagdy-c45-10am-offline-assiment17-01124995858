import CryptoJS from "crypto-js";
export const encrypt = (text) => {
    return CryptoJS.AES.encrypt(text, process.env.JWT_SECRET).toString();
};
export const decrypt = (text) => {
    return CryptoJS.AES.decrypt(text, process.env.JWT_SECRET).toString(CryptoJS.enc.Utf8);
};
//# sourceMappingURL=encryption.js.map