const orderRepository = require("../repositories/orderRepository");
const { mapOrderInputToModel } = require("../utils/orderMapper");

const createOrder = async (orderInput) => {
  const mappedOrder = mapOrderInputToModel(orderInput);

  return await orderRepository.createOrder(mappedOrder);
};

module.exports = {
  createOrder
};