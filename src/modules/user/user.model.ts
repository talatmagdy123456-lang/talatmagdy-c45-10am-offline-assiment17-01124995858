import { Schema, model } from "mongoose";

export interface IUser {
  userName: string;
  email: string;
  password?: string;
  confirmEmail: boolean;
  provider: "system" | "google";
  role: "user" | "admin";
  changeCredentialTime?: Date | null;
}

const userSchema = new Schema<IUser>(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: function (this: IUser): boolean {
        return this.provider === "system";
      },
    },

    confirmEmail: {
      type: Boolean,
      default: false,
    },

    provider: {
      type: String,
      enum: ["system", "google"],
      default: "system",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    changeCredentialTime: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// ================= Document Middleware =================

userSchema.pre("validate", function () {
  console.log("Before Validate");
});

userSchema.post("validate", function () {
  console.log("After Validate");
});

userSchema.pre("save", function () {
  console.log("Before Save");
});

userSchema.post("save", function () {
  console.log("After Save");
});

// ================= Model Middleware =================

userSchema.pre("insertMany", function () {
  console.log("Before Insert Many");
});

userSchema.post("insertMany", function () {
  console.log("After Insert Many");
});

// ================= Query Middleware =================

userSchema.pre("findOneAndUpdate", function () {
  console.log("Before Update");
});

userSchema.post("findOneAndUpdate", function () {
  console.log("After Update");
});

userSchema.pre("findOneAndDelete", function () {
  console.log("Before Delete");
});

userSchema.post("findOneAndDelete", function () {
  console.log("After Delete");
});

const User = model<IUser>("User", userSchema);

export default User;