import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  email: string;
  xUsername: string;
  credits: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address",
      ],
    },
    xUsername: {
      type: String,
      required: true,
      unique: true,
    },
    credits: {
      type: Schema.Types.ObjectId,
      ref: "Credits",
    },
  },
  { timestamps: true }
);

export const User =
  mongoose.models.User || mongoose.model<User>("User", userSchema);
