import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: String,
  productId: Number,
  quantity: Number,
  address: String,
});

export const Order = mongoose.model("order", orderSchema);
