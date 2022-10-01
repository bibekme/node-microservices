import pino from "pino";

const transport = pino.transport({
  target: "pino-pretty",
  options: { destination: 1 },
});

export const logger = pino(transport);
