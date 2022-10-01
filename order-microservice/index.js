import express from "express";
import { connectMongo } from "./lib/db.js";
import { logger } from "./lib/logger.js";
import { consume } from "./lib/orderConsumer.js";
import { Order } from "./models/orderModel.js";

connectMongo();

consume();

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Hey from order microservice!",
    statusCode: res.statusCode,
  });
});

app.get("/api/orders/", async (req, res) => {
  const orders = await Order.find();
  return res.json({ orders, statusCode: res.statusCode });
});

app.listen(3001, () => {
  logger.info("INFO: order microservice running on port 3001 🚀");
});
