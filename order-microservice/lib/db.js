import mongoose from "mongoose";
import { logger } from "./logger.js";

export const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/microservice"
    );
    logger.info(
      `INFO: MongoDB Connected on: ${conn.connection.host}:${conn.connection.port}`
    );
  } catch (error) {
    logger.error(`Error: ${error}`);
  }
};
