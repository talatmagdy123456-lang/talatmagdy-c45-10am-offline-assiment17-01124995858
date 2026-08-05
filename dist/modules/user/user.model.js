import { Schema, model } from "mongoose";
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isConfirmed: { type: Boolean, default: false },
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
    friendRequests: [{ type: Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });
export const UserModel = model("User", userSchema);
export default UserModel;
//# sourceMappingURL=user.model.js.map