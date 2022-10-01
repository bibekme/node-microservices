import express from "express";
import { logger } from "./lib/logger.js";
import { produce } from "./lib/orderProducer.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hey from store microservice!",
    statusCode: res.statusCode,
  });
});

app.post("/api/order/", (req, res) => {
  const { userId, productId, quantity, address } = req.body;
  const orderMessage = {
    userId,
    productId,
    quantity,
    address,
  };
  produce(orderMessage);

  return res.json({
    message: "Order has been successfully placed",
    statusCode: res.statusCode,
  });
});

app.listen(3000, () => {
  logger.info("INFO: store microservice running on port 3000 🚀");
});
