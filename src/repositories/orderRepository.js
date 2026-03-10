const Order = require("../models/orderModel");

const createOrder = async (orderData) => {
  const order = new Order(orderData);
  return await order.save();
};

const findByOrderId = async (orderId) => {
  return await Order.findOne({ orderId });
};

module.exports = {
  createOrder,
  findByOrderId
};