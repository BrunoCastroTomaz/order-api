const orderRepository = require("../repositories/orderRepository");
const { mapOrderInputToModel } = require("../utils/orderMapper");

const createOrder = async (orderInput) => {
  const mappedOrder = mapOrderInputToModel(orderInput);

  return await orderRepository.createOrder(mappedOrder);
};

const getOrderById = async (orderId) => {
  return await orderRepository.findByOrderId(orderId);
};

const listOrders = async (page, limit) => {
  return await orderRepository.findAll(page, limit);
};

const updateOrder = async (orderId, orderInput) => {
  const mappedOrder = mapOrderInputToModel(orderInput);

  return await orderRepository.updateByOrderId(orderId, mappedOrder);
};

const deleteOrder = async (orderId) => {
  return await orderRepository.deleteByOrderId(orderId);
};

module.exports = {
  createOrder,
  getOrderById,
  listOrders,
  updateOrder,
  deleteOrder
};