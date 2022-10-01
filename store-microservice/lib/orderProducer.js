import { kafka } from "./kafkaConfig.js";

export const produce = async (orderData) => {
  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: "order-topic",
    messages: [{ value: JSON.stringify(orderData) }],
  });
  await producer.disconnect();
};
