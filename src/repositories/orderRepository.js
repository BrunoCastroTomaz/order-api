const Order = require("../models/orderModel");

const createOrder = async (orderData) => {
  const order = new Order(orderData);
  return await order.save();
};

module.exports = {
  createOrder
};