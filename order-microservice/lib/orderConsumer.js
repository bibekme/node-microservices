import { kafka } from "./kafkaConfig.js";
import { Order } from "../models/orderModel.js";

export const consume = async () => {
  const consumer = kafka.consumer({ groupId: "order-group" });
  await consumer.connect();

  await consumer.subscribe({
    topic: "order-topic",
    fromBeginning: false,
  });

  await consumer.run({
    eachMessage: async ({ message, topic, partition }) => {
      const { userId, productId, quantity, address } = JSON.parse(
        message.value
      );

      await Order.create({
        userId,
        productId,
        quantity,
        address,
      });
    },
  });
};

consume();
