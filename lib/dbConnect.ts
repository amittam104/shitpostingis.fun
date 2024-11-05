import mongoose, { MongooseError } from "mongoose";

export interface dbConnection {
  isConnected?: number;
}

const connection: dbConnection = {};

async function dbConnect(): Promise<void> {
  const mongodbURI = process.env.MONGODB_URI;

  if (!mongodbURI) throw new Error("MONGODB_URI is not defined");

  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(mongodbURI);

    connection.isConnected = db.connections[0].readyState;
  } catch (error: unknown) {
    if (error instanceof MongooseError) {
      console.log("Database connection failed", error.message);
    } else {
      console.log("Database connection failed", error);
    }
    process.exit(1);
  }
}

export default dbConnect;
