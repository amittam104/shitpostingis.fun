import mongoose, { Schema, Document } from "mongoose";

export interface Credits extends Document {
  credits: number;
  isPaid: boolean;
  planName: string;
  planId: number | null;
  createdAt: Date;
  updatedAt: Date;
}

const creditsSchema = new Schema<Credits>(
  {
    credits: {
      type: Number,
      required: true,
      default: 6,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    planName: {
      type: String,
      default: "free",
    },
    planId: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

export const Credits =
  mongoose.models?.Credits || mongoose.model<Credits>("Credits", creditsSchema);
