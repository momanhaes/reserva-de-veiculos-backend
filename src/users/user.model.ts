import { model, Schema } from "mongoose";

const UserModel = model(
  "User",
  new Schema(
    {
      _id: String,
      name: String,
      email: String,
      password: { type: String, select: false },
    },
    {
      versionKey: false,
      timestamps: {},
    }
  ),
  "user"
);

export default UserModel;
