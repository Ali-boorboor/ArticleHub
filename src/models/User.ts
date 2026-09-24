import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  username: string;
  password: string;
  email?: string;
  createdAt: Date;
  updatedAt: Date;
  cover?: string;
  role?: "ADMIN" | "USER";
}

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    cover: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
      required: false,
    },
  },
  { timestamps: true },
);

const UserModel: mongoose.Model<IUser> =
  mongoose.models.User || mongoose.model("User", schema);

export default UserModel;
export type { IUser };

