import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "node-app",
  brokers: ["localhost:9092"],
});
