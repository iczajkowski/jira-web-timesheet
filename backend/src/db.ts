import mongoose from "mongoose";
import { logger } from "./shared";

export async function connectDb() {
  const connectionString = process.env.DB_CONNECTION;

  if (!connectionString) {
    throw new Error("Connection string required for database");
  }

  try {
    await mongoose.connect(connectionString, { useNewUrlParser: true });
  } catch (err) {
    logger.error("Error occurred while connecting to database");
    throw err;
  }
}
